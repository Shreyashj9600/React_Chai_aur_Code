function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const maincontainer = document.getElementById('root')

customRender(reactElement, maincontainer)


// test 

// function customRender(reactElement, container) {
//     let domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.props.Text
//     container.appendChild(domElement)

// }

// const reactElement = {
//     type: 'h1',
//     props: {
//         "Text": 'Test custom React app'
//     }
// }

// const maincontainer = document.getElementById('root')

// customRender(reactElement, maincontainer)