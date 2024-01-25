let h2 = document.querySelector('h2')
let btn1 = document.querySelector('.btn_color1')
let btn2 = document.querySelector('.btn_color2')
let macBook1 = document.querySelector('.left')
let macBook2 = document.querySelector('.left_img')
let id1 = document.querySelector("#color1")
let id2 = document.querySelector("#color2")
let prise1 = document.querySelector ('.btn_prise1')
let prise2 = document.querySelector ('.btn_prise2')
let prise3 = document.querySelector ('.btn_prise3')
let prise4 = document.querySelector ('.btn_prise4')
let h3 = document.querySelector ('h3')

btn1.onclick  = () => {
    h2.innerHTML = "White"
    btn2.style.background = '#CFE7FF'
    btn1.style.background = '#0071E3'
    btn1.style.color = '#FFF'
    macBook1.className = 'left'
    id1.style.color ="#FFF"
    id2.style.color ="#797979"
}
btn2.onclick  = () => {
    h2.innerHTML = "Space Grey"
    btn1.style.background = '#CFE7FF'
    btn2.style.background = '#0071E3'
    btn2.style.color = '#FFF'
    macBook1.className = 'left left_img'
    id2.style.color ="#FFF"
    id1.style.color = "#797979"
    
}



prise1.onclick = () => {
    h3.innerHTML = "$1,999"
    prise1.style.border = "2px solid #007FFF"
    prise2.style.border = "2px solid #CFE7FF"
    prise3.style.border = "2px solid #CFE7FF"
    prise4.style.border = "2px solid #CFE7FF"
}
prise2.onclick = () => {
    h3.innerHTML = "$2,199"
    prise1.style.border = "2px solid #CFE7FF"
    prise2.style.border = "2px solid #007FFF"
    prise3.style.border = "2px solid #CFE7FF"
    prise4.style.border = "2px solid #CFE7FF"
}
prise3.onclick = () => {
    h3.innerHTML = "$2,599"
    prise1.style.border = "2px solid #CFE7FF"
    prise2.style.border = "2px solid #CFE7FF"
    prise3.style.border = "2px solid #007FFF"
    prise4.style.border = "2px solid #CFE7FF"
    
}
prise4.onclick = () => {
    h3.innerHTML = "$3,199"
    prise1.style.border = "2px solid #CFE7FF"
    prise2.style.border = "2px solid #CFE7FF"
    prise3.style.border = "2px solid #CFE7FF"
    prise4.style.border = "2px solid #007FFF"
}



