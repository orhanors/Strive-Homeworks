/**
 * Creates new element, adds it to the relevant position and returns the new element
 * parent: parent element
 * element: new element
 * attributes: properties of new elemenet
 */

const addElement = function (parent, element, attributes, callback) {
    let newElement = document.createElement(element);

    if (attributes.label) {
        let div = document.createElement("div");
        let label = document.createElement("label");

        label.innerText = attributes.label

        div.appendChild(label)
        parent.appendChild(div)
    }

    Object.entries(attributes).map(entry => {
        if (entry[0] !== "label") {
            newElement[entry[0]] = entry[1]
        }
    })
    parent.appendChild(newElement)
    return newElement
}