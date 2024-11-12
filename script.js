// Simulating a database using localStorage
const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];
const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));

// Add User
document.getElementById('addUserForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('add-username').value;
  const email = document.getElementById('add-email').value;

  const users = getUsers();
  const userExists = users.find(user => user.username === username);

  if (userExists) {
    alert('User already exists!');
  } else {
    users.push({ username, email, role: 'user' });
    saveUsers(users);
    alert('User added successfully!');
  }
  renderUserList();
});

// Update User
document.getElementById('manageUserForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('manage-username').value;
  const role = document.getElementById('manage-role').value;

  const users = getUsers();
  const user = users.find(user => user.username === username);

  if (user) {
    user.role = role;
    saveUsers(users);
    alert('User role updated successfully!');
  } else {
    alert('User not found!');
  }
  renderUserList();
});

// Delete User
document.getElementById('deleteUserForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('delete-username').value;

  let users = getUsers();
  const initialLength = users.length;
  users = users.filter(user => user.username !== username);

  if (initialLength === users.length) {
    alert('User not found!');
  } else {
    saveUsers(users);
    alert('User deleted successfully!');
  }
  renderUserList();
});

// Render User List
function renderUserList() {
  const users = getUsers();
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.username} - ${user.email} (${user.role})`;
    userList.appendChild(li);
  });
}

// Initialize User List on page load
renderUserList();
