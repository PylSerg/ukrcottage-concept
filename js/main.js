function openFormApp() {
    document.querySelector('.form-application-container').classList.add("form-application-container--visible");
    document.querySelector('body').style.overflow = "hidden";
}

function closeFormApp() {
    document.querySelector('.form-application-container').classList.remove('form-application-container--visible');
        document.querySelector('body').style.overflow = "scroll";

}