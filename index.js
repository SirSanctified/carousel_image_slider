const slides = document.querySelector('.slides')
const images = Array.from(document.querySelectorAll('.images'))
const nextBtn = document.querySelector('.right')
const prevBtn = document.querySelector('.left')

const imgWidth = images[0].getBoundingClientRect().width

const setSlidePosition = (img, index) => {
    img.style.left = imgWidth * index + 'px'
}

images.forEach(setSlidePosition)

const moveImageTo = (slides, currentImage, targetImage) => {
    slides.style.transform = 'translateX(-' + targetImage.style.left + ')'
    currentImage.classList.remove('current')
    targetImage.classList.add('current')
}

nextBtn.addEventListener('click', e => {
    const currentImage = slides.querySelector('.current')
    const index = images.indexOf(currentImage)
    let nextImage
    if (currentImage.nextElementSibling !== null) {
        nextImage = currentImage.nextElementSibling
    }
    else {
        nextImage = images[0]
    }
    moveImageTo(slides, currentImage, nextImage)
})

prevBtn.addEventListener('click', e => {
    const currentImage = slides.querySelector('.current')
    const index = images.indexOf(currentImage)
    let prevImage
    if (index !== 0) {
        prevImage = currentImage.previousElementSibling
    }
    else {
        prevImage = images[images.length - 1]
    }
    moveImageTo(slides, currentImage, prevImage)
})