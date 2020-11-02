const addElement = function (parent, element, properties) {
    let newElement = document.createElement(element);

    if (properties.label) {
        let div = document.createElement("div");
        let label = document.createElement("label");

        label.innerText = properties.label;

        div.appendChild(label);
        parent.appendChild(div)
    }

    Object.entries(properties).map(entry => {
        let propertyName = entry[0]
        if (propertyName !== "label") {
            newElement[propertyName] = entry[1]
        }
    })

    parent.append(newElement)

    return newElement;
}