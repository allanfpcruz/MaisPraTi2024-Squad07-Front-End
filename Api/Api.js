const getCar = (plate) => {
  let newPlate = plate.toUpperCase().trim().replace('-', '')
  const oldPattern = /^[A-Z]{3}\d{4}$/
  const mercosulPattern = /^[A-Z]{3}\d[A-Z]\d{2}$/

  if(oldPattern.test(newPlate) || mercosulPattern.test(newPlate)) {
    return new Promise((resolve, reject) => {
      fetch('db/db.json')
        .then((resp) => resp.json())
        .then((resp) => {
          let car = resp.cars.find((car) => car.plate === newPlate)
          if(car) resolve(car)
          else reject(new Error('Nenhum carro encontrado'))
        })
        .catch((error) => {
          reject(new Error('Erro ao acessar o JSON: ' + error.message))
        })
    })
  } else throw new Error("Placa inválida")

}

export default getCar