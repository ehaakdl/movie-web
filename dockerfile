FROM node:18.18.2-alpine3.18



# install simple http server for serving static content
# RUN yarn global add http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# 환경변수 복사한다(yarn preivew 시 자동으로 읽어들인다.)
COPY .env ./

# install project dependencies leaving out dev dependencies
RUN yarn

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY dist ./dist

EXPOSE 4173

CMD [ "yarn", "preview"]