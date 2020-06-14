document.querySelector('.menu-element-1').addEventListener('click',openMenu);

function openMenu() {
    document.querySelector('.dropdown').classList.toggle('active');
    document.querySelector('.fa-chevron-down').classList.toggle('fa-chevron-down-active');
}
