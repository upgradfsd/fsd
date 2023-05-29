// JavaScript for handling form submission and customer list
document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customer-form');
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Get form input values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
  
      // Create customer object
      const customer = {
        name,
        email,
        phone,
        message
      };
  
      // Add customer to array
      customers.push(customer);
  
      // Clear form fields
      customerForm.reset();
  
      // Store customers array in local storage
      localStorage.setItem('customers', JSON.stringify(customers));
  
      // Redirect to customer list page
      window.location.href = '../CRM/pages/customer-list.html';
    };
  
    // Retrieve customers from local storage
    const storedCustomers = localStorage.getItem('customers');
    const customers = storedCustomers ? JSON.parse(storedCustomers) : [];
  
    // Add event listener to form submission
    if (customerForm) {
      customerForm.addEventListener('submit', handleSubmit);
    }
  });
  