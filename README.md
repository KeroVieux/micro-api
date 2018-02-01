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
- postman get localhost:3000/foos/id
