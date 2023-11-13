
const ans = document.getElementById("ans");

const button  = document.getElementById("button");
button.addEventListener("click", ()=>{
    const number = parseInt(document.getElementById("number").value);
const sign = document.getElementById("unit").value;
    if(sign==="F" ||  sign==="f"){
        // C = 5/9(F-32).
        // F = (K − 273.15) × 9/5 + 32
        let c= 5/9*(number-32);
        let k= (number-273.15)* 9/5 +32;
        
        ans.style.color="red";
        
        ans.innerHTML=`Celsius ${c} Kelvin==> ${k}`;
        
    }
    if(sign === "C" || sign==="c"){
        // Kelvin = Celsius + 273.15
        let f = (9 / 5) * number + 32;
        let k = number+273.15;
        ans.style.color="red";
        ans.innerHTML=`Ferenhite => ${f} kelvin==>${k}`;
    }
    if(sign ==="K" ){
        //C = K - 273.15
        //F = (K − 273.15) × 9/5 + 32
        let c= number-273.15;
        let f = (number-273.15)*9/5+32
        ans.style.color="red";
        ans.innerHTML=`celcius => ${c} ferenhite==>${f}`;

    }
})