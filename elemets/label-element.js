class LabelElement extends DomElement {
    constructor(value, forId){
        super('label', `${forId}_label`);
        var textNode = document.createTextNode(value);
        this.addChildren(textNode);
    }
}