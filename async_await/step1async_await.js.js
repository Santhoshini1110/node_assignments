function verifyUser(username,password)
{
return new Promise(function(resolve,reject){
if(username==="santhu" && password==="santhu")
{
resolve("santhu");
}
else
{
reject("error in verisyUser");
}
});
});
}

async function call()
{
try{
const a=await verifyUser(username,password);

console.log(a);
}
catch(err){
console.log(err);
}
}

var username="santhu";
var password="santhu";
 
call();