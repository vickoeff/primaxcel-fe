FROM node:lts-alpine as builder

WORKDIR /usr/src/app
COPY . .
RUN npm install 
RUN npm run build


FROM node:lts-alpine as runner
WORKDIR /usr/src/app
# COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

ENV PORT 3000
EXPOSE 3000
CMD ["npm", "start"]
