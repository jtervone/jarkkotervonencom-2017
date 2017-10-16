---
layout: post
status: publish
published: true
title: Varmistettua turvaa Let's Encryptin sertifikaateilla
image:
  file: /assets/img/posts/macbook-air.jpg
  text: Macbook Air
author: Jarkko Tervonen
date: '2016-03-30 21:33:01 +0300'
date_gmt: '2016-03-30 18:33:01 +0300'
categories:
- Netti
tags:
- nginx
- wordpress
- let's encrypt
- https
- ssl
comments: []
---
Jokin aika sitten Google on alkanut suosimaan hakutuloksissa suojattuja yhteyksiä tarjoavia sivustoja. Aluksi tämä hieman kauhistutti, koska SSL-sertifikaatit olivat melko hintavia. Pian markkinoille ilmaisia sertifikaatteja saapui tarjoamaan Let's Encrypt, jota rahoittavat monet nettibisneksessä olevat tahot.

Muista sertifikaateista Let's Encryptin sertifikaatit eroavat sillä, että ne ovat voimassa vain 90 päivää kerrallaan. Lisäksi sertifikaattia tehdessä ei varmisteta domainin haltijaa muuten kuin, että Let's Encrypt pystyy lukemaan vahvistuskoodin domainista.

Monet tietysti pitävät lyhyttä voimassa oloaikaa pitkänä miinuksena, mutta olen toista mieltä. Lyhyt voimassa oloaika lisää turvaa, jos sertifikaatin privaattiavain joutuu vääriin käsiin. Lisäksi automatisoitu uusiminen on helppo toteuttaa ainakin Linux-purkeille.

Tässäpä ohjeet miten saat helposti Wordpress-sivustosi Let's Encryptin sertifikaatilla suojatuksi.

Lataa Let's Encrypt clientti Githubista

```
cd /opt/
sudo git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
sudo ./letsencrypt-auto --help
```

Luo sertifikaatti haluamallesi domainille suorittamalla seuraavat komennot sekä seuraamalla ohjeita.

```
sudo ./letsencrypt-auto certonly -a webroot --webroot-path=/var/www/example.com -d example.com -d www.example.com
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

Lisää nginxin asetuksiin normaaleille http-yhteyksille redirect samaan URLiin https-yhteyttä käyttäen. Lisäksi lisää https-yhteydelle asetukset ellei niitä jo ole.

```
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$host$request_uri;
}

server {
	listen 443 ssl;

	ssl on;
	ssl_certificate      /etc/letsencrypt/live/example.com/fullchain.pem;
	ssl_certificate_key  /etc/letsencrypt/live/example.com/privkey.pem;

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

	ssl_ciphers "ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES256-GCM-SHA384:AES128-GCM-SHA256:AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!MD5:!PSK:!RC4";

	ssl_prefer_server_ciphers on;
	ssl_dhparam /etc/ssl/certs/dhparam.pem;

	root /var/www/example.com;
	index index.php index.html index.htm;

	server_name example.com www.example.com;

	location / {
		try_files $uri $uri/ /index.php;
	}

	location ~ /\.ht {
		deny all;
	}

	location ~ \.php$ {
		fastcgi_split_path_info ^(.+\.php)(/.+)$;
		fastcgi_pass unix:/var/run/php5-fpm.sock;
		fastcgi_index index.php;
		fastcgi_read_timeout 3600;
		fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
		include fastcgi_params;
	}

	if (!-e $request_filename) {
		rewrite ^(.+)$ /index.php?q=$1 last;
	}

	access_log /var/log/nginx/https.example.com.access.log;
	error_log /var/log/nginx/https.example.com.error.log;
}
```

Tämän jälkeen lataa nginxin konfiguraatiot uudelleen komennolla

```
sudo /etc/init.d/nginx reload
```

Nyt voit lisätä vielä sertifikaatin uusimisen root-tunnuksen crontabiin komennolla

```
sudo crontab -e
```

Ja lisäämällä crontabiin rivit

```
30 2 * * 1 /opt/letsencrypt/letsencrypt-auto renew >> /var/log/le-renew.log
35 2 * * 1 /etc/init.d/nginx reload
```

Sivusto pitäisi nyt toimia nätisti https:n yli paitsi Wordpress-sivuston linkit tulisi päivittää käyttämään https:ää. Se onnistuu ajamalla seuraavat komennot Wordpressin MySQL-kantaan.

```
UPDATE wp_options SET option_value = replace(option_value, 'http://example.com', 'https://example.com') WHERE option_name = 'home'OR option_name = 'siteurl';
UPDATE wp_posts SET guid = replace(guid, 'http://www.example.com','https://example.com');
UPDATE wp_posts SET post_content = replace(post_content, 'http://www.example.com', 'https://example.com');
UPDATE wp_postmeta SET meta_value = replace(meta_value,'http://www.example.com','https://example.com');
```

Parin minuutin homma. Ei ollenkaan vaikeaa.
