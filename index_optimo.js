const prompt = require("prompt-sync")();
volantines=[];
suma=0;
menor=9999;
for (let i=0 ; i<7;i++ ){
    volantines.push(parseInt(prompt(`Cuantos volantines hizo el dia ${i+1}:`)));
    suma+= volantines[i] 
    if (volantines[i] <menor){
        menor=volantines[i];
        dia=i+1;
    }
}
console.log ("El total de volantines es", suma)
console.log ("El promedio es ", suma/volantines.length)
console.log ("Hubo menos volantines el día ", dia)
