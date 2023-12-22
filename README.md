# Simple Customer Support Platform - Backend

This backend component is designed for a straightforward customer support platform. It includes the handling of support requests, user management, and basic testing functionality. The goal is to keep things simple and focused on the specified requirements.

## Requirements

1. **Support Request Form**
   - Customers submit support requests through a form.
   - Fields: First name, Last name, Email address, Support message title, Support message text, File (single upload).

2. **Database Structure**
   - Users table with fields: `ID`, `Email Address`, `Full name`.
   - Support Requests table linked to Users: A support request can belong to only one user.

3. **Testing**
   - Tests to handle support request submission.
   - Verify successful submission and persistence of support request data.
   - Ensure linking of multiple support requests to the same user via email.
   - Confirm successful upload and storage of files.

4. **Database Diagram**
   - Utilize a database diagram tool to illustrate table relationships, indexes, and foreign keys.

## Usage
    Find the getedodb.sql file in the root directory of the project and upload to MYSQL PHPAdmin.

1. **Installation**
   ```bash
   npm install
2. **start**
   ```bash
    node ace serve --watch