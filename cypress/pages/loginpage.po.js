class LonginPage{

    logo(){

        return 'img[alt="company-branding"]'
    }

    usernameInput(){

        return '//input[@name="username"]'
    }

    passwordInput(){

        return 'input[name="password"]'
    }

    // entercreds(inputparams){

    //     return 'input[name="'+inputparams+'"]'
    // }

    // order(orderid){

    //     return 'input[orderid="'+orderid+'"]'
    // }

   submitbutton = 'button[type="submit"]'
   

    loginerrormessage(){

        return 'Invalid credentials'
    }


    loginwithcreds(username, password){

        cy.xpath(this.usernameInput()).type(username)
        cy.get(this.passwordInput()).type(password)
        cy.get(this.submitbutton).click()
    }
}

const login = new LonginPage()

export default login;