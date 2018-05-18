var NumberologyCalculator = (function () {
    function NumberologyCalculator(_year, _month, _day) {
        this.year = _year;
        this.month = _month;
        this.day = _day;
    }
    NumberologyCalculator.prototype.getLifeNumerology = function () {
        var y = this.year.split("");
        var m = this.month.split("");
        var d = this.day.split("");
        var count = 0;
        for (var i = 0; i < y.length; i++) {
            count += parseInt(y[i]);
        }
        for (var i = 0; i < m.length; i++) {
            count += parseInt(m[i]);
        }
        for (var i = 0; i < d.length; i++) {
            count += parseInt(d[i]);
        }
        while (count.toString().split("").length > 1) {
            var temp = count.toString().split("");
            count = 0;
            for (var i = 0; i < temp.length; i++) {
                count += parseInt(temp[i]);
            }
        }
        return count;
    };
    NumberologyCalculator.prototype.getAstrologyConstellationName = function () {
        var data = [
            {
                name: "aquarius",
                start: new Date(parseInt(this.year), 0, 21),
                end: new Date(parseInt(this.year), 1, 19)
            },
            {
                name: "aries",
                start: new Date(parseInt(this.year), 2, 21),
                end: new Date(parseInt(this.year), 3, 19)
            },
            {
                name: "cancer",
                start: new Date(parseInt(this.year), 5, 22),
                end: new Date(parseInt(this.year), 6, 22)
            },
            {
                name: "capricorn",
                start: new Date(parseInt(this.year), 11, 21),
                end: new Date(parseInt(this.year), 0, 20)
            },
            {
                name: "gemini",
                start: new Date(parseInt(this.year), 4, 21),
                end: new Date(parseInt(this.year), 5, 21)
            },
            {
                name: "leo",
                start: new Date(parseInt(this.year), 6, 23),
                end: new Date(parseInt(this.year), 7, 22)
            },
            {
                name: "libra",
                start: new Date(parseInt(this.year), 8, 23),
                end: new Date(parseInt(this.year), 9, 23)
            },
            {
                name: "pisces",
                start: new Date(parseInt(this.year), 1, 20),
                end: new Date(parseInt(this.year), 2, 20)
            },
            {
                name: "sagittarius",
                start: new Date(parseInt(this.year), 10, 22),
                end: new Date(parseInt(this.year), 11, 20)
            },
            {
                name: "scorpio",
                start: new Date(parseInt(this.year), 9, 24),
                end: new Date(parseInt(this.year), 10, 21)
            },
            {
                name: "taurus",
                start: new Date(parseInt(this.year), 3, 20),
                end: new Date(parseInt(this.year), 4, 20)
            },
            {
                name: "virgo",
                start: new Date(parseInt(this.year), 7, 23),
                end: new Date(parseInt(this.year), 8, 22)
            }
        ];
        var birth = new Date(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.day));
        var name;
        var chineseName;
        var detail;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            if (item.start <= birth && birth <= item.end) {
                name = item.name;
                break;
            }
        }
        return name;
    };
    return NumberologyCalculator;
}());
//# sourceMappingURL=life.js.map