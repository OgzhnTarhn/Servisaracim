using System.ComponentModel.DataAnnotations;

namespace Servisaracim.Models
{
    public class ContactVM
    {
        [Required(ErrorMessage = "Ad Soyad zorunludur")]
        public string Name { get; set; }

        [Required(ErrorMessage = "E-posta zorunludur")]
        [EmailAddress(ErrorMessage = "Geçerli bir e-posta giriniz")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Telefon zorunludur")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Hizmet seçiniz")]
        public string Service { get; set; }

        [MaxLength(180, ErrorMessage = "Mesaj en fazla 180 karakter olabilir")]
        public string Message { get; set; }
    }
}
