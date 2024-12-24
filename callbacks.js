function primero(funcionx){
    setTimeout(()=>{
        console.log("Yo soy el primero")

        funcionx()
    },3000)
}

function segundo(){
    console.log("segundo")
}

primero(segundo)











