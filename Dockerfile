FROM node

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN yarn
# If you are building your code for production
# RUN npm install --only=production


EXPOSE 3000
CMD [ "npm", "start" ]
