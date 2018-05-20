using OfficeOpenXml;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Information;

namespace SongConverter
{
    public static class EppPlusExtensions
    {
        public static bool IsNullOrError(this ExcelRange range) =>
            range.Value == null || ExcelErrorValue.Values.IsErrorValue(range.Value);
    }
}