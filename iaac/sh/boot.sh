      sudo yum -y update
      sudo yum install docker -y
      sudo service docker start
      sudo usermod -a -G docker ec2-user
      sudo docker run hello-world
      sudo curl -L https://github.com/docker/compose/releases/download/1.15.0/docker-compose-`uname -s`-`uname -m` > docker-compose
      sudo mv docker-compose /usr/local/bin/docker-compose
      sudo chmod +x /usr/local/bin/docker-compose
      sudo /usr/local/bin/docker-compose up --build -d //--scale web=2