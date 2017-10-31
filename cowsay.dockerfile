FROM ubuntu:xenial
WORKDIR /app
RUN apt-get update \
    && apt-get install -y \
        cowsay \
        curl \
    && rm -rf /var/lib/apt/lists/*