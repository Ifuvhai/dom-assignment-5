const blogBtn =document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html'
})


function getInputValue(id){
   const inputValue = parseFloat(document.getElementById(id).value);
   return inputValue;
}

function collectionDonate(id){
    const amountDonate = parseFloat(document.getElementById(id).innerText);

    return amountDonate;
}