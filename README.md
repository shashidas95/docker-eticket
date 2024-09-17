# React

-----frontend dev--------

-----frontend production------
npm install
npm run build
npm start

------for backend dev---------

```bash
yarn
```

```bash
yarn run dev
```

in this project server.ts is in a sub-folder src>server.ts so correct the package.json file

```bash
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  },
```

---

In postman create a new GET request to

```bash
http://localhost:7001/test
```

it responses like as output as

```bash
{
    "success": true,
    "message": "Api is working well"
}
```

then the api works well

--------for backend production------

```bash
yarn
```

```bash
yarn run build
```

yarn start

---

mongosh --username mongo_admin --password mongo_admin_password --host localhost --port 27017

```bash
mongosh
```

Open the MongoDB shell (mongosh) and switch to the admin database:

```bash
use admin
```

Create an admin user with a username and password:

```bash
db.createUser({
   user: "shashi",
   pwd: "431721",
   roles: [ { role: "root", db: "admin" } ]
})
```

```bash
use admin
db.getUsers()
```

output

admin> db.getUsers()

````bash{
  users: [
    {
      _id: 'admin.mongo_admin',
      userId: UUID('1c1f9ad4-eddb-4a01-ac7a-feb5f0e9cd7e'),
      user: 'mongo_admin',
      db: 'admin',
      roles: [
        { role: 'userAdminAnyDatabase', db: 'admin' },
        { role: 'dbOwner', db: 'eticket' }
      ],
      mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
    },
    {
      _id: 'admin.shashi',
      userId: UUID('995b154b-f009-47cf-a6b2-e3e3d3b59daf'),
      user: 'shashi',
      db: 'admin',
      roles: [ { role: 'root', db: 'admin' } ],
      mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
    }
  ],
  ok: 1
}


## Connect to mongo then create application database,user,password and import data

`mongosh --username mongo_user --password mongo_password --host localhost --port 27017`

Create Database via CLI or there is also have `mongo-init.js` initialization scrip create database during boot.\
`use eticket`

