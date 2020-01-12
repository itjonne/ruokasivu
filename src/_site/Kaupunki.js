class Kaupunki {
    ravintolat = new Ravintolat();
    nimi;
    
    constructor(nimi) {
        this.nimi = nimi;
    }

    set nimi(nimi) {
        this.nimi = nimi;
    }

    get nimi() {
        return this.nimi;
    }
    
    get ravintolat() {
        return this.ravintolat;
    }

    getRavintolaByName(string) {
        let arr = this.ravintolat.getRavintolat().filter(data => {
            return data.nimi == string;
        })        
        if (arr.length == 0) {new Error("Ei löydy " + string )}
        else return arr[0];       
    }

    lisaaRavintola(ravintola) {
        this.ravintolat.lisaaRavintola(ravintola);
    }

    getRavintolat() {
        return this.ravintolat.getRavintolat();
    }

    annaRavintola(i) {
        return this.ravintolat.annaRavintola(i);
    }
    
}