class Ravintosisalto {
    recipe_id;
    kcal;
    kJ;
    rasva;
    tyydyttyneet;
    hiilihydraatti;
    sokerit;
    proteiini;
    suola;

    constructor() {

    }

    print() {
        let string = "";
        string += this.kcal.toString()  +  "kcal, " + 
                  this.kJ.toString()    +  "kJ, " +
                  this.rasva.toString() + " rasvaa, " +
                  "josta tyydyttyneitä: " + this.tyydyttyneet.toString() + ", " + 
                  this.hiilihydraatti.toString() + " hiilihydraatteja, " +
                  "josta sokereita: " + this.sokerit.toString() + ", " +
                  this.proteiini.toString() + " proteiinia, " +
                  this.suola.toString() + " suolaa.";          
        return string;
    }
   
}