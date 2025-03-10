function useOrder() {
  const createOrder = async (orderData) => {
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

  return { createOrder }
}

export default useOrder