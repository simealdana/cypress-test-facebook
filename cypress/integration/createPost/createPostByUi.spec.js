describe('Front TEST', ()=>{

    beforeEach(function() {
        cy.fixture('fb.json').as('testValues')
    })
    
    it('Post a comment on my test App', () => {

        cy.get('@testValues').then(async(testValues) => {
            await cy.visit(testValues.firstUrl)
            cy.get('body').then(($body) => {
                if ($body.find("a[action='cancel']").length)
                {
                    cy.get("a[action='cancel']").click()
                }
            });

            cy.login({email:testValues.email, password:testValues.password})
            // cy.posting("hello everyonsss");
            // cy.get('body').then(($body) => {
            //     let post= "div[class='kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql']";
            //     cy.get(post).then((data)=>{
            //         expect(data).to.be.equal("hello everyon")
            //         })
            // })
        });
    })
})