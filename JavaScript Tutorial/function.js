function letterFinder(word, match){
    for(var i=0;i<word.length;i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }
        else{
            console.log('---No match found at', i)
        }        
    }
}
letterFinder("test","t")

//default parameters
function shirt(color = "white"){
    console.log(color);
}
console.log("custom color of shirt is ")
shirt("blue")
console.log("default color of shirt is ")
shirt()
