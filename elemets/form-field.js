class FormField extends DomElement {
    constructor(id, type, label){
        super();
        this.fieldContainer = new DomElement('div', `${id}_container`);
        this.labelElement = new LabelElement(label, id);
        this.field = new DomElement('input', id, type);
        this.fieldContainer.addChildren(this.labelElement.element);
        this.fieldContainer.addChildren(this.field.element);
        this.element = this.fieldContainer.element;
    }
}