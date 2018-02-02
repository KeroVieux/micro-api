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

### insert db
- routes/users/index.js
- postman post post localhost:3000/users {"name": "Jobs", "birthyear": 1962, "email": "admin@qq.com"}

### findOne db
- routes/users/index.js
- postman post get localhost:3000/users?id=kn1mPY4tEXo4uP5P {"name": "Jobs", "birthyear": 1962, "email": "admin@qq.com"}

### find db
- routes/users/find.js
- postman post post localhost:3000/users {"name": "Jobs"}
