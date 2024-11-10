const imgs = document.querySelector(".carrossel-container");
const img = document.querySelectorAll(".carrossel-img");

let index = 0;

const carrosel = () => {
    index++;

    const imgWidth = img[0].clientWidth;

    if (index >= img.length) {
        index = 0;
    }

    imgs.style.transform = `translateX(${-index * imgWidth}px)`;
};

// Intervalo para alternância de imagem
setInterval(carrosel, 4000);
