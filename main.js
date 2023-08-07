// --------------------------   Task 1 (change 4 to for) -------------------------------------------

let sentence = "She baked cookies 4 the school fundraiser, and everyone thanked her 4 her delicious treats.";

// 1) -- simple way


sentence = sentence.replaceAll("4", "for"); 
console.log(sentence);


// 2) -- with loop


for(let i=0; i <= sentence.length; i++){
    if(sentence[i] == "4"){
        let change = sentence[i] ;
        change = "for";
        sentence = sentence.replace("4", change);
    }
}
console.log(sentence);



// --------------------------   Task 2  -------------------------------------------


let month = prompt("Ay daxil edin -- [Enter the month]");

let trimWord = month.trim();                        // remove the spaces from the word

switch (trimWord.toLowerCase()) {                   // lowercase the letters of the word
    case "yanvar" : 
    case "january" :
        console.log("1ci aydir, qish fesilidir");
    break;
    case "fevral" :
    case "february" :
        console.log("2ci aydir, qish fesilidir");
    break;
    case "mart" :
    case "march":
        console.log("3cu aydir, yaz fesilidir");
    break;
    case "aprel" :
    case "april" :
        console.log("4cu aydir, yaz fesilidir");
    break;
    case "may" :
        console.log("5ci aydir, yaz fesilidir");
    break;
    case "iyun" :
    case "june" :
        console.log("6ci aydir, yay fesilidir");
    break;
    case "iyul" :
    case "july" :
        console.log("7ci aydir, yay fesilidir");
    break;
    case "avqust" :
    case "august" :
        console.log("8ci aydir, yay fesilidir");
    break;
    case "sentyabr" :
    case "september" :
        console.log("9cu aydir, payiz fesilidir");
    break;
    case "oktyabr" :
    case "october" :
        console.log("10cu aydir, payiz fesilidir");
    break;
    case "noyabr" :
    case "november" :
        console.log("11ci aydir, payiz fesilidir");
    break;
    case "dekabr" :
    case "december" :
        console.log("12ci aydir, qish fesilidir");
    break;
    default :
        console.log("Bele ay movcu deyil ");
}


