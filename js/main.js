function openFormApp() {
    document.querySelector('.form-application-container').classList.add("form-application-container--visible");
    document.querySelector('body').style.overflow = "hidden";
}

function closeFormApp() {
    document.querySelector('.form-application-container').classList.remove('form-application-container--visible');
        document.querySelector('body').style.overflow = "scroll";

}

function toTop() {
    document.querySelector("html").style.scrollBehavior = "auto";

    let t;
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('toTop()',20);
    } else clearTimeout(t);
    document.querySelector("html").style.scrollBehavior = "smooth";
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


const searchStart = document.querySelector("[data-search-start]");

(() => {

    searchStart.addEventListener("click", () => {
        searchBtn.classList.remove("active-button");
        searchList.classList.remove("visible-search");
        document.querySelector(".search__field").value = "";
    })
})();


const openSearchForm = document.querySelector("[data-open-search]");
const closeSearchForm = document.querySelector("[data-close-search]");

const searchForm = document.querySelector("[data-search-block]");
    
(() => {

    openSearchForm.addEventListener("click", () => {
        searchForm.classList.add("search-desktop__search-block--visible");
    })

    closeSearchForm.addEventListener("click", () => {
        searchForm.classList.remove("search-desktop__search-block--visible");
    })
})();


const showCallMenu = document.querySelector("[data-call-visible]");
const callMenu = document.querySelector("[data-call-menu]");
    
(() => {

    showCallMenu.addEventListener("click", () => {
        showCallMenu.classList.toggle("call__button--visible");
        callMenu.classList.toggle("call__list--visible");
    })
})();