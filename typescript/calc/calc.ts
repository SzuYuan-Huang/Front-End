enum Operators {
    add,
    minus,
    multiple,
    divide
}

$("#cmdCalculate").click(function () {
    let op = $("#operator").val();
    let x = $("#x").val();
    let y = $("#y").val();

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