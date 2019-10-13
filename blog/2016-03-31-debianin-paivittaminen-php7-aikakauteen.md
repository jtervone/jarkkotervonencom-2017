---
title: Debianin päivittäminen PHP7 aikakauteen
image: ./images/compiling-nodejs.jpg
image_text: Node.js kääntäminen
author: Jarkko Tervonen
date: 2016-03-31 18:57:29
categories:
- Ohjelmat
tags:
- nginx
- debian
- jessie
- php7
---
Viime <a href="https://www.dotdeb.org/2015/12/04/php-7-0-0-is-available-for-jessie/">joulukuun alussa Dotdeb</a> alkoi tarjoilemaan <a href="http://www.php.net/">PHP7</a>:aa <a href="http://www.debian.org/">Debianin</a> 8.0 eli tuttavallisemmin Jessie-versioon. En ole vielä ehtinyt päivittelemään tätä omalle www-palvelimelle, kun minulla pyörii muutama vanhempi koodi. En ole testannut näiden toimivuutta PHP7:lla. Päivityksen lykkääminen on ollut turhaa, kun varsinkin nginxiä käyttäessä PHP:n version voi määritellä kätevästi saittikohtaisesti. Päivittäminen oli yllättävän helppoa.

Lisätään dotdeb.orgin repository `/etc/apt/sources.list`-tiedostoon.

```
deb http://packages.dotdeb.org jessie all
```

Seuraavaksi asennetaan dotdeb.orgin avain komennoilla

```
wget https://www.dotdeb.org/dotdeb.gpg
sudo apt-key add dotdeb.gpg
```

Seuraavaksi päivitetään pakettilistaukset ja asennetaan php7.0 komennoilla. Jos et muista mitä paketteja olet asentanut php5:lle niin voit tarkistaa ne komennolla `dpkg-query -l|grep -i php`.

```
sudo apt-get update
sudo apt-get install php7.0-fpm php7.0-curl php7.0-mcrypt php7.0-memcached php7.0-mysql
```

Debianin socketti php5-fpm:lle löytyy hakemistosta `unix:/var/run/php5-fpm.sock`. php7.0-fpm löytyy hakemistosta `unix:/var/run/php5-fpm.sock`. Eli nämä muutokset tulee tehdä nginxin asetuksiin. Itse olen tehnyt php-fpm versioille omat konfiguraatiotiedostot, jotka includoin tarvittavien saittien konfiguraatioissa. Tässä esimerkki php7.0-fpm.conf -tiedostostani.

```
location ~ \.php$ {
	fastcgi_split_path_info ^(.+\.php)(/.+)$;
	fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
	fastcgi_index index.php;
	fastcgi_read_timeout 3600;
	fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
	include fastcgi_params;
}
```

Tämän jälkeen ladataan nginxin konfiguraatiot uudelleen komennolla

```
sudo /etc/init.d/nginx reload
```

Seuraavaksi vain testailee sivut läpi ja nauttii uudesta nopeammasta PHP:stä.
