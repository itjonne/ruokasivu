class Ravintosuositus {
    lisukkeet = new Lisukkeet();

    recipe_id;
    kcal;
    kJ;
    rasva;
    tyydyttyneet;
    hiilihydraatti;
    sokerit;
    proteiini;
    suola;

    suositusKcal = 750;

    // Näistä yhteensä 100%, sitten katotaa onko ok;
    suositusRasva = 30; // E%
    SuositusHiilihydraatti = 53; // E%
    SuositusProteiini = 17; // E%
    SuositusSokerit = 10; // E%

    // ottaa kopin ravintosisällöstä ja vertaa. ravintosis = Ravintosisalto-objekti
    vertaa(ravintosisalto) {
        let kokonaisuus = parseInt(ravintosisalto.rasva) + parseInt(ravintosisalto.hiilihydraatti) + parseInt(ravintosisalto.proteiini);

        let vertaaRasva = (parseInt(ravintosisalto.rasva) / kokonaisuus).toFixed(2) * 100;
        let vertaaHiilihydraatti = (parseInt(ravintosisalto.hiilihydraatti) / kokonaisuus).toFixed(2) * 100;
        let vertaaProteiini = (parseInt(ravintosisalto.proteiini) / kokonaisuus).toFixed(2) * 100;
        console.log("Rasva %: " + vertaaRasva)
        console.log("Suositus %: " + this.suositusRasva)
        console.log("Hiilihydraatit %: " + vertaaHiilihydraatti)
        console.log("Suositus %: " + this.SuositusHiilihydraatti)
        console.log("Proteiini %: " + vertaaProteiini)
        console.log("Suositus %: " + this.SuositusProteiini)
        console.log(this.lisukkeet);
        
        return [vertaaRasva, vertaaHiilihydraatti, vertaaProteiini];
    }  
}

/*
1) Ota koppi ruokasisältö-oliosta.
2) Vertaa suosituksiin
3) Anna tulos.

==========================================

Ruokailu =
    Pääruoka
        Ehkä lisuke (perunat jne.)
    Lisukkeet (salaatti jne.)
    
-> Pääruoka + (Maybe lisuke) + Lisukkeet.    

Näitä käyttäen tulee noin 700-800kcal /ateria.

Laatikkoruuat: 350-400g
Kastikkeet:    150-200g
Kappaleruuat:  pää 120g, kastike 50g

Perunat/soseet jne: 150-180g
Pasta jne:          140-170g
Riisi jne:          140-170g

Leipä:              30-35g (1 viipale),
      keiton kanssa 60-79g (2 viipale)
Leipärasva:         5-8g
      keiton kanssa 10-16g
Maito/piimä:        2dl/200g
Salaatti:           150-200g
Salaattikastike:    15-20g         



=============================================================================

Rasva: 30-35 E% (2/3 rasvoista tyydyttymättömiä / tyydyttyneitä max. 10 E%)
Proteiini: 13-17 E% (vähintään 20-25g /ateria)
Hiilihydraatit: 50-55 E% (Kuitusuositus 25-35g /vrk, Lisätty sokeri max. 10 E%)

Suola: suositeltava saanti korkeintaan 5g /vrk. ( == 5/3g annos)

TODO:

Idea: Laske yhteen rasva, hiilarit, proteiinit = 100 E%;
      Vertaile sitten suosituksiin?

      Jos ei lisuketta = laatikkoruoka?
        - Miten erotellaan kappaleruuat?
      Muuten kastike?

*/
/*
100g Salaatti:      34kcal, 0.2g rasva, 0.8g proteiini, (5.6 hh + 2.3g kuitu)
70g Kasvisekoitus:  70kcal, 0.7g rasva, 2.4g proteiini, (12.6 hh + 2g kuitu)
15g Kastike:        63kcal, 6,4g rasva, 0g proteiini, (1.7hh + 0g kuitu)

30g Ruisleipä:      65kcal, 0.4g rasva, 1.9g proteiini, (11.5 hh + 4.1g kuitu)
7g margariini:      36kcal, 4.2g rasva, 0g proteiini, (0g hh + 0g kuitu)
200g Rasvaton maito:68kcal, 0.2g rasva, 6.1g proteiini, (9.8g hh + 0g kuitu)   

=====================================================

    kcalSuositus = 750;
    kJ; // Turha
    rasva;
    tyydyttyneet;
    hiilihydraatti;
    sokerit;
    proteiini;
    suolaSuositus = 5/3;
    
*/

