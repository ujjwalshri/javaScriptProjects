// const promise  = new Promise((resolve, reject)=>{
//     // do any asycronous task
//     setTimeout(()=>{
//          console.log("hdf");
//          resolve()
//     },2000);
// });

// promise.then(()=>{
//    console.log("resolveed the promsie");
// })


// new Promise((resolve, reject )=>{
//     setTimeout(()=>{
       
//         resolve({username:"ujjwal",Id:23})
//     })
// }).then((user)=>{
//     console.log(user);
// })


const promise  = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve(new Array(12,23,4,5));
        }else{
            rejected("ERROR 404");
        }
    })
})

promise.then((user)=>{
    console.log(user);
    return user[0];
}).then(id=>{
    console.log(id);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log(`finallly the exescution of the promise has executed he hehe ghar jao`)
})




 
