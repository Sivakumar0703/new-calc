

screen = document.querySelector('.screen');

function clicked(e) {
    
     console.log(e);
  screen.value += e.innerText ; 
}


function equal(){

    if(screen.innerText=''){
        screen.innerText = 'PLEASE ENTER THE NUMBER';
    } else {
        try{
        
            let value = screen.value;
            let evaluate = eval(value); // eval has taken care of invalid entries (for eg: entry of entering two different operators one after another)
            screen.value = evaluate ;
      
          } catch{
              alert('Only Numbers Are Allowed');
          }
    }
    
}

function clearScreen(){ // clear entire screen
    screen.value='' ;
}

function deleteChar(){ // deleting last value
    screen.value = (screen.value).slice(0,-1) ; 
}

window.addEventListener('keypress',keyboard);


function keyboard(e){
    e.preventDefault() // preventing enter key from triggering click function(recently clicked button)

   if(e.key === 'NumpadEnter' || e.key === 'Enter' ){ //assingning evaluate function to enter key
      equal()
   }

 if(((e.code).includes('Digit') || e.code.includes('Numpad')) && !(e.code.includes('NumpadEnter'))){ // preventing entry of  keys other than numbers & symbols 
    screen.value += e.key ;
 }
}
