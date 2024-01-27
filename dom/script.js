// const p = document.getElementById('message')
// console.log(p);

// let submitBtn = document.getElementById('submitBtn');
// let nameInput = document.getElementById('nameInput');
// let greetingOutput = document.getElementById('greetingOutput');

// submitBtn.addEventListener('click', () => {
//     let userName = nameInput.value.trim();

//     if (userName !== "") {
//         greetingOutput.innerText = `Hello, ${userName}! Welcome to our website.`;
//     } else {
//         greetingOutput.innerText = "Please enter your name.";
//     }
// });


// submitBtn.addEventListener('click',()=> {
//     let userName = nameInput.value.trim();
//     if(userName !== ""){
//         greetingOutput.innerHTML=`Hello ${userName} . Welcome to my website`;
//     }
//     else{
//         greetingOutput.innerHTML="Please enter your name.";
//     }
// })

const poor = document.getElementById('very-poor');
const ok = document.getElementById('ok');
const button = document.getElementById('btnClicked');
const output = document.getElementById('output');

btnClicked.addEventListener('click', () => {
    if (poor.checked) {
        output.innerText = `You clicked ${poor.value}`
    } else if (ok.checked) {
        output.innerHTML = `You clicked ${ok.value}`
    }
    else {
        alert('Click to something ')

    }
})