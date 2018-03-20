docker run --privileged=true -it \
-w /usr/src/app \
-v `pwd`:/usr/src/app \
digitallyseamless/nodejs-bower-grunt:6 bash -c "npm install && bower --allow-root install && grunt all"

