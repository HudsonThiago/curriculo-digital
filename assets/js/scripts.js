window.addEventListener("load", main)

function main(){
    let main_box = document.getElementById('main-box');
    let box = document.getElementById('box');
    let titulo = document.getElementById('titulo');
    let controle = 0;
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

    setTimeout(() => reset(), 1500);
    setTimeout(() => reset(), 1500);
    setTimeout(() => reset(), 1500);
    setTimeout(() => reset(), 1500);
    setTimeout(() => reset(), 1500);
    setTimeout(() => clickButtons(), 1500);

    function reset(){
        btn1.classList.remove('circle-2');
        btn2.classList.remove('circle-2');
        btn3.classList.remove('circle-2');
        btn4.classList.remove('circle-2');
        btn5.classList.remove('circle-2');
        btn1.classList.add('circle-2-f', 'circle-active-i');
        btn2.classList.add('circle-2-f');
        btn3.classList.add('circle-2-f');
        btn4.classList.add('circle-2-f');
        btn5.classList.add('circle-2-f');
    }

    function clickButtons(){
    /*
    ------------------------------------------
    BOTÃO 1
    ------------------------------------------
    */
        
        btn1.addEventListener("click",function(){
            controle = 1;
            if (!btn1.classList.contains("circle-active")){
                if (!(btn1.classList.contains("circle-active-f"))){
                    btn1.classList.add('circle-active-f');
                    setTimeout(() => transition(screen1), 0);
                    setTimeout(() => verificacao(btn1), 0);
                    setTimeout(() => btn1.style.animation = "circle-active-f 0.8s forwards", 0);
                    setTimeout(() => i1.style.animation = "icircle-active-f 0.6s forwards", 0);
                } 
            } 
        });

        
        btn1.addEventListener("mouseover",function(){
            i1.style.color = "#ff6369";
        });
            
        btn1.addEventListener("mouseout",function(){
            i1.style.color = "white";
        });
        

    /*
    ------------------------------------------
    BOTÃO 2
    ------------------------------------------
    */

        btn2.addEventListener("click",function(){
            controle = 2;
            if (!(btn2.classList.contains("circle-active-f"))){
                btn2.classList.add('circle-active-f');
                setTimeout(() => transition(screen2), 0);
                setTimeout(() => verificacao(btn2), 0);
                setTimeout(() => btn2.style.animation = "circle-active-f 0.8s forwards", 0);
                setTimeout(() => i2.style.animation = "icircle-active-f 0.6s forwards", 0);
            } 
        });

        
        btn2.addEventListener("mouseover",function(){
            i2.style.color = "#ff6369";
        });
            
        btn2.addEventListener("mouseout",function(){
            i2.style.color = "white";
        });

    /*
    ------------------------------------------
    BOTÃO 3
    ------------------------------------------
    */

        btn3.addEventListener("click",function(){
            controle = 3;
            if (!(btn3.classList.contains("circle-active-f"))){
                btn3.classList.add('circle-active-f');
                setTimeout(() => transition(screen3), 0);
                setTimeout(() => verificacao(btn3), 0);
                setTimeout(() => btn3.style.animation = "circle-active-f 0.8s forwards", 0);
                setTimeout(() => i3.style.animation = "icircle-active-f 0.6s forwards", 0);
            } 
        });

        
        btn3.addEventListener("mouseover",function(){
            i3.style.color = "#ff6369";
        });
            
        btn3.addEventListener("mouseout",function(){
            i3.style.color = "white";
        });

    /*
    ------------------------------------------
    BOTÃO 4
    ------------------------------------------
    */

        btn4.addEventListener("click",function(){
            controle = 4;
            if (!(btn4.classList.contains("circle-active-f"))){
                btn4.classList.add('circle-active-f');
                setTimeout(() => transition(screen4), 0);
                setTimeout(() => verificacao(btn4), 0);
                setTimeout(() => btn4.style.animation = "circle-active-f 0.8s forwards", 0);
                setTimeout(() => i4.style.animation = "icircle-active-f 0.6s forwards", 0);
            } 
        });

        
        btn4.addEventListener("mouseover",function(){
            i4.style.color = "#ff6369";
        });
            
        btn4.addEventListener("mouseout",function(){
            i4.style.color = "white";
        });

    /*
    ------------------------------------------
    BOTÃO 5
    ------------------------------------------
    */

        btn5.addEventListener("click",function(){
            controle = 5;
            if (!(btn5.classList.contains("circle-active-f"))){
                btn5.classList.add('circle-active-f');
                setTimeout(() => transition(screen5), 0);
                setTimeout(() => verificacao(btn5), 0);
                setTimeout(() => btn5.style.animation = "circle-active-f 0.8s forwards", 0);
                setTimeout(() => i5.style.animation = "icircle-active-f 0.6s forwards", 0);
            } 
        });

        
        btn5.addEventListener("mouseover",function(){
            i5.style.color = "#ff6369";
        });
            
        btn5.addEventListener("mouseout",function(){
            i5.style.color = "white";
        });

        /*
        ------------------------------------------
           FUNCTIONS
        ------------------------------------------
        */
        
        function verificacao(btn_event){
            if (btn1.classList.contains('circle-active') || btn1.classList.contains('circle-active-i') || btn1.classList.contains('circle-active-f') && btn1 != btn_event){
                btn1.classList.remove('circle-active','circle-active-f','circle-active-i');
                setTimeout(() => main_box.style.animation = "none", 0);
                setTimeout(() => screen1.style.animation = "none", 0);
                setTimeout(() => btn1.style.animation = "none", 0);
                setTimeout(() => i1.style.animation = "none", 0);
            }
            if (btn2.classList.contains('circle-active-f') && btn2 != btn_event){
                btn2.classList.remove('circle-active-f');
                setTimeout(() => btn2.style.animation = "none", 0);
                setTimeout(() => i2.style.animation = "none", 0);
            }
            if (btn3.classList.contains('circle-active-f') && btn3 != btn_event){
                btn3.classList.remove('circle-active-f');
                setTimeout(() => btn3.style.animation = "none", 0);
                setTimeout(() => i3.style.animation = "none", 0);
            }
            if (btn4.classList.contains('circle-active-f') && btn4 != btn_event){
                btn4.classList.remove('circle-active-f');
                setTimeout(() => btn4.style.animation = "none", 0);
                setTimeout(() => i4.style.animation = "none", 0);
            }
            if (btn5.classList.contains('circle-active-f') && btn5 != btn_event){
                btn5.classList.remove('circle-active-f');
                setTimeout(() => btn5.style.animation = "none", 0);
                setTimeout(() => i5.style.animation = "none", 0);
            }
        }

        function transition(screen){
            main_box.style.animation = "open-main-box 1s forwards"
            screen.style.animation = "open-box 1s forwards"
            setTimeout(() => screen1.style.display = "none", 500);
            setTimeout(() => screen2.style.display = "none", 500);
            setTimeout(() => screen3.style.display = "none", 500);
            setTimeout(() => screen4.style.display = "none", 500);
            setTimeout(() => screen5.style.display = "none", 500);
            setTimeout(() => screen.style.display = "block", 500);
        }
    }
}



