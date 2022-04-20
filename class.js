//classra atirni prototype nelkul
//constructoron belul uj methodust nem csinalunk, azon kivulre kell
// class ugyanolyan objektum mint amit object constructorral csinálunk
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


//console.log(poemData);

poemData.makePage()

class ForeignPoem extends Poem { //extends-el lehet kibővíteni az eredeti kulcsokat, itt a translator, A super-el átadjuk amiket már az eredeti class-ban megírtunk, így itt nem kell megint , csak az újat alá
    constructor(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet, translator) {
        super(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet)
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