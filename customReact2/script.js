function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.props.Text
    domElement.innerText = reactElement.city

    container.append(domElement)
}

const reactElement = {
    type: 'h1',
    props: {
        Text: "This is the custom react App"
    },
    city: 'mumbai'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)