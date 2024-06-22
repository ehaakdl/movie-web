docker rmi ehaakdl/movie-web

yarn build

docker build -t ehaakdl/movie-web .

docker login

docker push ehaakdl/movie-web