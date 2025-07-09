// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load data at startup
    loadStoredData();
    initializeInteractionCounter();
    
    // Configure page load events
    const saveButton = document.getElementById('saveButton');
    const clearButton = document.getElementById('clearButton');
    const userNameInput = document.getElementById('userName');

    saveButton.addEventListener('click', saveUserData);
    clearButton.addEventListener('click', clearStoredData);
    saveButton.addEventListener('click', incrementInteractionCounter);
    clearButton.addEventListener('click', incrementInteractionCounter);
    userNameInput.addEventListener('blur', cleanNameOnBlur);
});

// Function to save user data
function saveUserData() {
    const userNameInput = document.getElementById('userName');
    const userAgeInput = document.getElementById('userAge');
    const userName = userNameInput.value.trim();
    const userAge = userAgeInput.value.trim();

    // Data validation
    if (!validateUserData(userName, userAge)) {
        return;
    }

    // Create object with user data
    const userData = {
        id: Date.now(),
        name: userName,
        age: parseInt(userAge)
    };

    // Save to Local Storage
    try {
        const existingUsers = localStorage.getItem('users');
        let users = existingUsers ? JSON.parse(existingUsers) : [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        showMessage(`User ${userName} successfully saved! (Total: ${users.length} users)`, 'success');
        displayAllUsers(users);

        userNameInput.value = '';
        userAgeInput.value = '';

    } catch (error) {
        showMessage('Error saving data. Please try again.', 'error');
    }
}

// Data validation function
function validateUserData(name, age) {
    hideMessages();

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    if (!name || name.trim().length === 0) {
        showMessage('The name cannot be empty.', 'error');
        return false;
    } else if (!nameRegex.test(name.trim())) {
        showMessage('The name can only contain letters, spaces and accents. No numbers or special characters are allowed.', 'error');
        return false;
    } else if (!age || isNaN(age) || age < 1 || age > 120) {
        showMessage('The age must be a number between 1 and 120.', 'error');
        return false;
    }

    return true;
}

// Function to load stored data
function loadStoredData() {
    try {
        const storedUsers = localStorage.getItem('users');

        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            displayAllUsers(users);
        } else {
            displayNoDataMessage();
        }
    } catch (error) {
        displayNoDataMessage();
    }
}

// Function to display all users
function displayAllUsers(users) {
    const output = document.getElementById('output');

    if (users.length === 0) {
        displayNoDataMessage();
        return;
    }

    let usersHTML = `
        <div class="notification is-info">
            <span class="icon">
                <i class="fas fa-users"></i>
            </span>
            <span><strong>Total de usuarios almacenados: ${users.length}</strong></span>
        </div>
    `;

    users.reverse().forEach((user) => {
        usersHTML += `
            <div class="card user-data-card" style="margin-bottom: 1rem;">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">ID: ${user.id}</p>
                        </div>
                        <div class="media-right">
                            <button class="button is-small is-danger" onclick="deleteUser(${user.id})">
                                <span class="icon">
                                    <i class="fas fa-trash"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    
                    <div class="content">
                        <div class="columns">
                            <div class="column">
                                <p><strong><i class="fas fa-user"></i> Nombre:</strong></p>
                                <p class="has-text-primary">${user.name}</p>
                            </div>
                            <div class="column">
                                <p><strong><i class="fas fa-birthday-cake"></i> Edad:</strong></p>
                                <p class="has-text-info">${user.age} años</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    output.innerHTML = usersHTML;
}

// Function to display no data message
function displayNoDataMessage() {
    const output = document.getElementById('output');

    output.innerHTML = `
        <div class="notification is-warning has-text-centered">
            <span><strong>No users stored</strong></span>
        </div>`;
}

// Function to initialize interaction counter
function initializeInteractionCounter() {
    try {
        const storedCount = sessionStorage.getItem('interactionCount');
        const interactionCount = storedCount ? parseInt(storedCount) : 0;
        updateInteractionDisplay(interactionCount);
    } catch (error) {
        updateInteractionDisplay(0);
    }
}

// Function to increment interaction counter
function incrementInteractionCounter() {
    try {
        const storedCount = sessionStorage.getItem('interactionCount');
        const interactionCount = (storedCount ? parseInt(storedCount) : 0) + 1;

        sessionStorage.setItem('interactionCount', interactionCount.toString());
        updateInteractionDisplay(interactionCount);
    } catch (error) {
    }
}

// Function to update interaction counter display
function updateInteractionDisplay(interactionCount) {
    const interactionCounter = document.getElementById('interactionCounter');
    interactionCounter.textContent = interactionCount;
}

// Function to clear all data
function clearStoredData() {
    try {
        localStorage.removeItem('users');

        showMessage('All users have been deleted successfully.', 'success');
        displayNoDataMessage();

        const userNameInput = document.getElementById('userName');
        const userAgeInput = document.getElementById('userAge');
        userNameInput.value = '';
        userAgeInput.value = '';

    } catch (error) {
        showMessage('Error clearing data.', 'error');
    }
}

// Function to delete a specific user
function deleteUser(userId) {
    try {
        const existingUsers = localStorage.getItem('users');
        if (existingUsers) {
            let users = JSON.parse(existingUsers);
            const updatedUsers = users.filter(user => user.id !== userId);

            localStorage.setItem('users', JSON.stringify(updatedUsers));
            showMessage('User deleted successfully.', 'success');
            displayAllUsers(updatedUsers);
        }

    } catch (error) {
        showMessage('Error deleting user.', 'error');
    }
}

// Function to display messages
function showMessage(message, type) {
    hideMessages();

    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    if (type === 'error') {
        document.getElementById('errorText').textContent = message;
        errorMessage.style.display = 'block';
    } else if (type === 'success') {
        document.getElementById('successText').textContent = message;
        successMessage.style.display = 'block';
    }
}

// Hide messages function
function hideMessages() {
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
}

// Function to demonstrate DOM selection
function demonstrateDOMSelection() {
    const elementById = document.getElementById('userName');
    const elementByQuery = document.querySelector('#userName');
    const allInputs = document.querySelectorAll('input');
    const allButtons = document.getElementsByTagName('button');

    console.log('getElementById:', elementById);
    console.log('querySelector:', elementByQuery);
    console.log('querySelectorAll inputs:', allInputs);
    console.log('getElementsByTagName buttons:', allButtons);
}