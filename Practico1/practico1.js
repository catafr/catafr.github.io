const canvas = document.getElementById("canvas"); //para q sea responsive el canvas y mantenga proporcion
let heightRatio = 1.5;

canvas.width = 800;
canvas.height = canvas.width * heightRatio;

//************************************ EJERCICIO 1  *********************************************************

/// NOTE: Definir una matriz de 100 elementos x 100 elementos y completarla con valores enteros random

let n = 10;
let m = 10;
let matriz = [];
let prom = new Array(n);

for (let i = 0; i < n; i++) {
  matriz[i]=new Array(m);
}

//console.log(matriz);


for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    matriz[i][j]=Math.floor(Math.random()*1000);
  }
}

console.log("La matriz creada es:  ");
console.log(matriz);

/// NOTE: a. Escribir una función que retorne el valor máximo de toda la matriz

function GetMax(matriz){
    let max=-1;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matriz[i][j]>max){
                max=matriz[i][j];
            }
        }
    }
    console.log("Elemento mayor de la matriz: " + max);
}

GetMax(matriz);
/// NOTE: b. Escribir una función que retorne el valor máximo contenido en las filas pares y el valor mínimo en las filas impares

function GetMaxParMinImpar(matriz){
    let max=-1;
    let min=n;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i%2==0){
                if(matriz[i][j]>max){
                    max=matriz[i][j];
                }
            }
            else{
                if(matriz[i][j]<min){
                    min=matriz[i][j];
                }
            }
        }
        if(i%2==0) {
            console.log("La fila Par: " + i + " contiene el maximo: " + max );
        }
        else {
            console.log("La fila Impar: " + i + " contiene el minimo: " + min );
        }
    }

}

GetMaxParMinImpar(matriz);

console.log(matriz);


/// NOTE: c. Calcular el valor promedio de cada fila y guardarlos en un arreglo.

function PromedioFila(matriz, prom){
  let sum = 0;
  prom = [];

  for (let i =0; i< matriz.length; i++){
    sum = 0;
    for (let j = 0; j < m; j++){
      sum = sum+matriz[i][j];
    }
    prom.push(sum);
  }
  console.log(prom);
}

PromedioFila(matriz, prom);



//************** EJERCICIO 2 *****************************************************************************************
/// NOTE: Pintar una región rectangular de un color utilizando el Contexto de HTML5.

let ctx = canvas.getContext("2d");
ctx.font = "bold 22px sans-serif";
ctx.fillText("Ejercicio 2 ",20,20);
ctx.fillStyle = "#f00";
ctx.fillRect(50,50,200,100);


//*********************** EJERCICIO 3 *************************************************************************************
/// NOTE: Pintar una región rectangular de un color utilizando la estructura de ImageData.

ctx.font = "bold 22px sans-serif";
ctx.fillStyle = "#000";
ctx.fillText("Ejercicio 3 ",20,200);

let imageData = ctx.createImageData(200,100);
  for(x=0; x<200; x++){
    for(y=0;y<100; y++){
      setPixel(imageData,x,y,0,190,0,255);
    }
  }
  ctx.putImageData(imageData,50,220);

function setPixel (imageData, x, y, r, g, b, a){
  index = (x+y * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}

//***************************EJERCICIO 4 ************************************************************************************
/// NOTE: Especificar la función para pintar un rectángulo utilizando un gradiente vertical de negro a blanco
ctx.font = "bold 22px sans-serif";
ctx.fillStyle = "#000";
ctx.fillText("Ejercicio 4 ",20,380);

function dibujarGradHorizontal(){

let ancho = 400;
let alto = 200;
let color = 0;

let imageData4 = ctx.createImageData(ancho,alto);

for ( x = 0; x < ancho; x++) {
for ( y = 0; y < alto; y++) {
    index = (x + y * imageData4.width) * 4;
    color = y/alto *255;
    imageData4.data[index] = color;
    imageData4.data[index+1] = color;
    imageData4.data[index+2] = color;
    imageData4.data[index+3] = 255;

}

}


ctx.putImageData(imageData4,50,400)
}
dibujarGradHorizontal();

//******************************* EJERCICIO 5 *****************************************************************************************
/// NOTE: Pintar un rectángulo en pantalla, utilizando un gradiente que vaya de negro a amarillo en la primera mitad del ancho del rectángulo,
// y de amarillo a rojo, en la segunda mitad. Por otro lado, en Y el degrade se mantiene constante.
ctx.font = "bold 22px sans-serif";
ctx.fillStyle = "#000";
ctx.fillText("Ejercicio 5 ",20,650);

 function dibujarGradVertical(){

let ancho = 400;
let alto = 200;
let color = 0;


let imageData5 = ctx.createImageData(ancho,alto);

for ( x=0; x<ancho*0.5; x++){
   color=x/(ancho*0.5) *255;
  for ( y=0; y<alto; y++){
    setPixel(imageData5, x, y, color, color, 0);
  }
}

for ( x=ancho/2; x<ancho; x++){
  color = (1-(x-ancho*0.5)/(ancho*0.5))*255;
  for(y=0;y<alto;y++){
    setPixel(imageData5, x, y, 255, color, 0);
  }
}

function setPixel(imageData5, x, y, r, g, b){
index= (x+y*imageData5.width)*4;
imageData.data[index+0]=r;
imageData.data[index+1]=g;
imageData.data[index+2]=b;

}

ctx.putImageData(imageData5, 50, 700);
}

dibujarGradVertical();

//******************************************************* punto5 *****************************************************************************************
//******************************************************* punto6 *****************************************************************************************

let koalaimage = new Image();
koalaimage.src = "koala.jpg";

koalaimage.onload = function(){
  myDrawImageMethod(this);
}
function myDrawImageMethod(img){
  ctx.drawImage(img, 500, 400);
  let w = img.width;
  let h = img.height;

  let imageData2 = ctx.getImageData(500,400, img.width, img.height);
  let avg;
  let index;
  for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
          index = (x + y * w) * 4;
          avg = (imageData2.data[index] + imageData2.data[index+1]  + imageData2.data[index+2]) / 3;
          imageData2.data[index] = avg;
          imageData2.data[index+1] = avg;
          imageData2.data[index+2] = avg;

      }

  }
  ctx.putImageData(imageData2,500,400);
}

//******************************************************* punto6 *****************************************************************************************
