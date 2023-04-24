var store = [{
        "title": "깃허브 블로그 커스텀 PART 1. 구조 파악",
        "excerpt":"print(\"Hello world!\") print(\"서윤 병휘\")  ","categories": ["Custom Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/custom%20blog/Custom_GitBlog/",
        "teaser": null
      },{
        "title": "깃허브 블로그 만들기 PART 1. Homebrew 설치",
        "excerpt":"❗️모든 설치과정은 MacOS Ventura(M1 Mac) 환경에서 진행됩니다 ❗️  HomeBrew 설치하기     HomeBrew란?            HomeBrew는 MacOS의 패키지 관리자에요       Apple, Linux에서 제공하지 않는 패키지를 관리할 수 있어요.           1단계  자, 그럼 이제 설치해봅시다.     HomeBrew 바로가기   홈페이지의 안내에 따라 설치하셔도 되고, 터미널에 다음 명령어를 입력해도 돼요.   ✅ 참고: 터미널은 Command + Spacebar 실행 후, Terminal 입력 후에 바로 실행할 수 있어요!   /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"   2단계  설치가 완료되었다면, brew help, brew -v 같은 명령어를 통해 HomeBrew가 잘 작동되는지 확인해봐요.      brew help를 입력했을 때      정상적으로 작동됩니다!   자, 이제 터미널을 끄고 재실행해봅시다.   에러 발생 zsh: command not found: brew     터미널을 재시작한 후 brew help를 입력했지만 다음과 같은 에러가 발생했습니다!      해결 1단계  이럴 때는 터미널에 다음과 같이 입력해주면 돼요   eval $(/opt/homebrew/bin/brew shellenv)  ✅ 참고: eval 명령어는 “$뒤 경로에 대한 인자를 받아 현재 터미널에서 실행하라” 라는 의미에요.   그런데, 터미널을 재시작할 때마다 저런 명령어를 입력하는 것은 너무 귀찮아요  그래서 우리는 다음과 같은 작업을 해줘야 돼요.   해결 2단계      vi 편집기 진입     vi ~/.zshrc                알파벳 “i”를 눌러 insert 모드에 진입합니다.  insert는 터미널 하단에서 확인할 수 있어요       다음 명령어를 그대로 추가해줍니다.     eval $(/opt/homebrew/bin/brew shellenv)                 ESC를 누르고 :wq를 입력한 후에 빠져나오면 돼요            ✅ 참고: :wq는 저장 후 종료 입니다. 이외에 :q는 종료, :!q는 강제 종료 등 여러가지 명령어가 있어요           터미널을 재부팅 후 brew help를 입력하면 brew가 정상적으로 실행됩니다!   ","categories": ["Making Blog"],
        "tags": ["Blog","Git","Github","Jekyll","Brew","Ruby","rbenv"],
        "url": "/making%20blog/Making_GitBlog1/",
        "teaser": null
      }]
