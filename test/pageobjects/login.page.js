import { $ } from '@wdio/globals'


class LoginPage {
   
    get email () { 
        return $('id:email'); 
    }

    get password () { 
        return $('id:password'); 
    }

    get submitButton () { 
        return $('id:btnLogin'); 
    }

    get signUpButton () {
        return $('id:signUp');
    };

    async login (email, password) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.submitButton.click();
    }

    async openSignUp () {
        await this.signUpButton.click();
    }
}

export default new LoginPage();
