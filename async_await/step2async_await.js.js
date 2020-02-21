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

async function call()
{
try{
   const a=await getRoles(username);
   console.log(a);
	}
catch(err){
    console.log(err);
	}
}
 
 var username="santhu";
 
 call();