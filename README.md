# Getting Started React-PHP-MySQL

# React-PHP-MySQL 🔗

Full-Stack Login & User Management Example

> React + PHP + MySQL로 구성된 풀스택 예제 프로젝트입니다.  
> PHP의 세션(Session)과 쿠키(Cookie) 기반 인증 로직을 프런트엔드(React)와 연동하는 실습용 구조입니다.

---

## 📁 프로젝트 구조

```bash
react-php-mysql/
│
├── client/                     # React 프런트엔드 (포트 3000)
│   ├── src/
│   │   ├── components/         # UI 컴포넌트 (ListUser, CreateUser 등)
│   │   ├── pages/              # 라우트별 페이지 컴포넌트
│   │   ├── styles/             # styled-components 스타일 정의
│   │   └── App.js              # 메인 라우팅 구조
│   ├── package.json
│   └── ...
│
├── server/                     # PHP 백엔드 (Apache 루트)
│   ├── DbConnect.php           # PDO 기반 DB 연결 클래스
│   ├── login.php               # 로그인 및 세션 생성 API
│   ├── session.php             # 세션 관리 (CreateSession, Validator_Session)
│   ├── user/                   # 사용자 CRUD API (list, create, edit, delete)
│   └── ...
│
└── database/
    └── react-php-mysql.sql     # DB 초기 스키마



```

⚙️ 실행 환경
| 항목                | 버전                            |
| ----------------- | ----------------------------- |
| OS                | Windows 10 / WSL2 (Ubuntu 가능) |
| Node.js           | v18 이상                        |
| PHP               | 8.x                           |
| Apache            | 2.4.x                         |
| MySQL             | 8.x                           |
| Axios             | ^1.6.0                        |
| React             | 18.x                          |
| Styled-components | ^6.0                          |

