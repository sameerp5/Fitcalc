var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
function validateForm() {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("All fields are required!");
        document
            .getElementById("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
        var bmr = 13.39 * p[2] + 4.799 * p[1] - 5.677 * p[0] + 88.362;
    } else if (female.checked) {
        p.push("female");
        var bmr = 9.247 * p[2] + 3.098 * p[1] - 4.33 * p[0] + 447.59;
    }
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    //var t = document.createTextNode(result);
    var b = document.createTextNode("BMR: ");
    var r = document.createTextNode(parseFloat(bmr).toFixed(2));
    //h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
   // document.getElementById("submit").removeEventListener("click", countBmi);
   // document.getElementById("submit").removeEventListener("click", validateForm);
}
//document.getElementById("submit").addEventListener("click", countBmi);