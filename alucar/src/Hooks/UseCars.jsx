import getCar from "../Api/Api"
import { useNavigate } from "react-router-dom"

function useCars() {
  const createAds = async (formData) => {
    try{
      //verifica na api se existe um carro com essa placa
      getCar(formData.plate)
      const response = await fetch("{/*link da requisição*/}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao criar anúncio')
      //imprime a resposta da requisicao
      console.log(json)
      //caso tudo corra bem, volta para a pagina principal
      goTo('home')
    }
    catch(error) {
      console.error(error)
    }
  }

  const getAllMyAds = async (renterId) => {
    try{
      const response = await fetch("/*link da requisição*/{renterId}", {
        method: "GET"
      })
      const myAds = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao requisitar anúncios')
      //imprime a resposta da requisicao
      console.log(myAds)
      return myAds
    }
    catch(error) {
      console.error(error)
    }
  }

  const updateAds = async (formData, id) => {
    try{
      const response = await fetch("{/*link da requisição*/}/{id}", {
        method: "UPDATE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao atualizar anúncio')
      //imprime a resposta da requisicao
      console.log(json)
      //caso tudo corra bem, volta para a pagina principal
      goTo('home')
    }
    catch(error) {
      console.error(error)
    }
  }

  const deleteAds = async (id) => {
    try{
      const response = await fetch("{/*link da requisição*/}/{id}", {
        method: "DELETE",
      })
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao excluir anúncio')
      //imprime a resposta da requisicao
      console.log(json)
      //caso tudo corra bem, volta para a pagina principal
      goTo('home')
    }
    catch(error) {
      console.error(error)
    }
  }

  const navigate = useNavigate()
  const goTo = (path) => {
    navigate(`/${path}`)
  }

  return { createAds, getAllMyAds, updateAds, deleteAds }
}

export default useCars