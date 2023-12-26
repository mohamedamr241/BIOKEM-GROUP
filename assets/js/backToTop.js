let icon =document.getElementById('top');
if(DetectingTheTopView()){
    icon.classList.add('fade');
}
else{
    icon.classList.remove('fade');
}
function DetectingTheTopView() {
    return (window.scrollY === 0);
}
document.addEventListener('scroll',()=>{
    if(DetectingTheTopView()){
        icon.classList.add('fade');
    }
    else{
        icon.classList.remove('fade');
    }
})
icon.addEventListener('click',(e)=>{
    e.preventDefault();
    let top = document.body;
    top.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
})