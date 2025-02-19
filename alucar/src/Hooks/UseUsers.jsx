import bcrypt from 'bcryptjs'

const sendForm = async (formData) => {
  try {
    const response = await fetch("http://localhost:3333/users", { // Adicionei await
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    if (!response.ok) throw new Error(json.error || 'Erro desconhecido ao criar usuário')
    console.log(json);
  } catch (error) {
    console.error("Erro ao enviar:", error.message);
  }
};

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
    return user
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
    return false
  }
};

export { sendForm, loginUser }