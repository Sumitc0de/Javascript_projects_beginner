// Hex Color
const hexBtn = document.getElementById("hexbtn");
const hexBgcontainer = document.getElementById("box1");
const Colorcode = document.getElementById("colorCode");
const CopyHexToClipboard = document.getElementById("copyhexTOclipboard");


hexBtn.addEventListener('click',() =>{
    HexColorMode();
})

function HexColorMode(){
    let randomText = "0123456789ABCDEF";
    let hexColorOutput = "";
    
    for(let i = 0, textLength = randomText.length; i< 6;+ i++){
        hexColorOutput = hexColorOutput + randomText.charAt(Math.floor(Math.random() * textLength));
    };
    
    Colorcode.innerText = `#${hexColorOutput}`;
    hexBgcontainer.style.backgroundColor = `#${hexColorOutput}`;
}

function CopyToClipboardHex() {
navigator.clipboard.writeText(Colorcode.textContent);
alert("Hex color is Copied to Clipboard");
}

CopyHexToClipboard.addEventListener('click', () =>{
    CopyToClipboardHex();
})

// RGB color
const RGBcontainer = document.getElementById("box2");
const CopyRgbToClipboard = document.getElementById("copyrgbTOclipboard");
const RGBbtn = document.getElementById("rgb-btn");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const blueBtn = document.querySelector("#blue");
let rgbValue = document.getElementById("rgb-value");

RGBbtn.addEventListener('click',()=>{
    let extractRedvalue = redBtn.value;
    let extractGreenvalue = greenBtn.value;
    let extractbluevalue = blueBtn.value;
    let rgbCode = `RGB(${extractRedvalue},${extractGreenvalue},${extractbluevalue})`;
    RGBcontainer.style.backgroundColor = rgbCode;
    rgbValue.innerText = `RGB(${extractRedvalue},${extractGreenvalue},${extractbluevalue})`;
    
})

// function RGBColorMode(){

// }

function CopyToClipboardRGB() {
navigator.clipboard.writeText(rgbValue.textContent);
alert("RGB color is Copied to Clipboard");
}

CopyRgbToClipboard.addEventListener('click', () =>{
    CopyToClipboardRGB();
})
