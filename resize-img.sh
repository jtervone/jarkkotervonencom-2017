#!/bin/bash

SOURCE=assets/img/posts/orig/*
TARGET=assets/img/posts/

echo "===== Resize images ========================="
for FILE in $SOURCE
do
  if [ ! -f ${TARGET}${FILE##*/} ]; then
    echo "Processing ${FILE##*/} file..."
    convert -resize "1024x1024>" ${FILE} ${TARGET}${FILE##*/}
  fi
done

echo "===== Converting images into WebP .webp ====="
for x in `find assets/img/posts -type f \( -iname \*.jpeg -o -iname \*.jpg -o -iname \*.JPG -o -iname \*.png \)`
  do cwebp -quiet -q 80 ${x} -o ${x}.webp;
  echo "Converted $x to ${x}.webp"
done
