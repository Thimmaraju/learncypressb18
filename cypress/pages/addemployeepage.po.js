class AddEmployeePage{

    addemployeesubmenu(){

        return 'Add Employee'
    }

    firstnameInput(){

        return 'input[name="firstName"]'
    }

    lastbnameInput(){

        return 'input[name="lastName"]'
    }

    savebutton(){

        return 'button[type="submit"]'
    }

    successmessage(){

        return 'Successfully Saved'
    }
}

const addemployee = new AddEmployeePage()

export default addemployee