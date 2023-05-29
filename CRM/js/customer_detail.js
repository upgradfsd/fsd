document.addEventListener('DOMContentLoaded', function() {
    const customerDetails = document.getElementById('customer-details');
    const urlParams = new URLSearchParams(window.location.search);
    const customerId = urlParams.get('id');
    const storedCustomers = localStorage.getItem('customers');
    const customers = storedCustomers ? JSON.parse(storedCustomers) : [];
  
    // Check if the customer ID is valid
    if (customerId >= 0 && customerId < customers.length) {
      const customer = customers[customerId];
  
      // Create customer details HTML
      const detailsHTML = `
        <strong>Name:</strong> ${customer.name}<br>
        <strong>Email:</strong> ${customer.email}<br>
        <strong>Phone:</strong> ${customer.phone}<br>
        <strong>Message:</strong> ${customer.message}
      `;
  
      // Set customer details HTML content
      customerDetails.innerHTML = detailsHTML;
    } else {
      // Display an error message if the customer ID is invalid
      customerDetails.textContent = 'Invalid customer ID';
    }
  });
  