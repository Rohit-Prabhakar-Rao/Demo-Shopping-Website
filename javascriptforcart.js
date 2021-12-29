var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (let index = 0; index < removeCartItemButtons.length; index++) {
        var button = removeCartItemButtons[index];
        button.addEventListener('click',function (event) {
           var buttonClicked = event.target;
           buttonClicked.parentElement.parentElement.remove()
           updateCarttotal();
        })
    
}
function updateCarttotal() {
    var cartItemContainer = document.getElementsByClassName('small-container cart-page')[0]
   var cartRows = cartItemContainer.getElementsByClassName('cart-info')
   for (let index = 0; index < cartRows.length; index++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-info')[0]
    
}

}