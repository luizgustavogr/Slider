var count= 1;
document.getElementById("radio1").checked=true;

function next(){
    count++;
    if(count>5){
        count=1;
    }
    
    document.getElementById('radio'+count).checked=true;
}

setInterval(function(){
    next();
},5000)