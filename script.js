let leftcolor = document.querySelector(".leftcolor");
let rightcolor = document.querySelector(".rightcolor");
let button = document.querySelector(".randomButton");
let output = document.querySelector("#CSScode");
let body = document.querySelector("body");
let copyButton = document.querySelector("#copyCSS");

let lcolor = leftcolor.value;
let rcolor = rightcolor.value;


copyButton.addEventListener("click", () => {
    var r = document.createRange();
    r.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    // alert('Gradient Code Copied');
});




leftcolor.addEventListener("change",(event) =>
{
    lcolor = event.target.value;
    changeBackground();
    console.log(lcolor);
});

// copyButton.addEventListener("click",() =>
// {
//     copyToClipboard(copyButton.target.value);
// })

rightcolor.addEventListener("change",(event) =>
{
    rcolor = event.target.value;
    changeBackground();
});


const changeBackground = ()=>
{
    const cssString = ` linear-gradient(to right, ${lcolor}, ${rcolor} )`
    body.style.background=cssString;
    CSScode.textContent = `background : ${cssString};`
};


button.addEventListener("click",() => 
{
    let color = '0123456789abcdef';
    lcolor='#';
    rcolor='#';
    for(let i=0 ; i<6 ; i++)
    {
        let num = ((Math.floor(Math.random()*100))%16);
        lcolor += color[num];
    }
    leftcolor.value = lcolor;
    for(let i=0 ; i<6 ; i++)
    {
        let num = ((Math.floor(Math.random()*100))%16);
        rcolor += color[num];
    }
    rightcolor.value = rcolor;
    changeBackground();
});

// function copy() {
//     var copyText = document.querySelector(output);
//     copyText.select();
//     document.execCommand("copy");
//   }
  
// copyButton.addEventListener("click", () =>
// {copyCSS()
// });



// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
//   }
  

// function copyCSS() = {
    
//     var copyText = document.getElementById("CSScode");
  
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); 

//     document.execCommand("copy");
//   }