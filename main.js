// var unitprice=document.querySelectorAll(".number1");
// // console.log(unitprice)
// var quantity=document.querySelectorAll(".number2");
// // console.log(quantity)
// var action=document.querySelectorAll(".action");
// // console.log(action)
// button.forEach(type){
//     type.addEventListener("click",function)
    

// }

let button = document.querySelectorAll(".action");

button.forEach(change);

function change (clk){
    clk.addEventListener("click", action)
}

function action(){
    let a = this.parentNode.parentNode;
    let b = a.querySelector("td .number1")
    let c = b.value;
    let d = a.querySelector("td .number2")
    let e = d.value;

    console.log(c);
    console.log(e);
    let m=c*e
    console.log(m)
    let result = this.parentNode.nextElementSibling.firstChild 
    result.innerText=m;
}

