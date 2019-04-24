const functions = {
    createEachElement(element, textInput, id) {
        const eachElement = document.createElement(element)
        if (textInput) {
            eachElement.textContent = text
        }

        if (id) {
            eachElement.id = id;
        }
        
        return eachElement
    },

    clearContainer(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
    },

    
}

export default functions