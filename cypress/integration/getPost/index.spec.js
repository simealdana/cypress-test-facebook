

describe('getPost', () => {
    beforeEach(()=>{
        cy.fixture('example.json').as("testValues")
    })

    it('Get all post of the one page', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/1108715952628112/feed?access_token=${testValues.access_token}`
            const callback = (res)=>{
                expect(res).to.have.property('status',200)
                expect(res.body.data).to.not.be.null
            }
            cy.getAll(url,callback);
        })
    })
});
