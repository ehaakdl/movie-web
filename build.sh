docker rmi ehaakdl/movie-web:1.0.0

yarn build

docker build -t ehaakdl/movie-web .

docker login

docker push ehaakdl/movie-web:1.0.0