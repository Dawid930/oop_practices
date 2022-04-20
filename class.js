//classra atirni prototype nelkul
//constructoron belul uj methodust nem csinalunk, azon kivulre kell
class Poem {
    constructor(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet) {
        this.year = yearFromInternet
        this.author = authorFromInternet
        this.title = titleFromInternet
        this.text = textFromInternet
    }
    makePage() {
        console.log(`
        Title: ${this.title}

        ${this.text}

        Author:${this.author}
        ${this.year}

        `);
    }
}



const poemData = new Poem (
    1962,
    "Weores Sandor",
    "Enhasadas",
    `Utca sarkon varok ram,
    fel oraja is van tan,
    am ertelmem felragyog,
    nem jovok mert itt vagyok.`
)


console.log(poemData);

poemData.makePage()

class ForeignPoem extends Poem {
    constructor(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet, translator) {
        super(year, author, title, text)
        this.translator = translator
    }
    makePage() {
        console.log(`
        Title: ${this.title}

        ${this.text}

        Author:${this.author}
        Translator: ${this.translator}
        ${this.year}

        `);
    }
}

const weoresPoem2 = new ForeignPoem(
    1962,
    "Weores Sandor",
    "Enhasadas",
    `Utca sarkon varok ram,
    fel oraja is van tan,
    am ertelmem felragyog,
    nem jovok mert itt vagyok.`,
    "Alan Dickson"
)

weoresPoem2.makePage()