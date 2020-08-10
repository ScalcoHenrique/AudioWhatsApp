

const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR")
    if (header) {
        console.log(header)
        clearInterval(interval)
    }

    const button = document.createElement("button")
    button.innerHTML = "1x"
    button.classList.add("twoTimesButton")
    header.appendChild(button)

    button.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio")
        console.log(audios)
        audios.forEach((audio) => {
            console.log(audio)
            
            if (audio.playbackRate == 1) {
                audio.playbackRate = 2
                button.innerHTML = '2x'
                button.style.color = 'green'
            } else {
                audio.playbackRate = 1
                button.innerHTML = '1x'
                button.style.color = 'grey'
            }

        })
    })
}, 1000);