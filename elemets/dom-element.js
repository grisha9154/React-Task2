class DomElement {
    constructor(elementName, id, type, value = ""){
        this.element = document.createElement(elementName);
        ({id: this.element.id, type: this.element.type, value: this.element.value} = { id, type, value});
    }

    getElement() {
        return this.element;
    }

    addChildren(child) {
        this.element.appendChild(child);
    }

    drawElement(root) {
        root.appendChild(this.element);
    }

    wipeOff() {
        this.element.remove();
    }
}