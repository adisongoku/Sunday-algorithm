const characters ='abcd';

// PRZYKLADOWY TEKST I WZORZEC
let WzorzecPrzykladowy = 'aba';
let WzorzecPrzykladowySplit = WzorzecPrzykladowy.split('');

let TekstPrzykladowy = 'abcabbdcabcababcdaca';
let TekstPrzykladowySplit = TekstPrzykladowy.split('');

console.log(TekstPrzykladowy);
console.log(WzorzecPrzykladowy);


let lastp = new Map()
for(let i = 0; i < characters.length; i++){
    lastp[characters[i]] = -1;
}

// Wypelnianie tablicy pomocniczej
for(let i = 0; i < WzorzecPrzykladowySplit.length; i++){
    lastp[WzorzecPrzykladowySplit[i]] = i;
}

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
    console.log(`znaleziono wzorzec na indeksie ${p}`);
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

//naiveAlgorithm(TekstPrzykladowySplit, WzorzecPrzykladowySplit);
sundayAlgorithm(TekstPrzykladowySplit, WzorzecPrzykladowySplit);
console.log(`${counter}`);