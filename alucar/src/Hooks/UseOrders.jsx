function useOrder() {
  //cria um pedido com base no objeto recebido em orderData
  const createOrder = async (orderData) => {
    console.log(orderData)
    try{
      //verifica na api se existe um carro com essa placa
      const response = await fetch("{/*link da requisição*/}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao criar pedido')
      //imprime a resposta da requisicao
      console.log(json)
      //caso tudo corra bem, volta para a pagina principal
      goTo('home')
    }
    catch(error) {
      console.error(error)
    }
  }

  //pega todos os pedidos feitos por um usuario
  const getAllMyOrders = async (driverId) => {
    try{
      const response = await fetch("/*link da requisição*/{driverId}", {
        method: "GET"
      })
      const myOrders = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao requisitar pedidos')
      //imprime a resposta da requisicao
      console.log(myOrders)
      return myOrders
    }
    catch(error) {
      console.error(error)
    }
  }

  return { createOrder, getAllMyOrders }
}

export default useOrder