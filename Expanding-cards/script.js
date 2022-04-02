const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClassActive();
        panel.classList.add('active')
    })
})

function removeClassActive() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
