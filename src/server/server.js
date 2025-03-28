import axios from "axios";

export const SignUp = (data) => {
  return axios.post("http://localhost:3500/api/auth/register", data);
};

export const SignIn = (data,co) => {
  return axios.post("http://localhost:3500/api/auth/login", data,co);
};

export const SignOut = (data) => {
  return axios.post("http://localhost:3500/api/auth/logout", data);
};

export const CheckAuth = () => {
  return axios.get("http://localhost:3500/api/test/should-be-logged-in");
};
