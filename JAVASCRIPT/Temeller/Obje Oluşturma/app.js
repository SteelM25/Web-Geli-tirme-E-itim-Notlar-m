let value;

const programmer = {
    name: "Musa",
    age: 20,
    email: "cmusa4031@gmail.com",

    adress:{
        city: "Erzurum",
        district: "Horasan"
    },

    //! Obje içinde dizi kullandık
    renkler:["siyah","beyaz", "mavi"]


}


value = programmer;

value = programmer.email; //? ikisi aynı işleve sahip ama bu daha pratik
value = programmer["email"]

value = programmer.age;

value = programmer.adress.district;

value = programmer.renkler[2]

//----------

//! Dizi içinde obje kullandık
const programmers=[
    {name:"Musa", age:20, district:"Horasan"},
    {name:"Ertuğrul", age:22, district:"Hasankale"}
]


value = programmers[0].district;
value = programmers[1].name;

console.log(value)