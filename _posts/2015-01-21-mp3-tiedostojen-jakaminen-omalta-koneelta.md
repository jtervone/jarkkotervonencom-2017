---
layout: post
status: publish
published: true
title: MP3-tiedostojen jakaminen omalta koneelta
image: /assets/img/posts/cd-levyt.jpg
image_text: CD-levyt
author: Jarkko Tervonen
date: '2015-01-21 18:40:25 +0200'
date_gmt: '2015-01-21 16:40:25 +0200'
categories:
- Ohjelmat
tags:
- cd
- mp3
- rippaus
- subsonic
- abcde
comments: []
---
Vuoden alusta päätin ottaa niskasta kiinni ja tyhjentään ikuisuusprojektilistan. Yksi näistä on CD-levyjen siirtäminen MP3:ksi ja löytää ratkaisu, miten niitä voi kuunnella muilla laitteilla helposti. Spotifyssä riittää kuunneltavaa, mutta hyllystä löytyy paljon kotimaista hiphop-, metalli- ja rockabilly-musiikkia, mitä ei Spotifystä löydy.

Tähän tarkoitukseen löysin Subsonic-mediaserverin, missä tuntuu ainakin tähän hätään olevan kaikki tarpeelliset ominaisuudet. Musiikkitiedostojen soittaminen onnistuu web-käyttöliittymän avulla tai erillisillä ohjelmilla, joita löytyy lähes jokaiselle käyttöjärjestelmälle. Kaikkien ominaisuuksien käyttöönotto maksaa dollarin kuukaudessa mikä ei paha hinta ole. Jättää muutaman huonon levyn kirppareilta ostamatta, niin vuoden maksut on katettu.

Debianiin Subsonic asentui näppärästi [heidän ohjeidensa](http://www.subsonic.org/pages/installation.jsp#debian) mukaan. Oletusasetuksilla Subsonic pyörii 4040 portissa. Jos ei halua ulospäin avata ylimääräisiä portteja, niin kannattaa käyttää proxyä. Tämä tehdään esimerkiksi nginxissä seuraavalla asetustiedostolla:

```
upstream subsonic {
  server 127.0.0.1:4040 fail_timeout=0;
}

server {
  listen 80;
  server_name subsonic.mydomain.com;

  location / {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;

    if (!-f $request_filename) {
      proxy_pass http://subsonic;
      break;
    }
  }
}
```

CD-levyjen rippaaminen MP3:ksi onnistuu kätevästi abcde-ohjelmalla.

```
$ sudo apt-get install abcde lame id3v2 eject
```

`abcde` asetustiedoston voi luoda kotihakemistoon eli `~/.abcde.conf`. Tiedostoon voi määritellä minne cd-levyt ripataan sekä tiedostojen nimeämistavat.

```
CDDBMETHOD=cddb
MP3ENCODERSYNTAX=lame
LAME=lame
LAMEOPTS='-V 2'
OUTPUTTYPE="mp3"
CDROMREADERSYNTAX=cdparanoia
CDPARANOIA=cdparanoia
CDPARANOIAOPTS="--never-skip=40"
CDDISCID=cd-discid
OUTPUTDIR="/mnt/storage1/music"
ACTIONS=cddb,playlist,read,encode,tag,move,clean

OUTPUTFORMAT='${OUTPUT}/${ARTISTFILE}/${ARTISTFILE} - ${ALBUMFILE}/${ARTISTFILE} - ${TRACKNUM} - ${TRACKFILE}'
VAOUTPUTFORMAT='${OUTPUT}/Various Artists/Various Artists - ${ALBUMFILE}/Various Artist - ${TRACKNUM} - ${TRACKFILE}'

# ONETRACKOUTPUTFORMAT='${OUTPUT}/${ARTISTFILE}/${ARTISTFILE} - ${ALBUMFILE}/${ALBUMFILE}'
# VAONETRACKOUTPUTFORMAT='${OUTPUT}/Various-${ALBUMFILE}/${ALBUMFILE}'

PLAYLISTFORMAT='${OUTPUT}/${ARTISTFILE}/${ARTISTFILE} - ${ALBUMFILE}/${ARTISTFILE} - ${ALBUMFILE}.m3u'
VAPLAYLISTFORMAT='${OUTPUT}/Various Artists/Various Artists - ${ALBUMFILE}/Various Artist - ${ALBUMFILE}.m3u'

# Put spaces in the filenames instead of the more correct underscores:
mungefilename ()
{
  echo "$@" | sed s,:,-,g | tr / _ | tr -d
  \"\?\[:cntrl:\]
}

MAXPROCS=2
PADTRACKS=y
EXTRAVERBOSE=2
COMMENT=''
EJECTCD=y
```

Tämän jälkeen komennolla `abcde` CD-levy kääntyy melkein automaattisesti `/mnt/storage1/music`-hakemistoon. `abcde` hakee CDDB:stä levyjen tiedot ja nimeää mp3-tiedostot yllä olevassa asetustiedostossa määrätyllä tavalla.

Kun CD:t on MP3:na koneella, niin ei kuin kuuntelemaan. Webbikäyttöliittymä on ihan riittävä desktop-käytössä mutta iPhonelle latasin SubHub nimisen applikaation.

Tämän jälkeen komennolla `abcde` CD-levy kääntyy melkein automaattisesti `/mnt/storage1/music`-hakemistoon. `abcde` hakee CDDB:stä levyjen tiedot ja nimeää mp3-tiedostot yllä olevassa asetustiedostossa määrätyllä tavalla.

Kun CD:t on MP3:na koneella, niin ei kuin kuuntelemaan. Webbikäyttöliittymä on ihan riittävä desktop-käytössä mutta iPhonelle latasin SubHub nimisen applikaation.
