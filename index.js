
let listItemCounter = 1;
let subtotal = 0;
const cuponCode = "SELL200";
const persentDiscount = 20;
const minAmount = 200.00;
let discount = 0;
let total = 0;

function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;

    const listItem = document.createElement("li");
    listItem.innerText = `${listItemCounter}. ${itemName}`;
    listItemCounter++;

    const existingList = selectedItemContainer.querySelector("ol");
    const newList = existingList || document.createElement("ol");

    newList.appendChild(listItem);

    if (!existingList) {
        selectedItemContainer.appendChild(newList);
    }
    const price = parseFloat(target.childNodes[3].childNodes[5].innerText.split(" ")[0]);
    subtotal += price;
    document.getElementById("sub-total").innerText = subtotal.toFixed(2);
}

const applyDiscountBtn = document.getElementById("apply-discount");



applyDiscountBtn.addEventListener("click", function() {
    calculateTotal(this);
});

function calculateTotal(target) {
    let cuponCodeInput = $('#cuponCodeInput').val();
    if (subtotal >= minAmount && cuponCodeInput == cuponCode){
        discount = (subtotal * persentDiscount ) / 100;
        applyDiscountBtn.disabled = false;
    } else {
        discount = 0;
        applyDiscountBtn.disabled = true;
    }
    total = subtotal - discount;
    $('#sub-total').html(subtotal.toFixed(2));
    $('#discount').html(discount.toFixed(2));
    $('#total').html(total.toFixed(2));
}  
const modal = document.getElementById('my_modal_1');
const closeButton = modal.querySelector('button');

closeButton.addEventListener('click', () => {
    modal.close();
}); 
