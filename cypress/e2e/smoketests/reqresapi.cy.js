
describe("Verify apis ", ()=>{


    var idvalue;

    it("Verify Get API ", ()=>{

        cy.request("GET", "https://reqres.in/api/users?page=2").then((response)=>{


           expect(response.status).to.equal(200)
           
           expect(response.body).to.have.property("page", 2)
           expect(response.body).to.have.property("total_pages", 2)

           expect(response.body.data[0].email).to.equal("michael.lawson@reqres.in")
        })


    })


    it.only("Verify Get Employees", ()=>{

        cy.request({

            method: "GET",
            url:"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
            headers:{

                Cookie: "orangehrm=938185d70b19400a98a454573c743a2b",
                Host : "opensource-demo.orangehrmlive.com",
                Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
            }
        
        }).then((response)=>{


           expect(response.status).to.equal(200)

           var res = JSON.stringify(response.body)
           cy.log(res)
           cy.writeFile("cypress/fixtures/response.json", response)
           
           
        })


    })


    it("Verify POST - Create Employee", ()=>{

        cy.request({

            method: "POST",
            url:"/web/index.php/api/v2/pim/employees",
            headers:{

                Cookie: Cypress.env("cookivalue"),
                Host : "opensource-demo.orangehrmlive.com",
                Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
            },
            body:{"firstName":"Ganesh","middleName":"","lastName":"H","empPicture":null,"employeeId":"0380"}
        
        }).then((response)=>{


           expect(response.status).to.equal(200)
           cy.writeFile("cypress/fixtures/response.json", response)
           
           
        })


    })

    it.only('Cypress Test Case - Understanding POST Method', function () {



        const payload = {
          "name": "Raju",
          "job": "Trainer"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', payload).then((response) => {
    
          expect(response.status).equal(201);
          expect(response.body).to.have.property("name", "Raju")
    
          expect(response.body).to.have.property("job", "Trainer")
    
           var time = JSON.stringify(response.body.createdAt)
            idvalue = JSON.stringify(response.body.id)
    
          cy.log(time)
          cy.log(idvalue)
    
           cy.writeFile('cypress/fixtures/module1/test10.json', { "Id": idvalue });
    
        })
    
      })


})