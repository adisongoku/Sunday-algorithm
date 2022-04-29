//const characters ='abcd';
const characters ='abcd';
//characters.split('');
// caly alfabet: abcdefghijklmnopqrstuvwxyz
fs = require('fs');

let i = 9;
let j = 3;

while(i <= 9900){
    
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }
 

        
      
let WzorzecRandom = generateString(3);
let TekstRandom = generateString(i);

//console.log(WzorzecRandom);
//console.log(TekstRandom);

let WzorzecSplit = WzorzecRandom.split('');
let TekstSplit = TekstRandom.split('');

//console.log(WzorzecSplit);
//console.log(TekstSplit);



// hashmap do indeksowania literami z alfabetu
characters.split('');
let lastp = new Map()
for(let i = 0; i < characters.length; i++){
    lastp[characters[i]] = -1;
}

// PRZYKLADOWY TEKST I WZORZEC
let WzorzecPrzykladowy = 'aba';
let WzorzecPrzykladowySplit = WzorzecPrzykladowy.split('');

let TekstPrzykladowy = 'abcabbdcabcababcdaca';
let TekstPrzykladowySplit = TekstPrzykladowy.split('');


// Wypelnianie tablicy pomocniczej
for(let i = 0; i < WzorzecSplit.length; i++){
    lastp[WzorzecSplit[i]] = i;
}
//console.log(lastp);


// WŁASCIWE ALGORYTMY //

let counter = 0; // zlicza operacje porownania 

function matchesAt(T, p, W){
    let N = W.length; // dl wzorca
    for(let i = 0; i < N; i++){
        counter++;
        if(W[i] !== T[p+i]){
            return false;
        }            
    }
    return true;
}

function report(p){
    //console.log(`znaleziono wzorzec na indeksie ${p}`);
}

function naiveAlgorithm(T, W){
    let M = T.length; // dl tekstu
    let N = W.length; // dl wzorca
    for(p = 0; p < M - N; p++){
        if(matchesAt(T, p, W)){
            report(p);
        }
    }
}



function sundayAlgorithm(T, W){
    let M = T.length; // dl tekstu
    let N = W.length; // dl wzorca
    let p = 0;
    while(p <= M - N){
        if(matchesAt(T, p, W)){
            report(p);
        }
        p = p + N;
        if(p < M){
            p = p - lastp[T[p]];
        }
    }
}

naiveAlgorithm(TekstSplit, WzorzecSplit);
//sundayAlgorithm(TekstSplit, WzorzecSplit);
console.log(`${i}, ${counter}`);
i+=9;
j+=3;

}




