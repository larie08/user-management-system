# Deployment Guide for User Management System

This guide will help you deploy your Node.js + MySQL backend and Angular frontend application using free services.

## Prerequisites
- GitHub account
- Render.com account (free tier)
- Netlify account (free tier)

## Step 1: Deploy Backend to Render.com

1. **Create a GitHub repository**
   - Push your entire project (including both frontend and backend) to GitHub
   - Make sure the render.yaml file is in the root directory of your repository

2. **Sign up for Render.com**
   - Go to https://render.com/ and sign up for a free account
   - Connect your GitHub account

3. **Deploy using Blueprint (Recommended)**
   - In Render dashboard, click "New" and select "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect the render.yaml file and configure your services
   - Review the configuration and click "Apply"
   - Select the free plan

4. **Alternative: Manual Web Service Setup**
   - If the Blueprint option doesn't work, click "New" and select "Web Service"
   - Connect your GitHub repository
   - Important: Set the Root Directory to "user-management-backend"
   - Configure the service:
     - Name: user-management-backend
     - Runtime: Node
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Select the free plan

4. **Add Environment Variables**
   - In the Render dashboard, go to your web service
   - Click on "Environment" tab
   - Add the following environment variables:
     ```
     NODE_ENV=production
     DATABASE_HOST=153.92.15.31
     DATABASE_USER=u875409848_rubi
     DATABASE_PASSWORD=9T2Z5$3UKkgSYzE
     DATABASE_NAME=u875409848_rubi
     DATABASE_PORT=3306
     JWT_SECRET=z3UG88nutkGpKUbjC6yz/g==
     PORT=10000
     ```

5. **Deploy the Backend**
   - Click "Create Web Service"
   - Wait for the deployment to complete
   - Note down the URL provided by Render (e.g., https://user-management-backend.onrender.com)

## Step 2: Deploy Frontend to Netlify

1. **Update API URL in Production Environment**
   - Open `src/environments/environment.prod.ts`
   - Replace `BACKEND_URL_PLACEHOLDER` with your Render backend URL:
     ```typescript
     export const environment = {
       production: true,
       apiUrl: 'https://user-management-backend.onrender.com' // Replace with your actual backend URL
     };
     ```

2. **Build the Angular Application**
   - Run the following command in the frontend directory:
     ```bash
     npm install
     ng build --prod
     ```
   - This will create a `dist` folder with your built application

3. **Sign up for Netlify**
   - Go to https://www.netlify.com/ and sign up for a free account
   - Connect your GitHub account

4. **Deploy to Netlify**
   - Click "New site from Git"
   - Select your GitHub repository
   - Configure the build settings:
     - Base directory: user-management-frontend
     - Build command: `npm install && ng build --prod`
     - Publish directory: user-management-frontend/dist/user-management-frontend
   - Click "Deploy site"

5. **Configure Redirects for Angular Routing**
   - Create a file named `_redirects` in the `src` folder with the following content:
     ```
     /* /index.html 200
     ```
   - This ensures that Angular's client-side routing works correctly on Netlify

## Step 3: Testing Your Deployed Application

1. **Access Your Frontend**
   - Go to the URL provided by Netlify (e.g., https://your-app-name.netlify.app)
   - Your application should be running and connected to the backend

2. **Verify Backend Connection**
   - Try logging in or performing other operations that require backend connectivity
   - Check browser console for any API connection errors

## Troubleshooting

1. **CORS Issues**
   - If you encounter CORS errors, update your backend CORS configuration to allow requests from your Netlify domain
   - In your server.js file, update the CORS configuration:
     ```javascript
     app.use(cors({ 
       origin: ['https://your-app-name.netlify.app', 'http://localhost:4200'],
       credentials: true 
     }));
     ```

2. **Database Connection Issues**
   - Ensure your MySQL server allows connections from external sources
   - Check that your database credentials are correctly set in environment variables

3. **Deployment Failures**
   - Check the deployment logs in Render and Netlify for specific error messages
   - Make sure all dependencies are correctly listed in package.json

## Alternative Free Hosting Options

If you encounter issues with Render or Netlify, here are some alternatives:

1. **Backend Alternatives**
   - Railway.app (free tier)
   - Fly.io (free tier)
   - Heroku (limited free tier)

2. **Frontend Alternatives**
   - Vercel (free tier)
   - GitHub Pages (free)
   - Firebase Hosting (free tier)

Remember that free tiers often have limitations like:
- Limited compute hours per month
- Automatic sleep after inactivity (cold starts)
- Bandwidth restrictions

For a student project, these limitations should not be a major concern.
