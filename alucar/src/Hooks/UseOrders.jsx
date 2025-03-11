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
  
  const updateOrder = async (orderId, orderData) => {
    try{
      //verifica na api se existe um carro com essa placa
      const response = await fetch("{/*link da requisição*/}/{orderId}", {
        method: "UPDATE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
      if (!response.ok) throw new Error(json.error || 'Erro ao atualizar pedido')
      //imprime a resposta da requisicao
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

  //pega todos os pedidos de um anuncio especifico
  const getAllOrdersByAdsId = async (adsId) => {
    try{
      const response = await fetch("/*link da requisição*/{adsId}", {
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

  const getAllOrdersByRent = async (rentId) => {
    try{
      const response = await fetch("/*link da requisição*/{rentId}", {
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

  const deleteOrderById = async (orderId) => {
    try{
      const response = await fetch("/*link da requisição*/{orderId}", {
        method: "DELETE"
      })
      if (!response.ok) throw new Error(json.error || 'Erro ao excluir pedido')
    }
    catch(error) {
      console.error(error)
    }
  }

  const acceptOrder = async (orderId, orderData) => {
    orderData.accept = true
    updateOrder(orderData)
  }

  const rejectOrder = async (orderId) => {
    deleteOrderById(orderId)
  }

  return { createOrder, getAllMyOrders, getAllOrdersByAdsId, getAllOrdersByRent, acceptOrder, rejectOrder }
}

export default useOrder