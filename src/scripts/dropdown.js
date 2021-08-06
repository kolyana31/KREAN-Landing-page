let dropdownBTN = document.getElementById('dropdownBTN');
let nav_list = document.getElementById('nav_list');
let navbar = document.getElementById('navbar');

let links = Array.from(document.getElementsByClassName("header_menu_item link"))

links.forEach((el)=>{
    el.addEventListener('click',()=>{
        nav_list.classList.remove('dropdown_shown');
        dropdownBTN.classList.remove('burger_opened');
    })
})


dropdownBTN.onclick = ()=>{
    if (dropdownBTN.classList.contains('burger_opened')) {
        nav_list.classList.remove('dropdown_shown');
        dropdownBTN.classList.remove('burger_opened');
    }
    else{
        nav_list.classList.add('dropdown_shown');
        dropdownBTN.classList.add('burger_opened');
    }
}