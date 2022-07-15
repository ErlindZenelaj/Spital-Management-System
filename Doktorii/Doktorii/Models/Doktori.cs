using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Doktorii.Models
{
    public class Doktori
    {
        public int DoktoriId { get; set; }

        public string Emri { get; set; }

        public string Mbiemri { get; set; }

        public string Gjinia { get; set; }

        public string Titulli { get; set; }

        public string Mosha { get; set; }
    }
}
