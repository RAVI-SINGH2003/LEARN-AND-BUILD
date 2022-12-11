const numbers = document.querySelectorAll("input[type='number']");
const operations = document.querySelectorAll(".oper-btn")
const result = document.querySelector("#result");
let btn;
operations.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num1 = +numbers[0].value;
        let num2 = +numbers[1].value;
        let operation = e.target.name;
        if(btn!==undefined){
            btn.style.backgroundColor = "rgb(176, 169, 169)";
            btn.style.color = "black";
        }
        btn = e.target;
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
        console.log(operation);
        let res = 0;
        switch(operation){
            case'+' : res = num1 +num2; break;
            case '-' : res = num1 - num2; break;
            case '*' : res = num1 * num2; break;
            default : console.log("No such operation");
        }
        result.textContent = res;
    });
});