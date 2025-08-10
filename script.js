async function fetchUserData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      const dataContainer = document.getElementById('api-data');

      try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create and append user list
        const userList = document.createElement('ul');
        users.forEach(user => {
          const li = document.createElement('li');
          li.textContent = user.name;
          userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
      } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        // Optionally log the error for debugging
        console.error('Error fetching user data:', error);
      }
    }

    // Run after the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', fetchUserData);