let show =()=>{
    let name=document.getElementById('name').value;
    document.getElementById("display").innerHTML="Happy birthday" + name + "  hope this tastes good";
    document.getElementById('img').src="";
    let age=document.getElementById('age').value;
    document.getElementById("display").innerHTML="JEEZ   " + age + "  that's soooo old!";
    document.getElementById('dis').style.color="#ffffff";
    }
    
    document.getElementById("btn").addEventListener("click",show)