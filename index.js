function toReadable(number) {
    arr1 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    arr2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    arr3 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number > 0 && number < 10) {
        return arr1[number];
    } else if (number >= 10 && number < 20) {
        return arr2[number % 10].trim();
    } else if (number >= 20 && number < 100) {
        return (arr3[Math.floor(number / 10)] + " " + arr1[number % 10]).trim();
    } else if (number >= 100 && number <= 999) {
        if (number % 100 >= 10 && number % 100 <= 19) {
            return (
                arr1[Math.floor(number / 100)] +
                " hundred " +
                arr2[number % 10]
            ).trim();
        } else {
            return `${arr1[Math.floor(number / 100)]} hundred ${
                arr3[Math.floor((number % 100) / 10)]
            } ${arr1[number % 10]}`
                .replace(/\s+/g, " ")
                .trim();
        }
    } else if (number === 0) {
        return "zero";
    }
}
console.log(toReadable(772));
