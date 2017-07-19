#!/bin/sh

bundle install --path vendor/bundle
bundle exec jekyll build
scp -r _site/* pit.rcode.fi:/var/www/jarkkotervonencom/
