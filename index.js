/*
Además, al final de estos días realice un informe:
Calcular el promedio de volantines por día
Cuantos volantines alcanzó a fabricar.
Cual fue el día que fabrico menos
Restricción de uso de arreglos o listas.
Entregue link de su repositorio Git en el buzón de Evaluación 1 en la plataforma de cursos
*/
const prompt = require("prompt-sync")();
volantines=[];
suma=0;
menor=9999;
// 10, 5, 30, 15
for (let i=0 ; i<4;i++ ){
    //cant=parseInt(prompt(`Cuantos volantines hizo el dia ${i+1}:`));
    volantines.push(parseInt(prompt(`Cuantos volantines hizo el dia ${i+1}:`)));
    //suma= suma + cant;
    //suma=suma+volantines[i] 
    suma+= volantines[i] 
    if (volantines[i] <menor){
        menor=volantines[i];
        dia=i+1;
    }
}
console.log ("El total de volantines es", suma)
console.log ("El promedio es ", suma/volantines.length)
console.log ("Hubo menos volantines el día ", dia)






   // volantin.push(parseInt(prompt(`Ingrese la cantidad de volantines fabricados el día ${i+1}:  `)));



