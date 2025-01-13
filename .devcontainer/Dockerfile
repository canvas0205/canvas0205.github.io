FROM node:20

ENV TZ=Asia/Tokyo

RUN apt-get update && \
    corepack enable && \
    corepack prepare pnpm@latest --activate
