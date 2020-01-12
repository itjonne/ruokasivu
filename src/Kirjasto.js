class Kirjasto {

    kaupungit = new Kaupungit();
    ravintosuositus = new Ravintosuositus();

    getKaupungitLkm() {
        return this.kaupungit.lkm();
    }

    lisaaKaupunki(kaupunki) {
        this.kaupungit.lisaaKaupunki(kaupunki);
    }

    getKaupungit() {
        return this.kaupungit.getKaupungit();
    }

    // Hakee dataa stringillä. TODO: Vois toteuttaa Kaupunki-oliolla ehkä?
    fetchData(string) {
        let source = "ruokalista.json";
        let internetSource = "https://jybar.app.jyu.fi/api/2/lunches";
        const IngredientInternetSource = "https://jybar.app.jyu.fi/api/2/lunches/ingredients?recipe_id=";
        const IngredientSource = "ravintosisalto.json";

        if (string == "Jyväskylä") {
            this.fetchDataJyvaskyla(source);
        }
    }

    // Tällä haetaan data.
    fetchDataJyvaskyla(source) {
        let jyvaskyla = new Kaupunki("Jyväskylä");       
        getData(source)
        .then(data => {
            console.log(data.results.fi);           
            $.each(data.results.fi, function(i, result) {
                let ravintola = new Ravintola();
                ravintola.nimi = result.title;
                ravintola.aukiolo = result.time;
                     
                    $.each(result.items, function(j, item) {            
                        let ruoka = new PaaRuoka();
                        if (item.length > 1) {
                            ruoka.nimi = item[0].name;
                            for (let i = 1; i < item.length; i++) {
                                let lisuke = new PaaRuoka();
                                lisuke.nimi = item[i].name;
                                lisuke.recipe_id = item[i].recipe_id;                                
                                ruoka.lisuke.push(lisuke);
                            }
                        }
                        else {                       
                        ruoka.nimi = item[0].name;
                        }
                        ruoka.recipe_id = item[0].recipe_id;
                        ravintola.lisaaRuoka(ruoka)                                                                               
                    })
                    jyvaskyla.lisaaRavintola(ravintola);                                   
              });
              this.lisaaKaupunki(jyvaskyla);
              // TODO: Tätä on pakko kutsua tässä (?!), muuten ei ehi fetch perille ennen käyttöä.
              // naytaData();
              console.log(this.kaupungit)
              initialize_done = true;

                  // create new event
                var event = new Event('initialize_done');

                // Dispatch the event.
                 window.dispatchEvent(event);   
        })                   
    }
    
    fetchRavintosisalto(ravintola) {
        let kaupunki = this.kaupungit.getKaupunkiByName("Jyväskylä");
        console.log(kaupunki)
        let haluttuRavintola = kaupunki.ravintolat.getRavintolat().filter(rav => {
            console.log(rav.nimi, rav.nimi == ravintola)
            return rav.nimi == ravintola;
        });
        haluttuRavintola[0].ruokalista.forEach(ruoka => {
            ruoka.fetchRavintosisalto();
        })
        /*
        getRavintolat().filter(rav => {
            rav.nimi == ravintola;
        })
        haluttuRavintola.ruokalista.forEach(ruoka => {
            ruoka.fetchRavintosisalto();
        })
        */
    }
    
    
}
