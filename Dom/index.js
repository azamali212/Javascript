//Its called dom , window and then document and then html and so on tags 
// console.log(window.body)
// console.dir(window.body)


// console.dir(div)
// console.log(div.innerText)
// console.log(div.innerHTML)

//InnerText use for print or return text inside div or body all text
//InnerHtml use for print plain html tags
//TextContent use for print hidden element in html just like if i use heading in css property visiblity hidden and i can show it using textContent


let NewButton = document.createElement("button")
NewButton.innerText = "Button"
console.log(NewButton)

let div = document.querySelector("div")
//Add at the end of inside
div.append(NewButton)

//Add start at inside node inside
div.prepend(NewButton)

//Add Start Befor the node outside
div.before(NewButton)

//Add After the node outside
div.after(NewButton)