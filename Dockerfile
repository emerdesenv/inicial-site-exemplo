FROM nginx:1.27-alpine

RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copia sua config nginx (caso queira personalizar)
COPY nginx.conf /etc/nginx/conf.d/site.conf

# Copia os arquivos da raiz do projeto para dentro do container
COPY . /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s CMD \
  wget -qO- http://168.138.129.255/ || exit 1