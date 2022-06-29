
const openClass = 'open';

function toggleNavBarDropdownWindow(linkElem, idSelector) {
    const navElem = document.getElementById(idSelector);
    const navOverlayElem = document.getElementById('mega-menu-container-overlay');

    if (linkElem.classList.contains(openClass)) {
        closeNavBarWindows();
    } else {
        linkElem.classList.add(openClass);
        navElem.classList.add(openClass);
        navOverlayElem.classList.add(openClass);
    }
}

function closeNavBarWindows() {
    const dropDownElems = document.getElementsByClassName('dropdown-openable');
    for (const dropDownElem of dropDownElems) {
        dropDownElem.classList.remove(openClass);
    }
}

function navbarTap(navElem) {
    navElem.classList.toggle(openClass);
}