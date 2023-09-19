
function count(sentence, countInput){
    let sentenceArray = sentence.split(" ");
    for (i = 0; i<sentence.length; i++){
        if (sentenceArray[i] = countInput){
            count = count + 1;
        }
    }
    return count;
}
let a = count("My name is Subham my surname if subham the","the");
console.log(a);


