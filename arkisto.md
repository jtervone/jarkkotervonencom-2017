---
layout: page
title: Blogitekstit kategorioittain
nav_text: Arkisto
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
