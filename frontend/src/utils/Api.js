 class Api {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkStatusRequest(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //попробовать как работает
  _request(url, options) {
    return fetch(url, options).then(this._checkStatusRequest)
  }

  getUserInfo() {
    const token = localStorage.getItem("token");
    return  this._request(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
    })
  }

  // getUserInfo() {
  //   return fetch(`${this._url}/users/me`, {
  //     method: "GET",
  //     headers: this._headers,
  //   }).then((res) => this._checkStatusRequest(res));
  // }

  editUserInfo({ name, about }) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => this._checkStatusRequest(res));
  }

  editUserAvatar({ avatar }) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => this._checkStatusRequest(res));
  }

  getInitialCards() {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
    }).then((res) => this._checkStatusRequest(res));
  }

  addNewCard(data) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._checkStatusRequest(res));
  }

  deleteCard(cardId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
    }).then((res) => this._checkStatusRequest(res));
  }

  putLike(cardId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
    }).then((res) => this._checkStatusRequest(res));
  }

  deleteLike(cardId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
    }).then((res) => this._checkStatusRequest(res));
  }

  changeLike(cardId, isLiked){
    if(!isLiked){
      return this.putLike(cardId)
    } else{
      return this.deleteLike(cardId)
    }
  }
}

const api = new Api({
  baseUrl: "https://api.ivanika.nomoreparties.sbs",
//  baseUrl: "http://localhost:3000",
  // headers: {
  //   authorization: "22a3f4d4-5ffd-4789-9813-a7106adf4dad",
  //   "Content-Type": "application/json",
  // },
});

export default api