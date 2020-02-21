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

checkUserAccess(roles).map(userPromise=>{
 userPromise.then(res=>{
 arr.push(`$r{res}--success`);
  }).catch(err=>{arr.push(`${err}--failure`);
 });
 });
 setTimeout(()=>{
 console.log("arr",arr);},1000);
 
  
