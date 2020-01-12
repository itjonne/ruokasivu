const MAX_MAARA = 25;

class Ravintola {
    ruokalista = new Array(); // of Ruoka;
    nimi;
    aukiolo;
    lkm = 0;

    constructor(nimi) {
        this.nimi = nimi;    
    }

    set ruokalista(lista) {
        this.ruokalista = lista;
    }
    
    get ruokalista() {
        return this.ruokalista;
    }

    get nimi() {
        return this.nimi;
    }

    set nimi(nimi) {
        this.nimi = nimi;
    }

    set aukiolo(aukiolo) {
        this.aukiolo = aukiolo;
    }

    lisaaRuoka(ruoka) {
        if (this.lkm > MAX_MAARA) { throw new Error("LIIKAA KAUPUNKEJA!")  }
        this.ruokalista.push(ruoka);
        this.lkm++;
    }

    // idea tulostamiseen.
    naytaRavintola(paikka) {
    // Ensin tyhjennetään div
    document.getElementById(paikka).innerHTML = "";    

    let div = document.createElement('div');
    div.className = 'row';    

    let divRavintola = document.createElement('div');
    divRavintola.className = 'col-sm-12 ravintola';
    divRavintola.innerHTML = this.nimi + " // Aukiolo: " + this.aukiolo;

    this.ruokalista.forEach(ruoka => {
        let ruokadiv = document.createElement('div');
        ruokadiv.className = 'row no-gutters';
        let divRuoka = document.createElement('div');
        divRuoka.className = "col-6 ruoka";
        divRuoka.innerHTML = ruoka.nimi;
        let divRavintosisalto = document.createElement('div');
        divRavintosisalto.className = "col-6 ravintosisalto";
        divRavintosisalto.id = ruoka.recipe_id;

        
        for (let i = 0; i < ruoka.lisuke.length; i++) {
        let divLisuke = document.createElement('div');        
        divLisuke.className = "col-6 lisuke"
        divLisuke.innerHTML = ruoka.lisuke[i].nimi;
        divRuoka.appendChild(divLisuke);
        }
        ruokadiv.appendChild(divRuoka);
        ruokadiv.appendChild(divRavintosisalto);        
        divRavintola.appendChild(ruokadiv);
    })
    div.appendChild(divRavintola);
    document.getElementById(paikka).appendChild(div);
    }
}