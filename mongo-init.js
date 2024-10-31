// Read the administrative username and password from the environment variables
var adminUsername = process.env.MONGO_INITDB_ROOT_USERNAME;
var adminPassword = process.env.MONGO_INITDB_ROOT_PASSWORD;

// Connect to the "admin" database to authenticate
var adminDB = db.getSiblingDB('admin');
adminDB.auth(adminUsername, adminPassword);

// Switch to the desired database (e.g., "eticket")
var eticketDB = db.getSiblingDB('eticket');

// Create the user with the desired username and password
eticketDB.createUser({
  user: 'eticket',
  pwd: 'eticket',
  roles: [{ role: 'readWrite', db: 'eticket' }],
});

// Create collections if they do not exist
eticketDB.createCollection('buses');
eticketDB.createCollection('users');
eticketDB.createCollection('trips');

// Insert initial data from JSON files
// Ensure the JSON files are placed in a location that MongoDB can access (e.g., /tmp)
eticketDB.buses.insertMany(JSON.parse(cat('/tmp/eticket.buses.json')));
eticketDB.users.insertMany(JSON.parse(cat('/tmp/eticket.users.json')));
eticketDB.trips.insertMany(JSON.parse(cat('/tmp/eticket.trips.json')));
