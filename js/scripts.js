function toggleMenu() {
    let menu = document.getElementById('menu-principal')
    let menuClass = 'menu-principal__lista-aberto'

    if (menu.classList.contains(menuClass)) {
        menu.classList.remove(menuClass)
    } else {
        menu.classList.add(menuClass)
    }
}