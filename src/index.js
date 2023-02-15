const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    let morse = []
    let a = 0
    let b = 10
    while ( arr.length * 10 < expr.length) {
        let arrSlice = expr.slice(a, b)
        let str = ""
        for (i = 0; i < 10;) {
            if (arrSlice[i] + arrSlice[i+1] == "10") {
                str += "." 
             }
             if (arrSlice[i] + arrSlice[i+1] == "11") {
                str += "-" 
            }
            i += 2
        }
        arr.push(arrSlice)
        morse.push(str)
        a += 10
        b += 10
    }
    //console.log(morse)
    let result = '';
    for (x in morse) {
        if (morse[x] in MORSE_TABLE) {
            result += MORSE_TABLE[morse[x]];
        } else {
            result += " ";
        }
    }
    return result
}


module.exports = {
    decode
}