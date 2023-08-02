Introduction:
-------------

This exercise is designed to test your skills in building a simple blog application using TypeScript, Next.js, tRPC, Prisma, and Planetscale. The objective is to assess your ability to set up a project, work with various technologies, and implement basic CRUD operations.

Tech Stack:
-----------

-   TypeScript
-   Next.js
-   tRPC
-   Prisma
-   Planetscale

Setup Instructions:
-------------------

1.  Fork the repository.
2.  Install the required dependencies by running `npm install`.
3.  setup a Database at planetscale.
4.  Configure the database connection in the `.env` file with your Planetscale credentials.
5.  Set up the Prisma schema for the blog post and migrate to the database.
6.  Run `npx prisma studio` and pre-populate your DB with data.
7.  Run the development server using `npm run dev`.

Task Details:
-------------

You will be building a basic blog application with the following features:

1.  Homepage:

    -   Display a list of all blog posts with their titles and creation dates.
    -   Clicking on a blog post should navigate to its detail page.
2.  Blog Post Detail Page:

    -   Display the full content of the selected blog post.
3. BONUS EXCERCISE Create Blog Post Page:

    -   Provide a form to allow users to create a new blog post.
    -   Implement client-side form validation to ensure the title and content are not empty.
4.  Backend API:

    -   Use tRPC to create the API endpoints for fetching all blog posts and fetching a single blog post by its ID.

Implementation Guidelines:
--------------------------

1.  Project Structure:

    -   Follow a clean and organized project structure.
    -   Separate components, pages, and services for better code readability.
2.  TypeScript:

    -   Utilize TypeScript types for improved code safety and documentation.
    -   Use interfaces and types for API responses and data models.
3.  Next.js:

    -   Utilize server-side rendering (SSR) and static site generation (SSG) where appropriate.
    -   Use Next.js features such as dynamic routing.
4.  Prisma:

    -   Define the "BlogPost" model in the Prisma schema with appropriate fields.
    -   Use Prisma to interact with the database and implement CRUD operations.
5.  Planetscale:

    -   Set up the database connection and credentials in the `.env` file.
    -   Use Planetscale to deploy and manage the application data.

Submission Guidelines:
----------------------

1.  Commit your code to a GitHub repository.
2.  Include a detailed README with instructions on how to set up and run the application.
3.  Provide comments and documentation for important functions and components.
4.  Submit the GitHub repository URL along with your completed exercise.

Additional Notes:
-----------------

Feel free to reach out if you have any questions or need clarification on the exercise. We're looking forward to seeing your implementation!
Also feel free to use any kind of library outside the given ones that you prefer. 

Good luck and happy coding!
