using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JwtApp.Models
{
    public class UserConstants
    {
        public static List<UserModel> Users = new List<UserModel>()
        {
            new UserModel() { Username = "admin", EmailAddress = "admin1@email.com", Password = "ADMIN123", GivenName = "Jason", Surname = "Bryant", Role = "Administrator" },
            new UserModel() { Username = "Doctor", EmailAddress = "erlind880@gmail.com", Password = "Doktori2000", GivenName = "Lindi", Surname = "Zenelaj", Role = "Doctor" },
        };
    }
}
