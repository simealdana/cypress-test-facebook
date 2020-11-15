const randomString = ()=>{
    let r = Math.random().toString(36).substring(7);
    return r ;
}

exports.randomString = randomString;