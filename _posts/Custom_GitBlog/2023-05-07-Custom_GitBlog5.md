---
title: "깃허브 블로그 커스텀하기 - 깃허브 블로그 댓글 기능 추가하기(minimal-mistakes)"
excerpt: "깃허브 블로그 커스텀, 쉽게 정리했습니다. 블로그에 댓글 기능 추가하기"

categories:
    - Custom_Blog
tags:
    - [Blog, Utterances, Minimal-Mistakes]

toc: true
toc_sticky: true

date: 2023-05-07
last_modified_at: 
comments: true
---
<br>

<div align=center>


❗️커스텀 포스팅은 필자의 시행착오와 독학을 통해 작성되었습니다.❗️<br> 틀린 부분이나 좀 더 쉬운 방법이 있다면 댓글 부탁드려요. 다양한 피드백 환영입니다😃


</div>

<br><br>

# 1️⃣ utterance 설치하기
* 요즘 핫(hot)한 댓글 플랫폼이에요!
* `disqus`도 많은 분들이 자주 이용하지만 저는 무겁게 느껴져서 선택하지 않았습니다.

## 1. 플랫폼으로 이동 및 설치
* [✅ utterances 클릭하면 바로 이동](https://github.com/apps/utterances) 링크로 접속해 주세요!
* `INSTALL`을 눌러 설치해 줍니다.
* `Only select repositories`를 선택해 주세요!
<img width="550" alt="스크린샷 2023-05-07 오후 9 01 04" src="https://user-images.githubusercontent.com/131740570/236676149-697ec4e8-0075-4389-b7b1-5071e0023f66.png">{: .align-center}
    - 저는 모든 저장소에 댓글 플랫폼이 필요 없기에 `Only select repositories`를 선택했습니다.
    - 혹시라도 모든 저장소에 댓글 플랫폼이 설치되길 원하시는 분들은 `All repositories`를 선택해 주세요.

<br>

## 2. 저장소와 매핑 설정
* 다음 페이지로 이동하게 되면
<img width="550" alt="스크린샷 2023-05-07 오후 9 06 51" src="https://user-images.githubusercontent.com/131740570/236676476-e6361311-bb84-4948-8498-3b264bc2a92b.png">{: .align-center}
    - `repo`에는 **소유자/저장소 이름**을 입력해 주세요!<br>EX) testerHWI/testerHWI.github.io
    - `Issue title contains page pathname`을 선택해 주세요!<br>

## 3. 테마 설정
* 테마를 설정해 주세요!
<img width="550" alt="스크린샷 2023-05-07 오후 9 14 31" src="https://user-images.githubusercontent.com/131740570/236676858-f24637e4-88c0-4a3e-8f1c-84c653bfad8d.png">{: .align-center}
    - 저의 경우에는 블로그가 화이트 톤이라 `GitHub Light`로 설정했어요!

* `Enable Utterances`에 있는 코드를 기억해 주세요!

## 4. _config.yml 설정하기 
* `_config.yml` 파일로 이동해 줍니다.

* 저장소 경로를 설정해 주세요!
<img width="550" alt="스크린샷 2023-05-07 오후 9 19 53" src="https://user-images.githubusercontent.com/131740570/236677311-4d87a36a-9ec8-4ebc-b322-34d42dc185fa.png">{: .align-center}

* `Enable Utterances`의 코드 값을 그대로 입력해 줍니다.
<img width="550" alt="스크린샷 2023-05-07 오후 9 20 12" src="https://user-images.githubusercontent.com/131740570/236677363-83798604-230b-4a7f-9e0f-d3c29fa33b7c.png">{: .align-center}

* 마지막으로 깃허브에 `Push`해주면 끝입니다.

# 2️⃣ 주의사항 및 크기 조정

## 1. 주의사항
* 블로그 포스팅을 할 때 반드시! `comments:TRUE`로 해주세요! (사진 참고)
<img width="550" alt="스크린샷 2023-05-07 오후 9 35 25" src="https://user-images.githubusercontent.com/131740570/236677987-97bace13-b633-41cc-a028-fd837248c85c.png">{: .align-center}


## 2. 크기 조정하기
* 다음 코드를 추가해 주세요! (아무 곳에나 추가하시면 됩니다.)
* 경로는 `_sass/minimal-mistakes/_page.scss`입니다.
<script src="https://gist.github.com/0530hwi/96e883a36fcb467f6849b18173a47f97.js"></script>

* 단 본인이 설정한 블로그 너비에 맞춰 조정되니 참고해 주세요! 원하는 값으로 조정 가능합니다.


<br><br>

---

이 포스팅은 다음 블로그를 참고해서 작성되었습니다.
* [ansohxxn님의 블로그 포스트](https://ansohxxn.github.io/blog/utterances/) 
* [baek님의 블로그 포스트](https://baek.dev/post/4/)