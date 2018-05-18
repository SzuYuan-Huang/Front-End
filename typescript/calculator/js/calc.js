var Operators;
(function (Operators) {
    Operators[Operators["add"] = 0] = "add";
    Operators[Operators["minus"] = 1] = "minus";
    Operators[Operators["multiple"] = 2] = "multiple";
    Operators[Operators["divide"] = 3] = "divide";
})(Operators || (Operators = {}));
var Calculator = (function () {
    function Calculator(x, y) {
        this.x = x;
        this.y = y;
    }
    Calculator.prototype.calculate = function (op) {
        switch (op) {
            case Operators.add:
                return eval(this.x + "+" + this.y);
            case Operators.minus:
                return eval(this.x + "-" + this.y);
            case Operators.multiple:
                return eval(this.x + "*" + this.y);
            case Operators.divide:
                return eval(this.x + "/" + this.y);
        }
    };
    return Calculator;
}());
$("#cmdCalculate").click(function () {
    var op = Operators[$("#operator").val()];
    var x = parseInt($("#x").val());
    var y = parseInt($("#y").val());
    var calculator = new Calculator(x, y);
    $("#result").text(calculator.calculate(op));
});
//# sourceMappingURL=calc.js.map