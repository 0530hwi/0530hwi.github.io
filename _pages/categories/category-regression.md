---
title: "회귀분석 정복하기"
layout: archive
permalink: /regression
author_profile: true
sidebar:
    nav: "sidebar-category"
---

<!-- 공백이 포함되어 있는 카테고리 이름의 경우 site.categories.['a b c'] 이런식으로! -->

{% assign posts = site.categories.Regression %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}