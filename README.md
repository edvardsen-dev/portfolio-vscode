# Portfolio - VSCode

My portfolio looking like VSCode

## Getting Started

### Preequisite

- Docker / Docker Compose
- Node 20.x
- PNPM

### Step by Step

#### Step 1: Add `.env` file

Add an `.env` file in the root of the project. [.env.example](./.env.example) contains values you can use for local development.

#### Step 2: Run CMS

```
docker-compose -f docker-compose.dev.yaml up -d
```

_Note:_ The first time you run this command, it will create a new, empty docker volume. To populate it with dummy data for local development, refer to the section [Populate CMS with dummy data](#populate-cms-with-dummy-data). (This is only necessary the first time you setup the CMS)

#### Step 3: Install dependencies

```
pnpm install
```

#### Step 4: Run dev server

```
pnpm dev
```

### Populate CMS with Dummy Data

To populate the CMS with dummy data for local development:

1. **Start the CMS**  
   Run the CMS using the Docker command provided in the [Getting Started](#getting-started---dev) section above.

2. **Create an Admin Account**  
   Open your browser and go to [localhost:8080/\_/](http://localhost:8080/_/).  
   You’ll be prompted to create an admin account. Use any email and password. (They will be overwritten when you restore the dummy data)

3. **Upload the Dummy Data Backup**

   - Navigate to `Settings` → `Backups`.
   - Click the **Upload backup** button (it looks like a small cloud icon with an upward arrow).
   - Upload the [dummy.zip](./cms/dummy.zip) from this repo. You will see your uploaded zip in the list.
   - Click the restore button next to the uploaded backup.

4. **Log In with the Restored Admin Account**  
   After the backup is restored, you’ll be logged out automatically. The restored database includes an admin user with the following credentials:

   ```
   Email: admin@example.com
   Password: admin123456789
   ```

   You can continue using this account for local development, or change the credentials by:

   - Logging in with the above credentials.
   - Clicking your profile icon.
   - Navigate to **Manage Admins**.
   - Update the email and password as needed.

This will populate the CMS with pre-filled dummy content you can use while developing.

## Deployment

A workflow file is defined in [.github/workflows/deploy.yaml](.github/workflows/deploy.yaml). This builds and deploys the app automatically when changes are pushed to the main branch.
