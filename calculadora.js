const getZero = document.getElementById('cero')
const getOne = document.getElementById('uno');
const getTwo = document.getElementById('dos');
const getThree = document.getElementById('tres');
const getFour = document.getElementById('cuatro');
const getFive = document.getElementById('cinco');
const getSix = document.getElementById('seis');
const getEleven = document.getElementById('siete');
const getEight = document.getElementById('ocho');
const getNine = document.getElementById('nueve');
const point = document.getElementById('punto')

const res = document.getElementById('res');
const mas = document.getElementById('mas')
const menos = document.getElementById('menos')
const div = document.getElementById('div')
const por = document.getElementById('por')
const igual = document.getElementById('igual')
const ac = document.getElementById('ac')
const showMemory = document.getElementById('memory')


let expresion = "0";
let memory = " ";
res.textContent = expresion;

function addNumber (n) {
    if(expresion == "0"){
        expresion =+ n;
        let str = expresion.toString();
        expresion = str;  
    }else{
        expresion += n;
    }
    memory = expresion;
    res.textContent = expresion;
}

function addOperator (o) {
    let validarOperador = expresion.trim().slice( -1 );
    // console.log(validarOperador)
    if(validarOperador === "+" || validarOperador === "-" || validarOperador === "*" || validarOperador === "/"){
        expresion = memory
        expresion += " " + o + " ";
        res.textContent = expresion;
        // console.log(memory);

    }else{
        memory = expresion;
        expresion += " " + o + " ";
        res.textContent = expresion;
        // console.log(memory);
    }
}

getZero.addEventListener('click', () =>{
    expresion += "0";
    res.textContent = expresion;
})

getOne.addEventListener('click', () =>{
   addNumber("1")
})

getTwo.addEventListener('click', () =>{
    addNumber("2")
})

getThree.addEventListener('click', () =>{
   addNumber("3")
})

getFour.addEventListener('click', () =>{
    addNumber("4")
})

getFive.addEventListener('click', () =>{
    addNumber("5")
})

getSix.addEventListener('click', () =>{
    addNumber("6")
})

getEleven.addEventListener('click', () =>{
    addNumber("7")
})

getEight.addEventListener('click', () =>{
    addNumber("8")
})

getNine.addEventListener('click', () =>{
    addNumber("9")
})

mas.addEventListener('click', () =>{
    addOperator("+")
})

menos.addEventListener('click', () =>{
    addOperator("-")
})

por.addEventListener('click', () =>{
    addOperator("*")
})

div.addEventListener('click', () =>{
    addOperator("/")
})

point.addEventListener('click', () =>{
    expresion += ".";
    res.textContent = expresion;
})

igual.addEventListener('click', () =>{
    let resultado = eval(expresion)

    showMemory.textContent = memory;
    res.textContent = resultado;
    expresion = " ";
})

ac.addEventListener('click', () =>{
    expresion = "0";
    res.textContent = expresion;
})




