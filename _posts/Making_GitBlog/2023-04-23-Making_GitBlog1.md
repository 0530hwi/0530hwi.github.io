---
title: "초보를 위한 깃허브 블로그 만들기(1). Homebrew 설치"
excerpt: "깃허브 블로그 만들기, 정말 쉽게 정리했습니다. (에러 시 문제 해결 방법)"

categories:
    - Making_Blog
tags:
    - [Blog, Git, Github, Jekyll, Brew, Ruby, rbenv]

toc: true
toc_sticky: true

date: 2023-04-23
last_modified_at: 
comments: true
---
<br>

❗️모든 설치과정은 **MacOS Ventura(M1 Mac)** 환경에서 진행됩니다 ❗️

<br>

# HomeBrew 설치하기
- HomeBrew란?
    * HomeBrew는 MacOS의 패키지 관리자예요
    * Apple, Linux에서 제공하지 않는 패키지를 관리할 수 있어요.

## 1️⃣ 1단계
자, 그럼 이제 설치해봅시다.
* [HomeBrew 바로가기](https://brew.sh/index_ko) <br>
홈페이지의 안내에 따라 설치해도 되고, 터미널에 다음 명령어를 입력해도 돼요.

✅ **참고**: 터미널은 **Command + Spacebar** 실행 후, Terminal 입력 후에 바로 실행할 수 있어요!

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 2️⃣ 2단계
설치가 완료되었다면, `brew help`, `brew -v` 같은 명령어를 통해 HomeBrew가 잘 작동되는지 확인해 봐요.

* `brew help`를 입력했을 때 <br>
<img width="356" alt="스크린샷 2023-04-24 오후 8 30 41" src="https://user-images.githubusercontent.com/86516594/233985857-b61ebefc-9fb3-4c00-9cdc-52198d213c69.png">

정상적으로 작동됩니다!

자, 이제 터미널을 끄고 재실행해 봅시다. 

<BR>

# 에러 발생 zsh: command not found: brew
* 터미널을 재시작한 후 `brew help`를 입력했지만 다음과 같은 에러가 발생했습니다! <br>
<img width="208" alt="image" src="https://user-images.githubusercontent.com/86516594/233987600-5a7a3959-3e01-4242-ab7d-c7583e8c7e1b.png">

## 1️⃣ 해결 1단계
이럴 때는 터미널에 다음과 같이 입력해 주면 돼요<br>
```bash
eval $(/opt/homebrew/bin/brew shellenv)
```
✅ **참고**: `eval` 명령어는 "`$`뒤 경로에 대한 인자를 받아 현재 터미널에서 실행하라"라는 의미예요.

그런데, 터미널을 재시작할 때마다 저런 명령어를 입력하는 것은 너무 귀찮아요<br>
그래서 우리는 다음과 같은 작업을 해줘야 돼요.

## 2️⃣ 해결 2단계

1. `vi` 편집기 진입
```bash
vi ~/.zshrc
```
✅ **참고**: `echo $SHELL`을 통해 현재 사용되는 편집기가 무엇인지 알아야 해요.
저는 `zsh`를 사용하고 있지만, `bash`의 경우에는 `vi ~/.bashrc`가 됩니다.

2. 알파벳 "i"를 눌러 **insert** 모드에 진입합니다.<br>
모드가 바뀐 것은 터미널 하단에서 확인할 수 있어요.

3. 다음 명령어를 그대로 추가해 줍니다.
```bash
eval $(/opt/homebrew/bin/brew shellenv)
```
<img width="294" alt="image" src="https://user-images.githubusercontent.com/86516594/233991199-545d0b97-db40-4b17-8679-73c44afbc6e8.png">

4. ESC를 누르고 `:wq`를 입력한 후에 빠져나오면 돼요
* ✅ **참고**: `:wq`는 저장 후 종료입니다. 이외에 `:q`는 종료, `:!q`는 강제 종료 등 여러 가지 명령어가 있어요

5. 터미널을 재부팅 후 `brew help`를 입력하면 brew가 정상적으로 실행됩니다!


# Homebrew 삭제하기
혹시라도 에러가 발생한다면, **Homebrew**를 삭제한 후 다시 설치하는 것을 권장합니다.

1. 터미널에 입력해 주세요.
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)"
```
입력 후에 **Y**를 입력해 삭제해 주세요!

2. 다음 `/usr/local` 폴더에서 HomeBrew 폴더를 삭제해 줍니다.
```bash
rm -rf Homebrew/
```

Homebrew를 설치했다면 절반은 성공입니다. 다음 파트에서 뵙겠습니다😄