using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using OfficeOpenXml;

namespace SongConverter
{
    public class SongConverter
    {
        private readonly JsonSerializerSettings _jsonSettings =
            new JsonSerializerSettings {ContractResolver = new CamelCasePropertyNamesContractResolver()};

        public void Run(string path)
        {
            var dir = new DirectoryInfo("songs");
            if (!dir.Exists)
            {
                dir.Create();
            }

            using (var p = new ExcelPackage(File.OpenRead(path)))
            {
                foreach (ExcelWorksheet worksheet in p.Workbook.Worksheets)
                {
                    if (worksheet.Name == "Key")
                    {
                        continue;
                    }

                    List<SongInfo> songs = ProcessWorksheet(worksheet);
                    foreach (SongInfo song in songs)
                    {
                        string filename = Path.Combine(dir.FullName, song.Title.Replace(' ', '_').ToLower() + ".ts");
                        File.WriteAllText(filename,
                            "export default " + JsonConvert.SerializeObject(song, _jsonSettings));

                    }
                }
            }
        }

        private List<SongInfo> ProcessWorksheet(ExcelWorksheet worksheet)
        {
            var songList = new List<SongInfo>();
            SongInfo song = null;
            for (int row = worksheet.Dimension.Start.Row; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var lyric = worksheet.Cells[row, 1];
                    var color = worksheet.Cells[row, 2];
                    var note = worksheet.Cells[row, 3];
                    if (lyric.Value != null && color.Value == null && note.Value == null)
                    {
                        string title = lyric.GetValue<string>();
                        song = new SongInfo
                        {
                            Title = title,
                            Url = title.Replace(' ', '-').ToLower()
                        };
                        songList.Add(song);
                        continue;
                    }

                    if (lyric.Value == null && note.Value == null)
                    {
                        continue;
                    }

                    string noteValue = note.IsNullOrError() ? null : note.GetValue<string>();
                    int octave = 4;
                    if (noteValue == "C1")
                    {
                        noteValue = "C";
                    }
                    else if (noteValue == "C2")
                    {
                        noteValue = "C";
                        octave = 5;
                    }

                    var noteInfo = new NoteInfo
                    {
                        Lyric = lyric.GetValue<string>(),
                        Note = noteValue,
                        Octave = octave
                    };
                    song.Notes.Add(noteInfo);
                }
                catch (Exception e)
                {
                    throw;
                }
            }

            return songList;
        }
    }
}