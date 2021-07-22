window.addEventListener("load", main)

function main(){
    let main_box = document.getElementById('main-box');
    let box = document.getElementById('box');
    let titulo = document.getElementById('titulo');
    let controle = 1;
    let aux = controle;
    let texto = document.getElementById('texto');
    let btn1 = document.getElementById('circle-1');
    let btn2 = document.getElementById('circle-2');
    let btn3 = document.getElementById('circle-3');
    let btn4 = document.getElementById('circle-4');
    let btn5 = document.getElementById('circle-5');

    let i1 = document.getElementById('i1');
    let i2 = document.getElementById('i2');
    let i3 = document.getElementById('i3');
    let i4 = document.getElementById('i4');
    let i5 = document.getElementById('i5');

    let screen1 = document.getElementById('screen-1');
    let screen2 = document.getElementById('screen-2');
    let screen3 = document.getElementById('screen-3');
    let screen4 = document.getElementById('screen-4');
    let screen5 = document.getElementById('screen-5');
/*
------------------------------------------
   BOTÃO 1
------------------------------------------
*/
    
    btn1.addEventListener("click",function(){
        aux = controle;
        controle = 1;
        setTimeout(function(){ titulo.innerText = "Profile"; }, 500);
        transition(screen1);
    });

    if(controle != 1){
        btn1.addEventListener("mouseover",function(){
            i1.style.color = "#e3e3e3";
        });
        
        btn1.addEventListener("mouseout",function(){
            i1.style.color = "white";
        });
    }

/*
------------------------------------------
   BOTÃO 2
------------------------------------------
*/

    btn2.addEventListener("click",function(){
        aux = controle;
        controle = 2;
        setTimeout(function(){ titulo.innerText = "Home"; }, 500);
        transition(screen2);
        deselect(screen2);
    });

    if(controle != 2){
        btn2.addEventListener("mouseover",function(){
            i2.style.color = "#e3e3e3";
        });
        
        btn2.addEventListener("mouseout",function(){
            i2.style.color = "white";
        });
    }

/*
------------------------------------------
   BOTÃO 3
------------------------------------------
*/

    btn3.addEventListener("click",function(){
        aux = controle;
        controle = 3;
        buttonController(3);
    });

    if(controle != 3){
        btn3.addEventListener("mouseover",function(){
            i3.style.color = "#e3e3e3";
        });
        
        btn3.addEventListener("mouseout",function(){
            i3.style.color = "white";
        });
    }
/*
------------------------------------------
   BOTÃO 4
------------------------------------------
*/

    btn4.addEventListener("click",function(){
        aux = controle;
        controle = 4;
        setTimeout(function(){ titulo.innerText = "Hard Skill"; }, 500);
        transition(screen4);
        deselect(screen4);
    });

    if(controle != 4){
        btn4.addEventListener("mouseover",function(){
            i4.style.color = "#e3e3e3";
        });
        
        btn4.addEventListener("mouseout",function(){
            i4.style.color = "white";
        });
    }

/*
------------------------------------------
   BOTÃO 5
------------------------------------------
*/

    btn5.addEventListener("click",function(){
        aux = controle;
        controle = 5;
        buttonController(5);
    });

    if(controle != 5){
        btn5.addEventListener("mouseover",function(){
            i5.style.color = "#e3e3e3";
        });
        
        btn5.addEventListener("mouseout",function(){
            i5.style.color = "white";
        });
    }

/*
------------------------------------------
   FUNCTIONS
------------------------------------------
*/

    function transition(screen){
        setTimeout(function(){
            screen1.style.display = 'none';
            screen2.style.display = 'none';
            screen3.style.display = 'none';
            screen4.style.display = 'none';
            screen5.style.display = 'none';
            screen.style.display = 'block';
        }, 500);
        main_box.style.animation = "";
        setTimeout(() => main_box.style.animation = "open-main-box 1s forwards", 1);
        main_box.style.animation = "";
        screen.style.animation = "";
        setTimeout(() => screen.style.animation = "open-box 1s forwards", 1);
        titulo.style.animation = "";
        setTimeout(() => titulo.style.animation = "open-titulo 1s forwards", 1);


    }
}



