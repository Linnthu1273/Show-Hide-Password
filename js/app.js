// const showHideInput = (inputOverlay, inputPass, inputIcon) => {
//     const overlay = document.getElementById(inputOverlay),
//             input = document.getElementById(inputPass),
//             iconEye = document.getElementById(inputIcon);

//     iconEye.addEventListener('click',()=>{
//         if(input.type === 'password'){
//             input.type = 'text';
//             iconEye.classList.add('bx-show')
//         }else{
//             input.type = 'password';
//             iconEye.classList.remove('bx-show')
//         }
//         overlay.classList.toggle('overlay-content')
//     })        
// }

// showHideInput('input-overlay','input-password','input-icon')

const overlay = document.getElementById('input-overlay'),
    inputLock = document.getElementById('input-lock'),
    inputPass = document.getElementById('input-password'),
    inputIcon = document.getElementById('input-icon');

inputIcon.addEventListener('click', () => {
    if(inputPass.type === 'password'){
        inputPass.type = 'text';
        inputIcon.classList.add('bx-show')
    }else{
        inputPass.type = 'password';
        inputIcon.classList.remove('bx-show')
    }
    overlay.classList.toggle('overlay-content')
})