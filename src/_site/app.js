// Käynnistetään koko paska == main?

let initialize_done = false;
let ravintosisaltoFetch_done = false;
let testattavaRavintola;

let kirjasto = new Kirjasto();
initialize();


// initializoidaan kirjasto
function initialize() {
    kirjasto.fetchData("Jyväskylä");
    afterInitializeDone();      
}

// haetaan ravintosisällöt, kun initializoitu. Continuous polling == tyhmä tapa. TODO:
function afterInitializeDone() {
    console.log('kokeillaan hakee sis')
    let yritykset = 0;

    if (!initialize_done) {
        yritykset++;
        setTimeout("afterInitializeDone();", 100);
        return;
    }
    if (!initialize_done && yritykset > 100) {
        new Error("Nyt meni joku paskaks");
    }
    else {
        //kirjasto.fetchRavintosisalto("Rentukka");
        setForm();  
        console.log(kirjasto);   
    }   
}

function setForm() {
    let kaupunkiOptions = kirjasto.getKaupungit();
    kaupunkiOptions.forEach(kaupunki => {
    var option = document.createElement("option");
    option.text = kaupunki.nimi;
    document.getElementById("form-control-selectKaupunki").appendChild(option);
    })
    // Katotaan valittu kaupunki -> siitä sit otetaan koppi ja optioiks ravintolat.
    let selectedKaupunki = document.getElementById("form-control-selectKaupunki");
    let selectedText = selectedKaupunki.options[selectedKaupunki.selectedIndex].text;

    console.log('selectedtext ' + selectedText);

    let ravintolaOptions = kirjasto.kaupungit.getKaupunkiByName(selectedText);
    ravintolaOptions.getRavintolat().forEach(ravintola => {
    var option = document.createElement("option");
    option.text = ravintola.nimi;
    document.getElementById("form-control-selectRavintola").appendChild(option);
    })
}

// Samalla kun fetchataan, verrataan suosituksiin. Tällä hetkellä printtaa. Metodi löytyy Ravintosuosituksista !
function valitseJaNaytaRavintola() {
    let kaupunkiElement = document.getElementById("form-control-selectKaupunki");
    let selectedKaupunki = kaupunkiElement.options[kaupunkiElement.selectedIndex].text;

    let element = document.getElementById("form-control-selectRavintola");
    let selectedRavintola = element.options[element.selectedIndex].text;


    let kaupunki = kirjasto.kaupungit.getKaupunkiByName(selectedKaupunki)
    let ravintola = kaupunki.getRavintolaByName(selectedRavintola);

    let viimeinen = "";

    // Käydään kaikki läpi, ja jos viimeinen ruoka, niin voi lähtee vertaa.
    for (let i = 0; i < ravintola.ruokalista.length; i++) {
        ruoka = ravintola.ruokalista[i];
        if (i == (ravintola.ruokalista.length - 1) && ravintola.ruokalista[i].lisuke.length == 0) {viimeinen = "viimeinen";}
        ruoka.fetchRavintosisalto(viimeinen, ravintola);
        if (ruoka.lisuke.length > 0) {
            for (let j = 0; j < ruoka.lisuke.length; j++) {
                if (j == (ruoka.lisuke.length - 1) && i == (ravintola.ruokalista.length - 1)) viimeinen = "viimeinen";
                ruoka.lisuke[j].fetchRavintosisalto(viimeinen, ravintola);
            }
    }
}
/*
    ravintola.ruokalista.forEach(ruoka => {     
        console.log(ruoka.lisuke.length == 0); 
        if (ruoka.lisuke.length == 0) {viimeinen = "viimeinen";} 
        ruoka.fetchRavintosisalto(viimeinen, ravintola);
        console.log(ruoka.lisuke != []);
        // Tää hakee sit lisukkeet.
        if (ruoka.lisuke.length > 0) {
            for (let i = 0; i < ruoka.lisuke.length; i++) {
                if (i == (ruoka.lisuke.length - 1)) viimeinen = "viimeinen";
                ruoka.lisuke[i].fetchRavintosisalto(viimeinen, ravintola);
            }
            /*
            ruoka.lisuke.forEach(lisuke => {
                lisuke.fetchRavintosisalto();
            })
            
        }
    })
    */
    //testattavaRavintola = ravintola;   
    ravintola.naytaRavintola("data");
    // Tässä haetaan löydetyn ruokalistan ravintosisällöt   
}

function vertaaRavintosisaltoja(ravintola) {
       
        let suositus = new Ravintosuositus();

        // Eli nyt pitää laskee ruoka + sivut yhteen, ja verrata sitä.
        //let verrattu = suositus.vertaa(ravintola.ravintosisalto);

        let yhteen = new Array();
        ravintola.ruokalista.forEach(ruoka => {
            yhteen.push(ruoka.laskeYhteen());
        })
        console.log('yhteensä', yhteen)
        //console.log("verrattu: ", verrattu)    
        
}


console.log(kirjasto);


