#!/bin/bash
set -e
start-notebook.sh --NotebookApp.port=9999 --NotebookApp.notebook_dir=/srv/notebooks/ &
jupyter kernelgateway --KernelGatewayApp.port=7777 --KernelGatewayApp.api=notebook-http --KernelGatewayApp.ip=0.0.0.0 --KernelGatewayApp.seed_uri=/srv/notebooks/hello.ipynb
echo "Hello World"
exec "$@"
