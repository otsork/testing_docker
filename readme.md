# repository
Application that I did to try out docker and how it works.

## Running the app only
- "npm install"
- "npm start"
- open the browser in localhost:8000

## Making a docker image
- make sure you have docker running
- make sure you have a nodejs available
- "docker build ."
- "docker run -p {portYouWishToRunDockerIn}:8000 {dockerImageId}"
- open the browser in localhost:{portYouDefinedToRunDockerIn}
