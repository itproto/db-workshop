# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.
# https://gist.github.com/garywu/6c01c97bcb4dd5a62d4f49abc75a412f
# jupyter/base-notebook 493 MB
# https://github.com/jupyter/docker-stacks/blob/master/base-notebook/Dockerfile
FROM jupyter/base-notebook
# jupyter/minimal-notebook 2 GB
# FROM jupyter/minimal-notebook

# RUN pip install --upgrade pip
# COPY start-notebook.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/start-notebook.sh

# Install Kernel Gateway
RUN pip install jupyter-kernel-gateway

# https://groups.google.com/g/jupyter/c/NIBgMV2wz1M
#   jupyter kernelgateway 
#    --KernelGatewayApp.api=notebook-http
#    --KernelGatewayApp.ip=0.0.0.0
#    --KernelGatewayApp.seed_uri='/home/jovyan/work/scotch_api_python.ipynb'
#    --KernelGatewayApp.port=9191 
#    start-notebook.sh
#    --NotebookApp.password='sha1:<some string>'
#    --NotebookApp.port=9090



# "start-notebook.sh", "--NotebookApp.port=9999", "--NotebookApp.token=''", "--NotebookApp.password=''", "--NotebookApp.notebook_dir=/srv/notebooks/", "--", 


# COPY ./docker-entrypoint.sh /
# ENTRYPOINT ["tini", "--", "/docker-entrypoint.sh"] 

# Configure container startup
# ENTRYPOINT ["tini", "--", "jupyter", "kernelgateway"]

# CMD [ \
#     "--KernelGatewayApp.api=notebook-http", \
#     "--KernelGatewayApp.port=7777", \
#     "--KernelGatewayApp.seed_uri=/srv/notebooks/hello.ipynb", \
#     "--KernelGatewayApp.allow_methods='GET, POST, PUT, DELETE'", \
#     "--KernelGatewayApp.allow_headers='accept, accept-language, content-type'", \
#     "--KernelGatewayApp.ip=0.0.0.0" \
#     ]

# # Add notebook served by the kernel gateway
# ADD hello.ipynb /srv/notebooks/

# # Run container as user jovyan
USER jovyan