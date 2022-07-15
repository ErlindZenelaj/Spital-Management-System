﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthInsuranceApp.Models
{
    public class Insurance
    {
        public int InsuranceId { get; set; }
        public string CompanyName { get; set; }
        public string PatientName { get; set; }
        public string PatientSurname { get; set; }
        public string Birthdate { get; set; }
        public string CurrentWork { get; set; }
        public string Expenses { get; set; }


    }
}
