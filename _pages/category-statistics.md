---
title: "통계학 쉽고 빠르게 정복해보기"
layout: archive
permalink: /basic_statistics
author_profile: true
sidebar:
    nav: "sidebar-category"
---

<!-- 공백이 포함되어 있는 카테고리 이름의 경우 site.categories.['a b c'] 이런식으로! -->

{% assign posts = site.categories.Statistics %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}