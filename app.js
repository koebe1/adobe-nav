const element1 = document.querySelector('.menu-element-1');
element1.addEventListener('click', openMenu, );
element2 = document.querySelector('.menu-element-2');
element2.addEventListener('click', openMenu2);
element3 = document.querySelector('.menu-element-3');
element3.addEventListener('click', openMenu3);
element4 = document.querySelector('.menu-element-4');
element4.addEventListener('click', openMenu4);
element5 = document.querySelector('.menu-element-5');
element5.addEventListener('click', openMenu5);

const dropdown1 = document.querySelector('.dropdown');
const dropdown2 = document.querySelector('.dropdown-2');
const dropdown3 = document.querySelector('.dropdown-3');
const dropdown4 = document.querySelector('.dropdown-4');
const dropdown5 = document.querySelector('.dropdown-5');

function openMenu() {

    document.querySelector('.dropdown').classList.toggle('active');
    document.querySelector('.fa-chevron-down').classList.toggle('fa-chevron-down-active');
}

function openMenu2() {
    document.querySelector('.dropdown-2').classList.toggle('active');
    document.querySelector('.arr-2').classList.toggle('fa-chevron-down-active');
}

function openMenu3() {
    document.querySelector('.dropdown-3').classList.toggle('active');
    document.querySelector('.arr-3').classList.toggle('fa-chevron-down-active');
}

function openMenu4() {
    document.querySelector('.dropdown-4').classList.toggle('active');
    document.querySelector('.arr-4').classList.toggle('fa-chevron-down-active');
}

function openMenu5() {
    document.querySelector('.dropdown-5').classList.toggle('active');
    document.querySelector('.arr-5').classList.toggle('fa-chevron-down-active');
}
