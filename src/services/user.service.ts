import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string

export interface FirebaseWrapper<T> {
  data: T
}

export interface User {
  username: string
  email: string
  token: string
}

export interface UserExist {
  exists: boolean
}

export interface LoginReturn {
  user: {
    userId: string
    username: string
  }
  access_token: string
  tokenType: string
}

export interface Credentials {
  username?: string
  password?: string
}

export interface Books {
  id: string
  public: boolean
  author: string
  resume: string
  title: string
  subtitle: string
  image: string
  url: string
  category: number[]
  userRegister: string
}

export class UserService {
  static async getUsers() {
    const response = await axios.get<User[]>(API_URL)
    return response.data
  }

  static async existUsers(value = '') {
    const response = await axios.get<UserExist>(`${API_URL}/users/exist-name/${value}`)
    //console.log(response.data)
    return response.data
  }

  static async loginUsers(value: { username: string; password: string }) {
    //console.log(value)
    //axios.post<Credentials, Login>()
    const response = await axios.post(`${API_URL}/users/login`, value)
    //console.log(response, 'd')
    return response.data as unknown as LoginReturn
  }

  static async userBooks(value = '') {
    console.log(value)
    const response = await axios.get<Books>(`${API_URL}/books/owner`, {
      headers: {
        // Token : `Bearer ${sessionStorage.getItem('token')}`
        Authorization: `token ${value}`
      }
    })
    console.log(response.data)
    return response.data
  }
}
