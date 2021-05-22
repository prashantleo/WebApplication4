﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication4.Models
{
    public class Product
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public int ProductId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ProductName { get; set; } 

        public decimal Price { get; set; }
    }
}
