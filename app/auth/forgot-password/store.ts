import { makeObservable, observable, action } from "mobx";

class ForgotPasswordStore {
    public email: string = "";

    constructor() {
        makeObservable(this, {
            email: observable,
            updateEmail: action
        });
    }

    public updateEmail(value: string) {
        this.email = value;
    }
}

const forgotPasswordStore = new ForgotPasswordStore();

export default forgotPasswordStore;