using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication4.Models
{
    public class Store
    {
        
        [Key]
        public int StoreId { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        public string StoreName { get; set; }

        [Column(TypeName = "nvarchar(100)")]

        public string Address { get; set; }
    }
}
