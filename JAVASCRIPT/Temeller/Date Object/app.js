let value;



const now = new Date();//? İçi boşken şu anki zamanı gösterir


// console.log(now)

//! Hepsi aynı tarihi farklı tarzda gösteriyor
const date1 = new Date("11-25-2003 20:00:00")
const date2 = new Date("November 25 2003")
const date3 = new Date("25/11/2003")

value = date1.getDate(); //? Ayın kaçı
value = date1.getMonth(); //? Kaçıncı ay(ay indeksini verir yani bir eksik numara çıkar.)
value = date1.getDay(); //? Haftanın kaçıncı günü
value = date1.getHours(); //? Saat bilgisi
value = date1.getMinutes(); //? Dakika bilgisi
value = date1.getSeconds(); //? Saniye bilgisi
value = date1.getMilliseconds(); //? Milisaniye bilgisi

//todo: Tarih Değerlerini Değiştirme

date1.setMonth(7) //? 7.indeks numaralı yani 8.ay(ağustos) atandı.
date1.setDate(1) //? Ayın kaçı olacağını belirledim
date1.setFullYear(2000,0,1); //? yıl, ay ve günü değiştirdim.
date1.setHours(5)
date1.setMinutes(15)
date1.setSeconds(11)


value = date1;
console.log(value)