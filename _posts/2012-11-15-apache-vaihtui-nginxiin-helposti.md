---
layout: post
status: publish
published: true
title: Apache vaihtui Nginxiin helposti
image:
  file: /assets/img/posts/logo-nginx.png
  text: Nginx-logo
author:
  display_name: Jarkko
  login: Jarkko
  email: jarkko@splatweb.net
  url: http://jarkkotervonen.com/
date: '2012-11-15 23:36:51 +0200'
date_gmt: '2012-11-15 21:36:51 +0200'
categories:
- Netti
- Tekniikka
tags:
- php
- apache
- nginx
- php-fpm
- wordpress
comments: []
---
Olen jo jonkin aikaa miettinyt, että vaihdan [Apachen](http://www.apache.org/) webbiserverin omilta palvelimilta [Nginxiin](http://nginx.org/) ja alan tutustumaan sen käyttöön. Pari vuotta sitten sitä testasin hieman laihoin tuloksin. En vain saanut sitä toimimaan luotettavasti enkä muista enää miksi. Nginx (lausutaan Engine-X) on alunperin kehitetty venäläisen [Rambler-sivuston](http://www.rambler.ru/) pyörittämiseen. Nykyisin käyttö on laajentunut niin, että se on kolmanneksi suosituin www-palvelinohjelmistona. Nginxin etuna on nopeus ja se käyttää säästeliäästi resursseja.

Omalla palvelimella pyörii vain pari Wordpressillä toteutettua sivustoa ja muutamia omia testijuttuja, joten poistin vain Apachen ja laitoin Nginxin tilalle. Siirtymävaiheen voi kyllä tehdä myös niin, että laittaa Nginxin kuuntelemaan jotain toista kuin 80-porttia ja testaa asennuksen onnistumisen.

Nginx löytyy sieltä mistä muutkin uusimmat LAMP-paketit Debianille eli [Dotdebistä](http://www.dotdeb.org/). Asennus oli helppoa ja kaikki toimi ilman erityistä säätöä. Ainoastaan Wordpress-sivustojen Rewrite-säännöt piti kaivella netistä, mutta se oli helppo ja lyhyt muokkaus sivuston omaan asetustiedostoon eli:

```
if (!-e $request_filename) {
	rewrite ^(.+)$ /index.php?q=$1 last;
}
```

Lisäksi kannattaa asettaa palvelimelle muutamia rajoituksia. Esimerkiksi .ht, .git ja .svn -tiedostoja ei kannata jakaa. Ne estetään seuraavilla säännöillä:

```
location ~ /.ht {
	deny all;
}

location ~ /.git {
	deny all;
}

location ~ /.svn {
	deny all;
}
```

Suuria ongelmia tämän kanssa ei vielä ole ollut. Ainoastaan APC meinaa kaataa PHP-FPM:n, mutta sitä en vielä tarvitse. Katsotaan mitä tulee vastaan, kun vähän isompia sivuja siirrän tälle palvelimelle :-)
