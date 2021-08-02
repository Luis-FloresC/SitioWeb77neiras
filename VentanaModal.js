var buttonadd= document.getElementById('button-add'),
    buttonadd1= document.getElementById('button-add1'),
    buttonadd2= document.getElementById('button-add2'),
    buttonadd3= document.getElementById('button-add3'),
    buttonadd4= document.getElementById('button-add4'),
    buttonadd5= document.getElementById('button-add5'),
    buttonadd6= document.getElementById('button-add6'),
    buttonadd7= document.getElementById('button-add7'),
    overlay= document.getElementById('overlay'),
    popup= document.getElementById('popup'),
    btnCerrarPopup= document.getElementById('btn-cerrar-popup');

buttonadd.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');

})

buttonadd1.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active');
})

buttonadd2.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active');
})

buttonadd3.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active');
})


buttonadd4.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active');
})

buttonadd5.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active');
})

buttonadd6.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active');
})

buttonadd7.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active');
    
})


btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');

})




