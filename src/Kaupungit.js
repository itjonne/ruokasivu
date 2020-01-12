class Kaupungit {    
    alkiot = new Array(); // of Kaupunki;
    lkm = 0;

    getLkm() {
        return this.lkm;
    }

    lisaaKaupunki(kaupunki) {
        if (this.lkm > MAX_MAARA) { throw new Error("LIIKAA KAUPUNKEJA!")  }
        this.alkiot.push(kaupunki);
        this.lkm++;
    }

    annaKaupunki(i) {
        if ( i < 0 || this.lkm <= i ) { throw new Error("Väärä indeksi" + i) }
        return this.alkiot(i);
    }

    getKaupunkiByName(string) {
        let arr = this.alkiot.filter(data => {
            return data.nimi == string;
        })
        
        if (arr.length == 0) {return "Ei löydy"}
        else return arr[0];
        
    }

    getKaupungit() {
        return this.alkiot;
    }

}