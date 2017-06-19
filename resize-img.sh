#!/bin/bash

SOURCE=assets/img/posts/orig/*
TARGET=assets/img/posts/

for FILE in $SOURCE
do
  if [ ! -f ${TARGET}${FILE##*/} ]; then
    echo "Processing ${FILE##*/} file..."
    convert -resize "600x600>" ${FILE} ${TARGET}${FILE##*/}
  fi
done
