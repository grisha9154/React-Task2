class Form extends DomElement {
    constructor(rootElement, id){
        super();
        this.rootElement = rootElement;
        this.next;
        this.prev;
        this.fields = [];
        this.id
    }

    static loadForm(from){
        from
    }

    drawElement(){
        const simplText = new FormField('simpleText', 'text', 'Simple Text');
        simplText.drawElement(this.rootElement);
    }
}