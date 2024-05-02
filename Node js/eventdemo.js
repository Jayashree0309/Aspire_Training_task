
var EventEmitter = require('events');

var emitter = new EventEmitter();


emitter.on('userLoggedIn', (username) => {
  console.log(`User ${username} logged in.`);
});

// Function to simulate user login
function loginUser(username) {
  console.log(`Logging in user ${username}...`);
  setTimeout(() => {
    console.log(`User ${username} logged in successfully.`);
    emitter.emit('userLoggedIn', username); // Emit 'userLoggedIn' event
  }, 5000);
}

// Simulate user login
loginUser('JohnDoe');
