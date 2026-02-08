const form = document.querySelector(".validation");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");

    clearErrors();

    // نام و نام خانوادگی (حداقل 3 کاراکتر)
    if (fullname.value.trim().length < 3) {
        showError(fullname, "نام و نام خانوادگی حداقل باید ۳ کاراکتر باشد");
        isValid = false;
    }

    // ایمیل معتبر
    if (!email.value.includes("@")) {
        showError(email, "ایمیل معتبر وارد کنید");
        isValid = false;
    }

    // رمز عبور (حداقل 8 کاراکتر)
    if (password.value.length < 8) {
        showError(password, "رمز عبور باید حداقل ۸ کاراکتر باشد");
        isValid = false;
    }

    // تطابق رمز عبور
    if (password.value !== confirm.value) {
        showError(confirm, "رمز عبور و تکرار آن یکسان نیست");
        isValid = false;
    }

    if (isValid) {
        alert("ثبت‌نام با موفقیت انجام شد ✅");
        window.location.href = "../../web/pages/index.html";
    }

});

function showError(input, message) {
    const error = input.parentElement.querySelector(".error");
    error.innerText = message;
    error.style.color = "red";
    error.style.fontSize = "12px";
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(el => el.innerText = "");
}
