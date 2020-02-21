function verifyUser(username,password)
{
return new Promise(function(resolve,reject){
    if(username==="santhu"&&password==="santhu")
{
resolve("santhu");
}
else
{
reject("error")
}
})
}
var username="santhu";
var passwors="santhu";
var a=verifyUser(username,password);
a.then(value=>{console.log(value);}).catch(error=>{console.log(error);});
