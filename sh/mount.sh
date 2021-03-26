docker run -v //c/ws/db-workshop/jupyter/book/:/srv/notebooks:Z --user root -e CHOWN_HOME=yes -e CHOWN_HOME_OPTS='-R' -p 7777:7777 -p 9999:9999 hello-jup
