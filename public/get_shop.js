const loginBtn = document.querySelector(".loginBtn");
		const signupBtn = document.querySelector(".signupBtn");
		const loginForm = document.querySelector(".loginForm");
		const signupForm = document.querySelector(".signupForm");
         const loginsub=document.querySelector(".logINsub");
		 const signinsub=document.querySelector(".signINsub");
		loginBtn.addEventListener("click", () => {
            console.log("hello",loginBtn)
			loginForm.style.display = "block";
			signupForm.style.display = "none";
		});
loginsub.addEventListener('click',()=>{
	signupForm.style.display = "none";
	loginForm.style.display = "none";
})
		signupBtn.addEventListener("click", () => {
            console.log("hello",loginBtn)
			signupForm.style.display = "block";
			loginForm.style.display = "none";
		});
	