import { makeObservable, observable, action } from "mobx";

class PinCodeStore {
    public pin: string = "";

    constructor() {
        makeObservable(this, {
            pin: observable,
            updatePin: action
        });
    }

    public updatePin(value: string) {
        this.pin = value;
    }
}

const pinInputStore = new PinCodeStore();

export default pinInputStore;