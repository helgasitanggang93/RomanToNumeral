function romanNumerals(num) {

    
    if (num === 0) {
        return ''

    } else if (num > 0 && num < 4) {
        return 'I' + romanNumerals(num - 1)

    } else if (num === 4) {
        return 'IV' + romanNumerals(num - 4)

    } else if (num >= 5 && num < 9) {
        return 'V' + romanNumerals(num - 5)

    } else if (num === 9) {
        return 'IX' + romanNumerals(num - 9)

    } else if (num >= 10 && num < 40) {
        return 'X' + romanNumerals(num - 10)

    } else if (num >= 40 && num < 50) {
        return 'XL' + romanNumerals(num - 40)

    } else if (num >= 50 && num < 90) {
        return 'L' + romanNumerals(num - 50)

    } else if (num >= 90 && num < 100) {
        return 'XC' + romanNumerals(num - 90)

    } else if (num >= 100 && num < 400) {
        return 'C' + romanNumerals(num - 100)

    } else if (num >= 400 && num < 500) {
        return 'CD' + romanNumerals(num - 400)

    } else if (num >= 500 && num < 900) {
        return 'D' + romanNumerals(num - 500)

    } else if (num >= 900 && num < 1000) {
        return 'CM' + romanNumerals(num - 900)

    } else if (num >= 1000) {
        return 'M' + romanNumerals(num - 1000)

    }


}

console.log(romanNumerals(2500));

