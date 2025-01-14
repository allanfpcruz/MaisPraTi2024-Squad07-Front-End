const getCar = (plate) => {
  //padroniza a placa para letras maiúsculas, sem espaços e sem traço
  let newPlate = plate.toUpperCase().trim().replace('-', '')
  //padrão brasileiro antigo (AAA-0000)
  const oldPattern = /^[A-Z]{3}\d{4}$/
  //padrão mercosul (AAA0A00)
  const mercosulPattern = /^[A-Z]{3}\d[A-Z]\d{2}$/

  //verifica se a placa recebida está dentro de um dos dois padrões
  if(oldPattern.test(newPlate) || mercosulPattern.test(newPlate)) {
    //retorno na função getCar
    return new Promise((resolve, reject) => {
      //acessa o arquivo json
      fetch('db/db.json')
        .then((resp) => resp.json())
        .then((resp) => {
          //variável car recebe o carro que corresponde à placa ou recebe undefined caso não o encontre
          let car = resp.cars.find((car) => car.plate === newPlate)
          //devolve o resolve da promise com o objeto carro
          if(car) resolve(car)
          //devolve o reject da promise caso não ache o carro
          else reject(new Error('Nenhum carro encontrado'))
        })
        //caso haja erro ao acessar o json, devolve o reject da promise
        .catch((error) => {
          reject(new Error('Erro ao acessar o JSON: ' + error.message))
        })
    })
    //caso a placa não satisfaça os padrões, devolve um erro
  } else throw new Error("Placa inválida")

}

//exportação da função getCar
export default getCar