docker run -v //c/ws/db-workshop/jupyter/book/:/home/jovyan/work:Z --user root -e CHOWN_HOME=yes -e CHOWN_HOME_OPTS='-R' -p 8888:8888 hello-jup
