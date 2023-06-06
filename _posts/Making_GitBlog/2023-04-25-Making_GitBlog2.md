---
title: "초보를 위한 깃허브 블로그 만들기(2). rbenv 패키지 설치"
excerpt: "깃허브 블로그 만들기, 정말 쉽게 정리했습니다. (에러 시 문제 해결 방법)"

categories:
    - Making_Blog
tags:
    - [Blog, Git, Github, Jekyll, Brew, Ruby, rbenv]

toc: true
toc_sticky: true

date: 2023-04-25
last_modified_at: 
comments: true
---
<br>

❗️모든 설치과정은 **MacOS Ventura(M1 Mac)** 환경에서 진행됩니다 ❗️

<br>

# rbenv 패키지 설치하기
- rbenv란?
    - MacOS는 기본적으로 `ruby`가 설치되어 있습니다. <br> 따라서 `ruby`는 OS의 영향을 받고, 다양한 버전을 독립적으로 관리하기가 쉽지 않습니다.
    - 이럴 때 독립적으로 `ruby`의 버전 관리를 도와주는 것이 `rbenv`입니다.

## 1️⃣ 1단계
자, 그럼 rbenv 패키지를 설치해봅시다.
* [rbenv 설치 바로가기](https://formulae.brew.sh/formula/rbenv) <br>
홈페이지에는 rbenv에 대한 정보가 담겨 있어요.<br>
홈페이지를 참고해서 설치해도 되고, 저를 따라오셔도 됩니다.

**❗️못할 것 같다는 생각은 잊어버리고, 터미널을 켜줍니다!**
그리고 다음 명령어들을 쭉 입력해주세요

```bash
brew install rbenv ruby-build 
rbenv verions # 설치가 완료되면 버전을 확인해보기
```
![image](https://user-images.githubusercontent.com/86516594/234170701-11947ad0-5317-4d74-a966-1cf3e1671092.png)

위와 같은 이미지가 뜬다면 성공입니다. 
아까 설명한 **OS의 ruby**를 사용하고 있다는 말이에요!

## 2️⃣ 2단계
```bash
ruby install -l #설치가 가능한 ruby 버전을 확인해보기
ruby install 3.2.2 # 3.2.2 버전 설치하기
rbenv global 3.2.2 # 3.2.2 버전으로 설정하기
rbenv versions 
```
<img width="320" alt="image" src="https://user-images.githubusercontent.com/86516594/234173522-003a0b86-b68b-425c-8f17-ed9d1dc4454e.png">

위와 같은 이미지가 뜬다면 성공입니다.

❗️필독❗️ 에러: BUILD FAILED (macOS 13.0.1 using ruby-build 20230330) 대처
---
* `ruby install 3.2.2`를 입력하고 설치하는 과정에서 <br> `BUILD FAILED (macOS 13.0.1 using ruby-build 20230330)` 이라는 에러가 발생할 수 있어요.

* 이럴 때는 다음과 같이 터미널에 입력해 주세요.<br>
```bash
brew install readline openssl
# 설치가 끝나면 차례대로 입력해 주세요
brew install libyaml
```

* 오류가 발생하는 이유를 여러가지 의심해 볼 수 있어요
    - `ruby-build`를 설치하는 과정에서 `homebrew`의 패키지인 `readline openssl`, `libyaml` 를 사용한다.
    - brew를 처음하는 사용자는 위의 패키지가 설치되어 있지 않다.

✅ **참고**: [BUILD FAILED 에러 발생 이유](https://github.com/rbenv/ruby-build/issues/1691)

## 3️⃣ 3단계
* [지난 번](https://0530hwi.github.io/making%20blog/Making_GitBlog1/#에러-발생-zsh-command-not-found-brew) homebrew 에러 발생과 마찬가지로 `vi ~/.zshrc`에 진입해 경로를 설정해줘야 해요.

1. `vi` 편집기 진입
```bash
vi ~/.zshrc
```
2. 알파벳 "i"를 눌러 **insert** 모드에 진입합니다.<br> 모드가 바뀐 것은 터미널 하단에서 확인할 수 있어요.

3. 다음 명령어를 그대로 추가해 줍니다.
```bash
[[ -d ~/.rbenv  ]] && \
        export PATH="$HOME/.rbenv/bin:$PATH" && \
        eval "$(rbenv init -)"
```
4. ESC를 누르고 `:wq`를 입력한 후에 빠져나오면 돼요
* ✅ **참고**: `:wq`는 저장 후 종료입니다. 이외에 `:q`는 종료, `:!q`는 강제 종료 등 여러 가지 명령어가 있어요

5. 적용까지 해주기
```bash
source ~/.zshrc
```
터미널을 재실행해도 `system ruby`가 아닌 독립적인 `ruby 버전`을 적용합니다.

저는 `BUILD FAILED` 에러 해결해 보겠다고 4~5시간 구글링했는데, <br>여러분은 꼭 이 글을 통해 쉽게 해결했으면 좋겠습니다! 다음 파트에서 뵙겠습니다😅