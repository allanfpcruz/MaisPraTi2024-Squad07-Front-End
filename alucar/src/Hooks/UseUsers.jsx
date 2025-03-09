import bcrypt from 'bcryptjs'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';

function useUsers () {
  const { setLoggedUser } = useContext(userContext)

  //cria um usuario base
  const createUser = async (formData) => {
    try {
      const response = await fetch("http://localhost:3333/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao criar usuário')
      //imprime a resposta da requisicao
      console.log(json);
      //leva a pagina para escolher tipo de perfil
      goTo('locador-locatario')
    } catch (error) {
      console.error("Erro ao enviar:", error.message);
    }
  };

  //cria um usuário de motorista
  const createDriverUser = async (formData) => {
    try{
      const response = await fetch("{/*link da requisição*/}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao criar usuário')
      //imprime a resposta da requisicao
      console.log(json)
      loginUser(formData)
    }
    catch(error) {
      console.error(error)
    }
  }

  //cria um usuário de motorista
  const createRenterUser = async (formData) => {
    try{
      const response = await fetch("{/*link da requisição*/}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || 'Erro ao criar usuário')
      //imprime a resposta da requisicao
      console.log(json);
      loginUser(formData)
    }
    catch(error) {
      console.error(error)
    }
  }
  
  //loga o usuario referido
  const loginUser = async (formData) => {
    try {
      const response = await fetch("http://localhost:3333/users", {
        method: "GET"
      });
      if (!response.ok) throw new Error(response.error || `Erro na requisição ${response.status}`)
  
      const data = await response.json()
  
      const user = await data.find(user => user.email === formData.email)
  
      if(!user) throw new Error('Email não encontrado')
  
      if(!(bcrypt.compareSync(formData.password, user.password))) throw new Error('Senha incorreta')
  
      goTo('home')

      setLoggedUser(user)
  
      return user
    } catch (error) {
      console.error("Erro ao buscar usuários:", error.message);
      return false
    }
  };
  
  const navigate = useNavigate()
  const goTo = (path) => {
    navigate(`/${path}`)
  }

  return { createUser, createDriverUser, createRenterUser, loginUser }
}

export default useUsers