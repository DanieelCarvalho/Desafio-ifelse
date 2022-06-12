let daniel = 28

if(daniel > 18){
    console.log("Acesso permitido")
} else{
    console.log("Acesso negado")
}
let humano = false
let idade = 18
if( idade > 18 && humano === true){
    console.log("Acesso permitido")
} else{
    console.log("Acesso negado")
} 

let aniversario = "janeiro"
if(aniversario === "janeiro" || "dezembro"){
    console.log("Feliz aniversário!")
}

let nome = "Ramon"
if(nome[0] === "R"){
console.log("Parabéns! Seu nome começa com 'R'")
} else{
    console.log("Que pena! seu nome não começa com 'R' ")
}


let sobrenome = "Carvalho" 
if(sobrenome.length > 6 ||  sobrenome[0] == "E"){
    console.log("Parabéns! você passou!")
}else{
    console.log("Infelizmente, você não passou.")
}