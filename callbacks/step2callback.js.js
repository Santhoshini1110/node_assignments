function getRoles(username,cb)
{
    var userrole="";
       switch(username)
	   {
	     case 'santhu':userrole="HR";
		               break;
		 case 'akash':userrole="Team Leader";
		              break;
		 case 'prasanna':userrole="HR";
						 break;
		 case 'rohith':userrole"HR";
						break;
		 default:userrole="unknown user";
				 break;
		 }
	cb(userrole);
}

function callback(data)
{
console.log(data);
}

var username="santhu";
  
 var a=getRoles(username,callback);