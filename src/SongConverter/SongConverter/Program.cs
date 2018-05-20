using System;

namespace SongConverter
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 1)
            {
                Console.WriteLine("pass in a file");
                return;
            }

            try
            {
                var converter = new SongConverter();
                converter.Run(args[0]);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
