let animationsImg = Array.from(document.querySelectorAll('.imgCircle'));
let animationsTools = Array.from(document.querySelectorAll('.imgFormat'));
let animationsText = Array.from(document.querySelectorAll('.para2'));

window.addEventListener('scroll', animateElementsImg);
window.addEventListener('scroll', animateElementsTools);
window.addEventListener('scroll', animateElementsText);

function animateElementsImg() {
    animationsImg.forEach(element => {
        if (isVisible(element)) {
            element.classList.add('active');
        } else {
            element.style.display = '';
        }
    })
}

function animateElementsTools() {
    animationsTools.forEach(element => {
        if (isVisible(element)) {
            element.classList.add('active');
        } else {
            element.style.display = '';
        }
    })
}

function animateElementsText() {
    animationsText.forEach(element => {
        if (isVisible(element)) {
            element.classList.add('active');
        } else {
            element.style.display = '';
        }
    })
}

const isVisible = (element) => {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -300;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false; 
}
