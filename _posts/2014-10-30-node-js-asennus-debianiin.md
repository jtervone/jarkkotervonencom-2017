---
layout: post
status: publish
published: true
title: Node.js asennus Debianiin
image: /assets/img/posts/compiling-nodejs.jpg
image_text: Node.js:n kääntämistä
author: Jarkko Tervonen
date: '2014-10-30 21:27:38 +0200'
date_gmt: '2014-10-30 19:27:38 +0200'
categories:
- Ohjelmat
tags:
- debian
- node.js
- nodejs
comments: []
---
Harrasteprojektia varten piti alkaa muistelemaan, että miten se [Node.js](https://nodejs.org/) helpoiten asentuu Debian-purkkiin. Levyn kulmalta löytyi tekstitiedosto, johon olin merkkaillut seuraavanlaisen ohjeen.

```
$ sudo apt-get install python g++ make checkinstall
$ mkdir ~/node_js_src &amp;&amp; cd $_
$ wget -N http://nodejs.org/dist/node-latest.tar.gz
$ tar zxvf node-latest.tar.gz
```

Tämän jälkeen vaihda hakemiston versio numero muodosta v0.10.x muotoon 0.10.x eli vaikka `mv node-v0.10.33 node-0.10.33`. Tämän jälkeen vielä Node.js:n kääntäminen ja asentaminen:

```
$ cd node-0*
$ ./configure
$ sude checkinstall -D
$ sudo dpkg -i node_*
```

Siinäpä se sitten olisi.
