import axios from 'axios';
// @ts-expect-error
import { API_POSTS } from 'shared/constants'

export const getAllPosts = (userId?: string) => {
  return axios({
    method: 'GET',
    url: API_POSTS,
    params: { userId }
  }).then(r => r.data)
}