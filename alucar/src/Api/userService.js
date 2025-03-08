import { readFile } from 'node:fs/promises'
import { writeFileSync } from 'node:fs';
import bcrypt from 'bcryptjs'
import { randomUUID } from 'node:crypto'
import { fileURLToPath } from 'url';
import path from 'path';

// Obtém o caminho absoluto do arquivo JSON
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'db', 'users.json');

async function getUsers () {
  try {
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao carregar JSON:', err);
    return [];
  }
}

async function addUser(user) {
  try{
    //users recebe um array com a lista de usuarios ja cadastrados
    const users = await getUsers()
    //verifica se ja existe algum usuario com o email referido, se sim, retorna a funcao
    if(users.some(usurario => usurario.email === user.email)) {
      throw new Error('Email já cadastrado')
    }
    //criptografa a senha
    const cryptoPassword = bcrypt.hashSync(user.password, 10)
    //cria um id unico para cada user
    const userId = randomUUID()
    //atualiza o usuario e a lista de usuarios
    user.password = cryptoPassword
    user.id = userId
    users.push(user)
    //salva no arquivo
    saveUsers(users)
  } catch(error) {
    throw error
  }
}

function saveUsers(users) {
  writeFileSync(filePath, JSON.stringify(users, null, 2))
  console.log(getUsers())
}

export { getUsers, addUser }