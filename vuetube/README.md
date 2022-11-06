# vuetube


### 📌 컴포넌트 구조
![image](https://user-images.githubusercontent.com/93974908/200170737-6b997d98-cbc7-4f94-857d-b82102047d06.png)

### 📌 데이터 흐름  
![image](https://user-images.githubusercontent.com/93974908/200170647-f4b03700-b6f6-4479-ad7f-aa62710b5569.png)


---

## Youtube API key 발급 
1. 구글 계정 로그인
2. google developer console 검색
3. Google Cloud Platform 접속
4. Youtube Data API v3 검색 및 사용
![image](https://user-images.githubusercontent.com/93974908/200171009-d57652e7-3260-4d49-a374-e6b6c5cf50f5.png)
5. 사용자 인증 정보 ➡ 사용자 인증 정보 만들기 ➡ API 키
6. 발급받은 API 키 별도 기록  


사용
``` js
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
```


---

![image](https://user-images.githubusercontent.com/93974908/200181635-f806afd4-41ee-4c0c-82c2-c799acff9731.png)
