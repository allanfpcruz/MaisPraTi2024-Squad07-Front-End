//import './Components_styles/LoginForm.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useUsers from '../Hooks/UseUsers';

function LoginForm(props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { createUser, loginUser } = useUsers()

  const togglePasswordVisibility = () => {
    isPasswordVisible ? setIsPasswordVisible(false) : setIsPasswordVisible(true)
  }

  const handleFormEdit = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  }

  const sendForm = (e) => {
    e.preventDefault()
    if(formData.email === '' || formData.password === '' || (props.form === 'cadastro' && formData.name === '')) {
      console.error('ERRO: preencha todos os campos')
      return
    }
    props.form == 'cadastro' ? createUser(formData) : loginUser(formData)
    setFormData({
      name: '',
      email: '',
      password: ''
    })
  }

  return(
    <>
      <section id="left-login-container">
        <div id="login-car-image-container">
            <img id="login-car-image" src="/Components/Login_Screen/assets/carro 2.svg"
                alt="Imagem ilustrativa de um carro!"/>
        </div>
        <div id="login-vector-one-container">
            <img id="login-vector-one-image" src="/Components/Login_Screen/assets/Vector 1.svg" alt="."/>
        </div>
        <div id="login-vector-two-container">
            <img id="login-vector-two-image" src="/Components/Login_Screen/assets/Vector 2.svg" alt="." />
        </div>
      </section>
      <section id="right-login-container">
        <div id="login-form-subcontainer">
          <div id="alucar-logo-img">
            <img src="/Components/Login_Screen/assets/Group 41.svg" alt="ALUCAR Logo" />
          </div>
          <form action="/login" method="post">
            {props.form === 'cadastro' ?
              <>
                <label for="email">Nome:</label>
                <input type="text" id="nome" name="nome" required value={formData.name} onChange={(e) => handleFormEdit(e, 'name')} /><br/>
              </>
            :
              <></>
            }

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => handleFormEdit(e, 'email')} /><br/>

            <label for="password">Senha:</label>
            <div>
              <input type={isPasswordVisible ? "text" : "password"} id="password" name="password" required value={formData.password} onChange={(e) => handleFormEdit(e, 'password')} />
              <button 
                id="toggleButton"
                className={isPasswordVisible ? "togglePasswordButton-hide" : "togglePasswordButton-view"}
                type="button" 
                onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? "Ocultar" : "Ver"}
              </button><br/>
            </div>
            <div id="remember-me-label">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label for="remember-me">Lembrar-me</label>
            </div>                    
            <a id="forgot-password" href="/forgot-password">Esqueci minha senha</a><br/>
            <button type="submit" onClick={(e) => {sendForm(e)}}>{props.form === 'cadastro' ? 'Cadastrar': 'Entrar'}</button>
          </form>
            <div>
              <span>Ou entre com</span><hr></hr>
            </div>
            <div>
              <button type="button" class="google-login" onclick="loginWithGoogle()">
                <img src="google-logo.png" alt="Google Logo" /> Google 
              </button>
            </div>
            <div class="register-link">
              <span>{props.form == 'cadastro' ? 'Já possui uma conta? ' : 'Não possui uma conta? '}<Link to={props.form === 'cadastro' ? '/login' : '/cadastro'}>{props.form == 'cadastro' ? 'Faça login!' : 'Cadastre-se agora!'}</Link></span>
            </div>
          </div>
      </section>
    </>
  )
}

export default LoginForm