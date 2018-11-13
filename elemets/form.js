class Form extends DomElement {
    constructor(rootElement){
        super();
        this.rootElement = rootElement;
    }

    DrawElement(){
        const simplText = new FormField('input', 'simpleText', 'text', 'Simple Text');
        simplText.drawElement(this.rootElement);

    }
}