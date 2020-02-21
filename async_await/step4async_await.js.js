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
const a=await verifyUser(username,password);

console.log(a);
const b=await getRoles(username);

console.log(b);
const c=await checkUserAccess(roles);

console.log(c);
}
catch(err){
console.log(err);
}
}

var username="santhu";
var password="santhu";
 
call();