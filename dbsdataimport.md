Your `mongo-init.js` script covers the creation of a user with the desired username and password for the `eticket` database, which is a good start. However, to fully set up your MongoDB environment, you'll also need to include commands to create collections and insert initial data.

Here’s how you can expand your script to handle the full setup, including creating collections and importing data:

### Updated `mongo-init.js`

```js
// Read the administrative username and password from the environment variables
var adminUsername = process.env.MONGO_INITDB_ROOT_USERNAME
var adminPassword = process.env.MONGO_INITDB_ROOT_PASSWORD

// Connect to the "admin" database to authenticate
var adminDB = db.getSiblingDB('admin')
adminDB.auth(adminUsername, adminPassword)

// Switch to the desired database (e.g., "eticket")
var eticketDB = db.getSiblingDB('eticket')

// Create the user with the desired username and password
eticketDB.createUser({
  user: 'eticket',
  pwd: 'eticket',
  roles: [{ role: 'readWrite', db: 'eticket' }],
})

// Create collections if they do not exist
eticketDB.createCollection('buses')
eticketDB.createCollection('users')
eticketDB.createCollection('trips')

// Insert initial data from JSON files
// Ensure the JSON files are placed in a location that MongoDB can access (e.g., /tmp)
db.buses.insertMany(cat('/tmp/eticket.buses.json'))
db.users.insertMany(cat('/tmp/eticket.users.json'))
db.trips.insertMany(cat('/tmp/eticket.trips.json'))
```

### Steps to Prepare and Use the Updated Script

1. **Place the JSON Files**: Ensure that `eticket.buses.json`, `eticket.users.json`, and `eticket.trips.json` are in the `/tmp` directory in your MongoDB container.

2. **Update Dockerfile**: If you use a Dockerfile to build your custom image, make sure it copies the JSON files into the container:

   ```dockerfile
   FROM mongo

   COPY mongo-init.js /docker-entrypoint-initdb.d/
   COPY db /tmp/
   ```

3. **Build and Run the Docker Image**: Follow the previous steps to build and run the custom Docker image.

4. **Verify Initialization**: After starting the container, connect to MongoDB and verify that the collections and data are correctly imported:

   ```bash
   docker exec -it mongodb mongosh
   ```

   ```js
   use eticket
   db.buses.find().pretty()
   db.users.find().pretty()
   db.trips.find().pretty()
   ```

### Notes

- **Error Handling**: The `cat` function in the script is a placeholder for how to read JSON files in MongoDB. In practice, you might need to use `load()` or another method to read the contents of the files properly.
- **Permissions**: Ensure that the MongoDB container has the necessary permissions to read from `/tmp`.

By following these steps, you’ll ensure that your MongoDB instance is fully initialized with the necessary users, collections, and data.

### without any docker file and mongo-init.js file if container is named mongodb

- Copy data files into the container:

```bash
  docker cp ./db/eticket.buses.json mongodb:/tmp/eticket.buses.json
  docker cp ./db/eticket.routes.json mongodb:/tmp/eticket.routes.json
  docker cp ./db/eticket.users.json mongodb:/tmp/eticket.users.json
  docker cp ./db/eticket.trips.json mongodb:/tmp/eticket.trips.json
```

- Connect to the MongoDB container and import the data using mongoimport:

```bash
docker exec -it mongodb mongoimport --db eticket --collection buses --file /tmp/eticket.buses.json --jsonArray
docker exec -it mongodb mongoimport --db eticket --collection users --file /tmp/eticket.users.json --jsonArray
docker exec -it mongodb mongoimport --db eticket --collection trips --file /tmp/eticket.trips.json --jsonArray
docker exec -it mongodb mongoimport --db eticket --collection routes --file /tmp/eticket.routes.json --jsonArray
```

If authentication problem arise:

