let leftA = document.getElementById('left_arrow');
let rigthA = document.getElementById('rigth_arrow');
let slider = document.getElementById('slider_track');

let startTouch;
let endTouch;

let slides = Array.from(slider.getElementsByClassName('slider_block'));

const leftClick = () => {
    if (slider.dataset.scale==0) {
        slider.dataset.scale = (slides.length-1)*-1;
    }
    else{
        slider.dataset.scale++;
    }
    slider.style.transform = `translateX(${slider.dataset.scale*100}%)`;
}

const rightClick = () => {
    if (slider.dataset.scale*-1==slides.length-1) {
        slider.dataset.scale = 0;
    }
    else{
        slider.dataset.scale--;
    }
    slider.style.transform = `translateX(${slider.dataset.scale*100}%)`;
}



slider.addEventListener('touchstart',(e)=>{
    startTouch = [e.changedTouches[0].screenX,e.changedTouches[0].screenY];
})

slider.addEventListener('touchend',(e)=>{
    endTouch = [e.changedTouches[0].screenX,e.changedTouches[0].screenY];
    if (endTouch[1]-startTouch[1]>100) {
        startTouch=null;
        endTouch=null;
        return;
    }
    if (startTouch[0]<endTouch[0]) {
        leftClick();
    }
    else if(startTouch[0]>endTouch[0]){
        rightClick();
    }
    startTouch=null;
    endTouch=null;
})

leftA.addEventListener('click',()=>{
    leftClick();
})

rigthA.addEventListener('click',()=>{
    rightClick();
})



let interval = setInterval(()=>{
    rightClick();
},3000);


setTimeout(()=>{
    clearInterval(interval);
},10000);

