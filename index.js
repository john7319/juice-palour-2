document.addEventListener("DOMContentLoaded", async function callData(){
    const requestURL = "http://localhost:3000/logins";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const logins = await response.json();
    auth(logins[0])
    


    
});

const submitBtn = document.getElementById("submit")
function auth(logins){
    document.addEventListener("submit", () => {
        let userName = document.getElementById("Username").value
        let password = document.getElementById("Password").value
        if (userName === logins.username && password === logins.password){
            window.location.assign("https://john7319.github.io/juice-palour-2/")
            alert("Log in successful")
        }
        else{
            alert("Log in failed")
        }
    });
}