using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infermieri.Models
{
    public class Infermier
    {
        public int InfermierId { get; set; }

        public string InfermierName { get; set; }

        public string Surname { get; set; }

        public string Gender { get; set; }

        public string Age { get; set; }

        public string DoktorName { get; set; }
    }
}
