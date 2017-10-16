---
layout: post
status: publish
published: true
title: apcupsd asentaminen Debianiin
image:
  file: /assets/img/posts/apc-back-ups-es-be700g.jpg
image_text: APC Back-UPS ES BE700G
author: Jarkko Tervonen
date: '2015-01-28 07:45:33 +0200'
date_gmt: '2015-01-28 05:45:33 +0200'
categories:
- Ohjelmat
tags: []
comments: []
---
Puolitoista sitten muuton jälkeen sähköt pätkivät jostain syystä useamman kerran viikossa. Hommasin kotipalvelimelle UPSin mallia [APC Back-UPS ES BE700G](http://www.apc.com/resource/include/techspec_index.cfm?base_sku=BE700G-GR), jolla hintaa oli noin satasen verran. Varakäyntiaikaa täydellä kuormalla luvataan vajaan neljän minuutin ajan, mikä on ainakin tälle perukalle tarpeeksi.

APC:n UPS täytti tarpeet pakasta vedettynä perusasetuksilla eli akku paikoilleen ja laatikko koneen ja seinäpistokkeen väliin. Nyt tässä siivoillessa mietin mitä muuta tuolla UPSilla voisi tehdä. Älyähän siinä ei ole mutta sitä voisi saada asentamalla Debianin [`apcupsd`-daemonin](http://www.apcupsd.org/). Asentaminen oli helppoa. Kytketään UPSin datakaapeli koneen USB-porttiin. Tämän jälkeen Debianiin asennetaan `apcupsd`-paketti

```
$ sudo apt-get install apcdupsd
```

Tämän jälkeen muokataan `/etc/apcupsd/apcupsd.conf` tiedostoon seuraavat rivit

```
UPSCABLE usb
UPSTYPE usb
DEVICE
```

Eli `DEVICE` jätetään tyhjäksi. Lisäksi kerrotaan `/etc/default/apcupsd` tiedostossa, että konfigurointi on suoritettu.

```
ISCONFIGURED=yes
```

Nyt enää tarvitsee käynnistää `apcupsd`-daemon komennolla

```
$ sudo service apcupsd start
```

Perusasetuksillaan `apcupsd` ei tee muuta kuin logittaa UPSin toimintaa `/var/log/apcupsd.events`-tiedostoon. Sähkökatkos näkyy seuraavanlaisena merkintänä logitiedostossa.

```
2015-01-27 15:12:54 +0200  apcupsd 3.14.10 (13 September 2011) debian startup succeeded
2015-01-27 18:13:20 +0200  Power failure.
2015-01-27 18:13:26 +0200  Running on UPS batteries.
2015-01-27 18:13:27 +0200  Mains returned. No longer on UPS batteries.
2015-01-27 18:13:27 +0200  Power is back. UPS running on mains.
```

Tarkemmat säädöt tehdään sitten seuraavalla kerralla. Ehkä parin vuoden päästä.
