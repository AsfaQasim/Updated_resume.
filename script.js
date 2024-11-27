var form = document.querySelector("form");
var imgSrc;
document.querySelector("#imageInp").addEventListener("change", function (e) {
    var target = e.target;
    if (target.files && target.files[0]) {
        var file = target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            imgSrc = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
console.log(form.name);
form.onsubmit = function (e) {
    e.preventDefault();
    var _a = form, name = _a.name, email = _a.email, phone = _a.phone, experience1 = _a.experience1, experience2 = _a.experience2, experience3 = _a.experience3, education1 = _a.education1, education2 = _a.education2, education3 = _a.education3, skills1 = _a.skills1, skills2 = _a.skills2, skills3 = _a.skills3;
    // console.log(form);
    var resumeData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        experience1: experience1.value,
        experience2: experience2.value,
        experience3: experience3.value,
        education1: education1.value,
        education2: education2.value,
        education3: education3.value,
        skills1: skills1.value,
        skills2: skills2.value,
        skills3: skills3.value,
    };
    if (imgSrc) {
        resumeData.imgSrc = imgSrc;
    }
    renderData(resumeData);
    var printBtn = document.querySelector("#printBtn");
    printBtn.innerText = "Print";
    console.log(printBtn);
    printBtn.onclick = function () { return print(); };
};
var renderData = function (data) {
    var resumeOutputCont = document.querySelector("#resumeOutput");
    console.log(data);
    resumeOutputCont.innerHTML = "\n        <div class=\"template\" contenteditable=\"true\">\n        <div class=\"resume\">\n        <div class=\"header\">\n            <div>\n              <h1>".concat(data.name, "</h1>\n              <p>Web Developer</p>\n            </div>\n            <img src=\"").concat(data.imgSrc ? data.imgSrc : "https://thumbs.dreamstime.com/b/profile-placeholder-image-gray-silhouette-no-photo-person-avatar-default-pic-used-web-design-173998594.jpg", "\" alt=\"Profile Image\">\n        </div>\n\n        <div class=\"contact-info\">\n            <p>Email: ").concat(data.email, "</p>\n            <p>Phone: ").concat(data.phone, "</p>\n        </div>\n\n        <div class=\"section\">\n            <h2>Education</h2>\n            <p>").concat(data.education1, "</p>\n            <p>").concat(data.education2, "</p>\n            <p>").concat(data.education3, "</p>\n        </div>\n\n        <div class=\"section\">\n            <h2>Experience</h2>\n            <p>").concat(data.experience1, "</p>\n            <p>").concat(data.experience2, "</p>\n            <p>").concat(data.experience3, "</p>\n        </div>\n\n        <div class=\"section\">\n            <h2>Skills</h2>\n            <div class=\"skills\">\n                <span>").concat(data.skills1, "</span>\n                <span>").concat(data.skills2, "</span>\n                <span>").concat(data.skills3, "</span>\n            </div>\n        </div>\n    </div>\n    </div>\n ");
};
