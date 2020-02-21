const arr=[];
let roles=["tr","hr","Team Leader"];
function checkUserAccess(roles)
{
return users.map(user=>
{
     return new Promise(function(resolve,reject)=>
	 {
	 if(roles==="tr" || roles==="hr" || roles==="Team Leader")
	   {
	   resolve(user);
	   }
	   else
	   {
	   reject(user);
	   }
	 });
});
}

async function call()
{
   try{
   const a=await checkUserAccess(roles);
     console.log(a);
	}
catch(err){
    console.log(err);
	}
   
}
function callback(arr)
{
setTimeOut(()=>{
console.log("arr",arr);},1000);

}

call();