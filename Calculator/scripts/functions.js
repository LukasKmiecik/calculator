/*
problem (8-5*3)
dodac klawisze
*/

function showArray(arra) {
    return arra.join("");
}

function cls(arra) {
    arra.length = 0;
}

function createNumbers(arra) {
    const arr = arra.reverse();
    let x = 10;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * Math.pow(x,i);
    }
    return sum;
}

function fander(arra,x) {
    let nex=0;
    let ff=0;

    for (let i = x+1; i < arra.length+1; i++) {
        if(arra[i]>=0){}
        else{
            nex=i-1;
            break;
        }
    }
    if(nex==-1)nex=arra.length;

    for (let i = x-1; i < arra.length; i--) {
        if(arra[i]>=0){}
        else{
            ff=i+1;
            break;
        }
    }
    if(ff==-1)ff=0;

    let a=createNumbers(arra.slice(ff,x));
    let b=createNumbers(arra.slice(x+1,nex+1));
    
    return {ff,nex,a,b};
}

function co(arra) {
    let x = arra.indexOf(".");
    let f = fander(arra,x);
    f.b = f.b/Math.pow(10,f.nex-x);
    let sum = f.a+(f.b);
    return arra.splice(f.ff,f.nex-f.ff+1,sum);
}

function mno(arra) {
    let x = arra.indexOf("*");
    let f = fander(arra,x);
    let sum = f.a*f.b;
    return arra.splice(f.ff,f.nex-f.ff+1,sum);
}

function dzi(arra) {
    let x = arra.indexOf("/");
    let f = fander(arra,x);
    let sum = f.a/f.b;
    return arra.splice(f.ff,f.nex-f.ff+1,sum);
}

function dod(arra) {
    let x = arra.indexOf("+");
    let f = fander(arra,x);
    let sum = f.a+f.b;
    let tab=[];
    if(arra.indexOf("-")==0){
        sum=f.b-f.a;
        tab=arra.splice(f.ff,f.nex-f.ff+1,sum);
        arra.shift();
    }
    else{
        tab=arra.splice(f.ff,f.nex-f.ff+1,sum);
    }
    return tab;
}

function ode(arra) {
    let x = arra.indexOf("-");
    let f = fander(arra,x);
    let tab=[];
    let sum = Math.abs(f.a-f.b);
    if(f.a-f.b<0){
        tab=arra.splice(f.ff,f.nex-f.ff+1,"-",sum);
    }
    else{
        tab=arra.splice(f.ff,f.nex-f.ff+1,sum);
    }
    return tab;
    
}

function equals(arra) {

    while(arra.indexOf(".")>=0){
        co(arra);
    }

    while(arra.indexOf('*')>=0){
        if(arra.indexOf('*')>=0){
            if(arra.indexOf('/')>=0){
                if(arra.indexOf('/')>arra.indexOf('*')){
                    mno(arra);
                }
                else dzi(arra);
            }
            else mno(arra);
        }
    }

    while(arra.indexOf('/')>=0){
        if(arra.indexOf('/')>=0){
            if(arra.indexOf('*')>=0){
                if(arra.indexOf('*')>arra.indexOf('/')){
                    dzi(arra);
                }
                else mno(arra);
            }
            else dzi(arra);
        }
    }

    while(arra.indexOf('+')>=0){
        if(arra.indexOf('+')>=0){
            if(arra.indexOf('-')>=0){
                if(arra.indexOf('-')>arra.indexOf('+')){
                    dod(arra);
                }
                else ode(arra);
            }
            else dod(arra);
        }
    }

    while(arra.indexOf('-')>=0){
        if(arra.indexOf('-')>=0){
            if(arra.indexOf('+')>=0){
                if(arra.indexOf('+')>arra.indexOf('-')){
                    ode(arra);
                }
                else dod(arra);
            }
            else ode(arra);
        }
    }

    

    arra.splice(arra.length-1,1);
    screen.innerHTML = arra;
    l=0;
}

//////////////////////////////////////