```bash
docker exec -it mongodb mongoimport --db eticket --collection buses --file /tmp/eticket.buses.json --jsonArray --username shashi --password 431721 --authenticationDatabase admin
docker exec -it mongodb mongoimport --db eticket --collection users --file /tmp/eticket.users.json --jsonArray --username shashi --password 431721 --authenticationDatabase admin
docker exec -it mongodb mongoimport --db eticket --collection trips --file /tmp/eticket.trips.json --jsonArray --username shashi --password 431721 --authenticationDatabase admin
docker exec -it mongodb mongoimport --db eticket --collection routes --file /tmp/eticket.routes.json --jsonArray --username shashi --password 431721 --authenticationDatabase admin
```

If you're still encountering issues, you might want to manually verify the database and collections:

Access MongoDB Shell:

```bash
docker exec -it mongodb mongosh --username shashi --password 431721 --authenticationDatabase admin
```

Verify Database and Collections:

```bash
use eticket
show collections
```

- Verify Data Import
  Once your containers are up and running, you can check if the data has been imported correctly by connecting to the MongoDB container:

```bash

docker exec -it mongodb mongosh
```

Then, within the MongoDB shell:

```bash
use eticket
show collections
db.buses.find().pretty()
db.users.find().pretty()
db.trips.find().pretty()
db.routes.find().pretty()
```

This will show you if your collections (buses, users, trips and routes) have been populated with data.

---

## another aproach to import data

Step-by-Step Guide for Building and Using a Custom Docker Image

1. Create the Dockerfile
   Create a Dockerfile in your project’s root directory with the following content:

```bash
# Use the official MongoDB image from the Docker Hub
FROM mongo

# Copy the initialization script to the container
COPY mongo-init.js /docker-entrypoint-initdb.d/

```

2. Prepare Initialization Script
   Make sure your mongo-init.js script includes the necessary commands to set up your database and collections.

3. Build the Docker Image
   In your terminal, navigate to the directory containing your Dockerfile and build the Docker image:

```bash
docker build -t custom-mongo .
```

custom-mongo is the tag you’re giving to your custom Docker image.

1. Run the Container Using Your Custom Image
   Start a container using the custom Docker image:

```bash

docker run --name mongodb -d -p 27017:27017 custom-mongo
```

--name mongodb assigns a name to your container.
-d runs the container in detached mode (in the background).
-p 27017:27017 maps port 27017 on your host to port 27017 on the container.
custom-mongo is the name of the Docker image to use. 5. Verify Initialization
After the container starts, you can connect to the MongoDB instance and check if your database and collections were created and populated as expected:

```bash
docker exec -it mongodb mongosh
```

In the MongoDB shell, you can verify the data as follows:

```bash
use eticket
db.buses.find().pretty()
db.users.find().pretty()
db.trips.find().pretty()
db.routes.find().pretty()
```

Benefits of This Approach
Automation: The initialization script runs automatically when the container is started, reducing manual steps.
Reusability: You can easily reproduce the environment by rebuilding and running the custom image.
Consistency: Ensures that the database initialization is consistent across different environments.

```bash
 docker run -d --name mongodb \
  -e MONGO_INITDB_ROOT_USERNAME=shashi \
  -e MONGO_INITDB_ROOT_PASSWORD=431721 \
  -p 27017:27017 mongo
```

```bash
mongosh --host localhost --port 27017 -u "shashi" -p "431721" --authenticationDatabase "admin"
```

Manually Create the Database:

If the eticket database is still not created, you can manually create it from mongosh by running the initialization commands directly:

````bash
use admin
db.auth("shashi", "431721")

use eticket
db.createCollection("buses")
db.createCollection("users")
db.createCollection("trips")
db.createCollection("routes")

```bash
  docker cp ./db/eticket.buses.json mongodb:/tmp/eticket.buses.json
  docker cp ./db/eticket.routes.json mongodb:/tmp/eticket.routes.json
  docker cp ./db/eticket.users.json mongodb:/tmp/eticket.users.json
  docker cp ./db/eticket.trips.json mongodb:/tmp/eticket.trips.json
````

// Insert data from JSON files (if manually copying them to /tmp)

```bash
db.buses.insertMany(load('/tmp/eticket.buses.json'))
db.users.insertMany(load('/tmp/eticket.users.json'))
db.trips.insertMany(load('/tmp/eticket.trips.json'))
db.routes.insertMany(load('/tmp/eticket.routes.json'))
```
