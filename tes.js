var yourDrink = "coffee";

var reverse = function (s) {
    return s.split("").reverse().join("");
};

var barista = {
    str1: "ers",
    str2: reverse("arap"),
    str3: "met",
    request: function (preference) {
        return preference + ".Secret Word:" + this.str2 + this.str3 + this.str1;
    }
};

console.log(barista.request(yourDrink));