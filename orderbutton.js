function makeOrder(button) {
    // Get the name of the dish the user clicked on
    const dishName = button.closest('.shop-block-one').querySelector('h5').innerText;

    // Ask the user for the quantity of plates
    const plates = promptForPlates(dishName);
    if (plates === null) return; // User canceled the input

    // Confirm order and display business payment details if the quantity is valid
    if (plates > 0) {
        displayOrderConfirmation(dishName, plates);
    } else {
        alert("Please enter a valid number of plates.");
    }
}

// Function to prompt user for the number of plates
function promptForPlates(dishName) {
    let plates = prompt(`How many plates of "${dishName}" would you like to order?`, "1");

    // Validate input
    while (plates !== null && (isNaN(plates) || plates <= 0)) {
        if (plates === null) return null; // User canceled
        alert("Please enter a valid positive number for plates.");
        plates = prompt(`How many plates of "${dishName}" would you like to order?`, "1");
    }

    return parseInt(plates, 10); // Return the validated number of plates
}

// Function to show a confirmation of the order
function displayOrderConfirmation(dishName, plates) {
    const confirmationMessage = `You have successfully ordered ${plates} plate(s) of "${dishName}".`;
    
    // Ask user if they want to proceed with the order
    const proceed = confirm(`${confirmationMessage}\nDo you want to proceed with payment?`);

    if (proceed) {
        showPaymentDetails(dishName, plates);
        redirectToConfirmationPage(dishName, plates);
    } else {
        alert("Your order has been canceled.");
        // Optionally, you could redirect the user back to a previous page or the menu
        window.location.href = "index.html";  // Replace with the actual menu page URL
    }
}

// Function to display business account details for payment
function showPaymentDetails(dishName, plates) {
    const paymentDetails = `Account Name: Ajefenwa Shukurat Ajenike
    -------------------------
    Bank Name: First Bank
    Account Number: 3082948868
    Payment Reference: ${dishName} - ${plates} Plate(s)
`;                                                                                  
    // Display an alert with the payment details
    alert(`Please make your payment using the details below:\n\n${paymentDetails}`);
}

// Function to redirect the user to the confirmation page and prompt for WhatsApp contact
function redirectToConfirmationPage(dishName, plates) {
    // Ask the user to send the payment receipt to the admin via WhatsApp
    alert(`Please send the payment receipt to the admin for confirmation.`);

    // Open the WhatsApp chat with the admin
    const adminPhoneNumber = '2348083294646'; // Admin's WhatsApp number in international format (no '+' sign)
    const message = `I have made a payment for ${plates} plate(s) of "${dishName}". Here is the receipt.`;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
}





