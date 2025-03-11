import bcrypt from 'bcryptjs'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';

function useUsers () {
  const { loggedUser, setLoggedUser } = useContext(userContext)
  const navigate = useNavigate()

  //cria um usuario base
  const createUser = async (formData) => {
    //define a data de criacao do usuario
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    formData.created_at = `${year}-${month}-${day}`
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
      //define um usuario logado para que possa acessar '/locador-locatario'(rota protegida)
      setLoggedUser(formData)
      //leva a pagina para escolher tipo de perfil
      navigate('/locador-locatario', { state: loggedUser })
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
      console.log(json, formData)
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
      console.log(json, formData);
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
  
      setLoggedUser(user)

      //caso o usuario tenha perfil definido, vai para home, se nao, vai para locador-locatario
      user.perfil ? navigate('/home') : navigate('/locador-locatario')
    } catch (error) {
      console.error("Erro ao buscar usuários:", error.message);
      return false
    }
  };
  
  return { createUser, createDriverUser, createRenterUser, loginUser }
}

export default useUsers