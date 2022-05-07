const imageWrapperBtn = document.getElementsByClassName('image-wrapper-btn')[0]
var el = document.getElementsByClassName('full-screen-image')[0]
var imageWrapper = document.getElementsByClassName('image-backdrop')[0]

imageWrapperBtn.addEventListener('click', function(e){
    var x = e.pageX;
    var y = e.pageY;
  
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.position = 'fixed';
  
    imageWrapper.classList.add('active')

    setTimeout(() => {
        el.classList.add('active')
    }, 200);
  
})
imageWrapper.addEventListener('click', function(e){
        e.stopPropagation()
    imageWrapper.classList.remove('active')
    el.classList.remove('active')
  
})
