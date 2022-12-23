const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const Yrange =[31,28,31,30,31,30,31,31,30,31,30,31];
var currentyr = parseInt(document.getElementById("currentyear").innerText)
const day =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var cnt =parseInt(document.getElementById("count").innerText);
function showmth(range,currentyr,cnt)
{  
 var d = new Date(currentyr,cnt,1);
 var getday = d.getDay(); 
 var space ="";
 for(i=0;i<getday;i++)
 {
    day.unshift("");
 }

 var content2="";
 var k=0;
    for(i=1;i<=days.length;i++)
    {
        content2+=`<tr>`;
        for(j=1;j<=days.length;j++)
        {
            if(k<range+getday)
            {
                content2+=`<div class="days">${day[k]}</div>`;
                 k=k+1; 
            }       
        }
    }
    document.getElementById("table2").innerHTML =content2;
    for(i=0;i<getday;i++)
    {
       day.shift("");
    }
}
 var content="";
    for(j=0;j<days.length;j++)
    {
        content+=`<div class="days">${days[j]}</div>`;
    }
document.getElementById("table1").innerHTML =content;

showmth(Yrange[0],currentyr,cnt);
document.querySelectorAll("button")[1].addEventListener('click',()=>{
var currentyr = parseInt(document.getElementById("currentyear").innerText)
var currmnth = document.getElementById("currentmonth").innerText;
var cnt =parseInt(document.getElementById("count").innerText);
if(currmnth=="December"&&cnt==11)
    {
    showmth(Yrange[cnt],currentyr,cnt);
    cnt=0;
    currentyr= currentyr+1;
    document.getElementById("currentyear").innerText =currentyr;
    document.getElementById("currentmonth").innerText = months[cnt];
    document.getElementById("count").innerText =cnt;
    }
    else
    {
       cnt = cnt+1;
        document.getElementById("currentmonth").innerText = months[cnt];
        document.getElementById("count").innerText =cnt;
 Yrange[1]=((currentyr%4==0)&&(currentyr%100!=0)||(currentyr%400==0))?29:28;
        showmth(Yrange[cnt],currentyr,cnt);
    }
})
document.querySelectorAll("button")[0].addEventListener('click',()=>{
    var currentyr = parseInt(document.getElementById("currentyear").innerText)
    var currmnth = document.getElementById("currentmonth").innerText;
    var cnt =parseInt(document.getElementById("count").innerText);
        if(currmnth=="January"&&cnt==0)
        {
       showmth(Yrange[cnt],currentyr,cnt);
        cnt=11;
        currentyr= currentyr-1;
        document.getElementById("currentyear").innerText =currentyr;
        document.getElementById("currentmonth").innerText = months[cnt];
        document.getElementById("count").innerText =cnt;
    }
        else
        {
           cnt = cnt-1;
            document.getElementById("currentmonth").innerText = months[cnt];
            document.getElementById("count").innerText =cnt;
            Yrange[1]=((currentyr%4==0)&&(currentyr%100!=0)||(currentyr%400==0))?29:28;
           showmth(Yrange[cnt],currentyr,cnt);
        }
    })
    
  
