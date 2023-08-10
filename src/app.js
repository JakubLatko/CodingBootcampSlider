const slides = document.querySelectorAll(".sliderCard")
const arrows = document.querySelectorAll(".arrow")

let index = 0
slides[index].classList.add("activeSlide")

arrows.forEach(element => {
    element.addEventListener("click", ()=>{
        if(element.classList.contains("prevArrow")){
            index = index - 1
            if(index == -1){
            index = 1
            slides.forEach(element => element.classList.remove("activeSlide"))
            slides[index].classList.add("activeSlide")
            }  
            slides.forEach(element => element.classList.remove("activeSlide"))
            slides[index].classList.add("activeSlide")
        } else {
            index = index + 1
            if(index == 2){
                index = 0
                slides.forEach(element => element.classList.remove("activeSlide"))
                slides[index].classList.add("activeSlide")
            }
            slides.forEach(element => element.classList.remove("activeSlide"))
            slides[index].classList.add("activeSlide")
        }
    })
})

