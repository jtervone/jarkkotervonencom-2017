---
layout: post
status: publish
published: true
title: phpBB:n konvertointi FluxBB
image: /assets/img/posts/macbook-air.jpg
image_text: Macbook Air
author: Jarkko Tervonen
date: '2015-06-17 18:00:14 +0300'
date_gmt: '2015-06-17 15:00:14 +0300'
categories:
- Ohjelmat
tags:
- fluxbb
- phpbb
- ubb
- foorumi
- splatweb
- splatboard
comments: []
---
En ole varmasti ainoa, joka on jossain elämänsä vaiheessa ottanut käyttöön huonossa maineessa olevan [phpBB](http://www.phpbb.com/):n foorumisoftaksi sivuilleen. Tähän tilanteeseen jouduin kymmenen vuotta sitten, kun huomasin ettei oman foorumisoftan ylläpitäminen ole järkevää. Vuodesta 1999 olen ylläpitänyt paintballiin keskittynyttä [Splatweb-sivustoa](http://splatweb.net/) ja heti alkuvaiheessa tuli tarvetta omalle keskustelualueelle, joka sai nimekseen [Splatboard](http://splatweb.net/splatboard/). Aluksi käytössä oli ilmainen [Network54-foorumipalvelu](http://www.network54.com/). Viimeiset viestit [siellä näyttää olevan](http://www.network54.com/Forum/62012/) kirjoitettu vuonna 2000.

Muistaakseni tuosta Network54:sta siirryttiin [Ultimate Bulletin Boardiin](https://en.wikipedia.org/wiki/UBB.classic). UBB:n valintaa puolsivat ilmainen versio ja erillistä tietokantaa ei tarvittu vaan käytössä oli ns.  tietokanta.txt. Lisäksi UBB oli kirjoitettu silloin Perlillä, millä Splatwebin CMS oli myös tehty. Muistan vielä, kun siirsin suurimman osan viestiketjuista käsin Network54:sta UBB:hen. Hullua hommaa.

Ultimate Bulletin Board oli käytössä jonkin aikaa, kunnes kirjoitimme Splatboardin foorumisoftan uusiksi. Samalla kirjoitimme koko julkaisujärjestelmän uusiksi PHP:llä. Joskus 2003 tai 2004 alkoi kirjoittamamme foorumisoftan suorituskykyrajat tulemaan vastaan. Boardilla oli kymmeniä tuhansia viestejä ja välillä ihan kohtalaisesti yhtä aikaisia käyttäjiä. Päätin armeijaa suorittaessani ottaa käyttöön phpBB:n kakkosversion. Se vaikutti todella hyvältä ratkaisulta vaikka jo silloin huomasin kuinka työlästä eri modien asentaminen oli ja miten mahdotonta ulkoasumuutoksien säilyttäminen päivitysten yli oli.

Itseasiassa parjattu phpBB toimi sen verran hyvin, että päivitin sen myöhemmin kolmosversioon vaikka tässä välissä kokeilin useita muita foorumisoftia. Yleensä kynnykseksi phpBB:n hylkäämiseen oli se, että joko konvertoimisessa tuli konflikteja tai ulkoasujen muokkaaminen oli työlästä. phpBB:n kolmosversioon löytyi vielä [wp phpBB Bridge](https://wordpress.org/plugins/wp-phpbb-bridge/), jolla sai synkattua [Wordpressin](https://wordpress.org/) käyttämään phpBB:n käyttäjätunnuksia. Tällöin päätin luopua itse tehdystä CMS:stä ja otin käyttöön Splatwebissäkin Wordpressin.

phpBB:llä on huono maine reikäisenä foorumisoftana, mutta minulla sen kanssa ei ole ollut ongelmaa vaikka päivitykset ovat olleet välillä version pari jäljessä. Tietysti tärkeimmät päivitykset olen ajanut heti foorumiin. Ainoastaan kerran Splatwebiin kohdistui epäilyt, että foorumilta olisi vuotanut käyttäjätunnukset ja salasanat, mutta tämäkin epäilys pystyttiin toteamaan vääräksi aktiivisien käyttäjien avustuksella.

Tänä keväänä käyttämäni Wordpress wp phpBB Bridgen kehittäminen hidastui ellei kokonaan loppunut. Tämä esti phpBB:n päivittämisen uusimpaan versioon. PhpBB:n valintaan oli pääsyynä tuo Wordpress-integrointi, mutta kun viime vuosina aika on ajanut foorumeista ohi ja keskustelut ovat siirtyneet Facebookin ryhmiin, päätin ettei integrointi Wordpressiin ole enää pakollinen.

Olin jo pitkään vilkuillut [FluxBB:n](https://fluxbb.org/) suuntaan ja olin jo muutama vuosi sitten kokeillut PhpBB:n konvertointia FluxBB:hen ja se toimi lähes moitteetta. FluxBB on nopea ja sen HTML:n rakenne on siisti vaikkakin taulukoilla taitettu. FluxBB:n koodi ei mitään parasta ole ja ulkoasumuutoksien tekeminen on lähes mahdotonta, jos sitä ei CSS:llä pysty tekemään.

Päätin kuitenkin ottaa FluxBB:n käyttöön. Periaatteessa kaikki meni ongelmitta FluxBB:n konvertointiskriptillä. Kuitenkin muutamia asioita oli, jotka piti käsin tehdä:

## Käyttäjätunnukset

FluxBB käyttäjätaulu on sen tyyppinen, ettei se erota esim. ä- ja a-kirjaimia toisistaan. Vajaan kolmentuhannen tunnuksen joukosta jouduin käsin muuttamaan kolmen käyttäjän tunnuksen ja ilmoittamaan vaihdosta tunnuksien omistajille.

## Käyttäjäryhmät

FluxBB:ssä käyttäjät eivät voi kuulua kuin yhteen käyttäjäryhmään, joka tietenkin tarkoittaa, että käyttäjäryhmät eivät konvertoidu oikein. Splatboardilla käyttäjäryhmät eivät ole olleet tehokkaassa käytössä, mutta kuitenkin jonkun verran oikeuksia eri foorumeille oli jaettu käyttäjäryhmien perusteella.

Ratkaisin tämän niin, että lisäsin kaikki käyttäjät Members-ryhmään ja sen jälkeen kävin käsin läpi muutaman käyttäjän, jotka lisäsin moderaattorit ryhmään. Pommin varma ratkaisu.

## Kategoriat

Jostain syystä keskustelualueet eivät menneet oikein kategorioiden alle, joten ne piti käydä käsin lisäämässä oikeisiin kategorioihin tietokannasta. Tämä ei ollut mikään iso työ, mutta harmitti silti.

## Spämmisuodatus

Huomasin heti, että FluxBB kärsii spämmibottien hyökkäyksistä. Jo parin päivän käytössä olon jälkeen tuli ensimmäiset botit, jotka rekisteröityivät vaivatta foorumille. En lähtenyt edes etsimään pluginien joukosta tähän ratkaisua vaan tein yksinkertaisen alasvetovalikon rekisteröitymissivulle, missä kysytään haluatko varmasti luoda tunnuksen. Vaihtoehtoina yksi oikea ja kolme väärää vaihtoehtoa. Tämä on tuntunut toimivan tähän asti. Seurataan tilannetta.
