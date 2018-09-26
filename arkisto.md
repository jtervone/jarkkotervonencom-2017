---
layout: page
title: Blogitekstit kategorioittain
description: Tässä blogini kirjoitukset aihealueittain. Erilliset sivut löytyvät navigaatiopalkista.
nav_text: Arkisto
image: /assets/img/calendar.jpg
image_text: Kalenteri
permalink: /arkisto/
---
Tässä blogista löytyvät postaukset aihealueittain. Parempi arkistosivu on työnalla.

<ul>
{% for category in site.categories %}
  <li> <strong>{{ category | first }}</strong>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
        {% if post.title %}
        <li> {{ post.date | date: "%d.%m.%Y" }} - <a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>
