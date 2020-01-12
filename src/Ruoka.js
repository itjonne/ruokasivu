class Ruoka {
    nimi;
    //lisuke = new Array(); // of Ruoka (eli esim perunat/riisi)
    //recipe_id;
    ravintosisalto; // Tää on Ravintosisältö-olio;

    constructor() {
        // Tarviiko tälläsen tyhjän?
    }
    
    get nimi() {
        return this.nimi;
    }
    
    set nimi(n) {
        this.nimi = n;
    }

    /*

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

    */

    set ravintosisalto(sis) {
        this.ravintosisalto = sis;
    }

    getRavintosisalto() {
        return this.ravintosisalto;
    }

    vertaaSuosituksiin() {
        let suositus = new Ravintosuositus();
        suositus.recipe_id = this.ravintosisalto.recipe_id;
        suositus.kcal = this.ravintosisalto.kcal;
        suositus.kJ = this.ravintosisalto.kJ;
        suositus.rasva = this.ravintosisalto.rasva;
        suositus.tyydyttyneet = this.ravintosisalto.tyydyttyneet;
        suositus.hiilihydraatti = this.ravintosisalto.hiilihydraatti;
        suositus.sokerit = this.ravintosisalto.sokerit;
        suositus.proteiini = this.ravintosisalto.proteiini;
        suositus.suola = this.ravintosisalto.suola;

        suositus.vertaa();    
    }

    fetchRavintosisaltoShow() {
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
            //document.getElementById(this.recipe_id).innerHTML = this.ravintosisalto.print();
            //this.vertaaSuosituksiin();
        })
    }

}


 // TODO: Tää nyt on ihan tyhmä, tää näyttää ruudulla samalla ku hakee, alempi ei.
/*
 fetchRavintosisaltoShow() {
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
            document.getElementById(this.recipe_id).innerHTML = this.ravintosisalto.print();
            this.vertaaSuosituksiin();
        })
    }

    fetchRavintosisalto() {
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
            this.vertaaSuosituksiin();
        })
    }
*/