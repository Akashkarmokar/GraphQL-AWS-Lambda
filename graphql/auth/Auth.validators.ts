export class AuthValidator{
    constructor(){}

    static isEmailValid(emailString: string): Boolean{
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(emailString)
    }
}