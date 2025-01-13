FROM node:20

ENV TZ=Asia/Tokyo

# https://github.com/pnpm/pnpm/issues/8953
RUN apt-get update && \
    corepack enable && \
    corepack prepare pnpm@9.15.2 --activate
