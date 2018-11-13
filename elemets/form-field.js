class FormField extends DomElement {
    constructor(elementName, id, type, label){
        super(elementName, id, type);
        this.labelElement = new LabelElement(label, id);
    }

    drawElement(root) {
        debugger;
        this.labelElement.drawElement(root);
        super.drawElement(root);
    }
}