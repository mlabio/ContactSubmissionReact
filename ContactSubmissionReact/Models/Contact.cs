using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ContactSubmissionReact.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Firstname { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string State { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string ZipCode { get; set; }
        [Column(TypeName = "nvarchar(15)")]
        public string PhoneNumber { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string NoteField { get; set; }
    }
}
