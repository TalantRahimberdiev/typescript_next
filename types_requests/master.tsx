
import axios from 'axios'
import { API } from '../helpers/api'

export interface Napravs {
   name: string
}

export interface Programms {
   name: string,
   code: string,
   description: string,
   napravs: Napravs[]
}

export default async function getMaster() {
   const res:Programms[] = await(await axios.get(`${API}/app1/master`)).data
   return res[0]
}
