function BeveragemakeOrder(button) {
    // Ask the user for the quantity of beverages
    const quantity = promptForQuantity();
    if (quantity === null) return; // User canceled the input

    // Ask for the type of beverage
    const beverage = promptForBeverage();
    if (beverage === null) return; // User canceled the input

    // Confirm order and display business payment details if the quantity is valid
    if (quantity > 0 && beverage) {
        displayOrderConfirmation(quantity, beverage);
    } else {
        alert("Please enter a valid number of soft drinks or beverages.");
    }
}

// Function to prompt user for the number of beverages
function promptForQuantity() {
    let quantity = prompt("How many soft drinks or beverages would you like to order?", "1");

    // Validate input
    while (quantity !== null && (isNaN(quantity) || quantity <= 0)) {
        if (quantity === null) return null; // User canceled
        alert("Please enter a valid positive number for beverages.");
        quantity = prompt("How many soft drinks or beverages would you like to order?", "1");
    }

    return parseInt(quantity, 10); // Return the validated number
}

// Function to prompt user for the type of beverage
function promptForBeverage() {
    let beverage = prompt("Please specify the type of beverage you want to order:");

    // Validate that the beverage input is not empty
    while (beverage !== null && beverage.trim() === "") {
        if (beverage === null) return null; // User canceled
        alert("Please enter a valid beverage type.");
        beverage = prompt("Please specify the type of beverage you want to order:");
    }

    return beverage; // Return the beverage type
}

// Function to show a confirmation of the order
function displayOrderConfirmation(quantity, beverage) {
    const confirmationMessage = `You have successfully ordered ${quantity} ${beverage}(s).`;
    
    // Ask user if they want to proceed with the order
    const proceed = confirm(`${confirmationMessage}\nDo you want to proceed with payment?`);

    if (proceed) {
        showPaymentDetails(quantity, beverage);
        redirectToConfirmationPage(quantity, beverage);
    } else {
        alert("Your order has been canceled.");
        // Optionally, you could redirect the user back to a previous page or the menu
        window.location.href = "index.html";  // Replace with the actual menu page URL
    }
}

// Function to display business account details for payment
function showPaymentDetails(quantity, beverage) {
    const paymentDetails = `Account Name: Ajefenwa Shukurat Ajenike
    -------------------------
    Bank Name: First Bank
    Account Number: 3082948868
    Payment Reference: ${beverage} - ${quantity} ${beverage}(s)
`;                                                                                  
    // Display an alert with the payment details
    alert(`Please make your payment using the details below:\n\n${paymentDetails}`);
}

// Function to redirect the user to the confirmation page and prompt for WhatsApp contact
function redirectToConfirmationPage(quantity, beverage) {
    // Ask the user to send the payment receipt to the admin via WhatsApp
    alert(`Please send the payment receipt to the admin for confirmation.`);

    // Open the WhatsApp chat with the admin
    const adminPhoneNumber = '2348083294646'; // Admin's WhatsApp number in international format (no '+' sign)
    const message = `I have made a payment for ${quantity} ${beverage}(s). Here is the receipt.`;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
}
