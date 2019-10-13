---
title: Nopeammat sivut AMP:lla
image: ./images/macbook-air-jekyll.jpg
image_text: Macbook Air ja Jekyll sivut
author: Jarkko Tervonen
date: 2017-06-28 16:51:20
categories:
- Netti
tags:
- google
- amp
- seo
- jekyll
- wordpress
---
Sain tehtäväksi vaihteeksi parantaa erään sivuston hakukonenäkyvyyttä sekä katsoa mitä käytettävyydelle voisi tehdä. Sivusto pyöri Wordpressin päällä ja siinä oli säästeliäästi käytetty lisäosia, mutta käytössä oleva web-hotelli tarjoili sivuja kovin hitaasti. Ajattelin, että nopein tapa nopeuttaa sivuja on kääntää Wordpress-sivusto Jekyll-sivustoksi. Tässä meni pari iltaa. Kiitos tästä selkeälle layoutille.

Hakukoneoptimoinnin puolesta asiat olivat mallillaan. Ainoa huono asia on se, ettei uutta materiaalia sivustolle juurikaan julkaistu. Ajattelin kuitenkin testata ennen uuden sisällön julkaisua miten [Accelerated Mobile Pages](https://www.ampproject.org/) eli AMP-tekniikka parantaa hakukonenäkyvyyttä (lue näkyvyyttä Googlessa).

Sivujen kääntäminen AMPia tukeviksi sivuiksi onnistui helposti. Yksinkertaiset sivustot eivät oikeastaan vaadi muuta kuin ylimääräisen JavaScript-koodin karsimisen. Lisäksi kuville täytyy määrittää leveyden ja korkeuden välinen suhdeluku tai tarkka koko. Näin AMP-sivua ladatessa kuville varataan oikean kokoinen paikka ja kuvat ladataan vasta, kun niitä tarvitaan. Jos jotain huonoa pitää sanoa, niin se ärsyttää, että AMP ei salli erillisiä CSS-tiedostoja vaan tyylit pitää olla &gt;style&lt;-tagin sisällä sivun &gt;head&lt;-tagin sisällä. Tämä aiheuttaa sen, että esimerkiksi Jekylliä käyttäessä jokainen sivu pitää uudelleen buildata CSS:ää päivittäessä.

Sivuista olisi voinut tehdä erilliset AMP-sivut, mutta päätin tehdä sivuista vain AMP-versiot. En tiedä onko tämä huono vai hyvä asia. Lähes samalla vaivalla tämä blogisivusto päivittyi myös AMP-aikakauteen. Sivujen latausnopeus on tietysti pienempi, mutta vielä en osaa sanoa kuinka paljon muutos on vaikuttanut hakukonenäkyvyyteen. Kerron tästä myöhemmin, kun saan tuloksia aikaiseksi.
