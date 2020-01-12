class PaaRuoka extends Ruoka {
    nimi;
    recipe_id;
    lisuke = Array();
    ravintosisalto;
    ravintosisalto_ready = false;

    constructor() {
        super();        
    }

    get recipe_id() {
        return this.recipe_id;
    }

    set recipe_id(id) {
        this.recipe_id = id;
    }

    set lisuke(lisuke) {
        this.lisuke = lisuke;
    }
    
    get lisuke() {
        return this.lisuke;
    }

    laskeYhteen() {
        if (this.lisuke.length == 0) return [parseInt(this.ravintosisalto.kcal), parseInt(this.ravintosisalto.rasva), parseInt(this.ravintosisalto.hiilihydraatti), parseInt(this.ravintosisalto.proteiini)];
        let yhteensa = [parseInt(this.ravintosisalto.kcal), parseInt(this.ravintosisalto.rasva), parseInt(this.ravintosisalto.hiilihydraatti), parseInt(this.ravintosisalto.proteiini)];
        this.lisuke.forEach(lis => {
            yhteensa[0] += parseInt(lis.ravintosisalto.kcal);
            yhteensa[1] += parseInt(lis.ravintosisalto.rasva);
            yhteensa[2] += parseInt(lis.ravintosisalto.hiilihydraatti);
            yhteensa[3] += parseInt(lis.ravintosisalto.proteiini);
        })
        return yhteensa;
    }

    fetchRavintosisalto(string, ravintola) {
        const IngredientSource = "ravintosisalto.json";

        getData(IngredientSource)
        .then(data => {
            let ravintosisalto = new Ravintosisalto();
            let numerot = parseIngredients(data);
            ravintosisalto.kcal = numerot[0];
            ravintosisalto.kJ = numerot[1];
            ravintosisalto.rasva = numerot[2];
            ravintosisalto.tyydyttyneet = numerot[3];
            ravintosisalto.hiilihydraatti = numerot[4];
            ravintosisalto.sokerit = numerot[5];
            ravintosisalto.proteiini = numerot[6];
            ravintosisalto.suola = numerot[7];
            ravintosisalto.recipe_id = this.recipe_id;
            this.ravintosisalto = ravintosisalto;            
            this.ravintosisalto_ready = true;
            console.log(this , this.ravintosisalto)

            ravintosisaltoFetch_done = true;

            // Jos oli viimeinen pääruoka, eli viimeinen "lisuke", niin laske kaikki yhteen.
            if (string == "viimeinen") {
                vertaaRavintosisaltoja(ravintola);
                /*
                let suositus = new Ravintosuositus();
                let verrattu = suositus.vertaa(this.ravintosisalto);

                let yhteen = this.laskeYhteen();
                console.log('yhteensä', yhteen)
                console.log("verrattu: ", verrattu)
                */
            }
            // Nää pitää tehdä tuolla fetchin jälkee ku kaikki on ladattu
            /*
            let suositus = new Ravintosuositus();
            let verrattu = suositus.vertaa(this.ravintosisalto);

            let yhteen = this.laskeYhteen();
            console.log('yhteensä', yhteen)
            console.log("verrattu: ", verrattu)
            */
        })
    }

}