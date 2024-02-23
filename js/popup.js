window.addEventListener("load", function(){
    console.log("load event fired");
    var heading = document.querySelector("#Heading");
    var chat = document.querySelector("#chat");
    Username = "Bill"
    message="test"
for (let i=0;i<10;i++){
    addMessage();
    
};

function addMessage(){
    setTimeout(chat.insertAdjacentHTML("afterend",'<div class="card"> '+ Username +': '+ message+'<div>'),7000)
};
    
    

  
}
);