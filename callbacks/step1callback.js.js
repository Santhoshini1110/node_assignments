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
	cb(res);
}
function callback(data)
{
console.log(data);
}

var username="santhu";
var password="santhu";

verifyUser(username,password,callback);