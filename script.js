function rollThedice(){
    const dicevalue = document.getElementById("input").value;
    const dicereasult = document.getElementById("dicerolling");
    const values=[];
    const images=[];
    for(let i =0; i < dicevalue;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="img/${value}.png" alt="dice${value}" width="100px" height="100px">`);
    }
    dicereasult.textContent= `${values.join(" - ")}`;
    document.getElementById("diceImange").innerHTML=images.join(" ");
}