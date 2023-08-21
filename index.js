
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

// Apply discount and update total
const applyDiscountBtn = document.getElementById("apply-discount");

/* applyDiscountBtn.disabled = true; */

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

// Your existing JavaScript code


const makePurchaseBtn = document.getElementById("make-purchase");
const closeModalBtn = document.getElementById("closeModal");
const goHomeBtn = document.getElementById("goHomeBtn");
const modal = document.getElementById("myModal");

makePurchaseBtn.addEventListener("click", function() {
    if (total > 0.00) {
        showModal();
    }
});

closeModalBtn.addEventListener("click", function() {
    closeModal();
});

goHomeBtn.addEventListener("click", function() {
    // Redirect to the homepage
    window.location.href = "";
});

function showModal() {
    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}
