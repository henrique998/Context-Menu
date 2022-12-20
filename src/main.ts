import './styles/global.scss'
import './styles/main.scss'

const menuContainer = document.querySelector<HTMLDivElement>('[data-element="menu-container"]')

document.addEventListener('contextmenu', e => {
    e.preventDefault()

    let xCoordinate = e.offsetX
    let yCoordinate = e.offsetY

    menuContainer!.style.left = `${xCoordinate}px`
    menuContainer!.style.top = `${yCoordinate}px`
    menuContainer!.style.visibility = "visible"
})

document.addEventListener('click', () => {
    menuContainer!.style.visibility = "hidden"
})