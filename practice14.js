console.log("Welcome to practice 14")
// Nested if statement
function nestedIf(num) {
    if (num > 5) {
        if (num < 10) {
            return "Yes";
        }
    }
    return "No";
}
console.log("", nestedIf(6))
// && operator
function usingSingleIf(num) {
    if (num > 5 && num < 10) {
        return "yes";
    }
    return "no";
}
console.log("",usingSingleIf(9))