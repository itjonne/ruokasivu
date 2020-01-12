class Ravintolat {
    alkiot = new Array(); // of Ravintolat;
    lkm = 0;

    get lkm() {
        return this.lkm;
    }

    getRavintolat() {
        return this.alkiot;
    }

    lisaaRavintola(ravintola) {
        this.alkiot.push(ravintola);
        this.lkm++;
    }

    annaRavintola(i) {
        if ( i < 0 || this.lkm <= i) { throw new Error("Väärä indeksi: " + i)};
        return this.alkiot[i];
    }

    getRavintolaByName(string) {
        let arr = this.alkiot.filter(data => {
            return data.nimi == string;
        })        
        if (arr.length == 0) {new Error("Ei löydy " + string )}
        else return arr[0];
    }

    getRavintolat() {
        let arr = new Array();
        for (let i = 0; i < this.alkiot.length; i++) {
        arr.push(this.alkiot[i]); 
        }
        return arr;
    }   
}