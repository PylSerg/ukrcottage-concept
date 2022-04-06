function openFormApp() {
    document.querySelector('.form-application-container').classList.add("form-application-container--visible");
    document.querySelector('body').style.overflow = "hidden";
}

function closeFormApp() {
    document.querySelector('.form-application-container').classList.remove('form-application-container--visible');
        document.querySelector('body').style.overflow = "scroll";

}

(() => {
    const menuBtn = document.querySelector("[data-menu-button]");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active-button");
    });
})();

function toTop() {
    let t;
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('toTop()',20);
    } else clearTimeout(t);
    return false;
}