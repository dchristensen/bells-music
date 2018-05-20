using System.Collections.Generic;

namespace SongConverter
{
    public class SongInfo
    {
        public string Title { get; set; }
        public string Url { get; set; }
        public List<NoteInfo> Notes { get; } = new List<NoteInfo>();
    }
}