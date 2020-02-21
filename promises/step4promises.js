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

function getRoles(username)
{
return new promise(function(resolve,reject)=>{
       switch(username)
	   {
	     case 'santhu':resolve("HR");
						break;
		 case 'akash':resolve("Team Leader");
					  break;
		 case 'prasanna':resolve("HR");
							break;
		 case 'rohith':resolve("HR");
						break;
		 default:reject("unknown user");
				  break;
		 }
		 });
}

var username="santhu";
var password="santhu";
var a=verifyUser(username,password);

a.then(value=>{
	console.log(value);
return getRoles(value);}).then(val=>{console.log(val);}).catch(error=>{console.log(error);});

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
  

