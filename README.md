# Micro service without jwt
## How to start
```
yarn
npm start_pm2
pm2 kill
```
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
- postman post localhost:3000/kittens {"name": "Jobs"}

### findById mongo
- routes/mongo/kittens.js
- postman get localhost:3000/kittens?id=5a75f02f32884e9a67299efa

### find All mongo
- routes/mongo/kittens.js
- postman get localhost:3000/kittens
