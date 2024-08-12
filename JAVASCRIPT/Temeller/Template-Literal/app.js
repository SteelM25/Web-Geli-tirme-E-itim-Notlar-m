const name = "Musa Çelik";
const department = "Development";
const salary = "50000";

// const a = `İsim: ${name}\nDepartman: ${department}\nSalary: ${salary}`

// console.log(a)

const html = `<ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
    
</ul>`;

document.body.innerHTML = html;
