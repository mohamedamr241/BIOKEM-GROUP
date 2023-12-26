const addRedColorr = (target)=>{
    try{
        const listOfLi = document.querySelectorAll('.nav-item');
        for(const x of listOfLi){
            x.classList.remove("active");
        }
        target.classList.add('active');
    }
    catch(err){
        console.log(`error while adding red color to the li: ${err}`);
    }
}
document.querySelector('#nav-items-list').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'LI') {
        const num = evt.target.textContent;
        addRedColorr(evt.target)
    }
});
