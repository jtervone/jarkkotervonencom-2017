---
layout: post
status: publish
published: true
title: MacBook Airin tuuletin päällä koko ajan
image:
  file: /assets/img/posts/macbook-air.jpg
  text: Macbook Air
author:
  display_name: Jarkko
  login: Jarkko
  email: jarkko@splatweb.net
  url: http://jarkkotervonen.com/
date: '2013-06-25 20:06:38 +0300'
date_gmt: '2013-06-25 17:06:38 +0300'
categories:
- Tekniikka
- Tietokoneet
tags:
- macbook
- air
- tuuletin
- ongelma
- smc
- system management controller
comments: []
---
Käytössäni on loppuvuonna 2010 julkaistu MacBook Air, joka on toiminut moitteettomasti kunnes parin viimeisen kuukauden aikana koneen tuuletin on alkanut huutamaan pienestäkin kuormasta. Päällä ei ollut kuin selain (ilman Flash Playeriä), sähköpostiohjelma, Tweetbot sekä Textmaten muutama editori-ikkuna auki. [iStat Pro -ohjelma](http://bjango.com/mac/istatmenus/) ilmoitti, että lämmöt pyörivät maltillisessa 50-60 asteessa, mutta MacBookin tuuletin huusi silti päälle 5000 kierrosta minuutissa.

Etsin ratkaisua tähän tuuletin ongelmaan taustalla pyörivistä sovelluksista ym. asetuksista ilman tulosta. Sitten Googlen kautta päädyin [Mac Crazyn artikkeliin](http://maccrazy.com/macbook-air-heat-fan-noise), missä neuvottiin mm. nollaamaan System Management Controller (SMC). Tämä näytti olevan ratkaisu hermoja raastavaan tuuletin ongelmaan MacBook Airin kanssa.

System Management Controllerin nollaaminen tapahtuu seuraavasti:

1. Sammuta MacBook Air omppunapin takaa löytyvästä valikosta.
2. Käytä laturin johtoa irti MacBook Airista muutama sekunti.
3. Paina MacBookin omasta (sisäänrakennetusta) näppäimistöstä vasemmalta puolelta Control-Shift-Option -napit pohjaan yhdessä virtanapin kanssa.
4. Pidä edellä mainittuja näppäimiä pohjassa muutama sekunti ja päästä ne irti yhtä aikaa.
5. Käynnistä kone normaalisti painamalla virtanäppäintä.

Tämä auttoi oman MacBook Airin kanssa tuulettimen huutamisongelmaan. Tuuletin pyörii tästä lähtien noin 2000 kierrosta minuutissa 60-70 asteen lämmöissäkin.
