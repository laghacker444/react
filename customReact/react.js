function customReader(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
    

}


const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children:'Click me'
}


const mainContainer=document.querySelector('#root')
customReader(reactElement,mainContainer)