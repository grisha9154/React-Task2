class Wizard extends DomElement {
    constructor(){
        super();
        this.forms = [];
        this.currentFormIndex;    
    }

    addForm(form){
        this.forms.push(form);
    }

    nextForm(){
        this.forms[this.currentFormIndex].wipeOff();
        this.currentFormIndex++;
        this.forms[this.currentFormIndex].drawElement();
    }

    prevForm(){
        this.forms[this.currentFormIndex].wipeOff();
        this.currentFormIndex--;
        this.forms[this.currentFormIndex].drawElement();
    }
}