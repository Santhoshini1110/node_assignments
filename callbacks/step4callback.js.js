function verifyUser(username,password,cb)
{
    var res="";
	if(username==="santhu" && password==="santhu")
	{
	res=username;
	}
	else
	{
	res="error";
	}
	getRoles(res,cb)
}

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
var password="santhu";

verifyUser(username,password,callback);


const arr=[];
let roles=["tr","hr","Team Leader"];
function checkUserAccess(roles,cb)
{
   var i;
     for(i=0;i<roles.length;i++)
	 {
	 if(roles[i]=="tr" || roles=="hr" || roles=="Team Leader")
	 {
	 arr.push(`${roles[i]}--success`);
	 }
	 else
	 {
	 arr.push(`${roles[i]}--failure`};
	 }
	 }
	 cb(arr);
}

function callback(arr)
{
setTimeOut(()=>{
console.log("arr",arr);},1000);

}

checkUserAccess(roles,callback);