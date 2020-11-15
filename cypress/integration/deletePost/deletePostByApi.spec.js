describe('getPost', () => {
    let postId = null;

    beforeEach(()=>{
        cy.fixture('example.json').as("testValues")
    })

    it('Get all post of the one page and select one', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/1108715952628112/feed?access_token=${testValues.access_token}`
            cy.request('GET',url).then((res)=>{
                expect(res).to.have.property('status',200)
                expect(res.body.data).to.not.be.null;
                const randomNum = Math.floor((Math.random() * res.body.data.length) + 1);
                postId = res.body.data[randomNum].id;
            })
        })
    })


    it('Delete post by id', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/${postId}?access_token=${testValues.access_token}`
            const callBack = res=>expect(res.body.success).to.be.equal(true)
            cy.deleteCustom(url,callBack)
        })
    })

});
