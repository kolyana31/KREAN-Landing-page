function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight*1.6 || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth*1.6 || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

let showuppers = Array.from(document.getElementsByClassName('showuper'));

window.onscroll= ()=>{
    showuppers.forEach((el,i)=>{
       if(isElementInViewport(el, el.dataset)){
        el.style.animationPlayState = "running";
       }
    })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});