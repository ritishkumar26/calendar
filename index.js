const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const Yrange =[31,28,31,30,31,30,31,31,30,31,30,31];
var currentyr = parseInt(document.getElementById("currentyear").innerText)
function showmth(range)
{  
 var content2="";
    var num=1;
    content2 = `<table class="table2">`;
    for(i=1;i<=days.length;i++)
    {
        content2+=`<tr>`;
        for(j=1;j<=days.length;j++)
        {
            if(num<=range)
            {
                content2+=`<td>${num}</td>`;
                num= num+1;   
            }       
        }
         content2+=`</tr>`;   
    }
    content2+= `</table>`;
    document.getElementById("table2").innerHTML =content2;
}
 var content="";
    content += `<table class="table1"><tr>`;
    for(j=0;j<days.length;j++)
    {
        content+=`<td>${days[j]}</td>`;
    }
content+= `</tr></table>`;
document.getElementById("table1").innerHTML =content;

showmth(Yrange[0]);
document.querySelectorAll("button")[1].addEventListener('click',()=>{
var currentyr = parseInt(document.getElementById("currentyear").innerText)
var currmnth = document.getElementById("currentmonth").innerText;
var cnt =parseInt(document.getElementById("count").innerText);
if(currmnth=="December"&&cnt==11)
    {
    showmth(Yrange[cnt]);
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
        showmth(Yrange[cnt]);
    }
})
document.querySelectorAll("button")[0].addEventListener('click',()=>{
    var currentyr = parseInt(document.getElementById("currentyear").innerText)
    var currmnth = document.getElementById("currentmonth").innerText;
    var cnt =parseInt(document.getElementById("count").innerText);
        if(currmnth=="January"&&cnt==0)
        {
       showmth(Yrange[cnt]);
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
         showmth(Yrange[cnt]);
        }
    })
    
  