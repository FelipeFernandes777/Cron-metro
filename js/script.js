let milisegundos = 0;

let segundos = 0;

let minutos = 0;

let horas = 0;

let cronometro  ;

function comecar(){
    cronometro = setInterval(() => {
        timer()
    },10);
};

function mili(){
    milisegundos +=10
    if(milisegundos >=1000){
        milisegundos = 0;
        segundos++;
    };
};

function seg(){
    if(segundos == 60){
       segundos =0;
        minutos++;
    };
};

function min(){
    if(minutos == 60){
        minutos = 0;
        horas ++;
    };
};

function hour(){
    if(horas == 24){
        horas ==0;
    };
};

function timer (){
    mili();
    seg();
    min();
    hour();
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;
    document.getElementById('milisegundos').innerHTML = milisegundos;
}

function pause(){
    clearInterval(cronometro);
};

function reset(){
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
};