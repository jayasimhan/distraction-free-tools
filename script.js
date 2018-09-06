// let anchors = document.querySelectorAll("a");

// anchors.forEach((link)=>{
//     let linkHref = link.href;
//     // console.log(linkHref)
//     if(typeof(linkHref) != 'undefined' && linkHref=="https://twitter.com/i/moments"){
//         console.log(link)
//     }
// })

let removeItems = document.querySelectorAll(".moments.js-moments-tab,.module.Trends.trends");

removeItems.forEach((el)=>{
    el.style="display:none"
})

