# pull official base image
FROM node:lts

# CI mode true to never stop
ENV CI=true

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Setting the same user in docker and host
ARG USER_ID
ARG GROUP_ID

USER node
CMD ["bash", "-c", "npm install && npm start"]
