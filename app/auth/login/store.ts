import { makeObservable, observable, action } from "mobx";

class LoginStore {
  public email: string = "";
  public password: string = "";

  constructor() {
    makeObservable(this, {
      email: observable,
      password: observable,
      updateEmail: action,
      updatePassword: action,
    });
  }

  public updateEmail(value: string = "") {
    this.email = value;
  }

  public updatePassword(value: string = "") {
    this.password = value;
  }
}

const loginStore = new LoginStore();

export default loginStore;
