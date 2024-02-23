window.addEventListener("load", function(){
    console.log("load event fired");
    var form = document.querySelector("#param form");
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=400,height=600,left=1000,top=100`;

  form.addEventListener("submit",function(){
        console.log("clicked")
        window.open("./popup.html","TwitchChat",params);

    });
}
);