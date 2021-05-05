# abb-backend

A basic backend that constantly feeds randomized parts to the frontend via WebSockets 

## Run (then run front-end to start app logic)

```
npm install
npm start
```

## Requirements
- NodeJS v16.0.0
- npm 7.10.0

### About

Considering the assignment is basically a front-end exercise I tried to imagine if I were developing a backend for this project what might it look like.
The back-end is pretty minimal, but should provide enough insight into my approach as a backender.  For now, it only generates random Parts and sends
them to another front-end application using WebSockets every 2 seconds.  Ideally, the front-end would receive the data, process the deviation in the
measurments and then display the info dynamically, but I chose not to invest my time into that.  I did however spin up a quick [front-end](https://github.com/louis-sanchez/abb-frontend) app just to test the communication
between servers is successful.  

### If I had more time I would ...

- Finish the frontend
- Write some tests (although we could also write these together in a followup interview!)
- Dockerize

## Feedback

- The assignment is very vague and is missing key information such as what type of sample data should be used, but I am guessing that is not the
important part of the exercise.

- This is *not* a backend test!  I definitely recommend ABB find a seperate way to challenge NodeJS backenders.  If I had more direction on how to create the backend I could have
gotten more done in less time.  
