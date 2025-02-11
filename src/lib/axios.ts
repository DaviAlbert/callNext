import axios from 'axios'

// Exemplo de configuração no seu lib/axios.ts (ou onde você configurar a instância do Axios)
export const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ajuste o baseURL conforme necessário
})
