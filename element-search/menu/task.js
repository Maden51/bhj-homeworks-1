const linksMenu = Array.from(document.querySelectorAll('.menu__link'));
const activateMenu = (element) => element.classList.add('menu_active');
const disActivateMenu = (element) => element.classList.remove('menu_active');

for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].onclick = function() {
        if (linksMenu[i].closest('li').querySelector('ul.menu')){
            let element = linksMenu[i].closest('li').querySelector('ul.menu');
            if (element.classList.contains('menu_sub')){
                if (element.classList.contains('menu_active')) {
                    disActivateMenu(element);
                } else {
                    let allSubmenu = document.querySelectorAll('ul.menu');
                    for (let i = 0; i < allSubmenu.length; i++) {
                        if (allSubmenu[i].classList.contains('menu_active')){
                            allSubmenu[i].classList.remove('menu_active')
                        }
                    }
                    activateMenu(element);
                }
                return false;
            }
        }
    }
}

