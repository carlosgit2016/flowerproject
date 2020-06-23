FROM nginx

ENV NODE_VERSION=12.18.1

RUN apt update && apt install -y xz-utils 

RUN curl -fsSLO https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz -o node-v${NODE_VERSION}-linux-x64.tar.xz \
    && tar -xJf node-v${NODE_VERSION}-linux-x64.tar.xz -C /usr/local \ 
    && ls -lha /usr/local/node-v${NODE_VERSION}-linux-x64  

ENV NODE_HOME=/usr/local/node-v${NODE_VERSION}-linux-x64
ENV PATH $NODE_HOME/bin:$PATH


WORKDIR /usr/share/nginx/server

COPY api.js /usr/share/nginx/server
COPY package.json /usr/share/nginx/server
COPY nginx.conf /etc/nginx/nginx.conf

RUN npm install

EXPOSE 3000

CMD ["node", "api.js"]