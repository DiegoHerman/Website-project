export function renderSignIn(app){
    app.innerHTML="";

    const signUp=document.createElement("section");
    signUp.style.display="flex";
    signUp.style.justifyContent="center";
    signUp.style.alignItems="center";
    signUp.style.width="100vw";
    signUp.style.height="80vh";

    const signUpForm=document.createElement("div");
    signUpForm.style.width="60%";
    signUpForm.style.height="70%";
    signUpForm.style.boxShadow="5px 5px 30px 0";
    signUpForm.style.border="2px solid black";
    signUpForm.style.borderRadius="10px";

    signUp.appendChild(signUpForm);
    app.appendChild(signUp);
}