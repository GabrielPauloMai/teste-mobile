import { $ } from '@wdio/globals'


class SignUpPage {
   
    get firstName () { 
        return $('id:firstName'); 
    }

    get lastName () { 
        return $('id:lastName'); 
    }

    get phone () { 
        return $('id:phone'); 
    }

    get email () {
        return $('id:email');
    }

    get password () { 
        return $('id:password'); 
    }

    get repassword () { 
        return $('id:repassword'); 
    }

    get createButton () {
        return $('id:create');
    };

    get error() {
        return $('id:warning');
    }

    async create (user) {
        await this.firstName.setValue(user.firstName);
        await this.lastName.setValue(user.lastName);
        await this.phone.setValue(user.phone);
        await this.email.setValue(user.email);
        await this.password.setValue(user.password);
        await this.repassword.setValue(user.password);
        await this.createButton.click();
    }
    
}

export default new SignUpPage();
