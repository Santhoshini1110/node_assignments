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