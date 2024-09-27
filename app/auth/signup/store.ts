import { makeObservable, observable, action } from "mobx";

class SignUpStore {
    public username: string = "";
    public firstname: string = "";
    public lastname: string = "";
    public email: string = "";
    public password: string = "";
    public confirmPassword: string = "";
    public score: number = 0;
    
    constructor() {
        makeObservable(this, {
            firstname: observable,
            lastname: observable,
            username: observable,
            email: observable,
            password: observable,
            confirmPassword: observable,
            score: observable,
            updateEmail: action,
            updatePassword: action,
            evaluatePasswordStrength: action,
            getColorByScore: action
        });
    }

    public updateUsername(value: string) {
        this.username = value;
    }

    public updateFirstname(value: string) {
        this.firstname = value;
    }

    public updateLastname(value: string) {
        this.lastname = value;
    }

    public updateEmail(value: string = "") {
        this.email = value;
    }

    public updatePassword(value: string = "") {
        this.password = value;
    }

    public updateConfirmPassword(value: string = "") {
        this.confirmPassword = value;
    }

    public updateScore(value: number) {
        this.score = value;
    }

    public evaluatePasswordStrength = (password: string) => {
        let score = 0;

        if (!password) score = 0;

        // Check password length
        if (password.length > 4) score += 1;
        // Contains lowercase
        if (/[a-z]/.test(password)) score += 1;
        // Contains uppercase
        if (/[A-Z]/.test(password)) score += 1;
        // Contains numbers
        if (/\d/.test(password)) score += 1;
        // Contains special characters
        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        signUpStore.updateScore(score);
    }

    public getColorByScore = (score: number): string => {
        let color: string = "gray.300";

        switch (score) {
            case 1: {
                color = "red.300";
                break;  
            }

            case 2: {
                color = "red.300";
                break;
            }

            case 3: {
                color = "yellow.300";
                break;
            }

            case 4: {
                color = "yellow.300";
                break;
            }
            case 5: {
                color = "green.300";
                break;
            }
            case 6: {
                color = "green.300";
                break;
            }

            default: {
                color = "gray.300";
                break;
            }
        }

        return color;
    }
}

const signUpStore = new SignUpStore();

export default signUpStore;