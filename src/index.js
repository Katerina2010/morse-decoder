function decode(expr) {
    let arr = expr.split("**********")
let arr_Ten = []
for (let j = 0; j < arr.length; j++) {
    let arrSlice = []
    for (let i = 0; i < arr[j].length; i +=10) {
        arrSlice.push(arr[j].slice(i, i + 10));
}
arr_Ten.push(arrSlice)
}
let buc = []
for (let x = 0; x < arr_Ten.length; x++) {//длина 3. | 0 
    let slovo = []
    for (i = 0; i < arr_Ten[x].length; i ++) { 
        let sss = ''
        for (j = 0; j < arr_Ten[x][i]; j +=2) {
            if (arr_Ten[x][i][j] + arr_Ten[x][i][j +1] == 10) {
                sss += "." 
            } else if (arr_Ten[x][i][j] + arr_Ten[x][i][j +1] == 11) {
                sss += "-" 
            } 
        }
        slovo.push(sss)
    }
    buc.push(slovo)
}
console.log(buc)
let test = []
for (let i = 0; i < buc.length; i++) { //3
    let bucArr = []
    for (let j = 0; j < buc[i].length; j++) {//el
    bucArr.push(MORSE_TABLE[buc[i][j]])
    }
test.push(bucArr)
}
let res = []
for (let i = 0; i < test.length; i++) {
    res.push(test[i].join(''))
}
let rezult = res.join(" ")
return rezult
}

module.exports = {
    decode
}