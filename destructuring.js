
const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weores Sandor",
    titleFromInternet: "Enhasadas",
    textFromInternet: `Utca sarkon varok ram, 
    fel oraja is van tan, 
    am ertelmem felragyog, 
    nem jovok mert itt vagyok.`
}


//console.log(poemData.authorFromInternet);

const pdafi = poemData.authorFromInternet
const pdyfi = poemData.yearFromInternet

//console.log(pdyfi);
//console.log(pdafi);

//const {yearFromInternet, authorFromInternet} = poemData

//console.log(yearFromInternet);
//console.log(authorFromInternet);


function funWithPoemData({yearFromInternet2, authorFromInternet2}) {
    console.log(yearFromInternet);
    console.log(authorFromInternet);
}

//funWithPoemData(poemData)


//Destructuring Array eseteben 

const arr = ["hi", "hello", "no", function () {
    console.log("ciao");
}, "bye"]

const firstItem = arr[0]
const secondItem = arr[1]

const [firstItemX, secondItemX, ...elseX] = arr

console.log(firstItem === firstItemX);

console.log(elseX);


console.log(arr[arr.length-1]);


const [, , , ourFun] = arr

ourFun()






