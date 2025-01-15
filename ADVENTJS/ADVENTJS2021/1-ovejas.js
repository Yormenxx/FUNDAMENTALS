

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]


  export default function contarOvejas(ovejas) {
    const ovejas2 = []
    for(const oveja of ovejas){

        if((oveja.color ==="rojo") && (oveja.name.includes("a") && (oveja.name.includes("N"))) ){
            ovejas2.push(oveja)
        }
    }
    return ovejas2
  }


  const ovejasFiltradas = contarOvejas(ovejas)

  console.log(ovejasFiltradas)







