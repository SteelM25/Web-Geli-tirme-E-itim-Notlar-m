let value;

const value1 = 10;

const value2 = 4;

//* Aritmetik Operatörler

// console.log(value1+value2)
// console.log(value1-value2)
// console.log(value1*value2)
// console.log(value1/value2)
// console.log(value1%value2)

//*Math Objesi

value = Math.PI;//3.14

value = Math.E;//2.71

value = Math.round(3.6);//todo normal tam sayıya yuvarlar
value = Math.ceil(3.7);//todo yukarı yuvarlar
value = Math.floor(3.7);//todo aşağı yuvarlar

value = Math.sqrt(25); //todo karekökü

value = Math.abs(-3); //todo mutlak değer

value = Math.pow(8,3); //todo 8in 3.kuvvetini alır(512)

value = Math.max(3,9,-3,99,23); //todo En büyük sayıyı bulur

value = Math.random(); //? 0 ile 1 arası(1 dahil değil) ondalıklı değerler üretir

value = Math.random() * 100; //? 0 ile 100 arası(100 dahil değil) ondalıklı değerler üretir

value = Math.floor(Math.random() * 100); //* 0 ile 100 arası tam sayılar üretir.



console.log(value)