function openFormApp() {
    document.querySelector('.form-application-container').classList.add("form-application-container--visible");
    document.querySelector('body').style.overflow = "hidden";
}

function closeFormApp() {
    document.querySelector('.form-application-container').classList.remove('form-application-container--visible');
        document.querySelector('body').style.overflow = "scroll";

}

function toTop() {
    let t;
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('toTop()',20);
    } else clearTimeout(t);
    return false;
}


const searchBtn = document.querySelector("[data-search-button]");
const menuBtn = document.querySelector("[data-menu-button]");
const contactsBtn = document.querySelector("[data-contacts-button]");
const toTopBtn = document.querySelector("[data-up-button]");

const menuList = document.querySelector("[data-menu]");
const contactsList = document.querySelector("[data-contacts]");
const searchList = document.querySelector("[data-search]");

(() => {

    searchBtn.addEventListener("click", () => {
        searchBtn.classList.toggle("active-button");
        searchList.classList.toggle("visible-search");

        menuBtn.classList.remove("active-button");
        menuList.classList.remove("visible-menu");
        contactsBtn.classList.remove("active-button");
        contactsList.classList.remove("visible-contacts");
    });   

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active-button");
        menuList.classList.toggle("visible-menu");

        searchBtn.classList.remove("active-button");
        searchList.classList.remove("visible-search");
        contactsBtn.classList.remove("active-button");
        contactsList.classList.remove("visible-contacts");
    });

    contactsBtn.addEventListener("click", () => {
        contactsBtn.classList.toggle("active-button");
        contactsList.classList.toggle("visible-contacts");

        searchBtn.classList.remove("active-button");
        searchList.classList.remove("visible-search");
        menuBtn.classList.remove("active-button");
        menuList.classList.remove("visible-menu");       
    });
    
        toTopBtn.addEventListener("click", () => {

        searchBtn.classList.remove("active-button");
        searchList.classList.remove("visible-search");
        menuBtn.classList.remove("active-button");
        menuList.classList.remove("visible-menu");
        contactsBtn.classList.remove("active-button");
        contactsList.classList.remove("visible-contacts");
    }); 
})();

(() => {
    const searchStart = document.querySelector("[data-search-start]");

    searchStart.addEventListener("click", () => {
        searchBtn.classList.remove("active-button");
        searchList.classList.remove("visible-search");
        document.querySelector(".search__field").value = "";
    })
})();