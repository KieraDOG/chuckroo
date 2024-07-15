import API from "../API";

export default function logIn(email, password) {
  return API.post('/auth/sign-in', { email, password });
}
