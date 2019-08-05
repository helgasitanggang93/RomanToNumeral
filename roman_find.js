function findValue(num) {
    if(num === 0){
        return ''

    }else {
        const desRome = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9,'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]
        let hasil = desRome.find(function (param) {
            return param[0] <= num
            
        }) 
        return hasil[1] + findValue(num - hasil[0])
    }
    
}

console.log(findValue(15));
