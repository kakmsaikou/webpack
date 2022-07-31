import x from './x.js'
import png from './images/1.png'
const div = document.querySelector('#app')
div.innerHTML = `
    <img src="${png}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)
button.onclick = ()=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{
        module.default()
    }, ()=>{})
}