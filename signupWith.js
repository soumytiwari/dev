const forms = document.querySelector(".wrapper"),
    pwShowHide = document.querySelectorAll(".bx bxs-lock-alt"),
    links = document.querySelectorAll(".login");

pwShowHide.forEach(lockIcon => {
    lockIcon.addEventListener("click", () => {
        let pwFields = lockIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password") {
                password.type = "text";
            }
        })
    })
})