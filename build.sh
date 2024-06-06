docker rmi ehaakdl/movie-web:0.0.1

yarn build

docker build -t ehaakdl/movie-web .

docker login

docker push ehaakdl/movie-web:0.0.1