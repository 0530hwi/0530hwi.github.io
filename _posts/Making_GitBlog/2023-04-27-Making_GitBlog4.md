---
title: "초보를 위한 깃허브 블로그 만들기(4). vscode로 블로그 관리하기"
excerpt: "깃허브 블로그 관리하는 방법을 쉽게 정리했습니다"

categories:
    - Making_Blog
tags:
    - [Blog, Git, Github, Jekyll, Brew, Ruby, rbenv]

toc: true
toc_sticky: true

date: 2023-04-27
last_modified_at: 
comments: true
---
<br>

❗️모든 설치 과정은 **MacOS Ventura(M1 Mac)** 환경에서 진행됩니다 ❗️

<br>

안녕하세요! 깃허브 블로그는 잘 설치되었나요? <br>
이번에는 Visual Studio Code로 깃허브 블로그를 아주 간편하게 관리하는 방법을 공유합니다.<br>

# 1️⃣ Visual Studio Code 설치하기
1. [Visual Sutdio Code Download Link](https://code.visualstudio.com/Download)로 이동해 주세요!

2. **Mac**을 선택해 주세요!
    * 설치하는 과정에서 특별한 건 없습니다. 쭉쭉 넘어가 주세요!

3. 설치가 완료되었다면 아래와 같은 화면이 뜹니다.
<img width="600" alt="스크린샷 2023-04-27 오후 6 00 49" src="https://user-images.githubusercontent.com/86516594/234813734-fad5187e-4266-4f8b-a3a8-d4cba8f680e6.png">{: .align-center} 

## 한국어 패키지 설정하기
* 저는 한국어 패키지가 설치가 되어있습니다. 영어 버전을 원하시는 분들은 건너뛰셔도 돼요!
<img width="600" alt="스크린샷 2023-04-27 오후 6 05 54" src="https://user-images.githubusercontent.com/86516594/234815186-0a20346b-fe28-4787-bdd1-e83e61bc9d17.png">{: .align-center}

1. 왼쪽 **확장(Shift + Command + X)**을 눌러 줍니다.
2. **Korean Language Pack**을 검색 후 설치해 줍니다.

<BR><BR>

# 2️⃣ Github와 VScode 연결하기

1. VScode를 실행합니다.

2. **열기**를 눌러 줍니다.
<img width="400" alt="스크린샷 2023-04-27 오후 6 56 25" src="https://user-images.githubusercontent.com/86516594/234828505-d2464273-629d-4133-8309-e3a9fd814355.png">{: .align-center}

3. 전에 만들어 두었던 깃허브 폴더를 선택해 주세요!
<img width="400" alt="스크린샷 2023-04-27 오후 6 58 18" src="https://user-images.githubusercontent.com/86516594/234828987-a6b4e271-0447-46cb-8a04-754ce14dfc25.png">{: .align-center}

4. `control + shift + ₩`를 눌러 터미널을 열어 주세요!
<img width="400" alt="스크린샷 2023-04-27 오후 6 27 56" src="https://user-images.githubusercontent.com/86516594/234829475-0ecdb1ee-b8a8-426d-b436-37866c5558a2.png">{: .align-center}

5. github에 push가 잘 되는지 확인해 볼까요?
    ```bash
    git add *
    git commit -m "Update Blog" #원하는 커밋 메세지 작성
    git push origin main
    ```
* ❗️이 과정에서 계정과 비밀번호가 필요할 수 있습니다. 비밀번호에는 반드시 **토큰**을 입력해 주셔야 합니다. <br>
[토큰 발급 바로가기](https://0530hwi.github.io/making%20blog/Making_GitBlog3/#%EF%B8%8F중요%EF%B8%8F-비밀번호에-토큰을-입력해야-해요)

6. 이제 vscode 터미널로도 로컬 서버를 열 수 있습니다!<br>
`bundle exec jekyll serve`를 vscode 터미널에 입력 후, 여러분의 멋진 블로그를 확인해 보세요!

---
✅ **참고**:<br> 저는 127.0.0.1:4000 이라는 주소로 로컬 서버를 들어갈 수 있는데요. <Br>이 서버는 깃에 푸시하기 전에 최종적으로 검토해보는 단계입니다. <br>따라서, **여러분의 변경사항을 로컬 서버를 통해 먼저 확인할 수 있는 장점**이 있습니다. <br>
또 깃에 업로드 후 블로그가 업데이트 되는 딜레이 시간(약 3분)이 있습니다. <br>로컬 서버를 이용하면 이러한 딜레이를 상쇄할 수 있기 때문에 로컬 서버를 이용하는 것이 블로그 작업에 매우 효율적입니다.

---

## ❗️주의: 계정 일치 확인하기
* `git remote -v` 명령어를 통해 여러분의 계정과 일치하는지 확인해 주세요!
* 만약 일치하지 않는다면 다음 과정을 진행하면 됩니다.
    ```bash
    git remote add origin (저장소 주소) #깃허브 블로그 저장소
    git remote -v
    ```



# 지금까지의 과정 총정리
1. Mac에서 여러가지 패키지를 편하게 관리하기 위해 `Homebrew`를 설치했다
2. `ruby`를 독립적으로 이용하기 위해 `rbenv`패키지를 설치했다
3. 로컬에서 깃허브 레파지토리를 관리하기 위해 `git`을 설치했다
4. 루비 개발 환경을 갖추기 위해 `gem install jekyll bundler`를 통해 설치했다.
5. 서버를 구동하기 위해 `bundle exec jekyll serve`를 입력했다. <br>


**🎉이상으로 깃허브 블로그 만들기 과정을 종료합니다! 깃허브 블로그 커스텀에서 뵙겠습니다!**
