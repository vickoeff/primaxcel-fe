FROM node:lts-alpine as builder

WORKDIR /usr/src/app
COPY . .
RUN npm install 
RUN npm run build


FROM node:lts-alpine as runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static

ENV PORT 3000
EXPOSE 3000
CMD ["node", "server.js"]
