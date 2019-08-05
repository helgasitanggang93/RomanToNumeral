function findIndexRome(num){
    if(num === 0){
        return ''

    }else{
        const romawi = ['M', 'CM','D','CD','C', 'XC', 'L', 'XL', 'X','IX','V','IV','I']
        const desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        let hasil = desimal.findIndex(function(element){
            return element <= num
        })
        return romawi[hasil] + findIndexRome(num - desimal[hasil])

    }
}

console.log(findIndexRome(409))
