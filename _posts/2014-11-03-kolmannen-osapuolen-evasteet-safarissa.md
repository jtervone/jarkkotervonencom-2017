---
layout: post
status: publish
published: true
title: Kolmannen osapuolen evästeet Safarissa
image:
  file: /assets/img/posts/compiling-php.png
image_text: PHP:n kääntäminen
author: Jarkko Tervonen
date: '2014-11-03 22:03:59 +0200'
date_gmt: '2014-11-03 20:03:59 +0200'
categories:
- Ohjelmat
tags:
- php
- ios
- safari
- cookie
- evästeet
- p3p
comments: []
---
Uusimmat 8.x iOS-versiot alkavat olla yleisiä kannettavissa Apple-laitteissa. Näissä Safari ei hyväksy kolmannen osapuolen evästeitä. Tämä aiheuttaa sen, että esimerkiksi PHP-sessiot eivät toimi upotetussa sivussa, joka on eri domainin alla kuin sivu jolla iframe on.

Tätä ongelmaa voi ainakin vielä kiertää käyttämällä selainta domainissa, missä iframeen upotettu sisältö sijaitsee ja asettamalla siellä P3P-headerit ja palaamalla takaisin sivulle missä iframe on. Alla oleva esimerkki PHP:lla toteutettuna.

Domainiin, missä iframen sisältökin on lisätään tiedosto `set-session.php`:

```
<?php

/* http://domain-sisalto.com/set-session.php */

header('P3P: CP="CAO PSA OUR"');
session_start();
header('Location: '.$_GET['url']);
```

ja sivulle, missä iframe on lisätään ohjaus edellä olevaan `set-session.php`-tiedostoon, jos sivulle saavutaan Safarilla.

```
<?php

/* http://domain-iframe.com/index.php */

header('P3P: CP="IDC DSP COR ADM DEVi TAIi '.
  'PSA PSD IVAi IVDi CONi HIS OUR IND CNT"';
);
session_start();

if (
  strpos($_SERVER['HTTP_USER_AGENT'], 'Safari') &amp;&amp;
  !strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') &amp;&amp;
  (count($_COOKIE) === 0)
) {
  ob_clean();
  ?>
    <!doctype html>
    <html>
      <head><title>Redirect</title></head>
      <body>
        <script>
          top.location = 'http://domain-sisalto.com/' +
            'set-session.php?url=http://domain-frame.com/' +
            'index.php';
        </script>
      </body>
    </html>
  <?php
  die();
}
else {
  echo '<iframe src="http://domain-sisalto.com/"></iframe>';
}
```

Tietysti tämä viritys aiheuttaa sivun uudelleen lataamisesta johtavan välähdyksen ja mahdollisesti tallentamattomien tietojen häviämisen sivulla, missä iframe on.
