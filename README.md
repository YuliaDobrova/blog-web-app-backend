An application created at the Backend Bootcamp

1. Choose the right directory in terminal ending with /blog-web-app-backend (main)
2. Install dependencies: npm i
3. Create and fill in the file .env as in the example.
4. Start server: nodemon server.js

# Blog Backend Using Express

### Description
This uses Express.js to simulate a Database for a blog.

### Pre-requisites
 - Code editor (i.e. VSCode)
 - POSTman or Thunder Client (to run test queries)
 - NodeJS
 - Git & GitHub (to get this repository)


### How to Run

 - Clone this repository

 - Install all the dependencies (**npm i**)

 - Create a .env file which has the following contents:
 1. MONGO_URI - mongoDB atlas connection URL
 2. JWT_SECRET - a secret phrase that JWT will use to encrypt the tokens it will give to users.
 - Run the server (**cd backend** > **nodemon server.js**)
 
## Routes to Test
### Authorization

> Pass an object with your username and password in the **body** > **raw** (JSON) of the request.
> i.e. {"username": "test", "password": "test1234"}

 - http://localhost:4000/api/users/signup (POST)
 - http://localhost:4000/api/users/login (POST)

### CRUD Operations

> Pass an object with { title, author, description, likes, comments } in the **body** > **raw** (JSON) of the request.
##### Example Object
    {
	    "title":  "Test Post 1", 
	    "author":  "Test 1", 
	    "description":  "Testing Description", 
	    "likes":  10, 
	    "comments":  [
		    {"body":  "Test 1"}, 
		    {"body":  "Test 2"}, 
		    {"body":  "Test 3"}
		]
    }

 - http://localhost:4000/api/posts/ (POST a new post)
 - http://localhost:4000/api/posts/ (GET all posts)
 - http://localhost:4000/api/posts/:id (GET a specific post)
 - http://localhost:4000/api/posts/:id (PATCH/update a specific post)
 - http://localhost:4000/api/posts/:id (DELETE a specific post)
