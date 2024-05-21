
let users = [
  {
    username: 'anoj',
    password: 'anoj123'
  },
  {
    username: 'akshada',
    password: 'akchu123'
  }
]
const sessions = {};

module.exports = class User {

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static findUser = (username, password) => {
    return users.find(user => user.username === username && user.password === password);
  };

  static addSession = (token, username) => {
    sessions[token] = username;
  }

  static getSession = (token) => {
    return sessions[token];
  }

  static removeSession = (token) => {
    delete sessions[token];
  }

};