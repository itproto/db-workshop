FROM mongo

COPY init.json /init.json

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && mongoimport --host db --db reach-engine --collection MyDummyCollection --type json --file /init.json --jsonArray