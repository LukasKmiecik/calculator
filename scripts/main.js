
const screen = document.querySelector(".screen");
const sc=[];
const sc1=[5,'+',1,'.',5,5]
let l=0;
const boxs = document.querySelectorAll(".boxButton");


for (let i=0;i<boxs.length;i++)
{
    boxs[i].addEventListener("mousedown",btnClick);
    boxs[i].addEventListener("mouseup", btnOut);
}

function btnClick() {
    this.style.boxShadow = "none";

    if(this.id=="n9")asd(9);
    if(this.id=="n8")asd(8);
    if(this.id=="n7")asd(7);
    if(this.id=="n6")asd(6);
    if(this.id=="n5")asd(5);
    if(this.id=="n4")asd(4);
    if(this.id=="n3")asd(3);
    if(this.id=="n2")asd(2);
    if(this.id=="n1")asd(1);
    if(this.id=="n0")asd(0);
    if(this.id=="comma")asd(".");
    if(this.id=="divide")asd("/");
    if(this.id=="multiply")asd("*");
    if(this.id=="minus")asd("-");
    if(this.id=="add") asd("+");
    if(this.id=="equals")
    {
        asd("=");
        equals(sc);
    }

    if(this.id=="cln")
    {
        cls(sc);
        screen.innerHTML = showArray(sc);
    }
}

function btnOut() {
    this.style.boxShadow = "1px 1px 0.7px black";
}

function asd(x) {

    if(l==0)cls(sc);
    l++;
    if(sc.length<20) sc.push(x);
    
    screen.innerHTML = showArray(sc);
}