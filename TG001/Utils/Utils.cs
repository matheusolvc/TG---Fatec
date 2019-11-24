using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TG001.Utils
{
    public class RandomDateTime
    {
        readonly DateTime start;
        readonly Random gen;
        readonly int range;

        public RandomDateTime()
        {
            start = new DateTime(1995, 1, 1);
            gen = new Random();
            range = (DateTime.Today - start).Days;
        }

        public DateTime Next()
        {
            return start.AddDays(gen.Next(range)).AddHours(gen.Next(0, 24)).AddMinutes(gen.Next(0, 60)).AddSeconds(gen.Next(0, 60));
        }
    }

    public static class RandomString
    {
        private static readonly Random random = new Random();
        public static string NextString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
