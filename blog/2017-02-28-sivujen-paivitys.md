---
title: Sivujen päivitys
image: ./images/macbook-air-jekyll.jpg
image_text: Macbook Air ja Jekyll sivut
author: Jarkko Tervonen
date: 2017-02-28 09:00:20
categories:
- Netti
tags:
- kotisivut
- jekyll
---
Eloa havaittavavissa näilläkin sivuilla. Kovin huonolle huolenpidolle tämä blogi on jäänyt viime aikoina. Nyt kuitenkin innostuin hieman tuunaamaan tätä ja vaihdoin alustan WordPressistä Jekylliin. Halusin uuden kevyemmän layoutin, mutta en nyt jaksanut alkaa säätämään WordPressin teemaa vaan valitsin kevyemmän vaihtoehdon eli Jekyllin. Jekyllissä tehdään sivuille omat templatet, joita käytetään kääntäessä sisältö kiinteiksi kotisivuiksi.

Jekyllin käyttöönotto oli helppoa. Itse leiskat olivat valmiina parissa tunnissa. Suurin aika meni siirtäessä aiempia blogipostauksia WordPressistä Jekylliin. Tekstit, kategoriat ja tagit siirtyivät helposti, mutta kuvia ei pystynyt suoraan tuomaan. Tai olisi pystynyt, mutta halusin järjestellä nekin uudelleen.

Näiden sivujen koodi sekä sisältö löytyy [Github-sivuiltani](https://github.com/jtervone/jarkkotervonencom). Deployment tehdään Githubin hookkeja käyttämällä. Aina, kun commit-viestissä on #deploy-tagi niin palvelimeni päivittää sivut ajamalla [deploy.sh -skriptin](https://github.com/jtervone/jarkkotervonencom/blob/master/deploy.sh).

Näillä sivuilla on vielä hieman tekemistä kategorioiden ja hakujen kanssa. Kommentoinnin taidan jättää kokonaan pois, koska en halua sivuille [Disqusin](https://disqus.com/) tapaisia kommentointivimpaimia. Muutamia kommentteja postauksiini on tullut ja niihin ollut kiva vastailla, mutta kovin vähäistä vuoropuhelu on ollut.
