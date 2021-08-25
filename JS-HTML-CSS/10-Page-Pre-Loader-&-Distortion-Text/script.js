const loader = document.getElementById('loader-wrapper')

// Hide loader according to our desired time
const hide = ()=>{
    setTimeout(()=>{
        loader.style.opacity = 0
    }, 3500)
}

hide()


// Hide Page Loader when the page is loaded
// window.onload = ()=>{
//         loader.style.opacity = 0;
// }