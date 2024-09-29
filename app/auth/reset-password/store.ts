import { makeObservable, observable, action } from "mobx";

class ResetPasswordStore {
  public newPassword: string = "";
  public confirmPassword: string = "";

  constructor() {
    makeObservable(this, {
      newPassword: observable,
      confirmPassword: observable,
      updateNewPassword: action,
      updateConfirmPassword: action,
    });
  }

  public updateNewPassword(value: string) {
    this.newPassword = value;
  }

  public updateConfirmPassword(value: string) {
    this.confirmPassword = value;
  }
}

const resetPasswordStore = new ResetPasswordStore();

export default resetPasswordStore;
