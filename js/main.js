
let myImgs = Array.from(document.querySelectorAll('.cartona img'));
let lightLayer = document.querySelector('.light-layer');
let closeIcon = document.getElementById('close');
let rightIcon = document.getElementById('next');
let leftIcon = document.getElementById('prev');
let darkLayer = document.querySelector('.black-layer');
let currentIndex;


for(var i=0; i<myImgs.length; i++) {
    myImgs[i].addEventListener('click', function(e) {
        var target = e.target.getAttribute('src');
        currentIndex = myImgs.indexOf(e.target);
        lightLayer.style.backgroundImage = `url(${target})`
        darkLayer.classList.remove('d-none');
    })
}
closeIcon.addEventListener('click', function() {
    close();
});

rightIcon.addEventListener('click', function() {
    // next();
    slide(1);
})

leftIcon.addEventListener('click', function() {
    // prev();
    slide(-1);
})

function close() {
    darkLayer.classList.add('d-none');
}

function slide(step) {
    currentIndex += step;
    if(currentIndex === myImgs.length) {
        currentIndex = 0;
    }
    else if(currentIndex < 0) {
        currentIndex = myImgs.length-1;
    }
    lightLayer.style.backgroundImage = `url(${myImgs[currentIndex].getAttribute('src')})`;
}

document.addEventListener('keyup', function(e) {
    if(!darkLayer.classList.contains('d-none')) {
        if(e.key === 'ArrowRight') {
            slide(1);
        }
        else if(e.key === 'ArrowLeft') {
            slide(-1)
        }
        else if(e.key === 'Escape') {
            close();
        }
    }
})

document.addEventListener('click', function(e){
    if(e.target === darkLayer) {
        close();
    }
})



// function next() {
//     currentIndex++;
//     // currentIndex = (currentIndex + 1) % myImgs.length;
//     if(currentIndex === myImgs.length) {
//         currentIndex = 0;
//     }
//     lightLayer.style.backgroundImage = `url(${myImgs[currentIndex].getAttribute('src')})`;
// }


// function prev() {
//     currentIndex--;
//     if(currentIndex < 0) {
//         currentIndex = myImgs.length-1;
//     }
//     lightLayer.style.backgroundImage = `url(${myImgs[currentIndex].getAttribute('src')})`;
// }