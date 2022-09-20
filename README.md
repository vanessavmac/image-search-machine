# image-search-machine

## Tech Stack
- MongoDB Atlas
- ExpressJS, NodeJS
- ReactJS

MERN project using the [Google Images API](https://serpapi.com/images-results). Users can enter a list of words and the application returns the top google image search results. Users can swap out images as needed and then download all the images at once, making the process of finding images for slide decks, graphics, and presentations more efficient.

## What I've Learned So Far
- How to securely connect using HTTPS and SSL to the Google Image API
- Make API calls using Axios and React hooks (useEffect, useState)
- Perform CRUD operations on MongoDB collection using Mongoose
- Configure router and API to connect backend (Express, Node, MongoDB) and frontend (React)

## In-Progress
- Fixing bug issue with the file download function (currently able to retrieve files and save locally; next use JSZip to zip files)
- Scrape website using Python to generate automatic citations
- User Analytics (e.g. track the number of times application is used)
- Implement google sign in so users can login and save their searches/image files

## Future Features/Applications of the Project
- While this project was initially created to help presentation makers gather quality images quickly, this project can also be repuposed to gether and label images to train an image classification model (connect python image classifier in the backend)
- Deploy project to production using Heroku.

## How to run the project
To run project locally, a [self-signed certificate](https://web.dev/how-to-use-local-https/) must be created.

1. Clone the repository
2. `cd backend`
3. `npm run backend:start`
4. `cd ../frontend`
5. `npm run frontend:start`

An Example Image Search:
![Screen Shot 2022-09-20 at 11 30 16 AM](https://user-images.githubusercontent.com/68434174/191300622-b0b4fd51-7035-472d-9ecb-1023c5b7359c.png)
