---
layout: post
status: publish
published: true
title: USB-kiintolevyn tarkistus Mac OS X:ssä DriveDx-ohjelmalla
image:
  file: /assets/img/posts/drivedx-lacie-1tb-2.png
  text: DriveDx -tilastot
author: Jarkko Tervonen
date: '2015-11-25 09:29:47 +0200'
date_gmt: '2015-11-25 07:29:47 +0200'
categories:
- Tekniikka
tags:
- osx
- drivedx
- usb
- kiintolevy
- mac
comments: []
---
Pistin tuossa pari viikkoa sitten [myyntiin vanhoja tavaroita](http://jarkkotervonen.com/2015/11/varastontyhjennysta-eli-myynnissa-tavaroita/), joista osa on vielä myymättä. Joukossa oli myös muutama ulkoinen kiintolevy. Pitkään mietin mitä hintaa näistä voisi pyytää, koska OS X:n levytyökalu ei osannut lukea [S.M.A.R.T. -tietoja](https://fi.wikipedia.org/wiki/S.M.A.R.T.) ulkoisista kiintolevyistä. Pistin sitten niin halvalla nämä myyntiin, että ostajat saavat reilusti vastinetta rahoilleen vaikka ne sattuisivat hajoamaan. Kovin paljon näitä en ole koskaan käyttänyt.

Kuitenkin ensimmäinen ostaja pyysi näitä tietoja levyistä. Ei kai siinä sitten muuta kuin Googlettamaan onko näistä mahdollista saada millään lisäohjelmalla. Ensimmäisenä vastaan tuli [DriveDx](http://binaryfruit.com/drivedx/), jossa oli [ohjeet](http://binaryfruit.com/drivedx/usb-drive-support) kuinka USB-levyt voidaan tarkistaa. Ratkaisuna oli asentaa [SAT SMART -kernellaajennos](https://github.com/kasbert/OS-X-SAT-SMART-Driver), jolloin DriveDx:llä ja varmasti muillakin vastaavilla ohjelmilla voi helposti lukea levyjen kunnon.

DriveDx on AppStoressa parin kympin hintainen, mutta ohjelman kotisivuilta voi ladata version, missä on muutaman päivän ilmainen kokeilujakso.
