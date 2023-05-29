// document.addEventListener('DOMContentLoaded', function() {
//     const customerTable = document.getElementById('customer-table');
//     const storedCustomers = localStorage.getItem('customers');
//     const customers = storedCustomers ? JSON.parse(storedCustomers) : [];
  
//     // Loop through customers array and create table rows
//     customers.forEach((customer, index) => {
//       const row = customerTable.tBodies[0].insertRow();
//       const nameCell = row.insertCell(0);
//       const emailCell = row.insertCell(1);
//       const phoneCell = row.insertCell(2);
//       const actionsCell = row.insertCell(3);
  
//       nameCell.textContent = customer.name;
//       emailCell.textContent = customer.email;
//       phoneCell.textContent = customer.phone;
  
//       // Create View button for each customer to navigate to customer details page
//       const viewBtn = document.createElement('a');
//       viewBtn.href = `../pages/customer-details.html?id=${index}`;
//       viewBtn.textContent = 'View';
  
//       actionsCell.appendChild(viewBtn);
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function() {
    const customerTable = document.getElementById('customer-table');
    const storedCustomers = localStorage.getItem('customers');
    const customers = storedCustomers ? JSON.parse(storedCustomers) : [];
  
    // Loop through customers array and create table rows
    customers.forEach((customer, index) => {
      const row = customerTable.tBodies[0].insertRow();
      const nameCell = row.insertCell(0);
      const emailCell = row.insertCell(1);
      const phoneCell = row.insertCell(2);
      const actionsCell = row.insertCell(3);
  
      nameCell.textContent = customer.name;
      emailCell.textContent = customer.email;
      phoneCell.textContent = customer.phone;
  
      // Create View button for each customer to navigate to customer details page
      const viewBtn = document.createElement('a');
      viewBtn.href = `../pages/customer-details.html?id=${index}`;
      viewBtn.textContent = 'View';
      viewBtn.classList.add('view-link'); 
  
      actionsCell.appendChild(viewBtn);
  
      // Create Delete button for each customer to remove from local storage
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-button');
      deleteBtn.addEventListener('click', () => {
        removeCustomer(index);
        customerTable.deleteRow(row.rowIndex); // Remove the current row from the table
      });
  
      actionsCell.appendChild(deleteBtn);
    });
  
    // Function to remove customer from local storage
    const removeCustomer = (index) => {
      customers.splice(index, 1);
      localStorage.setItem('customers', JSON.stringify(customers));
    };
  });
  