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
var a=getroles(user);

a.then(value=>{
console.log(value);
}).catch(error=>{
console.log(error);
});

		 