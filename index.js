window.onload = function() {
    const rootElement = document.getElementById(ROOT);  
    const form = new Form(rootElement);
    const label = new LabelElement('Tets', 'qwe');
    debugger;
    label.element.style.background = "url(mercedes-benz.png)";
    label.element.style.height = '180px';
    label.element.style.width = '180px';
    label.drawElement(rootElement);
    form.drawElement(rootElement);
};