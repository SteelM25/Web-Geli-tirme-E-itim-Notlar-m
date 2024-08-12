let value;

const firstName = "Musa";
const lastName = "Çelik";

const langs = "Java,Python,C++"

value = firstName.length;

value= firstName.concat(" ",lastName," ","Erzurum"); //istediğimiz stringleri ekledik

value = firstName.toLowerCase(); //! Küçük harf
value = firstName.toUpperCase(); //! Büyük harf

value = firstName[2]; //2.indeksteki harf(s)

value = firstName[firstName.length-1]; //son deger


//? İndexof

value = firstName.indexOf("u") //* ilgili karakterin indeks numarasını döndürür.

value = firstName.indexOf("Q"); //* ilgili eleman yoksa -1 döner

//? Charat

value = firstName.charAt(3); //* Yazılan indeks numarasındaki değeri döndürür

value = firstName.charAt(firstName.length-1); //* son elemanı döndürür.

//? split

value = langs.split(","); //* virgülü temel alarak stringi parçalar, dizi şeklinde döndürür.

//?replace

value = langs.replace("Python","C#"); //* Python yerine C# yazıldı


//?includes

value = langs.includes("Java"); //* yazılan deger varsa true, yoksa false döner.



console.log(value)