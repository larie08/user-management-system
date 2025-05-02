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

**Developer 2: Role-Based Authorization, Forgot Password, and CRUD**

1. Overview: 
Implement the /accounts/forgot-password, /accounts/reset-password, and CRUD routes (/accounts, /accounts/{id}) in the Node.js boilerplate.

Key Features: 
- Role-Based Authorization controls access through distinct roles (Admin or User) which determine different authorization levels.
- The system enables users to request password resets and then change their passwords through valid reset tokens.
- The system allows administrators to perform CRUD operations for user account management but restricts users to only managing their personal accounts.

2. Forgot Password and Reset Password

Forgot Password:
- Users can request password resets through the /accounts/forgot-password endpoint after entering their email address. A reset token gets automatically sent to the user's email address.
- ![image](https://github.com/user-attachments/assets/e7e782a2-c739-4676-8a64-821454075b00)
- ![image](https://github.com/user-attachments/assets/f28a7683-2134-401a-a84f-a0f81631edb6)
- ![image](https://github.com/user-attachments/assets/1e3fc7a6-22ea-4a6d-a477-0c02f1ee6590)
- ![image](https://github.com/user-attachments/assets/3085b7f6-89d9-4674-8064-70af5d3382cb)

Endpoint: /accounts/forgot-password
- The user submits their email address to the system.
- The system creates a reset token when the email address exists and stores this token in the database with a 24-hour expiration period.
- The system delivers a reset password email to the user containing the reset token.

Reset Password:
- Users can use the /accounts/reset-password endpoint to change their passwords through submission of a valid reset token and their chosen new password.
- ![image](https://github.com/user-attachments/assets/9c2db2fe-313f-44a4-84cf-d4f680b11c54)

Endpoint: /accounts/reset-password
- The system requires a correct reset token from the user.
- The system allows password reset when the token remains valid since it has not reached expiration or been revoked. The system requires users to enter a new password at this point.
-The password update occurs simultaneously with the removal of the reset token from the user's account records.

Example of forgot-password: 
![image](https://github.com/user-attachments/assets/e939b39a-ce00-4c9f-86a8-e262932e478f)

Example of request-password: 
![image](https://github.com/user-attachments/assets/34015fb2-e3a8-466c-b829-acf67500cfd0)
![image](https://github.com/user-attachments/assets/4b191a0d-5c4f-468f-873e-7a0f33f552d2)


3. CRUD 
The system implements CRUD operations to handle user account management functions including: (Get  all users, Get user by ID , Create new user, Update user information, Delete user account)

Get All Users:
- The system allows Admin users to obtain all existing accounts within the system.
- The endpoint  for this request is /accounts.
- Only Admin users can access this route.
- The API returns a list  containing basic information for all users.
- ![image](https://github.com/user-attachments/assets/82e0e4bf-1142-4612-9917-06670e60bfd6)
- ![image](https://github.com/user-attachments/assets/e9e7126f-c5ec-4695-aa91-594933158220)

Get User by ID:
- The system allows users to access their profile  data while also permitting administrators to view any user profile.
- The endpoint for this request is  /accounts/{id}
- ![image](https://github.com/user-attachments/assets/a8b435c9-d836-4eab-be97-d162c8ee2714)
- ![image](https://github.com/user-attachments/assets/1585618b-3e6d-4d4c-9b86-561ef2224002)

Users who access their own accounts will succeed but Admins can view accounts belonging to any user.
-The account information is returned with basic details.

Create User:
- The system allows Admin users to establish  new user accounts through submission of necessary user information.
- ![image](https://github.com/user-attachments/assets/c67ab91a-dfe1-4c90-8613-2ee2b6a49653)
- ![image](https://github.com/user-attachments/assets/c37def83-2da3-4c60-b01e-9c8b82bfe488)

Endpoint: /accounts
- The system allows Admins  to establish new accounts when they submit essential information which includes name and email address and password and role.
- The system registers new users through password hashing.

Update User:
- Users maintain the ability to modify their profile  information and Admins can modify any user profile.
- ![image](https://github.com/user-attachments/assets/9d3e751f-48c9-4251-942e-0f8cbf1490b4)
- ![image](https://github.com/user-attachments/assets/104f7ac2-e887-4fd9-85b0-1efceb4b635b)

Endpoint: /accounts/{id}
- Users maintain the  ability to modify their account information but cannot change their role.
- The Admins possess the authority to modify  user information while also having the ability to modify roles.
- ![image](https://github.com/user-attachments/assets/9ede45bc-3dcc-4e52-aa10-32b6d698eea7)

Delete User:
- Users maintain the ability to delete  their personal accounts but Admins can delete any account.
- ![image](https://github.com/user-attachments/assets/986e1c5a-b53b-47dc-a073-3e03d042cd84)
- ![image](https://github.com/user-attachments/assets/e1334d9a-541a-4fe9-a2bf-f09f62155990)

Endpoint: /accounts/{id}
- Users who  wish to delete their accounts along with Admins who can delete any account can do so.

Token: 
![image](https://github.com/user-attachments/assets/e76f6b0c-a3cb-40d4-b665-035a6a858314)
![image](https://github.com/user-attachments/assets/8057b50a-9bdf-4c85-a0a7-767780b45f7a)
![image](https://github.com/user-attachments/assets/759a0605-ec73-4c9a-8855-b104639b700c)
![image](https://github.com/user-attachments/assets/e1fd16f7-dfb0-4548-a19e-0c1b5ea40db7)

   

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
