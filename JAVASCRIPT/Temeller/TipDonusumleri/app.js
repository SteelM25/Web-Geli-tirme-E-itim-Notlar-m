let value;

//? Veritiplerini string'e çevirme

value = String(10);

console.log(value, typeof value) //string

value = (14).toString();

console.log(value, typeof value) //string

//? Veritiplerini number'a çevirme

value = Number("123"); //sonuç 123

value = Number("Merhaba") //sonuç NaN(Not a Number)

value = Number(null) //sonuç 0

value = Number([1,2,3]); //sonuç NaN

//! Number yerine parseFloat veya parseInt kullanılabilir.



