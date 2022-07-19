function isEvenNumber(num) {
    let remainder = num % 2;
    if (remainder == 0)
        return true;
    else
        return false;

}

console.log(isEvenNumber(20001));