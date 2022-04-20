function Poem({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
    this.year = yearFromInternet;
    this.author = authorFromInternet;
    this.title = titleFromInternet;
    this.text = textFromInternet;
    this.makePage = function () {
        console.log(`
        Title: ${this.title}

        ${this.text}

        Author:${this.author}
        ${this.year}

        `);
    }
} 



const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weores Sandor",
    titleFromInternet: "Enhasadas",
    textFromInternet: `
    Utca sarkon varok ram, 
    fel oraja is van tan, 
    am ertelmem felragyog, 
    nem jovok mert itt vagyok.`
}

Poem.prototype.lang = "HUN" // így adunk hozzá kulcsot rendesen 

const favouritePoemOfAndras = new Poem(poemData)

favouritePoemOfAndras.favBy = "Andras Ranki" // uj kulcs hozzarendelése az objecthez, de az eredetihez nem adja hozzá véglegesen

//console.log(favouritePoemOfAndras.favBy); // csak kiiratjuk az előzőt 

console.log(favouritePoemOfAndras.lang);
console.log(favouritePoemOfAndras.__proto__);
console.log(Poem.prototype);


//favouritePoemOfAndras.makePage() //itt hivjuk meg a makePage-t
