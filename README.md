# PC Bazar

## Project Links

### live site: https://pc-bazar.vercel.app/

### Github Repository: https://github.com/Robiulalam76/pc-bazar

## Features

1. This application is a PC builder app. On the homepage, there are categories, and when you click on a category, it shows products of that category. Then, there are some featured products with some information, and when you click a button, it shows the details of the product, and there's a review section for each product.

2. In the app's menu, there's a drop-down button called "Categories," which, when clicked, displays all categories, and selecting a category shows products in a separate route.

3. There's also a route named "PC Builder," where you can choose products based on categories and customize your PC. After selecting everything, there's a "Complete" button to finish building the PC.

4. Lastly, there's a "Sign In" button that takes you to the sign-in page, where you can log in via Google or with a gift option. If you're logged in, you won't see the "Sign In" button; instead, you'll see a "Lockout" button, and clicking "Lockout" will log you out.

## The application uses the following technologies and libraries:

1. Next.js: A popular React framework used for building server-side rendered and static websites.

2. Tailwind CSS: A utility-first CSS framework that allows for rapid UI development with pre-defined utility classes.

3. Redux: A state management library for managing the application's global state.

4. RTK Query: A data fetching and caching library for Redux Toolkit, used for handling API requests and data management.

5. Next.js server: The built-in server functionality provided by Next.js to handle server-side rendering and API routes.

6. Toast alert: A notification library used to display toast alerts or notifications to the user.

These technologies and libraries work together to create a powerful and efficient application for building PCs, allowing users to select components from various categories and customize their PC based on their preferences.

## How to Run the Project

To run the Next.js application on your local machine, follow the steps below:

## Installation

1. Install Node.js:

   Before setting up the PC builder application, make sure you have Node.js installed on your machine. Node.js is required to run the development server and install project dependencies.

   - Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS version suitable for your operating system (Windows, macOS, or Linux).
   - Run the Node.js installer and follow the installation instructions.

2. Clone the project repository to your local machine:

   Open a terminal or command prompt and run the following command:

   bash
   git clone <repository_url>

   Replace `<repository_url>` with the actual URL of the project repository.

3. Change directory to the project folder:

   Navigate into the project folder using the following command:

   bash
   cd <project_folder>

   Replace `<project_folder>` with the name of the project folder you cloned in the previous step.

4. Install the project dependencies using npm:

   Once you are inside the project folder, run the following command to install all the required dependencies:

   bash
   npm install

   This will download and install all the necessary packages and libraries required for the PC builder application.

5. Run the project:

   After the installation is complete, use the following command to start the development server and run the application locally:

   bash
   npm run dev

   The development server will be up and running, and you can access the PC builder application by visiting `http://localhost:3000` in your web browser.

With these detailed installation instructions, you should have successfully set up the PC builder application on your machine, including Node.js and all the required dependencies. Now you can explore and use the application for building PCs based on your preferences.
