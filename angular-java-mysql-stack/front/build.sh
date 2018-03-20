docker run --privileged=true -it \
-p 3000:3000 \
-w /usr/src/app \
-v `pwd`:/usr/src/app:rw \
digitallyseamless/nodejs-bower-grunt:6 bash -c "npm install && bower --allow-root install && grunt all"

