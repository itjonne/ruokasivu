class Ruokalista {
    alkiot = new Array(); // of PaaRuoka;
    lkm = 0;

    get lkm() {
        return this.lkm;
    }

    get alkiot() {
        return this.alkiot;
    }

    lisaaRuoka(ruoka) {
        if (this.lkm > MAX_MAARA) { throw new Error("LIIKAA KAUPUNKEJA!")  }
        this.alkiot.push(ruoka);
        this.lkm++;
    }

    annaRuoka(i) {
        if ( i < 0 || this.lkm <= i ) { throw new Error("Väärä indeksi: " + i) }
        return this.alkiot(i);
    }
    


}