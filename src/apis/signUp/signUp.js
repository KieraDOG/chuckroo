import API from "../API";

export default function signUp(email, password) {
  return API.post('/auth/sign-up', { email, password });
}
