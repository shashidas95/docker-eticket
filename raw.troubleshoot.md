Your Dockerfile looks well-configured for building a MongoDB image with initialization support. Here's a breakdown of the relevant sections:

1. **Environment Variables and APT Repository Setup**:

   - You set up environment variables for MongoDB package and repository information.
   - The `RUN` command adds the MongoDB repository to your APT sources list and installs MongoDB.

2. **Initialization Script**:

   - The line `COPY ./mongo-init.js /docker-entrypoint-initdb.d/` copies your `mongo-init.js` file into the `/docker-entrypoint-initdb.d/` directory within the image. This is where MongoDB looks for initialization scripts.

3. **Entrypoint and CMD**:
   - The `ENTRYPOINT` line specifies the script that will run when the container starts.
   - The `CMD` line specifies the default command (`mongod`) to run MongoDB.

### To Verify Your Image Build and Initialization

1. **Inspect the Image**:
   After building your image, you can use the `docker history` command to check the layers and ensure that `mongo-init.js` is included:

   ```bash
   docker history mongo-img
   ```

   Look for the `COPY ./mongo-init.js /docker-entrypoint-initdb.d/` layer.

2. **Run a Container and Verify**:
   Start a container and check if `mongo-init.js` is in the correct directory:

   ```bash
   docker run -it --rm mongo-img sh
   ls /docker-entrypoint-initdb.d/
   ```

   Ensure that `mongo-init.js` is present.

3. **Check MongoDB Logs**:
   Start a container with MongoDB and then check the logs to see if the initialization script was executed:

   ```bash
   docker run -d --name my-mongo mongo-img
   docker logs my-mongo
   ```

   Look for any output related to the execution of `mongo-init.js`.

4. **Test Initialization**:
   Connect to the running MongoDB instance to verify that the initialization script did what you expected:

   ```bash
   docker exec -it my-mongo mongo
   ```

   Inside the MongoDB shell, check for any changes or initializations made by your script.

5. **Rebuild and Retest**:
   If necessary, make changes to `mongo-init.js` or your Dockerfile, rebuild the image, and test again.

```bash
   docker build -t mongo-img .
```

By following these steps, you can confirm that your MongoDB Docker image is set up correctly and that your initialization script is functioning as intended.

Verify Dockerfile and Entrypoint Script: Ensure that the docker-entrypoint.sh script is correctly set up to start MongoDB and that it doesn’t contain any errors. Make sure it is executable:

```bash
chmod +x docker-entrypoint.sh
```

Run MongoDB Manually: You can try running MongoDB manually inside the container to see if it starts properly:

```bash
docker run -it --rm mongo-img mongod
```
