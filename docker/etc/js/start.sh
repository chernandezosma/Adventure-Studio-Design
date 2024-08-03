#!/bin/zsh

#useradd -s /bin/bash -m vscode
#groupadd docker
#usermod -aG docker vscode
#
#chown -R vscode:docker /app

echo "Launching the project..."
npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent
npm start
