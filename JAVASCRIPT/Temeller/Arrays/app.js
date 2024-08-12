let value;

const numbers = [10, 33, 98, 987,32,49,98];

const numbers2 = new Array(1, 33, 98, 898); //! Her ikisi de dizidir ama bu daha fazla bellek tüketir. Diğeri idealdir.

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba", 99, null, undefined, 3.14];

value = numbers.length;

value = numbers[0];
value = numbers2[2];

//* Herhangi bir indeksteki değeri değiştirme

numbers[2] = 199;

//*indexof

value = numbers.indexOf(987);

//*Array sonuna değer ekleme - push

numbers.push(999);
//*Array başına değer ekleme - unshift

numbers.unshift(22);

//*Array başından değer silme - shift

numbers.shift();

//* Array sonundan değer silme - pop
numbers.pop();

//*Belirli indeksleri siler - splice

numbers.splice(0,3) //? 0.indekten itibaren 3 eleman silinir.


//*Arrayi ters çevirme

numbers.reverse();



value = numbers
console.log(value);
