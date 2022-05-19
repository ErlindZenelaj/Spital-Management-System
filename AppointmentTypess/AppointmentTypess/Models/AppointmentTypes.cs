using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentTypess.Models
{
    public class AppointmentTypes
    {
        public int AppointmentTypesId { get; set; }

        public string AppointmentType { get; set; }

        public string UsualAppointmentLength { get; set; }

        public string OnlineBookingAvailable { get; set; }
    }
}
