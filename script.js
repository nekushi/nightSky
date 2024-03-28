alert("A total of 100 stars are diplayed on your screen. Look for an odd one XD")

function createStar() {
    const starContainer = document.createElement("div")
    const star = document.createElement("div")
    let docWidth = window.innerWidth - 15
    let docHeight = window.innerHeight - 15
    
    starContainer.classList.add("star-container")
    star.classList.add("star")
    star.style.top = `${Math.ceil(Math.random() * docHeight)}px`
    star.style.left = `${Math.ceil(Math.random() * docWidth)}px`
    star.style.transform = `rotate(${Math.ceil(Math.random() * 360)}deg)`
    document.body.appendChild(starContainer)
    starContainer.appendChild(star)
}

let message = document.createElement("div")
message.classList.add("message-box")
message.innerText = "Ooh, you found me. Take care always. I love you!❤️❤️"
document.body.appendChild(message)

function specialStar() {
    const starContainer = document.createElement("div")
    const star = document.createElement("div")
    let docWidth = window.innerWidth
    let docHeight = window.innerHeight
    
    starContainer.classList.add("star-container")
    star.classList.add("star")
    star.style.top = `${Math.ceil(Math.random() * docHeight)}px`
    star.style.left = `${Math.ceil(Math.random() * docWidth)}px`
    star.style.transform = `rotate(${Math.ceil(Math.random() * 360)}deg) scale(1.2)`
    document.body.appendChild(starContainer)
    starContainer.appendChild(star)

    starContainer.addEventListener("click", () => {
        message.style.animation = "fade-in 1000ms ease forwards"
    })
}

for (let i = 0; i < 100; ++i) {
    if (i === 22) {
        specialStar()
    } else {
        createStar()
    }
}
