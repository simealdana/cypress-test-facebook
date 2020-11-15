

describe('creatPost', () => {
    let postId = null;

    beforeEach(()=>{
        cy.fixture('example.json').as("testValues")
    })

    it('Create a post', ()=>{
        cy.get('@testValues').then((testValues)=>{
            cy.task('generateRandomString').then((message)=>{
                const url = `${testValues.urlMain}/1108715952628112/feed?message=${message}&access_token=${testValues.access_token}`
                cy.request('POST',url).then((res)=>{
                    expect(res).to.have.property('status',200)
                    expect(res.body.id).to.not.be.null
                    postId = res.body.id;
                })
            })
        })
    });

    it('Obtain the post previuosly created', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/1108715952628112/feed?access_token=${testValues.access_token}`
            const callback = (res,postId)=>{
                const postCrated = res.body.data.find(e => e.id === postId)
                expect(res).to.have.property('status',200)
                expect(postCrated).to.not.be.null
                expect(postCrated.id).to.be.equal(postId)
            }
            cy.getAll(url,callback,postId);
        })
    });

});
