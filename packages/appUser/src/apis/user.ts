import axios from 'axios';
// @ts-expect-error
import { API_USERS } from 'shared/constants'

export const getAllUsers = () => {
  return axios({
    method: 'GET',
    url: API_USERS
  }).then(r => r.data)
}