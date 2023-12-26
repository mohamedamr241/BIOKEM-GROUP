let isActionDone = false;
function demo() {
   document.getElementById('demo1').classList.toggle('hover')
   if (window.innerWidth <= 450) {
      document.getElementById('makeSpace').classList.toggle('mobile');
   }
}

function reset() {
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
   document.getElementById('makeSpace').classList.remove('mobile');
}

document.getElementById('dropDownList').addEventListener('click', function() {
   if (isActionDone) {
      // Undo the action
      reset();
   } else {
      // Do something
      demo();
   }
   isActionDone = !isActionDone;
})

let jarSize= document.querySelectorAll('.jarSize');

jarSize.forEach(item =>{
   item.addEventListener('click',()=>{
      let productName = document.getElementById('title').innerText;
      let jar=item.childNodes[0].innerText
      let image = document.getElementById('prodImage');
      console.log(productName+'_'+jar+'.jpg');
      image.src=`assets/images/orange category/${productName+'_'+jar+'.jpg'}`;
   })
})

let jarsizeGreen = document.querySelectorAll('.jarSizeGreen');
jarsizeGreen.forEach(item =>{
   item.addEventListener('click',()=>{
      let productName = document.getElementById('title').innerText;
      let jar=item.childNodes[0].innerText
      let image = document.getElementById('prodImage');
      console.log(productName+'_'+jar+'.jpg');
      image.src=`../assets/images/green category/${productName+'_'+jar+'.jpg'}`;
   })
})