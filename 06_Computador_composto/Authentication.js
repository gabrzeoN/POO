export default class Authentication {
  constructor(){
    this.user = null;
  }

  login(username, password) {
    console.log("You are now logged into the system");
    this.user = { username, password };
  }

  logout(username) {
    if (this.user.username === username) {
      console.log("You are now out of the system");
      this.user = null;
    }
  }
}