fetch('https://reqres.in/api/users?page=2',{
   method:'POST',
   headers:{
       'Content-Type':'application/json'
   },
body:JSON.stringify({
name: 'SohumKALIA'
})
 

}).then(res =>{
    if (res.ok){
console.log("Done Bro")
    }
    else{
        console.log("BRO I THINK YOU SHOULD GO I AM SORRY ERROR CODE 200")
    }
    return res.json()
})
.then(data => console.log(data))