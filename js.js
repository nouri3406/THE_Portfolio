const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    const icon = document.querySelector(".header-menu-mobile .material-icons");

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        icon.innerHTML = "close"; // change l'icône quand le menu est ouvert
    } else {
        icon.innerHTML = "menu"; // icône par défaut
    }
}
