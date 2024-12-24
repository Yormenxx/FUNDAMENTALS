

const miPromesa = new Promise((resolve,reject)=>{

    console.log("Se esta haciendo algo ");
    reject("algo fallo")
    resolve();
});


miPromesa.then(()=>{
    console.log("promesa cumplida")
}).catch(message=>{
    console.log(message)
})

 

