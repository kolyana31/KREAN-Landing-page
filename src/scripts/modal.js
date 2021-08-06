let fs_modal = document.getElementById('fs-modal');

let fs_modal_accept = document.getElementById('accept_modal_rule_btn');

if (window.localStorage.getItem("rule_accepted")!=null) {
    fs_modal.remove();
}
else{
    fs_modal.hidden=false;
    fs_modal.style.display='flex';
}

fs_modal_accept.onclick = ()=>{
    fs_modal.style.animationPlayState = "running";
    window.localStorage.setItem('rule_accepted','true');
    setTimeout(()=>{
        fs_modal.remove();
    },1000)
}