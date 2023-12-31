// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = "https://api.ivanika.nomoreparties.sbs";

const getRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = ( email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
        Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(getRes);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
        Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(getRes)
    .then((data) => {
      if (data.token) {
        //
        localStorage.setItem("token", data.token);
        console.log(data)
        return data;
      }
    })
    .catch((err) => console.log(err));
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
        Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(getRes);
};
