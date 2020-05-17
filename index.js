var options=[0,1,2];
var chooseMachine;
var randomNumber=(min,max)=>Math.floor(Math.random()*(max - min + 1) + min);

function usuario(chooseUser){
    chooseUser=chooseUser;
    chooseMachine=randomNumber(0,2);
    // console.log(`el usario eligio ${chooseUser} y la maquina ${chooseMachine}`)
    
    //si el uuario elige Piedra
    if(chooseUser==0){
        if(options[chooseMachine]==1){// si maquina elige papel
            console.log('perdiste la maquina eligio papel y tu piedra')
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(options[chooseMachine]==2){// maquina elige tijera
                console.log('ganaste la maquina eligio tijera y tu piedra')
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(options[chooseMachine]==0){ //maquina elige piedra
                    console.log('empate eligieron piedra')
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        }
          
    }
    //usuario elige papel
    if(chooseUser==1){
        if(options[chooseMachine]==2){// si maquina elige tijera
            console.log('perdiste la maquina eligio tijera y tu papel')
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(options[chooseMachine]==0){// maquina elige tijera
                console.log('ganaste la maquina eligio piedra y tu papel')
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
            }else{
                if(options[chooseMachine]==1){ //maquina elige piedra
                    console.log('empate eligieron papel')
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
            }
        }
          
    }
    //usuario elige tijera
    if(chooseUser==2){
        if(options[chooseMachine]==1){// si maquina elige papel
            console.log('ganaste la maquina eligio papel y tu tijera')
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        }else{
            if(options[chooseMachine]==0){// maquina elige piedra
                console.log('perdiste la maquina eligio piedra y tu tijera')
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>';
            }else{
                if(options[chooseMachine]==2){ //maquina elige tijera
                    console.log('empate eligieron tijera')
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';

                }
            }
        }
          
    }
   

}

