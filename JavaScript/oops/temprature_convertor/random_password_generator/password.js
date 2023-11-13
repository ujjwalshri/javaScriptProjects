const ans = document.getElementById("ans");

const button = document.getElementById("button");
button.addEventListener("click", ()=>{
    const value= document.getElementById("options").value;
    const digits= parseInt(document.getElementById("number").value)
    if(value==="pin"){
        let randomPin = "";
        for(var i =1;i<=digits;i++){
           var a= Math.floor(Math.random()*10);
           randomPin+=a.toString();
        }
        ans.innerHTML=`your generated pin is ${randomPin}`;
    }
    if(value==="pass"){
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 
        'o', 'p', 'q', 'r', 's', 't', 'u', 
        'v', 'w', 'x', 'y', 'z']; 
        
        let randomPin = "";
        for(var i =1;i<=digits;i++){ 
           
           randomPin+= alphabet[Math.floor(Math.random()*10)%26];
        }
        ans.innerHTML=`your generated pin is ==>> ${randomPin}`;
    }
})