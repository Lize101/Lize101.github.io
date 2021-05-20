const exp1 = document.getElementById('details1');
const exp2 = document.getElementById('details2');
const exp3 = document.getElementById('details3');
const exp4 = document.getElementById('details4');

const btn1 = document.getElementById('experience1');
const btn2 = document.getElementById('experience2');
const btn3 = document.getElementById('experience3');
const btn4 = document.getElementById('experience4');

const eventHandlerFunctionE1 = () => {
    if (exp1.style.display === '') {
     exp1.style.display = 'block';
     exp2.style.display = '';
     exp3.style.display = '';
     exp4.style.display = '';
    } else {
     exp1.style.display = '';
    }
}

 const eventHandlerFunctionE2 = () => {
     if (exp2.style.display === '') {
     exp1.style.display = '';
     exp2.style.display = 'block';
     exp3.style.display = '';
     exp4.style.display = '';
    } else {
        exp2.style.display = '';
    }
 }

 const eventHandlerFunctionE3 = () => {
    if (exp3.style.display === '') {
     exp1.style.display = '';
     exp2.style.display = '';
     exp3.style.display = 'block';
     exp4.style.display = '';
    } else {
        exp3.style.display = '';
    }
 }
 const eventHandlerFunctionE4 = () => {
    if (exp4.style.display === '') {
     exp1.style.display = '';
     exp2.style.display = '';
     exp3.style.display = '';
     exp4.style.display = 'block';
    } else {
        exp4.style.display = '';
    }
 }

 btn1.addEventListener('click', eventHandlerFunctionE1);
 btn2.addEventListener('click', eventHandlerFunctionE2);
 btn3.addEventListener('click', eventHandlerFunctionE3);
 btn4.addEventListener('click', eventHandlerFunctionE4);

