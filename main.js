let apiUser="http://localhost:3000/user";

function login(){
    getUser(hanldeLogin);

}
function khanhlam(){
    console.log("khanhlam")
}
function getUser(callback){
    fetch(apiUser).then(function(res){
        return res.json().then(callback);
    });
}
function hanldeLogin (data){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    data.forEach((data) =>{
        if(data.username==username && data.password==password){
            alert("Dang nhap thanh cong");
        }
    })
}