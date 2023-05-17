---
title: "회귀분석 A to Z"
excerpt: "회귀분석(Linear Regression) 처음부터 끝까지 파헤치기"

categories:
    - Regression
tags:
    - [Regression, Statistics]

toc: true
toc_sticky: true

date: 2023-05-17
last_modified_at: 
comments: true
---
<br>

❗️이 글은 **지속적**으로 업데이트합니다.<br>
첫번째 업데이트: 2023-05-17❗️

<br>


# 🚩 회귀분석

## 1. 회귀분석이란?

* 회귀분석(Regression Analysis): 변수들 사이의 **함수적 관계**<sup>[1](#footnote_1)</sup>를 탐색하는 방법입니다.
    * EX) 지리적 특성(역세권, 교통의 편리함, 인구수)에 따른 부동산 가격<br>
    여기서는 **지리적 특성이(설명변수: X), 부동산 가격(종속변수: Y)**가 되겠네요!

$$Y = \beta_{0} + \beta_{1}X_{1}+ \beta_{2}X_{2}+ \cdots + \beta_{p}X_{p}$$




---


<a name="footnote_1">[1]</a>: Input이 있을 때 Output이 있는 관계