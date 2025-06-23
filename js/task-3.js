const userName = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');
userName.addEventListener('input', (event) =>{
    nameOutput.textContent = event.target.value.trim();
    if (nameOutput.textContent===""){
        nameOutput.textContent = "Anonymous"
    }
})