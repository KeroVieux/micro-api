# Micro service without jwt
## How to start
```
yarn
yarn start
```

## deploy via docker
### prepare for docker
1. Dockerfile
2. .dockerignore

### build && run the image
`docker build -t "kero2333/micro-api" . && docker run -p 3000:3000 -d kero2333/micro-api`

## open page
`curl localhost:3000/foo/get`


## Guide
### query
- routes/foo/get.js
- postman get localhost:3000/foo/get?queryString=something
### json
- routes/foo/post.js
- postman post localhost:3000/foo/post ({ a: 1, b: 2 })
### params
- routes/foos/:id.js
- postman get get localhost:3000/foos/id

### insert mongo
- routes/mongo/kittens.js
- postman post localhost:3000/mongo/kittens {"name": "Jobs"}

### findById mongo
- routes/mongo/kittens.js
- postman get localhost:3000/mongo/kittens?id=5a75f02f32884e9a67299efa

### find All mongo
- routes/mongo/kittens.js
- postman get localhost:3000/mongo/kittens
