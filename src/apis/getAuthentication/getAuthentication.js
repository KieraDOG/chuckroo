import API from "../API"

const getAuthentication = (token) => {
  return API.get('/auth', {
    headers: {
      'X-Auth-Token': token
    }
  })
}

export default getAuthentication
