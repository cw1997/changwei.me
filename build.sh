DOCKER_IMAGE_TAG="changwei1997/changwei.me"
docker build -t ${DOCKER_IMAGE_TAG} . && docker run -P --name changwei.me ${DOCKER_IMAGE_TAG}
