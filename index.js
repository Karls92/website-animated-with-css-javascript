const links = document.querySelectorAll("button")
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => {
            item.style.fontSize = "4em"
            item.classList.add("fontBig")
        })
        document.querySelector("#navbar").style.width = "30%";
        document.querySelector("#content").style.width = "70%";
        document.querySelector("#content").style.opacity = "1"
    })
})