let textColor = document.querySelector ('h5')
let black = document.querySelector('.color_black')
let natural = document.querySelector('.color_natural')
let blue = document.querySelector('.color_blue')
let white = document.querySelector('.color_white')
let models = document.querySelector('.model_iphone')
let scrol = document.querySelector('.model')
let css = document.querySelector('.model_btn1')
let ssc = document.querySelector('.model_btn2')
let gb1 = document.querySelector('.bcss1')
let gb2 = document.querySelector('.bcss2')
let gb3 = document.querySelector('.bcss3')
let gb4 = document.querySelector('.bcss4')
let trast1 = document.querySelector('.trast1')
let trast2 = document.querySelector('.trast2')
let iphone = document.querySelector('h6')

trast1.onclick = () => {
    trast1.style.border = '2px solid rgb(58, 85, 255)'
    trast2.style.border = '2px solid rgb(98, 98, 98)'
}
trast2.onclick = () => {
    trast2.style.border = '2px solid rgb(58, 85, 255)'
    trast1.style.border = '2px solid rgb(98, 98, 98)'
}
gb1.onclick = () => {
    gb1.style.border = '2px solid rgb(58, 85, 255)'
    gb2.style.border = '2px solid rgb(98, 98, 98)'
    gb3.style.border = '2px solid rgb(98, 98, 98)'
    gb4.style.border = '2px solid rgb(98, 98, 98)'
}
gb2.onclick = () => {
    gb2.style.border = '2px solid rgb(58, 85, 255)'
    gb1.style.border = '2px solid rgb(98, 98, 98)'
    gb3.style.border = '2px solid rgb(98, 98, 98)'
    gb4.style.border = '2px solid rgb(98, 98, 98)'
}
gb3.onclick = () => {
    gb3.style.border = '2px solid rgb(58, 85, 255)'
    gb2.style.border = '2px solid rgb(98, 98, 98)'
    gb1.style.border = '2px solid rgb(98, 98, 98)'
    gb4.style.border = '2px solid rgb(98, 98, 98)'
}
gb4.onclick = () => {
    gb4.style.border = '2px solid rgb(58, 85, 255)'
    gb2.style.border = '2px solid rgb(98, 98, 98)'
    gb3.style.border = '2px solid rgb(98, 98, 98)'
    gb1.style.border = '2px solid rgb(98, 98, 98)'
}

css.onclick = () => {
    css.style.border = '2px solid rgb(58, 85, 255)'
    ssc.style.border = '2px solid rgb(98, 98, 98)' 
    models.style.height = "500px"
    models.style.width = "700px"
    iphone.innerHTML = "Buy iPhone 15 Pro "
  };
  
  ssc.onclick = () => {
    ssc.style.border = '2px solid rgb(58, 85, 255)'
    css.style.border = '2px solid rgb(98, 98, 98)'
    models.style.height = "550px"
    models.style.width = "750px"
    iphone.innerHTML = "Buy iPhone 15 Pro Max"
    ssc.classList.remove = "gb1"
  };


natural.onclick = () => {
    models.className = 'model_iphone natural'
    textColor.innerHTML = "Color - Natural Titanium"
   
}


black.onclick = () => {
    models.className = 'model_iphone black'
    textColor.innerHTML = "Color - Black Titanium"
}

white.onclick = () => {
    models.className = 'model_iphone white'
    textColor.innerHTML = "Color - White Titanium"
}

blue.onclick = () => {
    models.className = 'model_iphone blue'
    textColor.innerHTML = "Color - Blue Titanium"
}


natural.onmouseenter = () => {
    textColor.innerHTML = "Color - Natural Titanium"
}

black.onmouseenter = () => {
    textColor.innerHTML = "Color - Black Titanium"
}

white.onmouseenter = () => {
    textColor.innerHTML = "Color - White Titanium"
}

blue.onmouseenter = () => {
    textColor.innerHTML = "Color - Blue Titanium"
}








let openWindow = document.querySelector('.open');
let bgModal = document.querySelector('.bg_modal');
let closeWindow = document.querySelector('.close');

openWindow.onclick = () => {
    bgModal.style.display = 'flex';
};

closeWindow.onclick = () => {
    bgModal.style.display = 'none';
};


let sims1 = document.querySelector ('.sims1')
let sims2 = document.querySelector ('.sims2')
let sims3 = document.querySelector ('.sims3')
sims1.onclick = () => {
    sims1.style.backgroundColor = 'rgb(0, 0, 0)'
    sims2.style.backgroundColor = 'rgb(226, 226, 226)'
    sims3.style.backgroundColor = 'rgb(226, 226, 226)'
    sims1.className = 'sims1 sims11'
    sims2.className = 'sims2'
    sims3.className = 'sims3'
}
sims2.onclick = () => {
    sims2.style.backgroundColor = 'rgb(0, 0, 0)'
    sims1.style.backgroundColor = 'rgb(226, 226, 226)'
    sims3.style.backgroundColor = 'rgb(226, 226, 226)'
    sims2.className = 'sims2 sims22'
    sims1.className = 'sims1'
    sims3.className = 'sims3'
    
}
sims3.onclick = () => {
    sims3.style.backgroundColor = 'rgb(0, 0, 0)'
    sims2.style.backgroundColor = 'rgb(226, 226, 226)'
    sims1.style.backgroundColor = 'rgb(226, 226, 226)'
    sims3.className = 'sims3 sims33'
    sims1.className = 'sims1'
    sims2.className = 'sims2'
}



let pro = document.querySelector('.pro')
let max = document.querySelector('.max')
let cost = document.querySelector('.cost')
let cost5 = document.querySelector('.cost5')
pro.onclick = () => {
    if (cost.style.display === "none") {
        cost.style.display = "flex"
        img1.style.transform = 'rotate(180deg)'
        img1.style.transition = 'all 1s ease'   
    } else {
        cost.style.display = "none" 
        img1.style.transform = 'rotate(0deg)'   
        img1.style.transition = 'all 1s ease'     
    }
    
}
max.onclick = () => {
    if (cost5.style.display === "none") {
        cost5.style.display = "flex"
        img2.style.transform = 'rotate(180deg)'
        img2.style.transition = 'all 1s ease'
    } else {
        cost5.style.display = "none"  
        img2.style.transform = 'rotate(0deg)'
        img2.style.transition = 'all 1s ease'    
    }
}
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')