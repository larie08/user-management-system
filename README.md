# User Management System
## IntroductionLinks to an external site.
A full-stack application for managing user accounts with features like email sign-up, verification, authentication, role-based authorization, and CRUD operations.

## Members and Roles

Backend:
backend-signup-auth -> Rubi, Larie Jane
backend-authorization-crud -> de Luna, Maria Alexa H.

Frontend:
frontend-signup-auth -> Cornelio, Cedric E.
frontend-profile-admin-fake-backend -> Calderon, Marianne Mae

Testers:
tester-functional-testing -> Cornelio, Cedric E.
tester-security-testing -> Calderon, Marianne Mae

## Clone the repository:
git clone https://github.com/larie08/user-management-system.git to an external site.

## Intializing the Project

1. Install dependencies:
npm install bcryptjs
npm install body-parser
npm install cookie-parser
npm install cors   
npm install express
npm install express-jwt
npm install joi
npm install jsonwebtoken
npm install nodemailer
npm install swagger-ui-express
npm install yamljs

Start the backend server:
npm start

Start the Angular app:
ng serve

Usage:
Register a new account at /accounts/register.
Verify your email using the link sent to your inbox.
Log in at /accounts/login.

Testing: 
Functional testing results: https://ethereal.email/messages
Security testing results: https://ethereal.email/messages

## Documentation

**Developer 1: Backend Signup Authentication
1. Overview:
Implement the /accounts/register, /accounts/verify-email, and /accounts/authenticate routes in the Node.js boilerplate.

Key Features: 
- Email-based registration with Joi validation. 
- Password hashing using bcryptjs.
- JWT token generation for email verification.
- Ethereal Email integration for testing.

Step-by-step flow
1. Register
   Endpoint: POST /accounts/register
   Validates user input (email, password) with Joi.
   Hashes password using bcryptjs.
   Sends verification email via nodemailer with JWT token.
   ![image](https://github.com/user-attachments/assets/ecebaa7e-410f-4148-aae5-1194c358c713)
   ![image](https://github.com/user-attachments/assets/629caa83-1495-4f0a-bbf5-f8754cbccf92)

   
3. Email Verification
   User clicks link in Ethereal email (e.g., GET /accounts/verify?token=<JWT>).
   Backend verifies token and updates isVerified: true in DB.
   ![image](https://github.com/user-attachments/assets/c35bfc86-a416-4fbc-aac5-330dcfe55940)
   ![image](https://github.com/user-attachments/assets/a4f0b815-e7f7-4a2f-8ce6-0262af7f019f)

4. Authenticate
   Endpoint: POST /accounts/login
   Returns JWT session token upon successful login.
   ![image](https://github.com/user-attachments/assets/21b46d3f-d1ef-47a8-90d8-b701d075c892)
   ![image](https://github.com/user-attachments/assets/6c028d94-0da5-4d00-bc20-733339ed1759)
   ![image](https://github.com/user-attachments/assets/722e35b5-677d-4a4b-b9fb-548fbdd3a579)

6. Account Management
   Get all accounts
   Get Account by ID: GET /accounts/{id} (protected by JWT).
   ![image](https://github.com/user-attachments/assets/ddc37418-7390-44d2-9799-47dda33064ab)
   ![image](https://github.com/user-attachments/assets/24ec0563-372f-464a-be9d-df175c6437dc)
   

License
MIT License

---
### **Best Practices**
1. **Commit Often:** Make small, frequent commits with clear messages to track progress.
2. **Use Descriptive Branch Names:** Name branches based on their purpose.
3. **Review Code Before Merging:** Always review pull requests to ensure code quality.
4. **Keep Branches Updated:** Regularly pull changes from `main` to avoid large conflicts.
5. **Communicate with Your Team:** Use GitHub issues or comments to discuss tasks and updates.
---
