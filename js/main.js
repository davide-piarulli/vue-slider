const myCarouselImages = document.querySelector('.my-carousel-images');
const myThumbnails = document.querySelector('.my-thumbnails');
let counterImages = 0;

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// reset carousel e thumbnails
myCarouselImages.innerHTML = '';
myThumbnails.innerHTML = '';

// stampo le IMG e thumbnails
images.forEach((elemento, indice) => {
    myCarouselImages.innerHTML +=
        `
    <div class="my-carousel-item">
        <img class="img-fluid" src="${elemento.url}" alt="${elemento.title}">
        <div class="item-description px-3">
            <h2>${elemento.title}</h2>
            <p>${elemento.description}</p>
        </div>
    </div>
    `;

    myThumbnails.innerHTML +=
        `
    <div class="my-thumbnail">
        <img class="img-fluid" src="${elemento.url}" alt="${elemento.title}">
    </div>
    `
})


// tasto prev
myThumbnails.innerHTML +=
    `
<div class="my-previous position-absolute">
    <span class="my-prev-hook"></span>
</div>
`
// tasto next
myThumbnails.innerHTML +=
    `
<div class="my-next position-absolute">
    <span class="my-next-hook"></span>
</div>
`
// richiamo ITEM sia del carousel che della thumbnail
const myCarouselItem = document.getElementsByClassName('my-carousel-item');
const myThumbnailItem = document.getElementsByClassName('my-thumbnail');

// aggiungo classe active a carousel e thumbnail
myCarouselItem[counterImages].classList.add('active');
myThumbnailItem[counterImages].classList.add('active');

// richiamo i bottoni
const btnPrev = document.querySelector('.my-prev-hook');
const btnNext = document.querySelector('.my-next-hook');

// cambiare IMG
btnPrev.addEventListener('click', function(){
    prev();
})

btnNext.addEventListener('click', function(){
    next();
})

// funzione per bottoni
function prev() {
    myCarouselItem[counterImages].classList.remove('active');
    myThumbnailItem[counterImages].classList.remove('active');
    counterImages--;

    if (counterImages < 0) {
        counterImages = images.length - 1;
    }
    myCarouselItem[counterImages].classList.add('active');
    myThumbnailItem[counterImages].classList.add('active');

}

function next() {
    myCarouselItem[counterImages].classList.remove('active');
    myThumbnailItem[counterImages].classList.remove('active');
    counterImages++;

    if (counterImages == images.length) {
        counterImages = 0;
    }

    myCarouselItem[counterImages].classList.add('active');
    myThumbnailItem[counterImages].classList.add('active');

}

// bonus 1
const newThumbs = document.querySelectorAll('.my-thumbnail');
newThumbs.forEach((elemento, indice) => {
    elemento.addEventListener('click', () => {
        // clearInterval(autoplay);
        myCarouselItem[counterImages].classList.remove('active');
        myThumbnailItem[counterImages].classList.remove('active');
        
        counterImages = indice;
        
        myCarouselItem[counterImages].classList.add('active');
        myThumbnailItem[counterImages].classList.add('active');
    });
});

// bonus 2
setInterval(autoplay, 3000);
function autoplay (){
    myCarouselItem[counterImages].classList.remove('active');
    myThumbnailItem[counterImages].classList.remove('active');
    counterImages++;

    if (counterImages == images.length) {
        counterImages = 0;
    }

    myCarouselItem[counterImages].classList.add('active');
    myThumbnailItem[counterImages].classList.add('active');
} 

const stop = document.getElementById('stop');
stop.addEventListener('click', function() {

});

const start = document.getElementById('start');
stop.addEventListener('click', function() {
    setInterval(autoplay, 3000);
});

const reverse = document.getElementById('reverse');
stop.addEventListener('click', function() {

});