---
layout: post
status: published
published: true
title: Sivujen optimointia
image:
  file: /assets/img/posts/macbook-air-jekyll.jpg
  alt: Macbook Air ja Jekyll sivut
author:
  display_name: Jarkko
  login: Jarkko
  email: jarkko@splatweb.net
  url: http://jarkkotervonen.com/
date: '2017-06-08 00:01:20 +0300'
date_gmt: '2017-06-08 00:01:20 +0300'
categories:
- Netti
tags:
- kotisivut
- optimointi
- jekyll
- google
comments: []
---
Viime päivinä olen optimoinut [PitStop Finlandin kotisivuja](http://pitstop.fi/) ja samalla huomasin, että näille sivuille voisi tehdä pienen remontin. Mitään isompaa ei tarvinnut tehdä kuin pieniä korjauksia sinne tänne.

Ensimmäisenä avasin [Googlen PageSpeed Toolsin](https://developers.google.com/speed/pagespeed/insights/), joka ilmoitti korjauslistaksi mm. kuvien optimoinnin ja CSS:n pakkauksen. Kuvien pakkaukseen käytin <code>optijpeg</code> sekä <code>pngoptim</code> ohjelmia, jotka löytyvät kätevästi niin Debian Linuxille kuin macOS:lle [Homebrewin](https://brew.sh/) kautta.

CSS:n pakkaamiseen työkalut löytyivät suoraan Jekyllistä. Riitti, kun <code>_config.yml</code>-tiedostoon lisäsi seuraavan rivin

<pre class="code">
sass:
    style: compressed
</pre>

Nämä korjaukset riittivät PageToolsille, jotta sain mittarit näyttämään vihreää. Nopeuseroa en desktopissa juuri huomannut. Kevyemmät kuvat tietysti latautuvat nopeammin.

Näiden lisäksi testasin sivujen HTML:n huvikseni [W3:n validaattorilla](http://validator.w3.org/), jota en ole käyttänyt vuosiin. Oli ilo huomata, ettei tälle ollut tarvetta. Ainoastaan viittaus [schema.orgin](http://schema.org/) skeemoihin puuttui HTML-tagista.
