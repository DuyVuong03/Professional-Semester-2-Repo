document.querySelector("#check_btn").addEventListener("click", function() {
    let phone = document.querySelector("#phone").value
    let pattern = /^(([1-9][0-9]{1,2})[0-9]{7,8})|((0[1-9][0-9])[0-9]{7})$/
    if (pattern.test(phone)) {
        alert('success')
    } else {
        alert('Error')
    }

});