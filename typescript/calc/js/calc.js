var Operators;
(function (Operators) {
    Operators[Operators["add"] = 0] = "add";
    Operators[Operators["minus"] = 1] = "minus";
    Operators[Operators["multiple"] = 2] = "multiple";
    Operators[Operators["divide"] = 3] = "divide";
})(Operators || (Operators = {}));
$("#cmdCalculate").click(function () {
    var op = $("#operator").val();
    var x = $("#x").val();
    var y = $("#y").val();
    switch (op) {
        case "add":
            $("#result").text(eval(x + "+" + y));
            break;
        case "minus":
            $("#result").text(eval(x + "-" + y));
            break;
        case "multiple":
            $("#result").text(eval(x + "*" + y));
            break;
        case "divide":
            $("#result").text(eval(x + "/" + y));
            break;
    }
});
//# sourceMappingURL=calc.js.map