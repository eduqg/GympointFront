FROM node:10

RUN apt-get update

RUN apt-get install -y zsh

# Dependences to test with Cypress
RUN apt-get install xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

CMD ["zsh"]
