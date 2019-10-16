var visual = document.querySelector('#visual');
var visualdark = document.querySelector('#visualdark');

function show() {
    console.log('hoi');
    visual.classList.toggle('show-visualdark');
    return false;
}

visual.addEventListener('click', show)
