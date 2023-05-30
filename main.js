
var form = document.getElementById("form");
function validateForm() {
    if (
        height.value == "" ||
        weight.value == ""
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
    var p = [height.value, weight.value];
    form.reset();
    var bmi = Number(p[1]) / (((Number(p[0]) / 100) * Number(p[0])) / 100);
    var result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Obese";
    } else if (35 <= bmi) {
        result = "Extremely obese";
    }
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    //document.getElementById("submit").removeEventListener("click", countBmi);
   // document.getElementById("submit").addEventListener("click", validateForm);
}
//document.getElementById("submit").addEventListener("click", countBmi);