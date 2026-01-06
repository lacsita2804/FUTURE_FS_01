(function () {
    emailjs.init("eyO9XkZ_QeFHcGxRz");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_6lvo06k",
        "template_s2f6jrg",
        this
    ).then(
        function () {
            document.getElementById("success-msg").innerText =
                "Message sent successfully!";
        },
        function (error) {
            alert("Failed to send message. Try again.");
            console.log(error);
        }
    );

    this.reset();
});