```bash
use eticket

db.createUser({
  user: "shashidas95",
  pwd: "shashi",
  roles: [{ role: "readWrite", db: "eticket" }]
})
````

---

Lists all the databases present in your MongoDB instance.\
`show dbs;`

Switches to the "eticket" database.\
`use eticket;`

Lists all the collections present in the current database.\
`show collections;`

Retrieves all documents from the "users" collection in the current database.\
`db.users.find()`

Inserts a new document into the "users" collection.\

```bash
db.users.insertOne({
  name: "shashidas",
  email: "shashidas95@gmail.com",
  password: "123456",
  role: "user",
})
```

different host addresses.

```bash
mongodb://shashidas95:shashi@mongo:27017/eticket?retryWrites=true&w=majority
```

Host: mongo
Port: 27017
Description:
This connection string is typically used when MongoDB is running inside a Docker container or on a host with a network alias named mongo. The hostname mongo is resolved to the container's IP address or the network alias within the Docker environment or network setup.

```bash
mongodb://shashidas95:shashi@localhost:27017/eticket?retryWrites=true&w=majority
```

Host: localhost
Port: 27017
Description:
This connection string is used when MongoDB is running on the local machine (localhost) at port 27017. This is suitable for a local MongoDB installation on your machine.
Use Case
Inside Docker: If you are running MongoDB inside a Docker container, you might use the

```bash
mongo
```

hostname to refer to it. Ensure that your application and MongoDB containers are on the same Docker network, and mongo should be the container name or alias.

Local Machine: If MongoDB is installed and running directly on your local machine, use

```bash
localhost
```

to connect to it.

Example Scenario
Docker Setup: In a Docker Compose setup where MongoDB is defined with the service name mongo, you would use

```bash
mongodb://shashidas95:shashi@mongo:27017/eticket?retryWrites=true&w=majority.
```

Local Setup: If you are running MongoDB directly on your machine, use

```bash
mongodb://shashidas95:shashi@localhost:27017/eticket?retryWrites=true&w=majority.
```

---

To insert JSON data from files into a MongoDB database,
Navigate to the folder containing the JSON files. If your files are in the db folder:

```bash
cd path_to_your_project/db
```

2. Prepare Your JSON Files

```bash
eticket.routes.json
eticket.buses.json
eticket.trips.json
eticket.users.json
```

Open your terminal and navigate to the directory where your JSON files are located.

```bash
mongoimport --db <database> --collection <collection> --file <file-path> --jsonArray
```

Example Commands

```bash
mongoimport --db eticket --collection routes --file eticket.routes.json --jsonArray
mongoimport --db eticket --collection buses --file eticket.buses.json --jsonArray
mongoimport --db eticket --collection users --file eticket.users.json --jsonArray
mongoimport --db eticket --collection trips --file eticket.trips.json --jsonArray
```

You can use mongosh to display the contents of the collections you have imported

```bash
mongosh
```

Then, in the MongoDB shell:

```bash
use eticket
db.routes.find().pretty()
db.buses.find().pretty()
db.trips.find().pretty()
db.users.find().pretty()
```

terminal output for refferences:

➜ ~ cd /opt/homebrew/etc/  
➜ etc git:(stable) ls -la
total 64
drwxrwxr-x 29 shashikantadas admin 928 Sep 17 17:34 .
drwxr-xr-x 33 shashikantadas admin 1056 Sep 17 17:30 ..
-rw-r--r-- 1 shashikantadas admin 0 Sep 30 2022 .keepme
drwxr-xr-x 12 shashikantadas admin 384 Sep 17 17:34 bash_completion.d
drwxr-xr-x 3 shashikantadas admin 96 Aug 24 19:34 ca-certificates
drwxr-xr-x 4 shashikantadas admin 128 Aug 24 19:34 dbus-1
drwxr-xr-x 4 shashikantadas admin 128 Sep 30 2022 fonts
-rw-r--r-- 1 shashikantadas admin 1154 Aug 24 19:39 freetds.conf
-rw-r--r--@ 1 shashikantadas admin 35 Sep 17 17:34 gitconfig
drwxr-xr-x 3 shashikantadas admin 96 Aug 24 19:35 gnutls
drwxr-xr-x 3 shashikantadas admin 96 Aug 24 19:35 gtk-3.0
drwxr-xr-x 8 shashikantadas admin 256 May 8 23:56 httpd
-rw-r--r-- 1 shashikantadas admin 370 Aug 24 19:39 locales.conf
-rw-r--r--@ 1 shashikantadas admin 222 Sep 16 20:23 mongod.conf
-rw-r--r--@ 1 shashikantadas admin 145 Sep 17 17:34 my.cnf
drwxr-xr-x 17 shashikantadas admin 544 Sep 17 18:49 nginx
-rw-r--r-- 1 shashikantadas admin 0 May 8 23:55 odbc.ini
-rw-r--r-- 1 shashikantadas admin 0 May 8 23:55 odbcinst.ini
drwxr-xr-x 11 shashikantadas admin 352 Jun 22 11:13 openldap
drwxr-xr-x 8 shashikantadas admin 256 Jun 22 11:16 openssl@1.1
drwxr-xr-x 12 shashikantadas admin 384 Sep 16 19:54 openssl@3
-rw-r--r--@ 1 shashikantadas admin 37 Sep 11 15:36 paths
drwxr-xr-x 5 shashikantadas admin 160 May 8 23:56 php
drwxr-xr-x 3 shashikantadas admin 96 Aug 24 19:35 pkcs11
-rw-r--r-- 1 shashikantadas admin 396 Aug 24 19:35 pkcs11.conf.example
-rw-r--r-- 1 shashikantadas admin 219 Aug 24 19:39 pool.conf
drwxr-xr-x@ 4 shashikantadas admin 128 Sep 17 17:34 profile.d
drwxr-xr-x 3 shashikantadas admin 96 Aug 24 19:35 unbound
drwxr-xr-x@ 4 shashikantadas admin 128 Sep 17 17:33 xdg
➜ etc git:(stable) code .

then

➜ etc git:(stable) cd ~
➜ ~ brew services restart mongodb-community@7.0
Stopping `mongodb-community`... (might take a while)
==> Successfully stopped `mongodb-community` (label: homebrew.mxcl.mongodb-community)
==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-community)
➜ ~ mongosh
Current Mongosh Log ID: 66e9825d0ce637d1a338032f
Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1
Using MongoDB: 7.0.14
Using Mongosh: 2.3.1

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

---

The server generated these startup warnings when booting
2024-09-17T19:21:25.405+06:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted

---

test> use admin
switched to db admin
admin> show dbs
admin 180.00 KiB
config 72.00 KiB
eticket 208.00 KiB
local 72.00 KiB
Log in with the New Admin Credentials
Open mongosh and authenticate using the new credentials:

---

Login with newly created admin user and password

```bash
mongosh
use admin
db.auth('shashi', '431721')
```

Disable authentication (for development purposes only)
Edit your MongoDB configuration file (mongod.conf) to disable authentication:
Locate the file (usually at /etc/mongod.conf on Linux or /opt/homebrew/etc/mongod.conf on macOS if installed via Homebrew).
Look for the following lines and comment them out or remove them:

```bash
security:
  authorization: "enabled"
```

After editing, restart MongoDB with:

```bash
brew services restart mongodb/brew/mongodb-community
```
