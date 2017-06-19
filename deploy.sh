#!/bin/sh
cd $1

if [ ! -f "deploy.lock" ]; then
  bundle install
  jekyll build
  rm -rf /var/www/jarkkotervonencom
  mkdir /var/www/jarkkotervonencom
  mv _site/* /var/www/jarkkotervonencom/
else
  echo "Deploy file exists"!
  exit
fi
