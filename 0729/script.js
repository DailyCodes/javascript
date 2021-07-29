const profileArr = [
    {
        job: '조명기사 및 영사기사',
        name: '백성호',
        gender: 'M',
        address: '광주광역시 남구 삼성772길',
        mail: 'ygim@daum.net',
        birthday: '1916, 8, 11'
    }, {
        job: '기타 전기/전자기기 설치 및 수리원',
        name: '김중수',
        gender: 'M',
        address: '충청남도 용인시 기흥구 서초대444가 (준호김최면)',
        mail: 'ogyeongja@daum.net',
        birthday: '1961, 1, 2'
    }, {
        job: '상품 대여원',
        name: '김경자',
        gender: 'F',
        address: '대구광역시 서대문구 삼성437로',
        mail: 'junhyeoggim@naver.com',
        birthday: '1946, 2, 16'
    }, {
        job: '전산 자료 입력원 및 사무 보조원',
        name: '이은서',
        gender: 'F',
        address: '전라북도 천안시 서북구 압구정가 (영희윤이동)',
        mail: 'isunog@hotmail.com',
        birthday: '2011, 6, 18'
    }, {
        job: '조림/영림 및 벌목원',
        name: '김경수',
        gender: 'M',
        address: '세종특별자치시 강서구 오금거리 (경희송김동)',
        mail: 'iseonyeong@naver.com',
        birthday: '1987, 11, 17'
    }, {
        job: '물리 및 작업 치료사',
        name: '황은영',
        gender: 'F',
        address: '부산광역시 서구 반포대31로',
        mail: 'seongjingim@hotmail.com',
        birthday: '1924, 2, 27'
    }, {
        job: '국악 및 전통예능인',
        name: '김현준',
        gender: 'M',
        address: '전라남도 부여군 선릉5거리 (정호송이마을)',
        mail: 'ngim@dreamwiz.com',
        birthday: '1927, 10, 5'
    }, {
        job: '통계관련 사무원',
        name: '이현정',
        gender: 'F',
        address: '세종특별자치시 종로구 반포대로 (진우진면)',
        mail: 'gominji@gmail.com',
        birthday: '1934, 4, 7'
    }, {
        job: '신발제조기 조작원 및 조립원',
        name: '황정희',
        gender: 'F',
        address: '충청남도 안성시 서초대491가',
        mail: 'cunjagim@naver.com',
        birthday: '1966, 10, 4'
    }, {
        job: '장례 상담원 및 장례 지도사',
        name: '서은영',
        gender: 'F',
        address: '대전광역시 금천구 영동대가 (정남성강마을)',
        mail: 'songboram@daum.net',
        birthday: '1994, 3, 21'
    }, {
        job: '방문 판매원',
        name: '구경자',
        gender: 'F',
        address: '경상북도 논산시 역삼71거리 (상호강읍)',
        mail: 'yeongmio@hotmail.com',
        birthday: '1938, 3, 8'
    }, {
        job: '법무사 및 집행관',
        name: '배정순',
        gender: 'F',
        address: '광주광역시 도봉구 개포656가',
        mail: 'eunji25@nate.com',
        birthday: '1915, 12, 16'
    }, {
        job: '마술사 및 기타 문화/ 예술 관련 종사자',
        name: '박민재',
        gender: 'M',
        address: '대전광역시 서초구 학동길',
        mail: 'xcoe@live.com',
        birthday: '1978, 12, 15'
    }, {
        job: '매표원 및 복권 판매원',
        name: '차성민',
        gender: 'M',
        address: '전라북도 청주시 흥덕구 반포대0거리',
        mail: 'jiucoe@nate.com',
        birthday: '1931, 6, 25'
    }, {
        job: '배우 및 모델',
        name: '이옥자',
        gender: 'F',
        address: '부산광역시 은평구 논현332거리',
        mail: 'seonghyeon68@nate.com',
        birthday: '1995, 9, 29'
    }, {
        job: '일반기계 조립원',
        name: '최재현',
        gender: 'M',
        address: '대구광역시 송파구 도산대3거리 (옥순이장마을)',
        mail: 'ynam@live.com',
        birthday: '1999, 3, 12'
    }, {
        job: '임상병리사',
        name: '고하윤',
        gender: 'F',
        address: '대구광역시 양천구 압구정30길 (서연한김리)',
        mail: 'baghyeonju@gmail.com',
        birthday: '1959, 5, 11'
    }, {
        job: '채소 및 특용작물 재배원',
        name: '김민수',
        gender: 'M',
        address: '전라남도 청주시 흥덕구 압구정034로 (준호류황리)',
        mail: 'jihyeoni@naver.com',
        birthday: '1995, 6, 29'
    }, {
        job: '장례 상담원 및 장례 지도사',
        name: '김현우',
        gender: 'M',
        address: '대전광역시 금천구 테헤란7로',
        mail: 'naogsun@gmail.com',
        birthday: '1931, 10, 4'
    }, {
        job: '운송장비 조립원',
        name: '김순자',
        gender: 'F',
        address: '충청남도 화성시 언주가 (성진김면)',
        mail: 'gyeonghyiyu@live.com',
        birthday: '1999, 3, 5'
    }, {
        job: '세탁원 및 다림질원',
        name: '강상호',
        gender: 'M',
        address: '전라남도 성남시 중원구 잠실가',
        mail: 'seonghyeon42@hanmail.net',
        birthday: '1968, 4, 20'
    }, {
        job: '세무사',
        name: '양영호',
        gender: 'M',
        address: '충청북도 정선군 오금로 (숙자류박마을)',
        mail: 'dbaeg@live.com',
        birthday: '1938, 11, 8'
    }, {
        job: '기타 식품가공관련 종사원',
        name: '고정남',
        gender: 'M',
        address: '경기도 영월군 석촌호수거리',
        mail: 'coeseoyun@hanmail.net',
        birthday: '1927, 5, 19'
    }, {
        job: '안경사',
        name: '김수빈',
        gender: 'F',
        address: '경상북도 동두천시 논현997가',
        mail: 'ogsun24@hanmail.net',
        birthday: '1921, 3, 2'
    }, {
        job: '컴퓨터 강사',
        name: '김미숙',
        gender: 'F',
        address: '인천광역시 용산구 선릉4가',
        mail: 'dohyeon35@naver.com',
        birthday: '1949, 8, 22'
    }, {
        job: '영양사',
        name: '홍지훈',
        gender: 'M',
        address: '충청남도 강릉시 양재천길 (재호백동)',
        mail: 'ci@nate.com',
        birthday: '1932, 5, 10'
    }, {
        job: '보육 교사',
        name: '박현주',
        gender: 'F',
        address: '서울특별시 중구 개포가 (경수우강마을)',
        mail: 'minseoyang@nate.com',
        birthday: '1946, 4, 26'
    }, {
        job: '기계공학 기술자 및 연구원',
        name: '김민재',
        gender: 'M',
        address: '전라북도 인제군 압구정559길 (영숙박이읍)',
        mail: 'hbag@dreamwiz.com',
        birthday: '1942, 9, 9'
    }, {
        job: '전기/전자 및 기계 공학 시험원',
        name: '권영미',
        gender: 'F',
        address: '전라남도 성남시 분당구 역삼0거리 (현우박백읍)',
        mail: 'bagseongho@nate.com',
        birthday: '1956, 9, 6'
    }, {
        job: '전기 및 전자 설비 조작원',
        name: '이우진',
        gender: 'M',
        address: '광주광역시 은평구 반포대98거리',
        mail: 'mgim@daum.net',
        birthday: '2000, 3, 28'
    }, {
        job: '섬유제조 기계조작원',
        name: '이상훈',
        gender: 'M',
        address: '대전광역시 남구 오금가',
        mail: 'gimsanghun@gmail.com',
        birthday: '2010, 5, 14'
    }, {
        job: '물품이동 장비 조작원',
        name: '윤옥순',
        gender: 'F',
        address: '울산광역시 강동구 역삼길 (정식양리)',
        mail: 'minjaegim@nate.com',
        birthday: '1957, 8, 22'
    }, {
        job: '제관기 조작원',
        name: '황현준',
        gender: 'M',
        address: '인천광역시 강북구 서초중앙길 (은서김이리)',
        mail: 'qsong@live.com',
        birthday: '1939, 7, 23'
    }, {
        job: '주방 보조원',
        name: '김정웅',
        gender: 'M',
        address: '부산광역시 용산구 반포대거리',
        mail: 'ogsun04@hanmail.net',
        birthday: '1930, 3, 31'
    }, {
        job: '직업상담사 및 취업 알선원',
        name: '장은정',
        gender: 'F',
        address: '세종특별자치시 성동구 서초중앙26가',
        mail: 'hyeonjun72@nate.com',
        birthday: '1988, 4, 25'
    }, {
        job: '기타 제조관련 기계 조작원',
        name: '이병철',
        gender: 'M',
        address: '부산광역시 구로구 가락82로 (서준김면)',
        mail: 'xgim@gmail.com',
        birthday: '1968, 3, 12'
    }, {
        job: '전자 부품 및 제품 제조 기계조작원',
        name: '류예준',
        gender: 'M',
        address: '전라남도 파주시 학동길 (현정박송읍)',
        mail: 'jongsu17@hotmail.com',
        birthday: '1983, 1, 26'
    }, {
        job: '여행상품 개발자',
        name: '김경희',
        gender: 'F',
        address: '충청남도 안산시 상록구 봉은사103거리',
        mail: 'mjang@daum.net',
        birthday: '1982, 4, 18'
    }, {
        job: '기타 건설/전기 및 생산 관련 관리자',
        name: '한은영',
        gender: 'F',
        address: '경기도 인제군 압구정거리',
        mail: 'yeonghyihan@live.com',
        birthday: '1920, 5, 25'
    }, {
        job: '운송장비 조립원',
        name: '고현지',
        gender: 'F',
        address: '경상남도 괴산군 강남대로 (보람정마을)',
        mail: 'junseo70@live.com',
        birthday: '1990, 10, 27'
    }, {
        job: '기타 건설/전기 및 생산 관련 관리자',
        name: '최은정',
        gender: 'F',
        address: '충청북도 용인시 기흥구 학동36거리 (현우김면)',
        mail: 'jeonghun75@hotmail.com',
        birthday: '2004, 3, 24'
    }, {
        job: '항공기 정비원',
        name: '이미경',
        gender: 'F',
        address: '광주광역시 광진구 삼성길 (성민이리)',
        mail: 'minjun14@hotmail.com',
        birthday: '1999, 1, 20'
    }, {
        job: '이용사',
        name: '최성현',
        gender: 'M',
        address: '전라남도 안산시 상록구 서초중앙길',
        mail: 'nbae@live.com',
        birthday: '2007, 2, 2'
    }, {
        job: '육류/어패류 및 낙농품 가공 기계조작원',
        name: '홍영일',
        gender: 'M',
        address: '경기도 안산시 상록구 삼성17거리 (예지이마을)',
        mail: 'gimjeongsug@dreamwiz.com',
        birthday: '1965, 7, 5'
    }, {
        job: '단조원',
        name: '김정희',
        gender: 'F',
        address: '충청남도 양양군 학동4로 (성훈김면)',
        mail: 'bagjihun@hotmail.com',
        birthday: '1909, 8, 26'
    }, {
        job: '화가 및 조각가',
        name: '김성현',
        gender: 'M',
        address: '제주특별자치도 예산군 잠실15가 (영철김읍)',
        mail: 'fi@naver.com',
        birthday: '1959, 9, 19'
    }, {
        job: '보일러 설치 및 정비원',
        name: '김명숙',
        gender: 'F',
        address: '대구광역시 강동구 논현가 (지민이마을)',
        mail: 'jihu24@hotmail.com',
        birthday: '2000, 8, 20'
    }, {
        job: '건축가 및 건축공학 기술자',
        name: '최준혁',
        gender: 'M',
        address: '충청북도 괴산군 삼성거리',
        mail: 'yejinyun@gmail.com',
        birthday: '2019, 1, 5'
    }, {
        job: '화학제품 생산기 조작원',
        name: '김서영',
        gender: 'F',
        address: '경상남도 당진시 반포대306거리',
        mail: 'bagyejun@hanmail.net',
        birthday: '1943, 6, 28'
    }, {
        job: '관세사',
        name: '김종수',
        gender: 'M',
        address: '경상북도 인제군 봉은사길',
        mail: 'junyeong23@hanmail.net',
        birthday: '1924, 7, 4'
    }, {
        job: '총무 사무원',
        name: '김옥순',
        gender: 'F',
        address: '강원도 횡성군 반포대0가 (민준김마을)',
        mail: 'fseo@nate.com',
        birthday: '2000, 10, 14'
    }, {
        job: '변호사',
        name: '최하은',
        gender: 'F',
        address: '부산광역시 노원구 학동거리',
        mail: 'boram43@gmail.com',
        birthday: '1992, 5, 20'
    }, {
        job: '시스템 소프트웨어 개발자',
        name: '한승현',
        gender: 'M',
        address: '대구광역시 동대문구 학동585로',
        mail: 'can@hotmail.com',
        birthday: '1909, 5, 6'
    }, {
        job: '주유원',
        name: '김도윤',
        gender: 'M',
        address: '경기도 포천시 논현거리 (성민남마을)',
        mail: 'minjun42@gmail.com',
        birthday: '1917, 4, 12'
    }, {
        job: '배우 및 모델',
        name: '권현준',
        gender: 'M',
        address: '전라남도 삼척시 논현201거리 (정식이유마을)',
        mail: 'haeun03@hotmail.com',
        birthday: '1922, 6, 4'
    }, {
        job: '섬유공학 기술자 및 연구원',
        name: '김지영',
        gender: 'F',
        address: '전라북도 화성시 압구정거리 (지은이강리)',
        mail: 'coehyeonu@daum.net',
        birthday: '2008, 4, 10'
    }, {
        job: '금속가공관련 제어장치 조작원',
        name: '김민수',
        gender: 'M',
        address: '제주특별자치도 오산시 가락11가',
        mail: 'seonyeong21@gmail.com',
        birthday: '1997, 8, 7'
    }, {
        job: '기타 배관공',
        name: '이미숙',
        gender: 'F',
        address: '울산광역시 관악구 서초중앙972거리 (수빈최마을)',
        mail: 'coejihu@live.com',
        birthday: '2008, 2, 29'
    }, {
        job: '데이터베이스 개발자',
        name: '김성수',
        gender: 'M',
        address: '경기도 괴산군 서초중앙가',
        mail: 'boram13@hanmail.net',
        birthday: '1906, 11, 24'
    }, {
        job: '인사 및 교육/훈련 사무원',
        name: '김영숙',
        gender: 'F',
        address: '부산광역시 중구 가락거리 (지후이면)',
        mail: 'bagseoyeon@live.com',
        birthday: '1949, 3, 18'
    }, {
        job: '선박 갑판승무원 및 관련 종사원',
        name: '박정남',
        gender: 'M',
        address: '경상남도 영동군 석촌호수2가 (영환김김동)',
        mail: 'seojunho@gmail.com',
        birthday: '1930, 11, 12'
    }, {
        job: '환경공학 시험원',
        name: '김중수',
        gender: 'M',
        address: '강원도 부여군 논현가 (민재이문동)',
        mail: 'misug80@hanmail.net',
        birthday: '1966, 3, 27'
    }, {
        job: '주조기 조작원',
        name: '최정웅',
        gender: 'M',
        address: '충청북도 수원시 학동034가',
        mail: 'xgim@daum.net',
        birthday: '1939, 10, 29'
    }, {
        job: '냉/난방 관련 설비 조작원',
        name: '박진우',
        gender: 'M',
        address: '전라남도 홍성군 역삼거리',
        mail: 'jongsuryu@naver.com',
        birthday: '1911, 4, 11'
    }, {
        job: '주조원',
        name: '이수빈',
        gender: 'F',
        address: '부산광역시 성동구 서초중앙거리 (정숙이이리)',
        mail: 'yeonghyigweon@hotmail.com',
        birthday: '1915, 10, 5'
    }, {
        job: '배우 및 모델',
        name: '김예원',
        gender: 'F',
        address: '인천광역시 강북구 양재천길 (성진김읍)',
        mail: 'sangceol14@naver.com',
        birthday: '1927, 3, 12'
    }, {
        job: '통신서비스판매원',
        name: '강현주',
        gender: 'F',
        address: '강원도 안산시 논현3가 (광수이김리)',
        mail: 'ncoe@gmail.com',
        birthday: '1930, 2, 10'
    }, {
        job: '단열공',
        name: '심성민',
        gender: 'M',
        address: '경기도 파주시 역삼29길 (수민양고읍)',
        mail: 'yangboram@daum.net',
        birthday: '1957, 9, 3'
    }, {
        job: '임상 심리사 및 기타 치료사',
        name: '홍영미',
        gender: 'F',
        address: '경상북도 예산군 영동대9로 (미정박이면)',
        mail: 'rcoe@live.com',
        birthday: '1963, 7, 20'
    }, {
        job: '보건의료관련 관리자',
        name: '황성현',
        gender: 'M',
        address: '대전광역시 송파구 역삼19가',
        mail: 'jihun01@live.com',
        birthday: '1930, 6, 12'
    }, {
        job: '임산물채취 및 기타 임업 관련 종사원',
        name: '성중수',
        gender: 'M',
        address: '인천광역시 도봉구 잠실가 (서준박김리)',
        mail: 'miyeong61@hanmail.net',
        birthday: '1971, 12, 18'
    }, {
        job: '기타 사무원',
        name: '박영식',
        gender: 'M',
        address: '대전광역시 중구 삼성가 (경자고마을)',
        mail: 'yeongsuni@hotmail.com',
        birthday: '1950, 8, 28'
    }, {
        job: '섬유공학 기술자 및 연구원',
        name: '김숙자',
        gender: 'F',
        address: '충청남도 고성군 백제고분74가',
        mail: 'jiuhong@nate.com',
        birthday: '1957, 5, 8'
    }, {
        job: '기타 경호 및 보안 관련 종사원',
        name: '우영진',
        gender: 'M',
        address: '강원도 하남시 백제고분17로',
        mail: 'eunseo18@live.com',
        birthday: '1934, 4, 29'
    }, {
        job: '기타 배관공',
        name: '이현숙',
        gender: 'F',
        address: '광주광역시 동구 역삼가 (광수김김읍)',
        mail: 'pgim@dreamwiz.com',
        birthday: '1919, 9, 1'
    }, {
        job: '유리제조 및 가공기 조작원',
        name: '이지훈',
        gender: 'M',
        address: '서울특별시 구로구 개포34로',
        mail: 'ugim@naver.com',
        birthday: '1910, 4, 13'
    }, {
        job: '표백 및 염색 관련 조작원',
        name: '유상철',
        gender: 'M',
        address: '충청북도 안산시 학동길',
        mail: 'minseoghwang@gmail.com',
        birthday: '2000, 3, 23'
    }, {
        job: '귀금속 및 보석 세공원',
        name: '장준호',
        gender: 'M',
        address: '경상북도 광명시 봉은사04길 (상철박김마을)',
        mail: 'yeweonbag@naver.com',
        birthday: '1966, 11, 16'
    }, {
        job: '기타 서비스관련 단순 종사원',
        name: '윤현지',
        gender: 'F',
        address: '경기도 옥천군 반포대05거리',
        mail: 'di@daum.net',
        birthday: '1925, 2, 5'
    }, {
        job: '',
        name: '양성현',
        gender: 'M',
        address: '경상북도 고양시 일산서구 봉은사거리',
        mail: 'ki@hanmail.net',
        birthday: '1950, 6, 14'
    }, {
        job: '시스템 소프트웨어 개발자',
        name: '한경자',
        gender: 'F',
        address: '세종특별자치시 노원구 역삼850길 (성훈한박리)',
        mail: 'oi@naver.com',
        birthday: '1943, 10, 26'
    }, {
        job: '무용가 및 안무가',
        name: '김미숙',
        gender: 'F',
        address: '대구광역시 용산구 잠실238거리',
        mail: 'ogjai@hotmail.com',
        birthday: '1987, 1, 8'
    }, {
        job: '통신공학 기술자 및 연구원',
        name: '김지우',
        gender: 'F',
        address: '경기도 인제군 논현가 (아름이동)',
        mail: 'dohyeon36@hotmail.com',
        birthday: '1942, 9, 20'
    }, {
        job: '캐드원',
        name: '이지영',
        gender: 'F',
        address: '대전광역시 구로구 오금길 (경자김마을)',
        mail: 'ui@gmail.com',
        birthday: '1955, 1, 1'
    }, {
        job: '조사 전문가',
        name: '박경자',
        gender: 'F',
        address: '경상남도 용인시 기흥구 서초중앙628로 (수민김동)',
        mail: 'eunjui@daum.net',
        birthday: '1992, 8, 9'
    }, {
        job: '기타 전기/전자기기 설치 및 수리원',
        name: '이승현',
        gender: 'M',
        address: '충청남도 가평군 도산대686길',
        mail: 'hongmisug@hanmail.net',
        birthday: '2020, 9, 16'
    }, {
        job: '법률관련 사무원',
        name: '이영미',
        gender: 'F',
        address: '충청북도 속초시 양재천거리 (예원김윤면)',
        mail: 'jeongho51@live.com',
        birthday: '1976, 10, 2'
    }, {
        job: '기타 건축마감관련 기능 종사원',
        name: '최서현',
        gender: 'F',
        address: '경기도 철원군 압구정로',
        mail: 'hanyeeun@naver.com',
        birthday: '1992, 12, 12'
    }, {
        job: '선박 갑판승무원 및 관련 종사원',
        name: '서광수',
        gender: 'M',
        address: '대구광역시 북구 영동대7로 (재호서동)',
        mail: 'ni@hanmail.net',
        birthday: '1978, 7, 23'
    }, {
        job: '기타 직물 및 신발 관련 기계조작원 및 조립원',
        name: '최민수',
        gender: 'M',
        address: '충청북도 영동군 언주47가 (지우손면)',
        mail: 'oi@gmail.com',
        birthday: '1987, 8, 25'
    }, {
        job: '증권 및 외환 딜러',
        name: '김지영',
        gender: 'F',
        address: '대구광역시 용산구 강남대1거리 (은주윤동)',
        mail: 'ihyeonju@naver.com',
        birthday: '2003, 2, 10'
    }, {
        job: '기계공학 기술자 및 연구원',
        name: '강미숙',
        gender: 'F',
        address: '경상북도 횡성군 강남대066거리 (미정김면)',
        mail: 'ogsun15@nate.com',
        birthday: '1920, 12, 22'
    }, {
        job: '육아 도우미',
        name: '김지우',
        gender: 'F',
        address: '충청북도 안산시 상록구 압구정82로 (종수김면)',
        mail: 'joseongsu@live.com',
        birthday: '2017, 6, 27'
    }, {
        job: '도금 및 금속분무기 조작원',
        name: '이영숙',
        gender: 'F',
        address: '경상남도 성남시 백제고분가 (진우이리)',
        mail: 'boram21@daum.net',
        birthday: '1917, 2, 19'
    }, {
        job: '관세행정 사무원',
        name: '김영진',
        gender: 'M',
        address: '인천광역시 동대문구 언주가',
        mail: 'coejeongsig@live.com',
        birthday: '2011, 4, 28'
    }, {
        job: '어부 및 해녀',
        name: '주지민',
        gender: 'F',
        address: '충청남도 시흥시 삼성5가 (명자이면)',
        mail: 'gimjihun@hanmail.net',
        birthday: '2018, 2, 15'
    }, {
        job: '판금원',
        name: '박영길',
        gender: 'M',
        address: '서울특별시 노원구 봉은사86로 (현주김이면)',
        mail: 'hyeonju34@dreamwiz.com',
        birthday: '2008, 4, 6'
    }, {
        job: '상품 대여원',
        name: '이수민',
        gender: 'F',
        address: '경상남도 구리시 서초중앙3가 (경자김강마을)',
        mail: 'jangjaeho@hotmail.com',
        birthday: '1959, 9, 21'
    }, {
        job: '웨이터',
        name: '이도윤',
        gender: 'M',
        address: '대구광역시 노원구 잠실로',
        mail: 'hamyeongja@live.com',
        birthday: '1942, 7, 31'
    }, {
        job: '경영 및 진단 전문가',
        name: '이광수',
        gender: 'M',
        address: '부산광역시 성북구 서초중앙05로 (미경권장리)',
        mail: 'jieun77@gmail.com',
        birthday: '1996, 5, 22'
    }, {
        job: '기타 공학관련 기술자 및 시험원',
        name: '김경수',
        gender: 'M',
        address: '대구광역시 송파구 압구정536가 (현주김동)',
        mail: 'wjeong@naver.com',
        birthday: '2004, 12, 2'
    }, {
        job: '데이터베이스 개발자',
        name: '성경자',
        gender: 'F',
        address: '부산광역시 동대문구 백제고분05로 (성호김읍)',
        mail: 'gimyeongsig@naver.com',
        birthday: '2016, 10, 24'
    }, {
        job: '전문 의사',
        name: '김민재',
        gender: 'M',
        address: '강원도 태백시 논현1거리',
        mail: 'yuhyejin@hanmail.net',
        birthday: '1909, 12, 18'
    }, {
        job: '제품 및 광고 영업원',
        name: '최주원',
        gender: 'M',
        address: '대전광역시 구로구 선릉33거리',
        mail: 'ogim@hanmail.net',
        birthday: '2000, 2, 15'
    }, {
        job: '물품 이동 장비 설치 및 정비원',
        name: '박준서',
        gender: 'M',
        address: '경기도 시흥시 영동대가',
        mail: 'ogang@gmail.com',
        birthday: '1960, 1, 29'
    }, {
        job: '검표원',
        name: '김미정',
        gender: 'F',
        address: '세종특별자치시 은평구 석촌호수거리',
        mail: 'seunghyeon26@hotmail.com',
        birthday: '1987, 10, 23'
    }, {
        job: '금속 / 재료공학 연구원 및 기술자',
        name: '김명자',
        gender: 'F',
        address: '경기도 안성시 도산대652가 (혜진김리)',
        mail: 'junho11@hanmail.net',
        birthday: '1953, 8, 30'
    }, {
        job: '텔레마케터',
        name: '백영자',
        gender: 'F',
        address: '경상북도 하남시 백제고분3거리 (정웅이손면)',
        mail: 'jhwang@daum.net',
        birthday: '1987, 8, 24'
    }, {
        job: '식품공학 기술자 및 연구원',
        name: '한아름',
        gender: 'F',
        address: '광주광역시 성동구 잠실4가 (미경이동)',
        mail: 'cunjacoe@nate.com',
        birthday: '1935, 8, 7'
    }, {
        job: '기술 및 기능계 강사',
        name: '박성수',
        gender: 'M',
        address: '인천광역시 강북구 영동대거리',
        mail: 'sugjayu@daum.net',
        birthday: '2011, 4, 3'
    }, {
        job: '기타 행정 및 경영지원 관리자',
        name: '황영수',
        gender: 'M',
        address: '부산광역시 성북구 역삼로',
        mail: 'junho07@nate.com',
        birthday: '1929, 5, 25'
    }, {
        job: '보험 및 금융 상품 개발자',
        name: '홍미경',
        gender: 'F',
        address: '전라북도 고양시 일산동구 학동9가',
        mail: 'ki@naver.com',
        birthday: '1992, 3, 25'
    }, {
        job: '사회복지관련 관리자',
        name: '이미경',
        gender: 'F',
        address: '경상북도 광명시 석촌호수69길',
        mail: 'bagsujin@nate.com',
        birthday: '2013, 12, 4'
    }, {
        job: '위관급',
        name: '노영환',
        gender: 'M',
        address: '경상북도 부천시 학동로',
        mail: 'seohyeon35@hanmail.net',
        birthday: '1944, 11, 27'
    }, {
        job: '어부 및 해녀',
        name: '문성민',
        gender: 'M',
        address: '전라북도 의왕시 영동대839거리',
        mail: 'yeongja35@hanmail.net',
        birthday: '1992, 8, 21'
    }, {
        job: '영양사',
        name: '이경자',
        gender: 'F',
        address: '광주광역시 송파구 반포대로 (영식박면)',
        mail: 'ihyeonju@hanmail.net',
        birthday: '1996, 1, 17'
    }, {
        job: '한의사',
        name: '김정순',
        gender: 'F',
        address: '서울특별시 북구 봉은사03로',
        mail: 'yunseogang@gmail.com',
        birthday: '2006, 7, 1'
    }, {
        job: '배우 및 모델',
        name: '김영수',
        gender: 'M',
        address: '제주특별자치도 홍천군 봉은사거리 (민수임리)',
        mail: 'gyeonghyi02@dreamwiz.com',
        birthday: '1950, 10, 24'
    }, {
        job: '의회의원/고위공무원 및 공공단체임원',
        name: '김아름',
        gender: 'F',
        address: '전라북도 음성군 강남대66로 (하은김심면)',
        mail: 'sumin78@naver.com',
        birthday: '1952, 10, 26'
    }, {
        job: '부동산 컨설턴트 및 중개인',
        name: '박은정',
        gender: 'F',
        address: '세종특별자치시 강북구 언주93길 (경자백최리)',
        mail: 'gimjunhyeog@gmail.com',
        birthday: '1910, 8, 25'
    }, {
        job: '기타 건설관련 기능 종사원',
        name: '유춘자',
        gender: 'F',
        address: '경기도 안양시 만안구 논현543거리',
        mail: 'xgim@daum.net',
        birthday: '1987, 6, 11'
    }, {
        job: '플라스틱제품 생산기 조작원',
        name: '오상훈',
        gender: 'M',
        address: '세종특별자치시 노원구 가락14가',
        mail: 'ngang@dreamwiz.com',
        birthday: '1981, 1, 4'
    }, {
        job: '치과위생사',
        name: '송준호',
        gender: 'M',
        address: '광주광역시 송파구 서초중앙가',
        mail: 'myeongjagim@naver.com',
        birthday: '2001, 9, 14'
    }, {
        job: '웹 및 멀티미디어 디자이너',
        name: '고지연',
        gender: 'F',
        address: '전라남도 고양시 가락18길',
        mail: 'yeongsighan@live.com',
        birthday: '1981, 12, 1'
    }, {
        job: '양식원',
        name: '김재현',
        gender: 'M',
        address: '전라북도 광주시 강남대52로 (중수홍김면)',
        mail: 'hyeonsugi@live.com',
        birthday: '1933, 3, 27'
    }, {
        job: '섬유공학 기술자 및 연구원',
        name: '안예원',
        gender: 'F',
        address: '대구광역시 동구 압구정거리 (지현송동)',
        mail: 'junhyeogbag@live.com',
        birthday: '1993, 9, 24'
    }, {
        job: '상품중개인 및 경매사',
        name: '박우진',
        gender: 'M',
        address: '대구광역시 남구 선릉548거리',
        mail: 'sgim@naver.com',
        birthday: '1968, 9, 7'
    }, {
        job: '경영 및 진단 전문가',
        name: '김하은',
        gender: 'F',
        address: '서울특별시 북구 양재천440거리',
        mail: 'iseojun@daum.net',
        birthday: '1942, 6, 7'
    }, {
        job: '조명기사 및 영사기사',
        name: '하병철',
        gender: 'M',
        address: '세종특별자치시 송파구 영동대335로',
        mail: 'gcoe@daum.net',
        birthday: '1906, 4, 22'
    }, {
        job: '계기 검침원 및 가스점검원',
        name: '류영미',
        gender: 'F',
        address: '서울특별시 성동구 석촌호수81길 (수빈김박읍)',
        mail: 'namjeongho@hanmail.net',
        birthday: '1916, 3, 29'
    }, {
        job: '용접기 조작원',
        name: '이영수',
        gender: 'M',
        address: '경상북도 동두천시 영동대길 (현준김마을)',
        mail: 'bhwang@nate.com',
        birthday: '1979, 7, 5'
    }, {
        job: '피부미용 및 체형관리사',
        name: '이영자',
        gender: 'F',
        address: '강원도 성남시 분당구 가락가 (영철홍김마을)',
        mail: 'gimogja@naver.com',
        birthday: '1937, 11, 19'
    }, {
        job: '전기/전자 및 기계 공학 시험원',
        name: '윤지혜',
        gender: 'F',
        address: '인천광역시 강동구 강남대77로',
        mail: 'pbag@nate.com',
        birthday: '1966, 8, 3'
    }, {
        job: '냉동/냉장 /공조기 설치 및 정비원',
        name: '전미경',
        gender: 'F',
        address: '서울특별시 마포구 강남대길 (지영박최읍)',
        mail: 'yujin62@nate.com',
        birthday: '1933, 10, 12'
    }, {
        job: '기타 자동차 운전원',
        name: '나지아',
        gender: 'F',
        address: '강원도 부천시 학동로',
        mail: 'gimsanghyeon@hotmail.com',
        birthday: '1923, 8, 31'
    }, {
        job: '영업 및 판매 관련 관리자',
        name: '권민석',
        gender: 'M',
        address: '세종특별자치시 노원구 영동대로',
        mail: 'subingang@daum.net',
        birthday: '2000, 10, 11'
    }, {
        job: '비파괴 검사원',
        name: '김승현',
        gender: 'M',
        address: '전라남도 고성군 양재천거리 (경숙박읍)',
        mail: 'hansugja@dreamwiz.com',
        birthday: '1910, 3, 25'
    }, {
        job: '방사선사',
        name: '김종수',
        gender: 'M',
        address: '광주광역시 도봉구 논현로 (병철김면)',
        mail: 'vyun@nate.com',
        birthday: '1949, 8, 17'
    }, {
        job: '법률관련 사무원',
        name: '서성훈',
        gender: 'M',
        address: '경상남도 원주시 잠실거리 (정식김읍)',
        mail: 'ijeongsig@naver.com',
        birthday: '1905, 9, 28'
    }, {
        job: '오락시설 서비스원',
        name: '전지연',
        gender: 'F',
        address: '세종특별자치시 성동구 도산대로',
        mail: 'ygim@hanmail.net',
        birthday: '1927, 12, 18'
    }, {
        job: '섬유제조 기계조작원',
        name: '강진호',
        gender: 'M',
        address: '전라북도 양구군 가락거리',
        mail: 'gimmijeong@dreamwiz.com',
        birthday: '2001, 4, 20'
    }, {
        job: '',
        name: '서영진',
        gender: 'M',
        address: '광주광역시 북구 언주로',
        mail: 'jangmigyeong@gmail.com',
        birthday: '2014, 8, 12'
    }, {
        job: '안경사',
        name: '박정순',
        gender: 'F',
        address: '서울특별시 중구 가락로',
        mail: 'bagseojun@live.com',
        birthday: '1975, 7, 24'
    }, {
        job: '전문 의사',
        name: '박건우',
        gender: 'M',
        address: '경기도 부여군 가락가 (재현권리)',
        mail: 'hcoe@hotmail.com',
        birthday: '1962, 3, 9'
    }, {
        job: '건축 석공',
        name: '조정순',
        gender: 'F',
        address: '제주특별자치도 정선군 백제고분길 (지후박권마을)',
        mail: 'gyeongjai@daum.net',
        birthday: '1940, 2, 17'
    }, {
        job: '음료 제조관련 기계 조작원',
        name: '장춘자',
        gender: 'F',
        address: '인천광역시 마포구 학동89길',
        mail: 'ieunseo@dreamwiz.com',
        birthday: '2008, 4, 13'
    }, {
        job: '고무 및 플라스틱 제품 조립원',
        name: '손수진',
        gender: 'F',
        address: '경상북도 안산시 단원구 논현가',
        mail: 'bagjeongnam@daum.net',
        birthday: '1959, 10, 15'
    }, {
        job: '방수공',
        name: '이민준',
        gender: 'M',
        address: '전라북도 안양시 동안구 압구정길',
        mail: 'eunju12@live.com',
        birthday: '2015, 5, 22'
    }, {
        job: '물품 이동 장비 설치 및 정비원',
        name: '최옥자',
        gender: 'F',
        address: '충청북도 의정부시 가락0로 (예지박박면)',
        mail: 'minsu13@dreamwiz.com',
        birthday: '1976, 4, 18'
    }, {
        job: '제관원',
        name: '김윤서',
        gender: 'F',
        address: '세종특별자치시 서대문구 삼성로 (지후박리)',
        mail: 'jihyeon41@daum.net',
        birthday: '1996, 2, 8'
    }, {
        job: '검표원',
        name: '이성현',
        gender: 'M',
        address: '부산광역시 노원구 백제고분2거리',
        mail: 'gimjihun@dreamwiz.com',
        birthday: '1998, 11, 8'
    }, {
        job: '유리제조 및 가공기 조작원',
        name: '이지원',
        gender: 'F',
        address: '광주광역시 중랑구 역삼8길 (지아홍면)',
        mail: 'hgim@naver.com',
        birthday: '1995, 7, 20'
    }, {
        job: '냉/난방 관련 설비 조작원',
        name: '김중수',
        gender: 'M',
        address: '세종특별자치시 강동구 테헤란33길 (서현김민읍)',
        mail: 'junyeong74@hotmail.com',
        birthday: '1996, 9, 28'
    }, {
        job: '영업 및 판매 관련 관리자',
        name: '송시우',
        gender: 'M',
        address: '경기도 양구군 강남대124가',
        mail: 'jiyeong62@hotmail.com',
        birthday: '1964, 2, 26'
    }, {
        job: '컴퓨터 하드웨어 기술자 및 연구원',
        name: '김시우',
        gender: 'M',
        address: '대구광역시 마포구 잠실2가',
        mail: 'gimseonyeong@hotmail.com',
        birthday: '1992, 8, 19'
    }, {
        job: '인쇄기 조작원',
        name: '김종수',
        gender: 'M',
        address: '경상북도 괴산군 논현길',
        mail: 'yi@live.com',
        birthday: '1986, 8, 10'
    }, {
        job: '기타 자동차 운전원',
        name: '노미영',
        gender: 'F',
        address: '대구광역시 도봉구 서초대6길',
        mail: 'yyun@live.com',
        birthday: '1997, 12, 19'
    }, {
        job: '고무 및 플라스틱 제품 조립원',
        name: '성시우',
        gender: 'M',
        address: '전라남도 성남시 중원구 삼성가 (서윤이박리)',
        mail: 'hongjihyeon@gmail.com',
        birthday: '1942, 8, 31'
    }, {
        job: '통신 및 방송송출 장비 기사',
        name: '한채원',
        gender: 'F',
        address: '세종특별자치시 강동구 언주957거리 (도현배리)',
        mail: 'yangeunyeong@dreamwiz.com',
        birthday: '1923, 10, 9'
    }, {
        job: '자동차 영업원',
        name: '안시우',
        gender: 'M',
        address: '서울특별시 관악구 영동대로 (정자김곽동)',
        mail: 'gseo@dreamwiz.com',
        birthday: '2009, 9, 8'
    }, {
        job: '재단사',
        name: '서현숙',
        gender: 'F',
        address: '서울특별시 동대문구 학동216거리',
        mail: 'yeongjinryu@hotmail.com',
        birthday: '1966, 5, 1'
    }, {
        job: '통신 및 관련 장비 설치 및 수리원',
        name: '박서연',
        gender: 'F',
        address: '충청북도 정선군 오금233길',
        mail: 'eungyeongsong@gmail.com',
        birthday: '1947, 1, 26'
    }, {
        job: '관제사',
        name: '송명자',
        gender: 'F',
        address: '전라남도 안성시 선릉2거리 (은서최김리)',
        mail: 'ogjai@hotmail.com',
        birthday: '1974, 3, 25'
    }, {
        job: '모피 및 가죽의복 제조원',
        name: '박은주',
        gender: 'F',
        address: '경기도 고양시 덕양구 언주로 (영호김이면)',
        mail: 'seongjin29@hanmail.net',
        birthday: '1971, 12, 12'
    }, {
        job: '기타 직물 및 신발 관련 기계조작원 및 조립원',
        name: '송수빈',
        gender: 'F',
        address: '울산광역시 강동구 서초중앙거리',
        mail: 'wo@naver.com',
        birthday: '2001, 12, 13'
    }, {
        job: '섬유제조 기계조작원',
        name: '한도윤',
        gender: 'M',
        address: '충청북도 금산군 선릉길',
        mail: 'bagyeongja@hanmail.net',
        birthday: '2013, 10, 22'
    }, {
        job: '기타 미용관련 서비스 종사원',
        name: '박정희',
        gender: 'F',
        address: '부산광역시 동작구 개포거리',
        mail: 'si@hotmail.com',
        birthday: '2015, 3, 2'
    }, {
        job: '네트워크시스템 개발자',
        name: '박영진',
        gender: 'M',
        address: '제주특별자치도 의왕시 강남대0거리 (서현김김동)',
        mail: 'jinu52@hotmail.com',
        birthday: '1911, 9, 11'
    }, {
        job: '유리제조 및 가공기 조작원',
        name: '김정순',
        gender: 'F',
        address: '대구광역시 남구 반포대가',
        mail: 'gyeongjagim@dreamwiz.com',
        birthday: '1952, 10, 24'
    }, {
        job: '기타 서비스관련 단순 종사원',
        name: '윤영호',
        gender: 'M',
        address: '강원도 광주시 영동대06가',
        mail: 'caeweoni@hotmail.com',
        birthday: '1952, 1, 1'
    }, {
        job: '기타 사육관련 종사원',
        name: '주현우',
        gender: 'M',
        address: '제주특별자치도 고성군 학동5로',
        mail: 'seongminmun@gmail.com',
        birthday: '1936, 8, 28'
    }, {
        job: '직업상담사 및 취업 알선원',
        name: '김주원',
        gender: 'M',
        address: '경상북도 영동군 선릉54거리 (민서이리)',
        mail: 'hyeonu29@daum.net',
        birthday: '1913, 1, 13'
    }, {
        job: '중식 주방장 및 조리사',
        name: '이진호',
        gender: 'M',
        address: '경상남도 속초시 삼성21가',
        mail: 'hyeonjungwag@live.com',
        birthday: '1909, 11, 3'
    }, {
        job: '자동조립라인 및 산업용 로봇 조작원',
        name: '김상훈',
        gender: 'M',
        address: '경상남도 남양주시 언주7로',
        mail: 'coeminjae@live.com',
        birthday: '2000, 5, 31'
    }, {
        job: '화학제품 생산기 조작원',
        name: '김지혜',
        gender: 'F',
        address: '전라북도 안산시 단원구 삼성616로',
        mail: 'misug64@nate.com',
        birthday: '1963, 1, 13'
    }, {
        job: '화학공학 시험원',
        name: '고영진',
        gender: 'M',
        address: '전라남도 성남시 중원구 양재천82가 (민수김면)',
        mail: 'yejin09@naver.com',
        birthday: '1928, 5, 12'
    }, {
        job: '자연과학 연구원',
        name: '최옥자',
        gender: 'F',
        address: '전라북도 용인시 양재천7가',
        mail: 'cunjacoe@nate.com',
        birthday: '2003, 6, 1'
    }, {
        job: '투자 및 신용 분석가',
        name: '이예진',
        gender: 'F',
        address: '광주광역시 관악구 삼성0길',
        mail: 'po@nate.com',
        birthday: '1942, 4, 13'
    }, {
        job: '택배원',
        name: '이광수',
        gender: 'M',
        address: '서울특별시 노원구 반포대8로',
        mail: 'songyeongsu@live.com',
        birthday: '1919, 7, 1'
    }, {
        job: '촬영기사',
        name: '이민준',
        gender: 'M',
        address: '경상남도 양구군 오금가',
        mail: 'zgim@daum.net',
        birthday: '1961, 10, 18'
    }, {
        job: '항공기 조종사',
        name: '오예준',
        gender: 'M',
        address: '대전광역시 강북구 봉은사가',
        mail: 'myeongsug92@live.com',
        birthday: '1948, 12, 3'
    }, {
        job: '변리사',
        name: '홍하윤',
        gender: 'F',
        address: '충청북도 수원시 오금4길 (건우김면)',
        mail: 'eunyeong28@daum.net',
        birthday: '1924, 7, 29'
    }, {
        job: '기타 건설/전기 및 생산 관련 관리자',
        name: '최옥자',
        gender: 'F',
        address: '충청북도 김포시 학동6거리',
        mail: 'yeongceolgim@hotmail.com',
        birthday: '1906, 3, 29'
    }, {
        job: '채소 및 특용작물 재배원',
        name: '김지우',
        gender: 'F',
        address: '서울특별시 서구 선릉로 (영호이이동)',
        mail: 'seonghyeonbag@nate.com',
        birthday: '1960, 12, 11'
    }, {
        job: '목제품 제조관련 종사원',
        name: '구경수',
        gender: 'M',
        address: '경기도 청주시 청원구 잠실로 (경수한마을)',
        mail: 'hyeonjicoe@dreamwiz.com',
        birthday: '2020, 6, 25'
    }, {
        job: '냉/난방 관련 설비 조작원',
        name: '박영미',
        gender: 'F',
        address: '경기도 원주시 영동대552길',
        mail: 'jiyeoni@live.com',
        birthday: '1969, 10, 10'
    }, {
        job: '건설자재 시험원',
        name: '윤지원',
        gender: 'F',
        address: '제주특별자치도 하남시 논현가',
        mail: 'gimseongjin@gmail.com',
        birthday: '1931, 5, 31'
    }, {
        job: '응용 소프트웨어 개발자',
        name: '박지은',
        gender: 'F',
        address: '대전광역시 남구 삼성길 (상현최김동)',
        mail: 'jiyeong33@live.com',
        birthday: '1924, 12, 20'
    }, {
        job: '조사 전문가',
        name: '이영환',
        gender: 'M',
        address: '전라남도 시흥시 삼성961로 (건우이면)',
        mail: 'gimjeonghun@daum.net',
        birthday: '2014, 12, 24'
    }, {
        job: '기타 배달원',
        name: '강현우',
        gender: 'M',
        address: '광주광역시 노원구 봉은사363가 (예은김동)',
        mail: 'ujini@dreamwiz.com',
        birthday: '1943, 11, 20'
    }, {
        job: '보건의료관련 관리자',
        name: '김도현',
        gender: 'M',
        address: '충청북도 진천군 개포로',
        mail: 'xi@naver.com',
        birthday: '1978, 10, 15'
    }, {
        job: '곡식작물 재배원',
        name: '이승현',
        gender: 'M',
        address: '충청남도 수원시 영통구 개포445가',
        mail: 'gimminjun@hanmail.net',
        birthday: '1916, 2, 27'
    }, {
        job: '사진기자 및 사진가',
        name: '김성훈',
        gender: 'M',
        address: '제주특별자치도 아산시 봉은사165거리',
        mail: 'yeongceol51@daum.net',
        birthday: '1927, 4, 10'
    }, {
        job: '철로 설치 및 보수원',
        name: '이영식',
        gender: 'M',
        address: '충청남도 양구군 잠실670길',
        mail: 'coeyeongsig@hanmail.net',
        birthday: '1966, 8, 10'
    }, {
        job: '기타 제조관련 기계 조작원',
        name: '김수진',
        gender: 'F',
        address: '경기도 군포시 오금26길 (영철권동)',
        mail: 'kgang@dreamwiz.com',
        birthday: '2010, 3, 25'
    }, {
        job: '정보통신관련 관리자',
        name: '이성훈',
        gender: 'M',
        address: '대구광역시 중랑구 언주265거리',
        mail: 'eunju08@nate.com',
        birthday: '1970, 5, 13'
    }, {
        job: '내선전공',
        name: '심은정',
        gender: 'F',
        address: '대구광역시 서초구 학동43가',
        mail: 'gimjihun@daum.net',
        birthday: '1961, 10, 16'
    }, {
        job: '낙농업관련 종사원',
        name: '백순자',
        gender: 'F',
        address: '서울특별시 노원구 역삼로',
        mail: 'sgang@hotmail.com',
        birthday: '1922, 5, 22'
    }, {
        job: '컴퓨터 강사',
        name: '김승민',
        gender: 'M',
        address: '울산광역시 마포구 테헤란로 (수민최마을)',
        mail: 'hhong@live.com',
        birthday: '1911, 5, 31'
    }, {
        job: '기타 스포츠 및 레크레이션 관련 전문가',
        name: '장서현',
        gender: 'F',
        address: '제주특별자치도 음성군 오금가 (종수김동)',
        mail: 'vi@hotmail.com',
        birthday: '1981, 6, 13'
    }, {
        job: '주차 관리원 및 안내원',
        name: '허예지',
        gender: 'F',
        address: '울산광역시 동구 삼성가',
        mail: 'byun@hanmail.net',
        birthday: '1944, 3, 6'
    }, {
        job: '식품/섬유 공학 및 에너지 시험원',
        name: '이유진',
        gender: 'F',
        address: '경상남도 예산군 서초중앙02가 (정자이읍)',
        mail: 'ominsu@nate.com',
        birthday: '1985, 2, 10'
    }, {
        job: '제분 및 도정 관련 기계 조작원',
        name: '안성수',
        gender: 'M',
        address: '인천광역시 중랑구 반포대31로 (준영고리)',
        mail: 'geonu31@hanmail.net',
        birthday: '1935, 5, 30'
    }, {
        job: '출판물 전문가',
        name: '윤진우',
        gender: 'M',
        address: '충청북도 천안시 동남구 도산대52길',
        mail: 'jeongsig96@daum.net',
        birthday: '1909, 1, 18'
    }, {
        job: '기타 제조관련 기계 조작원',
        name: '류정웅',
        gender: 'M',
        address: '부산광역시 중랑구 봉은사280길 (선영김이읍)',
        mail: 'seonghogim@nate.com',
        birthday: '1940, 8, 16'
    }, {
        job: '상품중개인 및 경매사',
        name: '안영식',
        gender: 'M',
        address: '서울특별시 송파구 가락81가 (지아윤장리)',
        mail: 'munyeongceol@hotmail.com',
        birthday: '1938, 11, 9'
    }, {
        job: '건설자재 시험원',
        name: '박서준',
        gender: 'M',
        address: '부산광역시 노원구 개포로',
        mail: 'songyeongho@nate.com',
        birthday: '1963, 6, 19'
    }, {
        job: '토목공학 기술자',
        name: '김상훈',
        gender: 'M',
        address: '강원도 동해시 서초대95길',
        mail: 'yeonghyii@hotmail.com',
        birthday: '1978, 8, 12'
    }, {
        job: '금속가공 기계조작원',
        name: '김예은',
        gender: 'F',
        address: '전라북도 의정부시 논현6로 (도현김마을)',
        mail: 'mhan@live.com',
        birthday: '1932, 9, 18'
    }, {
        job: '제관기 조작원',
        name: '김순옥',
        gender: 'F',
        address: '서울특별시 관악구 논현3길 (영자최동)',
        mail: 'dohyeon62@live.com',
        birthday: '1950, 8, 19'
    }, {
        job: '안경사',
        name: '서보람',
        gender: 'F',
        address: '인천광역시 동대문구 강남대가',
        mail: 'lhan@nate.com',
        birthday: '1970, 8, 6'
    }, {
        job: '바닥재 시공원',
        name: '주성현',
        gender: 'M',
        address: '전라북도 양평군 언주길 (예준김리)',
        mail: 'vcoe@daum.net',
        birthday: '1999, 4, 14'
    }, {
        job: '대학 교육조교',
        name: '양정자',
        gender: 'F',
        address: '광주광역시 마포구 테헤란18거리',
        mail: 'sujin68@hanmail.net',
        birthday: '1908, 5, 9'
    }, {
        job: '전기 및 전자 설비 조작원',
        name: '김숙자',
        gender: 'F',
        address: '충청북도 화천군 도산대길',
        mail: 'eunseobag@nate.com',
        birthday: '1932, 2, 27'
    }, {
        job: '플라스틱제품 생산기 조작원',
        name: '이성현',
        gender: 'M',
        address: '경상남도 시흥시 백제고분96길',
        mail: 'donghyeon91@nate.com',
        birthday: '1939, 8, 28'
    }, {
        job: '자연과학 연구원',
        name: '이민준',
        gender: 'M',
        address: '전라남도 고양시 일산동구 역삼로',
        mail: 'jaeho86@gmail.com',
        birthday: '2005, 1, 9'
    }, {
        job: '기타 비금속제품관련 생산기 조작원',
        name: '이지혜',
        gender: 'F',
        address: '강원도 하남시 학동가 (재호이김읍)',
        mail: 'sumingweon@hotmail.com',
        birthday: '1995, 2, 5'
    }, {
        job: '제화원',
        name: '곽현준',
        gender: 'M',
        address: '대전광역시 강동구 언주2길 (성민정면)',
        mail: 'dbae@daum.net',
        birthday: '2001, 7, 6'
    }, {
        job: '상품 대여원',
        name: '김정식',
        gender: 'M',
        address: '세종특별자치시 영등포구 석촌호수길 (민석김면)',
        mail: 'jihyeon73@hanmail.net',
        birthday: '1965, 5, 20'
    }, {
        job: '기타 스포츠 및 레크레이션 관련 전문가',
        name: '권은주',
        gender: 'F',
        address: '전라북도 양주시 논현697로 (준혁최동)',
        mail: 'gimgwangsu@dreamwiz.com',
        birthday: '1927, 9, 13'
    }, {
        job: '건설 및 광업기계 설치 및 정비원',
        name: '남경수',
        gender: 'M',
        address: '경기도 논산시 강남대174길 (숙자윤김면)',
        mail: 'caeweon38@nate.com',
        birthday: '1961, 10, 14'
    }, {
        job: '유치원 교사',
        name: '박영수',
        gender: 'M',
        address: '제주특별자치도 원주시 오금945거리',
        mail: 'jangminjun@hotmail.com',
        birthday: '1961, 8, 8'
    }, {
        job: '피부미용 및 체형관리사',
        name: '김미정',
        gender: 'F',
        address: '대전광역시 강서구 역삼로',
        mail: 'hayun05@hotmail.com',
        birthday: '1923, 3, 19'
    }, {
        job: '택배원',
        name: '박지은',
        gender: 'F',
        address: '세종특별자치시 동구 학동051로 (옥자하김마을)',
        mail: 'gimsanghyeon@gmail.com',
        birthday: '2004, 10, 8'
    }, {
        job: '출납창구 사무원',
        name: '한예원',
        gender: 'F',
        address: '제주특별자치도 서산시 학동428가 (지영황이면)',
        mail: 'ijiu@hanmail.net',
        birthday: '1959, 9, 16'
    }, {
        job: '건축가 및 건축공학 기술자',
        name: '백현주',
        gender: 'F',
        address: '서울특별시 남구 영동대082가',
        mail: 'pgim@nate.com',
        birthday: '1925, 12, 14'
    }, {
        job: '노점 및 이동 판매원',
        name: '박영진',
        gender: 'M',
        address: '전라남도 용인시 양재천67길 (정남황면)',
        mail: 'gimogsun@gmail.com',
        birthday: '2002, 5, 9'
    }, {
        job: '기타 음식서비스 종사원',
        name: '오영호',
        gender: 'M',
        address: '충청북도 성남시 중원구 잠실474거리',
        mail: 'lgim@nate.com',
        birthday: '1917, 12, 16'
    }, {
        job: '농림어업관련 단순 종사원',
        name: '정지아',
        gender: 'F',
        address: '광주광역시 관악구 논현가 (정호김홍면)',
        mail: 'umun@gmail.com',
        birthday: '1948, 5, 9'
    }, {
        job: '출납창구 사무원',
        name: '김영자',
        gender: 'F',
        address: '충청북도 동해시 서초중앙길',
        mail: 'yeongsun34@naver.com',
        birthday: '1929, 8, 10'
    }, {
        job: '전기 부품 및 제품제조 기계조작원',
        name: '장성민',
        gender: 'M',
        address: '충청북도 성남시 분당구 오금93로 (정식이김면)',
        mail: 'caeweon30@hotmail.com',
        birthday: '1937, 1, 5'
    }, {
        job: '연구 관리자',
        name: '김정식',
        gender: 'M',
        address: '대구광역시 광진구 오금5로 (성호김읍)',
        mail: 'yeonghyii@nate.com',
        birthday: '1918, 12, 29'
    }, {
        job: '강구조물 가공원 및 건립원',
        name: '양영환',
        gender: 'M',
        address: '울산광역시 강남구 테헤란로',
        mail: 'jeonghyi63@nate.com',
        birthday: '1927, 2, 27'
    }, {
        job: '구두 미화원',
        name: '이정호',
        gender: 'M',
        address: '경상남도 부천시 양재천914로',
        mail: 'gimdonghyeon@hotmail.com',
        birthday: '2007, 5, 6'
    }, {
        job: '위생사',
        name: '김윤서',
        gender: 'F',
        address: '울산광역시 송파구 영동대로 (정순류면)',
        mail: 'jungsu33@hanmail.net',
        birthday: '1923, 4, 1'
    }, {
        job: '학습지 및 방문 교사',
        name: '김서연',
        gender: 'F',
        address: '세종특별자치시 강북구 서초대길',
        mail: 'seohyeonyun@dreamwiz.com',
        birthday: '1982, 10, 9'
    }, {
        job: '자동차 영업원',
        name: '송영환',
        gender: 'M',
        address: '경기도 화성시 강남대6로 (영호문마을)',
        mail: 'ei@live.com',
        birthday: '1991, 4, 17'
    }, {
        job: '소년보호관 및 교도관',
        name: '김예은',
        gender: 'F',
        address: '경상남도 성남시 학동4길',
        mail: 'juweonjo@gmail.com',
        birthday: '1949, 3, 21'
    }, {
        job: '기타 비금속제품관련 생산기 조작원',
        name: '이도윤',
        gender: 'M',
        address: '충청북도 평창군 석촌호수573가',
        mail: 'seonghun80@daum.net',
        birthday: '2014, 2, 3'
    }, {
        job: '기타 의료/복지 관련 서비스 종사원',
        name: '박현지',
        gender: 'F',
        address: '경상북도 태안군 압구정길',
        mail: 'oji@nate.com',
        birthday: '1945, 6, 1'
    }, {
        job: '주차 관리원 및 안내원',
        name: '문영진',
        gender: 'M',
        address: '충청남도 영월군 잠실840가',
        mail: 'jaeho07@dreamwiz.com',
        birthday: '1907, 8, 20'
    }, {
        job: '신용 추심원',
        name: '최현지',
        gender: 'F',
        address: '서울특별시 마포구 가락길 (명자안읍)',
        mail: 'gimsugja@gmail.com',
        birthday: '1984, 12, 27'
    }, {
        job: '수금원',
        name: '김정식',
        gender: 'M',
        address: '경상북도 안양시 동안구 개포9로 (혜진곽이읍)',
        mail: 'yeongsiggweon@nate.com',
        birthday: '1931, 5, 11'
    }, {
        job: '보험 및 금융 상품 개발자',
        name: '박상철',
        gender: 'M',
        address: '강원도 제천시 서초대거리 (민지김김마을)',
        mail: 'gimhyeonjun@daum.net',
        birthday: '2018, 1, 14'
    }, {
        job: '통신 및 관련 장비 설치 및 수리원',
        name: '이중수',
        gender: 'M',
        address: '전라남도 청주시 상당구 개포611로',
        mail: 'iyeongsu@naver.com',
        birthday: '1947, 4, 30'
    }, {
        job: '가전제품 설치 및 수리원',
        name: '이영일',
        gender: 'M',
        address: '부산광역시 동작구 논현210거리',
        mail: 'yujin02@naver.com',
        birthday: '1977, 4, 12'
    }, {
        job: '통신공학 기술자 및 연구원',
        name: '김상호',
        gender: 'M',
        address: '울산광역시 도봉구 삼성가',
        mail: 'minjun37@hotmail.com',
        birthday: '2007, 3, 30'
    }, {
        job: '세탁관련 기계조작원',
        name: '최민석',
        gender: 'M',
        address: '서울특별시 강서구 서초중앙거리',
        mail: 'hayunseo@hanmail.net',
        birthday: '1959, 10, 12'
    }, {
        job: '기타 건축마감관련 기능 종사원',
        name: '박상현',
        gender: 'M',
        address: '세종특별자치시 중랑구 학동50가 (건우장동)',
        mail: 'gimjiu@live.com',
        birthday: '2007, 8, 8'
    }, {
        job: '재단사',
        name: '송은정',
        gender: 'F',
        address: '부산광역시 중구 영동대230로 (서윤이면)',
        mail: 'jiyeonggim@gmail.com',
        birthday: '1967, 11, 9'
    }, {
        job: '건설 배관공',
        name: '김상훈',
        gender: 'M',
        address: '서울특별시 광진구 잠실7거리 (윤서이읍)',
        mail: 'baegyeongmi@nate.com',
        birthday: '1963, 12, 7'
    }, {
        job: '가구조립원',
        name: '김도윤',
        gender: 'M',
        address: '경기도 수원시 장안구 테헤란로 (지아이읍)',
        mail: 'jia02@daum.net',
        birthday: '1936, 11, 19'
    }, {
        job: '위생사',
        name: '김명숙',
        gender: 'F',
        address: '부산광역시 관악구 잠실6거리',
        mail: 'seonggeonu@live.com',
        birthday: '1984, 9, 18'
    }, {
        job: '우편물 집배원',
        name: '손지현',
        gender: 'F',
        address: '경상북도 강릉시 언주가',
        mail: 'yeonggil22@gmail.com',
        birthday: '1907, 8, 20'
    }, {
        job: '철도 기관차 및 전동차 정비원',
        name: '윤현준',
        gender: 'M',
        address: '대구광역시 관악구 개포64가 (옥순김류마을)',
        mail: 'sjo@nate.com',
        birthday: '1946, 6, 14'
    }, {
        job: '비서',
        name: '고준서',
        gender: 'M',
        address: '경기도 태안군 개포길 (순옥한권읍)',
        mail: 'yangjunseo@hanmail.net',
        birthday: '1925, 6, 23'
    }, {
        job: '안경사',
        name: '박영환',
        gender: 'M',
        address: '대구광역시 노원구 개포가 (예지박오리)',
        mail: 'siu11@daum.net',
        birthday: '1934, 7, 19'
    }, {
        job: '방문 판매원',
        name: '서지원',
        gender: 'F',
        address: '서울특별시 마포구 도산대길 (재호우이읍)',
        mail: 'ibag@hotmail.com',
        birthday: '1941, 5, 7'
    }, {
        job: '기술 영업원',
        name: '김채원',
        gender: 'F',
        address: '제주특별자치도 고양시 일산동구 서초중앙가',
        mail: 'yeweon69@daum.net',
        birthday: '2015, 11, 24'
    }, {
        job: '결혼 상담원 및 웨딩플래너',
        name: '박수진',
        gender: 'F',
        address: '부산광역시 마포구 오금63로 (영미김박리)',
        mail: 'iseonghyeon@daum.net',
        birthday: '2017, 5, 7'
    }, {
        job: '인문과학 연구원',
        name: '김정웅',
        gender: 'M',
        address: '경기도 오산시 서초중앙6길 (옥순엄리)',
        mail: 'geonu60@live.com',
        birthday: '2011, 3, 23'
    }, {
        job: '컴퓨터시스템 설계 및 분석가',
        name: '이정희',
        gender: 'F',
        address: '대구광역시 관악구 잠실가 (준영황한면)',
        mail: 'yunseogim@daum.net',
        birthday: '1946, 12, 8'
    }, {
        job: '응급구조사',
        name: '이준서',
        gender: 'M',
        address: '대구광역시 중구 선릉길',
        mail: 'yeonghobaeg@nate.com',
        birthday: '1988, 10, 2'
    }, {
        job: '영상 및 관련 장비 설치 및 수리원',
        name: '이영자',
        gender: 'F',
        address: '경상북도 양평군 삼성로',
        mail: 'siu32@naver.com',
        birthday: '1943, 10, 4'
    }, {
        job: '무용가 및 안무가',
        name: '고광수',
        gender: 'M',
        address: '충청북도 평택시 가락길',
        mail: 'vi@dreamwiz.com',
        birthday: '2001, 6, 16'
    }, {
        job: '채소 및 특용작물 재배원',
        name: '이도현',
        gender: 'M',
        address: '경상남도 수원시 장안구 논현로 (정호이김마을)',
        mail: 'ijieun@naver.com',
        birthday: '2005, 12, 25'
    }, {
        job: '용접기 조작원',
        name: '류은주',
        gender: 'F',
        address: '대전광역시 중구 역삼2거리',
        mail: 'gimcaeweon@dreamwiz.com',
        birthday: '1998, 9, 16'
    }, {
        job: '통신공학 기술자 및 연구원',
        name: '김진우',
        gender: 'M',
        address: '인천광역시 양천구 삼성95로 (민지정마을)',
        mail: 'eunjuno@live.com',
        birthday: '1995, 4, 29'
    }, {
        job: '기타 배달원',
        name: '문승현',
        gender: 'M',
        address: '인천광역시 종로구 강남대로 (현지이김읍)',
        mail: 'hongjiyeong@hotmail.com',
        birthday: '1961, 6, 4'
    }, {
        job: '경영 및 진단 전문가',
        name: '강진우',
        gender: 'M',
        address: '충청북도 부천시 오정구 서초중앙길',
        mail: 'jeongsug42@live.com',
        birthday: '1919, 10, 5'
    }, {
        job: '주차 관리원 및 안내원',
        name: '조선영',
        gender: 'F',
        address: '울산광역시 서구 언주227가 (순자권동)',
        mail: 'coesumin@hanmail.net',
        birthday: '1969, 3, 6'
    }, {
        job: '전문 의사',
        name: '강도현',
        gender: 'M',
        address: '강원도 음성군 백제고분가',
        mail: 'ijongsu@hanmail.net',
        birthday: '2013, 11, 15'
    }, {
        job: '악기제조 및 조율사',
        name: '박준호',
        gender: 'M',
        address: '경상남도 용인시 처인구 역삼537거리',
        mail: 'ggim@nate.com',
        birthday: '1935, 8, 12'
    }, {
        job: '가전제품 설치 및 수리원',
        name: '이영숙',
        gender: 'F',
        address: '광주광역시 관악구 강남대136로 (지연진마을)',
        mail: 'zhong@hanmail.net',
        birthday: '1969, 7, 25'
    }, {
        job: '채소 및 특용작물 재배원',
        name: '류정호',
        gender: 'M',
        address: '광주광역시 서구 압구정43길',
        mail: 'cbaeg@naver.com',
        birthday: '1997, 5, 12'
    }, {
        job: '지휘자/작곡가 및 연주가',
        name: '오하은',
        gender: 'F',
        address: '울산광역시 서대문구 서초중앙가 (미정홍권마을)',
        mail: 'mcoe@hanmail.net',
        birthday: '2012, 10, 26'
    }, {
        job: '귀금속 및 보석 세공원',
        name: '이정숙',
        gender: 'F',
        address: '대전광역시 송파구 테헤란길 (정식류리)',
        mail: 'seonghuno@daum.net',
        birthday: '1926, 1, 24'
    }, {
        job: '장학관/연구관 및 교육 관련 전문가',
        name: '김미숙',
        gender: 'F',
        address: '서울특별시 남구 삼성거리 (명자손읍)',
        mail: 'imyeongsug@dreamwiz.com',
        birthday: '1956, 11, 11'
    }, {
        job: '농림어업관련 시험원',
        name: '한영호',
        gender: 'M',
        address: '서울특별시 서대문구 오금6로',
        mail: 'seoyun56@gmail.com',
        birthday: '1914, 6, 14'
    }, {
        job: '직업상담사 및 취업 알선원',
        name: '윤영순',
        gender: 'F',
        address: '서울특별시 성북구 삼성거리 (중수박임리)',
        mail: 'bagmisug@nate.com',
        birthday: '1961, 7, 3'
    }, {
        job: '전문 의사',
        name: '이성수',
        gender: 'M',
        address: '부산광역시 성북구 학동908가',
        mail: 'yeongceol47@naver.com',
        birthday: '1915, 5, 3'
    }, {
        job: '냉/난방 관련 설비 조작원',
        name: '조중수',
        gender: 'M',
        address: '충청남도 안산시 단원구 오금가',
        mail: 'ebag@hotmail.com',
        birthday: '1909, 2, 24'
    }, {
        job: '기타 석유 및 화학물 가공장치 조작원',
        name: '권시우',
        gender: 'M',
        address: '광주광역시 서대문구 선릉로 (진호김안읍)',
        mail: 'gimujin@hanmail.net',
        birthday: '2003, 10, 18'
    }, {
        job: '총무 사무원',
        name: '최정호',
        gender: 'M',
        address: '경상남도 동두천시 테헤란912가',
        mail: 'yeeungim@hanmail.net',
        birthday: '1918, 11, 29'
    }, {
        job: '출판물 전문가',
        name: '고지우',
        gender: 'F',
        address: '제주특별자치도 고양시 백제고분432로',
        mail: 'seunghyeongim@nate.com',
        birthday: '2017, 8, 4'
    }, {
        job: '산업전공',
        name: '김은정',
        gender: 'F',
        address: '세종특별자치시 서대문구 언주7로',
        mail: 'eunjeongi@gmail.com',
        birthday: '1911, 4, 27'
    }, {
        job: '변호사',
        name: '한정훈',
        gender: 'M',
        address: '대전광역시 영등포구 강남대4거리',
        mail: 'seonyeongjeong@hanmail.net',
        birthday: '1949, 2, 3'
    }, {
        job: '세탁관련 기계조작원',
        name: '황성진',
        gender: 'M',
        address: '대구광역시 강서구 서초중앙38거리',
        mail: 'gyeongsu56@gmail.com',
        birthday: '1964, 12, 29'
    }, {
        job: '재단사',
        name: '윤유진',
        gender: 'F',
        address: '부산광역시 북구 개포05가 (지원박배읍)',
        mail: 'jimin71@naver.com',
        birthday: '1906, 4, 19'
    }, {
        job: '보육 교사',
        name: '문선영',
        gender: 'F',
        address: '경기도 진천군 석촌호수길 (동현박이리)',
        mail: 'ihyejin@daum.net',
        birthday: '1937, 10, 26'
    }, {
        job: '방사선사',
        name: '강시우',
        gender: 'M',
        address: '경기도 파주시 서초중앙515가',
        mail: 'caeweongo@live.com',
        birthday: '1961, 5, 17'
    }, {
        job: '관제사',
        name: '고영순',
        gender: 'F',
        address: '대구광역시 금천구 학동길',
        mail: 'jhan@gmail.com',
        birthday: '1908, 3, 10'
    }, {
        job: '운송장비 조립원',
        name: '최수민',
        gender: 'F',
        address: '인천광역시 북구 테헤란길',
        mail: 'subingim@daum.net',
        birthday: '2006, 6, 2'
    }, {
        job: '정부 및 공공 행정 전문가',
        name: '홍아름',
        gender: 'F',
        address: '대구광역시 구로구 양재천69길',
        mail: 'dohyeongim@nate.com',
        birthday: '1982, 7, 17'
    }, {
        job: '출납창구 사무원',
        name: '지우진',
        gender: 'M',
        address: '전라북도 충주시 학동711가 (유진홍동)',
        mail: 'geonui@nate.com',
        birthday: '1996, 7, 1'
    }, {
        job: '생명과학 연구원',
        name: '이준서',
        gender: 'M',
        address: '전라남도 청주시 상당구 서초대거리',
        mail: 'fi@nate.com',
        birthday: '1971, 11, 2'
    }, {
        job: '환경 미화원 및 재활용품 수거원',
        name: '이영자',
        gender: 'F',
        address: '서울특별시 송파구 잠실8길',
        mail: 'eungyeongi@hanmail.net',
        birthday: '1970, 2, 20'
    }, {
        job: '기타 비금속제품관련 생산기 조작원',
        name: '이선영',
        gender: 'F',
        address: '경상남도 동해시 봉은사068거리',
        mail: 'gimujin@gmail.com',
        birthday: '1963, 6, 8'
    }, {
        job: '기타 건설관련 기능 종사원',
        name: '박광수',
        gender: 'M',
        address: '울산광역시 마포구 서초중앙거리',
        mail: 'jia09@live.com',
        birthday: '1909, 12, 25'
    }, {
        job: '마술사 및 기타 문화/ 예술 관련 종사자',
        name: '김서연',
        gender: 'F',
        address: '경기도 이천시 양재천304길 (선영김마을)',
        mail: 'gyun@live.com',
        birthday: '1909, 8, 12'
    }, {
        job: '약사 및 한약사',
        name: '강순자',
        gender: 'F',
        address: '강원도 부천시 논현031길 (성수백김리)',
        mail: 'ieunyeong@hotmail.com',
        birthday: '1964, 4, 17'
    }, {
        job: '기타 섬유 및 가죽 관련 기능 종사원',
        name: '강현숙',
        gender: 'F',
        address: '경기도 수원시 팔달구 도산대694가',
        mail: 'fcoe@daum.net',
        birthday: '1995, 8, 1'
    }, {
        job: '음식서비스관련 관리자',
        name: '윤은지',
        gender: 'F',
        address: '광주광역시 은평구 영동대가 (준호배우리)',
        mail: 'gimjeongsig@daum.net',
        birthday: '1927, 1, 30'
    }, {
        job: '직조기 및 편직기 조작원',
        name: '윤성진',
        gender: 'M',
        address: '대전광역시 남구 학동길 (영길김양리)',
        mail: 'sgweon@hotmail.com',
        birthday: '1932, 3, 9'
    }, {
        job: '법률/경찰/소방 및 교도 관리자',
        name: '오명자',
        gender: 'F',
        address: '울산광역시 동구 역삼거리',
        mail: 'doyuncoe@hotmail.com',
        birthday: '1965, 12, 11'
    }, {
        job: '일반 의사',
        name: '조은정',
        gender: 'F',
        address: '전라남도 괴산군 언주10가',
        mail: 'sugjajo@hanmail.net',
        birthday: '1987, 10, 3'
    }, {
        job: '보험 설계사 및 간접투자증권 판매인',
        name: '류지후',
        gender: 'M',
        address: '세종특별자치시 중랑구 선릉70가',
        mail: 'yeongmi93@daum.net',
        birthday: '1909, 7, 25'
    }, {
        job: '금형원',
        name: '이서연',
        gender: 'F',
        address: '경상북도 제천시 가락거리',
        mail: 'bagsunja@hanmail.net',
        birthday: '1914, 10, 14'
    }, {
        job: '패턴사',
        name: '신지혜',
        gender: 'F',
        address: '충청남도 논산시 개포로',
        mail: 'bagyejun@hotmail.com',
        birthday: '1923, 4, 15'
    }, {
        job: '환경공학 시험원',
        name: '김하은',
        gender: 'F',
        address: '세종특별자치시 동작구 삼성길 (지아김마을)',
        mail: 'baehyeonjun@dreamwiz.com',
        birthday: '1924, 12, 19'
    }, {
        job: '배우 및 모델',
        name: '박지현',
        gender: 'F',
        address: '경기도 성남시 수정구 봉은사거리 (재현이박면)',
        mail: 'idoyun@daum.net',
        birthday: '1932, 3, 26'
    }, {
        job: '법률/경찰/소방 및 교도 관리자',
        name: '이성현',
        gender: 'M',
        address: '충청남도 청주시 상당구 오금거리',
        mail: 'gangmisug@daum.net',
        birthday: '1984, 6, 7'
    }, {
        job: '기타 의료/복지 관련 서비스 종사원',
        name: '송윤서',
        gender: 'F',
        address: '광주광역시 영등포구 테헤란5거리 (영식권리)',
        mail: 'zgim@hotmail.com',
        birthday: '1966, 3, 15'
    }, {
        job: '사진기자 및 사진가',
        name: '김민수',
        gender: 'M',
        address: '충청남도 이천시 언주454가',
        mail: 'yangjinu@naver.com',
        birthday: '1979, 11, 20'
    }, {
        job: '정부 및 공공 행정 전문가',
        name: '이준서',
        gender: 'M',
        address: '광주광역시 노원구 언주844로',
        mail: 'hayunryu@hanmail.net',
        birthday: '1948, 9, 1'
    }, {
        job: '변리사',
        name: '박은정',
        gender: 'F',
        address: '부산광역시 동대문구 강남대가',
        mail: 'po@dreamwiz.com',
        birthday: '1983, 10, 2'
    }, {
        job: '양장 및 양복 제조원',
        name: '박현지',
        gender: 'F',
        address: '충청남도 고양시 언주1가',
        mail: 'hyeonjeonggim@hanmail.net',
        birthday: '2018, 5, 20'
    }, {
        job: '결혼 상담원 및 웨딩플래너',
        name: '이은주',
        gender: 'F',
        address: '대구광역시 강동구 서초대로',
        mail: 'cyun@daum.net',
        birthday: '1934, 2, 25'
    }, {
        job: '식품/섬유 공학 및 에너지 시험원',
        name: '조예지',
        gender: 'F',
        address: '대전광역시 강동구 테헤란가',
        mail: 'sanghyeon10@nate.com',
        birthday: '1914, 2, 5'
    }, {
        job: '섬유공학 기술자 및 연구원',
        name: '김중수',
        gender: 'M',
        address: '전라남도 횡성군 오금길 (준서김이읍)',
        mail: 'sanghyeon13@daum.net',
        birthday: '1907, 2, 4'
    }, {
        job: '기타 이미용/예식 및 의료보조 서비스 종사원',
        name: '김우진',
        gender: 'M',
        address: '경상남도 남양주시 봉은사거리 (정자김리)',
        mail: 'yeongceoli@hotmail.com',
        birthday: '1962, 8, 12'
    }, {
        job: '관제사',
        name: '김영길',
        gender: 'M',
        address: '경상북도 계룡시 테헤란1로 (준서구마을)',
        mail: 'jongsu72@hanmail.net',
        birthday: '2021, 4, 8'
    }, {
        job: '시각 디자이너',
        name: '김민석',
        gender: 'M',
        address: '세종특별자치시 송파구 반포대가 (성현최배동)',
        mail: 'pgim@live.com',
        birthday: '1932, 12, 11'
    }, {
        job: '표백 및 염색 관련 조작원',
        name: '백경수',
        gender: 'M',
        address: '대전광역시 구로구 반포대가',
        mail: 'jongsugim@naver.com',
        birthday: '2017, 3, 3'
    }, {
        job: '운송관련 관리자',
        name: '강은주',
        gender: 'F',
        address: '강원도 용인시 기흥구 역삼860길 (숙자김리)',
        mail: 'yejibag@live.com',
        birthday: '1925, 6, 26'
    }, {
        job: '의회의원/고위공무원 및 공공단체임원',
        name: '박중수',
        gender: 'M',
        address: '충청북도 용인시 영동대9로',
        mail: 'eunji43@nate.com',
        birthday: '1909, 4, 20'
    }, {
        job: '도금 및 금속분무기 조작원',
        name: '박주원',
        gender: 'M',
        address: '세종특별자치시 동구 선릉로 (미영나장리)',
        mail: 'jeongsun14@hotmail.com',
        birthday: '1948, 6, 4'
    }, {
        job: '치과 의사',
        name: '김예은',
        gender: 'F',
        address: '전라북도 청주시 청원구 양재천67가 (춘자성동)',
        mail: 'hayuni@dreamwiz.com',
        birthday: '1941, 12, 2'
    }, {
        job: '건축 도장공',
        name: '이영길',
        gender: 'M',
        address: '경기도 여주시 압구정거리',
        mail: 'eju@hanmail.net',
        birthday: '1914, 4, 5'
    }, {
        job: '주조원',
        name: '오현숙',
        gender: 'F',
        address: '강원도 인제군 양재천가 (승민장황마을)',
        mail: 'hongyeongsun@nate.com',
        birthday: '2004, 10, 26'
    }, {
        job: '컴퓨터 하드웨어 기술자 및 연구원',
        name: '최정훈',
        gender: 'M',
        address: '경기도 부천시 소사구 서초중앙876로',
        mail: 'abag@daum.net',
        birthday: '1943, 8, 12'
    }, {
        job: '바텐더',
        name: '김시우',
        gender: 'M',
        address: '세종특별자치시 강북구 반포대735길',
        mail: 'jieungim@naver.com',
        birthday: '1950, 3, 22'
    }, {
        job: '제관기 조작원',
        name: '장수민',
        gender: 'F',
        address: '경상남도 수원시 언주9가 (은영남읍)',
        mail: 'yunyejun@naver.com',
        birthday: '1925, 11, 23'
    }, {
        job: '웹 개발자',
        name: '최우진',
        gender: 'M',
        address: '전라남도 춘천시 압구정가 (영숙최면)',
        mail: 'siumun@nate.com',
        birthday: '1991, 10, 4'
    }, {
        job: '병무행정 사무원',
        name: '송현지',
        gender: 'F',
        address: '제주특별자치도 논산시 반포대가 (지민김면)',
        mail: 'jihyeon33@live.com',
        birthday: '1932, 4, 17'
    }, {
        job: '자동차 조립원',
        name: '박유진',
        gender: 'F',
        address: '충청북도 파주시 잠실길 (건우최동)',
        mail: 'jeongsig39@dreamwiz.com',
        birthday: '1975, 3, 8'
    }, {
        job: '경호원',
        name: '김준영',
        gender: 'M',
        address: '경상남도 고성군 테헤란거리',
        mail: 'hyeonjeongryu@hanmail.net',
        birthday: '1993, 4, 1'
    }, {
        job: '버스 운전원',
        name: '김정남',
        gender: 'M',
        address: '전라북도 양주시 논현가',
        mail: 'minseog79@nate.com',
        birthday: '1953, 7, 14'
    }, {
        job: '가수 및 성악가',
        name: '박병철',
        gender: 'M',
        address: '부산광역시 은평구 강남대가 (옥자이마을)',
        mail: 'seunghyeon08@dreamwiz.com',
        birthday: '1979, 8, 30'
    }, {
        job: '기타 섬유 및 가죽 관련 기능 종사원',
        name: '이도윤',
        gender: 'M',
        address: '서울특별시 강남구 선릉492가',
        mail: 'haeun77@hanmail.net',
        birthday: '1931, 12, 12'
    }, {
        job: '학습지 및 방문 교사',
        name: '김지원',
        gender: 'F',
        address: '경기도 진천군 압구정가 (채원윤읍)',
        mail: 'gyeonghyihong@hotmail.com',
        birthday: '1982, 5, 19'
    }, {
        job: '통신서비스판매원',
        name: '이상호',
        gender: 'M',
        address: '광주광역시 강북구 언주가 (성민황면)',
        mail: 'minjibae@hanmail.net',
        birthday: '1972, 1, 25'
    }, {
        job: '조경원',
        name: '윤현주',
        gender: 'F',
        address: '울산광역시 성북구 테헤란거리',
        mail: 'jihu58@nate.com',
        birthday: '1919, 6, 15'
    }, {
        job: '기타 의복 제조원',
        name: '김지혜',
        gender: 'F',
        address: '세종특별자치시 강북구 도산대길',
        mail: 'pgim@daum.net',
        birthday: '1960, 4, 5'
    }, {
        job: '화물열차 차장 및 관련 종사원',
        name: '박경수',
        gender: 'M',
        address: '대전광역시 남구 언주가',
        mail: 'leom@gmail.com',
        birthday: '2014, 2, 3'
    }, {
        job: '기타 섬유 및 가죽 관련 기능 종사원',
        name: '안예지',
        gender: 'F',
        address: '서울특별시 중구 영동대919길 (은정신마을)',
        mail: 'yeweon02@live.com',
        birthday: '1984, 12, 3'
    }, {
        job: '연예인 및 스포츠 매니저',
        name: '서예원',
        gender: 'F',
        address: '전라북도 양양군 압구정가',
        mail: 'songgyeongja@hotmail.com',
        birthday: '1922, 8, 20'
    }, {
        job: '종이제품 생산기 조작원',
        name: '김성수',
        gender: 'M',
        address: '인천광역시 도봉구 백제고분2길',
        mail: 'junseo17@naver.com',
        birthday: '1908, 1, 30'
    }, {
        job: '미장공',
        name: '김민지',
        gender: 'F',
        address: '충청북도 용인시 기흥구 강남대64길 (현정오김마을)',
        mail: 'seogyeongsu@hotmail.com',
        birthday: '1960, 7, 18'
    }, {
        job: '기타 배달원',
        name: '이영수',
        gender: 'M',
        address: '경상남도 철원군 논현1가',
        mail: 'joyeongho@daum.net',
        birthday: '1972, 2, 27'
    }, {
        job: '인사 및 노사 관련 전문가',
        name: '이중수',
        gender: 'M',
        address: '광주광역시 강북구 잠실길 (주원이읍)',
        mail: 'ei@nate.com',
        birthday: '1950, 1, 12'
    }, {
        job: '환경/청소 및 경비 관련 관리자',
        name: '박예은',
        gender: 'F',
        address: '대구광역시 동작구 봉은사로',
        mail: 'hyeonjeong95@naver.com',
        birthday: '2017, 9, 11'
    }, {
        job: '무용가 및 안무가',
        name: '오영길',
        gender: 'M',
        address: '충청남도 오산시 역삼거리',
        mail: 'icoe@live.com',
        birthday: '1911, 4, 21'
    }, {
        job: '음료 제조관련 기계 조작원',
        name: '김정호',
        gender: 'M',
        address: '대전광역시 송파구 선릉길 (현숙김최면)',
        mail: 'jangseongjin@hotmail.com',
        birthday: '1937, 3, 10'
    }, {
        job: '영상/녹화 및 편집 기사',
        name: '이명숙',
        gender: 'F',
        address: '전라남도 인제군 언주92로 (정호이최동)',
        mail: 'jeonghyibae@daum.net',
        birthday: '1907, 9, 25'
    }, {
        job: '자재관리 사무원',
        name: '이성호',
        gender: 'M',
        address: '울산광역시 강서구 학동493가 (영순김김마을)',
        mail: 'baeyunseo@naver.com',
        birthday: '1990, 12, 31'
    }, {
        job: '컴퓨터시스템 설계 및 분석가',
        name: '문지현',
        gender: 'F',
        address: '인천광역시 북구 학동0거리',
        mail: 'mhan@live.com',
        birthday: '1973, 2, 22'
    }, {
        job: '기타 건축마감관련 기능 종사원',
        name: '김주원',
        gender: 'M',
        address: '전라북도 화성시 영동대19로 (지연이읍)',
        mail: 'doyun05@gmail.com',
        birthday: '1963, 2, 13'
    }, {
        job: '과수작물 재배원',
        name: '조동현',
        gender: 'M',
        address: '충청북도 용인시 수지구 잠실로 (은지이리)',
        mail: 'sgim@hanmail.net',
        birthday: '1982, 8, 15'
    }, {
        job: '조적공 및 석재 부설원',
        name: '김숙자',
        gender: 'F',
        address: '경기도 천안시 동남구 도산대길 (영자박리)',
        mail: 'sanghogim@nate.com',
        birthday: '2019, 12, 12'
    }, {
        job: '비서',
        name: '최경희',
        gender: 'F',
        address: '광주광역시 송파구 개포43가',
        mail: 'hongcunja@nate.com',
        birthday: '1969, 9, 19'
    }, {
        job: '기타 채굴 및 토목 관련 종사자',
        name: '최경숙',
        gender: 'F',
        address: '대전광역시 도봉구 학동34길 (영길박남읍)',
        mail: 'di@gmail.com',
        birthday: '1997, 5, 20'
    }, {
        job: '기타 섬유 및 가죽 관련 기능 종사원',
        name: '윤서영',
        gender: 'F',
        address: '경상남도 안양시 만안구 학동길 (현지전류리)',
        mail: 'bagseongmin@naver.com',
        birthday: '1961, 12, 29'
    }, {
        job: '화물차 및 특수차 운전원',
        name: '김경수',
        gender: 'M',
        address: '광주광역시 관악구 학동3로',
        mail: 'haneungyeong@gmail.com',
        birthday: '1943, 8, 22'
    }, {
        job: '노점 및 이동 판매원',
        name: '이정수',
        gender: 'M',
        address: '부산광역시 영등포구 영동대로 (정웅황김면)',
        mail: 'cunjajo@gmail.com',
        birthday: '1919, 2, 11'
    }, {
        job: '건설자재 시험원',
        name: '최춘자',
        gender: 'F',
        address: '울산광역시 강남구 서초대길 (미영지김마을)',
        mail: 'gyeongsug08@naver.com',
        birthday: '1969, 8, 9'
    }, {
        job: '주조원',
        name: '송상현',
        gender: 'M',
        address: '충청남도 계룡시 백제고분391로 (정식권마을)',
        mail: 'ygim@daum.net',
        birthday: '1980, 1, 28'
    }, {
        job: '철도 기관차 및 전동차 정비원',
        name: '윤민준',
        gender: 'M',
        address: '세종특별자치시 성동구 반포대길',
        mail: 'yeonghwan60@gmail.com',
        birthday: '2013, 2, 11'
    }, {
        job: '여행 및 관광통역 안내원',
        name: '이현우',
        gender: 'M',
        address: '경상남도 음성군 압구정길 (영일권읍)',
        mail: 'ygim@nate.com',
        birthday: '2003, 9, 3'
    }, {
        job: '투자 및 신용 분석가',
        name: '장서연',
        gender: 'F',
        address: '경상북도 태백시 테헤란거리',
        mail: 'yhwang@daum.net',
        birthday: '1988, 10, 31'
    }, {
        job: '도장기 조작원',
        name: '권성수',
        gender: 'M',
        address: '인천광역시 송파구 잠실거리',
        mail: 'cunjai@naver.com',
        birthday: '1927, 2, 6'
    }, {
        job: '패스트푸드원',
        name: '윤지후',
        gender: 'M',
        address: '광주광역시 광진구 테헤란길 (은지서동)',
        mail: 'gimsanghyeon@hanmail.net',
        birthday: '1956, 6, 3'
    }, {
        job: '금융관련 사무원',
        name: '류수민',
        gender: 'F',
        address: '부산광역시 성북구 영동대거리',
        mail: 'minjibag@live.com',
        birthday: '1968, 6, 2'
    }, {
        job: '금속 / 재료공학 시험원',
        name: '서영길',
        gender: 'M',
        address: '충청남도 보령시 백제고분85로 (민서홍마을)',
        mail: 'gimdohyeon@dreamwiz.com',
        birthday: '1995, 3, 1'
    }, {
        job: '영양사',
        name: '안하은',
        gender: 'F',
        address: '세종특별자치시 도봉구 테헤란9길 (정희최리)',
        mail: 'josanghun@naver.com',
        birthday: '1989, 12, 4'
    }, {
        job: '기타 제조관련 기계 조작원',
        name: '박정희',
        gender: 'F',
        address: '강원도 이천시 테헤란277거리 (정숙박리)',
        mail: 'minjaehong@live.com',
        birthday: '1977, 8, 3'
    }, {
        job: '고객 상담 및 모니터 요원',
        name: '백재현',
        gender: 'M',
        address: '세종특별자치시 서대문구 학동로 (주원백오마을)',
        mail: 'yeongho00@nate.com',
        birthday: '1932, 9, 19'
    }, {
        job: '음향 및 녹음 기사',
        name: '지민지',
        gender: 'F',
        address: '대구광역시 강서구 테헤란630로 (은정김동)',
        mail: 'vgim@daum.net',
        birthday: '1975, 6, 1'
    }, {
        job: '한복 제조원',
        name: '김은주',
        gender: 'F',
        address: '울산광역시 종로구 언주83가 (주원이이동)',
        mail: 'byeongceoli@gmail.com',
        birthday: '1957, 6, 18'
    }, {
        job: '선장/항해사 및 도선사',
        name: '강상호',
        gender: 'M',
        address: '대전광역시 강북구 양재천4길 (성진송면)',
        mail: 'juweonbag@gmail.com',
        birthday: '1970, 3, 29'
    }, {
        job: '철근공',
        name: '홍은지',
        gender: 'F',
        address: '전라북도 안양시 만안구 양재천95거리 (영호김면)',
        mail: 'sanghyeoni@hanmail.net',
        birthday: '1955, 5, 29'
    }, {
        job: '치과 의사',
        name: '이아름',
        gender: 'F',
        address: '충청남도 보은군 가락212가',
        mail: 'sgweon@gmail.com',
        birthday: '1908, 8, 29'
    }, {
        job: '어부 및 해녀',
        name: '전경수',
        gender: 'M',
        address: '충청북도 용인시 수지구 영동대거리 (정훈김이읍)',
        mail: 'anyujin@dreamwiz.com',
        birthday: '1994, 11, 9'
    }, {
        job: '기타 건설관련 기능 종사원',
        name: '이정웅',
        gender: 'M',
        address: '충청남도 고양시 일산서구 역삼313거리',
        mail: 'bsong@live.com',
        birthday: '1926, 2, 25'
    }, {
        job: '용접원',
        name: '김건우',
        gender: 'M',
        address: '서울특별시 서초구 반포대863거리',
        mail: 'gimjongsu@naver.com',
        birthday: '1944, 6, 29'
    }, {
        job: '배우 및 모델',
        name: '최영숙',
        gender: 'F',
        address: '부산광역시 송파구 반포대로',
        mail: 'areum63@naver.com',
        birthday: '1957, 2, 21'
    }, {
        job: '사진기자 및 사진가',
        name: '김정수',
        gender: 'M',
        address: '대구광역시 강남구 압구정거리',
        mail: 'yeonggili@hanmail.net',
        birthday: '1976, 1, 31'
    }, {
        job: '상담 전문가 및 청소년 지도사',
        name: '김정자',
        gender: 'F',
        address: '세종특별자치시 남구 삼성5로 (하윤김읍)',
        mail: 'simjieun@dreamwiz.com',
        birthday: '1986, 2, 10'
    }, {
        job: '매장계산원 및 요금정산원',
        name: '김민준',
        gender: 'M',
        address: '대구광역시 종로구 영동대0거리 (순옥이마을)',
        mail: 'hyeonjun44@gmail.com',
        birthday: '1982, 4, 12'
    }, {
        job: '가수 및 성악가',
        name: '박영수',
        gender: 'M',
        address: '경상북도 속초시 봉은사639로 (예진배서동)',
        mail: 'ogjasong@nate.com',
        birthday: '2001, 2, 2'
    }, {
        job: '가사 도우미',
        name: '박명자',
        gender: 'F',
        address: '제주특별자치도 진천군 서초대로',
        mail: 'yeonghyi28@gmail.com',
        birthday: '1973, 4, 16'
    }, {
        job: '건설 및 광업 관련 관리자',
        name: '강영일',
        gender: 'M',
        address: '제주특별자치도 금산군 양재천3가 (현우송차면)',
        mail: 'siu66@hanmail.net',
        birthday: '1979, 7, 9'
    }, {
        job: '양식 주방장 및 조리사',
        name: '이시우',
        gender: 'M',
        address: '경기도 음성군 양재천852로 (명자김김마을)',
        mail: 'zcoe@daum.net',
        birthday: '1995, 3, 29'
    }, {
        job: '전자공학 기술자 및 연구원',
        name: '이성민',
        gender: 'M',
        address: '부산광역시 강서구 서초중앙길 (도현안리)',
        mail: 'yhwang@gmail.com',
        birthday: '1944, 3, 10'
    }, {
        job: '중식 주방장 및 조리사',
        name: '양영진',
        gender: 'M',
        address: '대전광역시 북구 가락7거리',
        mail: 'seungmingim@dreamwiz.com',
        birthday: '1952, 11, 25'
    }, {
        job: '농림어업관련 단순 종사원',
        name: '주정수',
        gender: 'M',
        address: '충청북도 안성시 언주93길',
        mail: 'munyeongho@naver.com',
        birthday: '1942, 7, 28'
    }, {
        job: '선장/항해사 및 도선사',
        name: '강도현',
        gender: 'M',
        address: '충청남도 천안시 동남구 선릉418로 (지혜신이면)',
        mail: 'seonyeong28@daum.net',
        birthday: '1980, 4, 11'
    }, {
        job: '안경사',
        name: '박지훈',
        gender: 'M',
        address: '충청남도 홍천군 압구정거리 (춘자김안면)',
        mail: 'areumi@hotmail.com',
        birthday: '1945, 9, 1'
    }, {
        job: '자동차 조립원',
        name: '이선영',
        gender: 'F',
        address: '경상북도 수원시 권선구 테헤란25로 (지은문김면)',
        mail: 'sujini@hotmail.com',
        birthday: '1990, 8, 24'
    }, {
        job: '상/하수도 처리장치 조작원',
        name: '고현정',
        gender: 'F',
        address: '경상남도 철원군 잠실거리 (민지김한면)',
        mail: 'minjihong@gmail.com',
        birthday: '1993, 10, 21'
    }, {
        job: '보험 및 금융 상품 개발자',
        name: '김지영',
        gender: 'F',
        address: '인천광역시 양천구 압구정364거리',
        mail: 'coesugja@naver.com',
        birthday: '1929, 9, 25'
    }, {
        job: '공업기계 설치 및 정비원',
        name: '양지민',
        gender: 'F',
        address: '서울특별시 금천구 강남대로',
        mail: 'gimhyeonju@naver.com',
        birthday: '1934, 8, 10'
    }, {
        job: '점토제품 생산기 조작원',
        name: '지지우',
        gender: 'F',
        address: '충청남도 양주시 영동대가 (민준김동)',
        mail: 'di@gmail.com',
        birthday: '1959, 8, 18'
    }, {
        job: '목제품 제조관련 종사원',
        name: '안예지',
        gender: 'F',
        address: '전라남도 단양군 서초대가',
        mail: 'yeongsug54@nate.com',
        birthday: '1985, 11, 14'
    }, {
        job: '건설 및 광업 단순 종사원',
        name: '권영희',
        gender: 'F',
        address: '경상남도 고양시 일산동구 잠실로 (은영김동)',
        mail: 'hyejinan@nate.com',
        birthday: '1954, 11, 19'
    }, {
        job: '기타 의복 제조원',
        name: '김승현',
        gender: 'M',
        address: '대전광역시 동작구 서초대0거리',
        mail: 'jihungim@nate.com',
        birthday: '2009, 3, 4'
    }, {
        job: '가전제품 설치 및 수리원',
        name: '이옥자',
        gender: 'F',
        address: '대구광역시 동구 석촌호수33거리',
        mail: 'ojeongnam@gmail.com',
        birthday: '2019, 5, 30'
    }, {
        job: '컴퓨터 강사',
        name: '최정웅',
        gender: 'M',
        address: '대전광역시 도봉구 오금6거리 (영순이김마을)',
        mail: 'gimujin@gmail.com',
        birthday: '2008, 3, 15'
    }, {
        job: '기타 채굴 및 토목 관련 종사자',
        name: '강도윤',
        gender: 'M',
        address: '경상남도 보은군 오금95길',
        mail: 'dyun@dreamwiz.com',
        birthday: '1988, 6, 17'
    }, {
        job: '보험 심사원 및 사무원',
        name: '이아름',
        gender: 'F',
        address: '대구광역시 강북구 가락1가 (경수최이읍)',
        mail: 'jiu45@hotmail.com',
        birthday: '1930, 5, 14'
    }, {
        job: '금속 / 재료공학 시험원',
        name: '권민수',
        gender: 'M',
        address: '서울특별시 관악구 언주912로 (정수박김읍)',
        mail: 'gimjiyeon@nate.com',
        birthday: '1972, 4, 25'
    }, {
        job: '금형원',
        name: '구경숙',
        gender: 'F',
        address: '충청남도 고양시 일산동구 양재천길',
        mail: 'xgo@hotmail.com',
        birthday: '1962, 5, 3'
    }, {
        job: '예능 강사',
        name: '이민재',
        gender: 'M',
        address: '울산광역시 강동구 가락가 (정훈이김면)',
        mail: 'hyeonjun94@nate.com',
        birthday: '1997, 12, 20'
    }, {
        job: '제관기 조작원',
        name: '고병철',
        gender: 'M',
        address: '울산광역시 관악구 서초중앙12로 (순자윤동)',
        mail: 'gimgyeonghyi@live.com',
        birthday: '1960, 12, 20'
    }, {
        job: '한식 주방장 및 조리사',
        name: '김지훈',
        gender: 'M',
        address: '경기도 용인시 기흥구 석촌호수08가',
        mail: 'jaehoi@live.com',
        birthday: '1930, 4, 28'
    }, {
        job: '단조기 조작원',
        name: '우준혁',
        gender: 'M',
        address: '전라남도 예산군 영동대가 (정수김면)',
        mail: 'gimjia@nate.com',
        birthday: '1935, 4, 28'
    }, {
        job: '혼례 종사원',
        name: '오준호',
        gender: 'M',
        address: '광주광역시 강북구 테헤란길 (영식김읍)',
        mail: 'di@naver.com',
        birthday: '1928, 11, 7'
    }, {
        job: '공예원',
        name: '최지아',
        gender: 'F',
        address: '경상북도 태백시 도산대로 (정식주이동)',
        mail: 'gweondonghyeon@dreamwiz.com',
        birthday: '1938, 8, 6'
    }, {
        job: '사회복지관련 관리자',
        name: '이준혁',
        gender: 'M',
        address: '충청남도 이천시 삼성거리 (아름윤마을)',
        mail: 'anseonyeong@gmail.com',
        birthday: '1941, 1, 4'
    }, {
        job: '기타 기능관련 종사원',
        name: '심영호',
        gender: 'M',
        address: '광주광역시 서초구 개포25로 (예지황최리)',
        mail: 'ijieun@gmail.com',
        birthday: '1992, 12, 8'
    }, {
        job: '환경공학 기술자 및 연구원',
        name: '이재현',
        gender: 'M',
        address: '대전광역시 중구 언주3길 (정식김이리)',
        mail: 'sgo@hotmail.com',
        birthday: '1930, 4, 24'
    }, {
        job: '조림/영림 및 벌목원',
        name: '안주원',
        gender: 'M',
        address: '전라북도 충주시 역삼거리 (재현구동)',
        mail: 'dbag@daum.net',
        birthday: '1919, 9, 6'
    }, {
        job: '전문 의사',
        name: '김승현',
        gender: 'M',
        address: '인천광역시 남구 석촌호수거리',
        mail: 'ojo@nate.com',
        birthday: '1920, 3, 1'
    }, {
        job: '종이제품 생산기 조작원',
        name: '이진우',
        gender: 'M',
        address: '부산광역시 은평구 도산대40가 (정호이김면)',
        mail: 'hyeonjun77@hotmail.com',
        birthday: '2008, 2, 7'
    }, {
        job: '주방 보조원',
        name: '전지훈',
        gender: 'M',
        address: '경상남도 안양시 동안구 오금거리 (서영박이리)',
        mail: 'hongseonghun@dreamwiz.com',
        birthday: '1990, 1, 31'
    }, {
        job: '보육 교사',
        name: '김성훈',
        gender: 'M',
        address: '세종특별자치시 동작구 서초중앙882가',
        mail: 'gimjeongho@gmail.com',
        birthday: '1934, 3, 20'
    }, {
        job: '기타 배관공',
        name: '이보람',
        gender: 'F',
        address: '서울특별시 중구 양재천거리 (성민나동)',
        mail: 'ajang@hotmail.com',
        birthday: '1910, 2, 25'
    }, {
        job: '식품 및 담배 등급원',
        name: '곽도현',
        gender: 'M',
        address: '강원도 성남시 가락거리',
        mail: 'miyeongjang@dreamwiz.com',
        birthday: '1942, 5, 23'
    }, {
        job: '기타 채굴 및 토목 관련 종사자',
        name: '이정웅',
        gender: 'M',
        address: '경상북도 김포시 석촌호수로',
        mail: 'gweonhayun@live.com',
        birthday: '1929, 9, 21'
    }, {
        job: '철근공',
        name: '이은지',
        gender: 'F',
        address: '광주광역시 서구 잠실가',
        mail: 'ui@daum.net',
        birthday: '1908, 7, 1'
    }, {
        job: '농림어업관련 시험원',
        name: '김현우',
        gender: 'M',
        address: '경기도 예산군 잠실035길 (유진문면)',
        mail: 'misugyun@dreamwiz.com',
        birthday: '1953, 11, 7'
    }, {
        job: '법률/경찰/소방 및 교도 관리자',
        name: '성정수',
        gender: 'M',
        address: '부산광역시 남구 반포대0거리',
        mail: 'cunja01@nate.com',
        birthday: '1951, 11, 10'
    }, {
        job: '매장계산원 및 요금정산원',
        name: '김준영',
        gender: 'M',
        address: '인천광역시 종로구 선릉가',
        mail: 'doyun23@hanmail.net',
        birthday: '1996, 3, 26'
    }, {
        job: '육류/어패류 및 낙농품 가공 기계조작원',
        name: '류성현',
        gender: 'M',
        address: '강원도 논산시 석촌호수길',
        mail: 'seongjin34@daum.net',
        birthday: '1935, 8, 1'
    }, {
        job: '통신/방송 및 인터넷 케이블 설치 및 수리원',
        name: '구정자',
        gender: 'F',
        address: '경상남도 부천시 양재천길 (영진이허면)',
        mail: 'jeonghunyun@hotmail.com',
        birthday: '1959, 6, 8'
    }, {
        job: '사서 및 기록물관리사',
        name: '권영식',
        gender: 'M',
        address: '전라남도 용인시 언주65거리',
        mail: 'yanghyeonsug@hotmail.com',
        birthday: '1954, 5, 9'
    }, {
        job: '자동차 정비원',
        name: '손준영',
        gender: 'M',
        address: '광주광역시 중랑구 강남대로 (정수이박읍)',
        mail: 'ujinbag@naver.com',
        birthday: '1949, 8, 5'
    }, {
        job: '냉동/냉장 /공조기 설치 및 정비원',
        name: '이상현',
        gender: 'M',
        address: '경상남도 서천군 서초중앙길 (영철김이읍)',
        mail: 'yseong@hotmail.com',
        birthday: '1945, 9, 18'
    }, {
        job: '변리사',
        name: '홍지아',
        gender: 'F',
        address: '경상남도 논산시 백제고분길',
        mail: 'eunseoyang@hotmail.com',
        birthday: '1950, 1, 11'
    }, {
        job: '단조원',
        name: '엄성현',
        gender: 'M',
        address: '부산광역시 도봉구 언주거리 (하은박면)',
        mail: 'coemisug@dreamwiz.com',
        birthday: '1939, 7, 15'
    }, {
        job: '상점 판매원',
        name: '이민재',
        gender: 'M',
        address: '경상남도 양주시 반포대길 (시우김박동)',
        mail: 'jungsu04@daum.net',
        birthday: '1965, 1, 5'
    }, {
        job: '금속 / 재료공학 연구원 및 기술자',
        name: '고수빈',
        gender: 'F',
        address: '서울특별시 송파구 영동대길',
        mail: 'kgim@nate.com',
        birthday: '1989, 12, 2'
    }, {
        job: '간병인',
        name: '강민수',
        gender: 'M',
        address: '전라북도 청주시 서원구 선릉958로 (영환배서마을)',
        mail: 'sanghyeonmun@dreamwiz.com',
        birthday: '1954, 5, 29'
    }, {
        job: '일반기계 조립원',
        name: '최정자',
        gender: 'F',
        address: '인천광역시 종로구 선릉거리',
        mail: 'gimsiu@nate.com',
        birthday: '1913, 4, 21'
    }, {
        job: '기타 의료/복지 관련 서비스 종사원',
        name: '권은정',
        gender: 'F',
        address: '인천광역시 중랑구 석촌호수로',
        mail: 'sunjajeon@hanmail.net',
        birthday: '1976, 8, 3'
    }, {
        job: '기타 판매 및 고객 서비스 관리자',
        name: '이정훈',
        gender: 'M',
        address: '강원도 안양시 학동거리',
        mail: 'jeongsiggim@nate.com',
        birthday: '1940, 8, 11'
    }, {
        job: '보험 및 금융 상품 개발자',
        name: '김은정',
        gender: 'F',
        address: '부산광역시 종로구 도산대가 (현주최마을)',
        mail: 'gimyeonghyi@live.com',
        birthday: '1914, 8, 20'
    }, {
        job: '문화/예술/디자인 및 영상관련 관리자',
        name: '김성현',
        gender: 'M',
        address: '대구광역시 영등포구 학동거리',
        mail: 'hyeonsug57@gmail.com',
        birthday: '1909, 12, 23'
    }, {
        job: '감정평가 전문가',
        name: '김정식',
        gender: 'M',
        address: '전라남도 하남시 언주가 (승현김박읍)',
        mail: 'jia66@live.com',
        birthday: '1951, 7, 5'
    }, {
        job: '미용사',
        name: '최예원',
        gender: 'F',
        address: '세종특별자치시 양천구 압구정거리 (정수김이읍)',
        mail: 'iminji@dreamwiz.com',
        birthday: '1937, 2, 12'
    }, {
        job: '과실 및 채소 관련 기계조작원',
        name: '김서준',
        gender: 'M',
        address: '경상북도 용인시 처인구 강남대길',
        mail: 'coeseonyeong@naver.com',
        birthday: '1999, 10, 12'
    }, {
        job: '사서 및 기록물관리사',
        name: '윤경희',
        gender: 'F',
        address: '울산광역시 광진구 가락790길',
        mail: 'hwangyeongsug@gmail.com',
        birthday: '2003, 3, 27'
    }, {
        job: '금속기계부품 조립원',
        name: '김성호',
        gender: 'M',
        address: '제주특별자치도 성남시 분당구 반포대가 (미경나마을)',
        mail: 'abae@dreamwiz.com',
        birthday: '1932, 12, 16'
    }, {
        job: '자재관리 사무원',
        name: '전지민',
        gender: 'F',
        address: '대구광역시 용산구 개포길',
        mail: 'seoyeonyun@daum.net',
        birthday: '1950, 11, 5'
    }, {
        job: '인터넷 판매원',
        name: '황지아',
        gender: 'F',
        address: '경기도 성남시 중원구 석촌호수68가 (민준이동)',
        mail: 'naeunseo@dreamwiz.com',
        birthday: '1908, 2, 5'
    }, {
        job: '여행상품 개발자',
        name: '박승현',
        gender: 'M',
        address: '광주광역시 북구 봉은사53로 (현정김이동)',
        mail: 'jiacoe@nate.com',
        birthday: '1946, 10, 25'
    }, {
        job: '식품/섬유 공학 및 에너지 시험원',
        name: '조서윤',
        gender: 'F',
        address: '제주특별자치도 태백시 테헤란거리',
        mail: 'gweonjeongsu@live.com',
        birthday: '2005, 8, 25'
    }, {
        job: '냉동/냉장 /공조기 설치 및 정비원',
        name: '김수빈',
        gender: 'F',
        address: '경상남도 용인시 수지구 오금360로 (서연최한동)',
        mail: 'abae@hanmail.net',
        birthday: '1943, 9, 19'
    }, {
        job: '연예인 및 스포츠 매니저',
        name: '허지우',
        gender: 'F',
        address: '울산광역시 서구 가락01로 (지현최김마을)',
        mail: 'yeongsun50@gmail.com',
        birthday: '1944, 10, 8'
    }, {
        job: '냉동/냉장 /공조기 설치 및 정비원',
        name: '안예원',
        gender: 'F',
        address: '경상남도 연천군 서초대가 (재호김면)',
        mail: 'jimin25@nate.com',
        birthday: '1996, 1, 11'
    }, {
        job: '경찰관',
        name: '이민재',
        gender: 'M',
        address: '경기도 성남시 오금로 (미영배읍)',
        mail: 'gyeongjasong@dreamwiz.com',
        birthday: '1915, 6, 21'
    }, {
        job: '기타 판매 및 고객 서비스 관리자',
        name: '최상현',
        gender: 'M',
        address: '충청남도 서산시 반포대거리 (정순김박리)',
        mail: 'pi@hotmail.com',
        birthday: '1952, 12, 14'
    }, {
        job: '바텐더',
        name: '김지원',
        gender: 'F',
        address: '광주광역시 용산구 가락322가 (미정한동)',
        mail: 'yeeun94@live.com',
        birthday: '1987, 2, 14'
    }, {
        job: '배우 및 모델',
        name: '한옥자',
        gender: 'F',
        address: '충청북도 홍천군 언주16거리 (수진이마을)',
        mail: 'jia18@naver.com',
        birthday: '1922, 11, 9'
    }, {
        job: '기타 종교관련 종사자',
        name: '구정웅',
        gender: 'M',
        address: '대전광역시 영등포구 개포013길 (정훈김윤동)',
        mail: 'jeongsuni@daum.net',
        birthday: '2001, 7, 23'
    }, {
        job: '운송장비 조립원',
        name: '한경수',
        gender: 'M',
        address: '울산광역시 남구 언주3거리',
        mail: 'jihyeon92@naver.com',
        birthday: '1944, 9, 17'
    }, {
        job: '건축 목공',
        name: '이지후',
        gender: 'M',
        address: '전라북도 과천시 석촌호수길',
        mail: 'munyunseo@naver.com',
        birthday: '1908, 8, 19'
    }, {
        job: '텔레마케터',
        name: '박상호',
        gender: 'M',
        address: '대구광역시 강서구 가락43길',
        mail: 'ujingim@naver.com',
        birthday: '2011, 4, 11'
    }, {
        job: '기타 자동차 운전원',
        name: '한성수',
        gender: 'M',
        address: '충청북도 성남시 중원구 언주68길',
        mail: 'yeonghwansim@nate.com',
        birthday: '2012, 6, 6'
    }, {
        job: '자동차 부분품 조립원',
        name: '박정숙',
        gender: 'F',
        address: '전라북도 홍성군 잠실길',
        mail: 'kryu@daum.net',
        birthday: '1971, 11, 14'
    }, {
        job: '주유원',
        name: '김종수',
        gender: 'M',
        address: '강원도 화성시 삼성로 (은영김리)',
        mail: 'seongsueom@hanmail.net',
        birthday: '1977, 10, 22'
    }, {
        job: '기타 직물 및 신발 관련 기계조작원 및 조립원',
        name: '배서윤',
        gender: 'F',
        address: '충청북도 광주시 양재천966길',
        mail: 'sangceolsin@live.com',
        birthday: '1953, 6, 14'
    }, {
        job: '판금원',
        name: '김명숙',
        gender: 'F',
        address: '울산광역시 강북구 테헤란2길 (영숙김김면)',
        mail: 'agim@hanmail.net',
        birthday: '2019, 12, 21'
    }, {
        job: '직조기 및 편직기 조작원',
        name: '박순옥',
        gender: 'F',
        address: '부산광역시 광진구 개포로',
        mail: 'yeji47@nate.com',
        birthday: '1922, 4, 14'
    }, {
        job: '기타 행정 및 경영지원 관리자',
        name: '백영수',
        gender: 'M',
        address: '전라남도 용인시 기흥구 봉은사로',
        mail: 'minjaeseo@live.com',
        birthday: '1982, 4, 23'
    }, {
        job: '판금기 조작원',
        name: '권우진',
        gender: 'M',
        address: '전라북도 보은군 서초대가',
        mail: 'ujinjang@hotmail.com',
        birthday: '2001, 7, 16'
    }, {
        job: '이용사',
        name: '오상현',
        gender: 'M',
        address: '충청북도 진천군 잠실9가',
        mail: 'wgim@daum.net',
        birthday: '1995, 6, 10'
    }, {
        job: '정보통신관련 관리자',
        name: '박영미',
        gender: 'F',
        address: '충청북도 부천시 오정구 오금229거리',
        mail: 'seongsucoe@naver.com',
        birthday: '2002, 3, 20'
    }, {
        job: '자동차 정비원',
        name: '우성호',
        gender: 'M',
        address: '세종특별자치시 마포구 오금009로 (영일장읍)',
        mail: 'bagjeongsig@hotmail.com',
        birthday: '2019, 10, 10'
    }, {
        job: '양장 및 양복 제조원',
        name: '장도윤',
        gender: 'M',
        address: '울산광역시 성북구 도산대가',
        mail: 'ogjagim@hanmail.net',
        birthday: '2013, 11, 19'
    }, {
        job: '손해사정인',
        name: '이준서',
        gender: 'M',
        address: '부산광역시 강북구 영동대945거리 (정숙이리)',
        mail: 'subinbag@hotmail.com',
        birthday: '1918, 3, 24'
    }, {
        job: '화물차 및 특수차 운전원',
        name: '이지후',
        gender: 'M',
        address: '세종특별자치시 양천구 압구정6거리',
        mail: 'songjaeho@nate.com',
        birthday: '2010, 2, 22'
    }, {
        job: '보조 교사 및 기타 교사',
        name: '김지우',
        gender: 'F',
        address: '경상남도 공주시 언주가 (민수박최마을)',
        mail: 'dju@live.com',
        birthday: '1982, 9, 12'
    }, {
        job: '방사선사',
        name: '김준서',
        gender: 'M',
        address: '충청북도 파주시 석촌호수8길',
        mail: 'hyeonsughan@hotmail.com',
        birthday: '1962, 4, 10'
    }, {
        job: '회계 사무원',
        name: '김진우',
        gender: 'M',
        address: '제주특별자치도 화성시 삼성4길',
        mail: 'lcoe@naver.com',
        birthday: '1954, 7, 18'
    }, {
        job: '상품 대여원',
        name: '김옥자',
        gender: 'F',
        address: '제주특별자치도 서산시 봉은사가 (예원김읍)',
        mail: 'xgim@daum.net',
        birthday: '1974, 6, 19'
    }, {
        job: '',
        name: '김영진',
        gender: 'M',
        address: '전라남도 고양시 덕양구 서초대길 (은정윤동)',
        mail: 'ccoe@live.com',
        birthday: '2019, 12, 13'
    }, {
        job: '홍보 도우미 및 판촉원',
        name: '김영식',
        gender: 'M',
        address: '부산광역시 강동구 압구정가 (지후차한면)',
        mail: 'jgim@dreamwiz.com',
        birthday: '1999, 3, 13'
    }, {
        job: '회계사',
        name: '최지민',
        gender: 'F',
        address: '전라남도 천안시 서북구 선릉59로',
        mail: 'vgim@daum.net',
        birthday: '1975, 1, 29'
    }, {
        job: '일반 의사',
        name: '문하윤',
        gender: 'F',
        address: '강원도 제천시 서초대거리',
        mail: 'yejuni@live.com',
        birthday: '1933, 1, 28'
    }, {
        job: '문리 및 어학 강사',
        name: '허영길',
        gender: 'M',
        address: '경상북도 안산시 단원구 영동대로',
        mail: 'jbag@nate.com',
        birthday: '1989, 4, 11'
    }, {
        job: '생명과학 연구원',
        name: '이예진',
        gender: 'F',
        address: '부산광역시 동구 서초대거리',
        mail: 'sangceol38@nate.com',
        birthday: '1938, 6, 25'
    }, {
        job: '응용 소프트웨어 개발자',
        name: '이지혜',
        gender: 'F',
        address: '광주광역시 남구 잠실46길',
        mail: 'ihaeun@dreamwiz.com',
        birthday: '1919, 8, 11'
    }, {
        job: '주차 관리원 및 안내원',
        name: '김동현',
        gender: 'M',
        address: '세종특별자치시 금천구 압구정가',
        mail: 'dhong@daum.net',
        birthday: '1939, 1, 22'
    }, {
        job: '기타 자동차 운전원',
        name: '김시우',
        gender: 'M',
        address: '제주특별자치도 과천시 서초대로 (지현김장리)',
        mail: 'usangceol@gmail.com',
        birthday: '1954, 11, 6'
    }, {
        job: '의회의원/고위공무원 및 공공단체임원',
        name: '김정훈',
        gender: 'M',
        address: '충청북도 수원시 오금거리',
        mail: 'baegyeonghyi@hotmail.com',
        birthday: '1946, 7, 7'
    }, {
        job: '가구 제조 및 수리원',
        name: '최영순',
        gender: 'F',
        address: '대전광역시 용산구 가락로 (정순최김읍)',
        mail: 'jcoe@hanmail.net',
        birthday: '1943, 5, 28'
    }, {
        job: '가구조립원',
        name: '박은영',
        gender: 'F',
        address: '전라남도 부여군 테헤란407길',
        mail: 'yeongjin01@dreamwiz.com',
        birthday: '1956, 8, 19'
    }, {
        job: '청원 경찰',
        name: '박성훈',
        gender: 'M',
        address: '부산광역시 관악구 개포길 (채원윤박면)',
        mail: 'yeongsug59@gmail.com',
        birthday: '1965, 1, 28'
    }, {
        job: '악기제조 및 조율사',
        name: '김정웅',
        gender: 'M',
        address: '강원도 청주시 흥덕구 역삼길',
        mail: 'gimseongsu@daum.net',
        birthday: '1936, 10, 19'
    }
];
const fortuneArr = [
    '안 된다고 포기하는 순간에 될 거예요.',
    '주변 사람들을 위해 음식을 해보세요.',
    '무엇이든 지나치면 부족함만 못해요.',
    '마음이 무거운 일이 생기니 속상해요.',
    '아무도 내 얘기를 믿어주지 않겠어요.',
    '윗사람의 말을 잘 들으니 득이 돼요.',
    '대화가 잘 되는 이들과 시간을 함께해요.',
    '과태료 같은 걸 물어야 할 수도 있겠어요.',
    '내가 예측한 대로 흘러가기는 힘들어요.',
    '차 조심, 사람 조심. 새로운 것은 조심해요.',
    '다양한 의견을 인정하고 존중하세요.',
    '어려우면 겸손한 자세로 조언을 구하세요.',
    '마음을 비우고 결과를 기다리세요.',
    '운동을 마음만 먹고 안하면 안돼요.',
    '가만히 있어도 기분이 언짢은 날이에요.',
    '하루아침에 쌓이는 건 없는 게 당연해요.',
    '망설이는 순간 기회는 없어질 거예요.',
    '장비를 다룰 때는 항상 조심해야 해요.',
    '겉에서 보는 것과 실상은 다를 거예요.',
    '상대방이 싫어하는 말은 조심해야지요.',
    '정상적인 방법의 투자만 가까이해요.',
    '남 탓하지 말고 나를 반성해 보세요.',
    '좋은 말들이 좋은 힘을 불러오는 법이에요.',
    '악역을 맡게 되니 마음이 불편하네요.',
    '무슨 일이든 끝이 있기 마련이에요.',
    '걱정하던 일이 잘 해결되니 좋아요.',
    '어떤 일에든 셈을 정확히 해야 해요.',
    '요행을 바라기보다는 정도로 가야 해요.',
    '주변 덕분에 도움을 많이 받겠네요.',
    '혼자 끙끙거리게 되니 답답하기만 해요.',
    '아무리 어두운 밤이어도 해는 뜨지요.',
    '무거운 것 들다가 허리 다칠 수 있어요.',
    '부모에게 잘해야 자식들도 잘 하겠지요.',
    '아무리 가까워도 지킬 건 지켜야겠지요.',
    '유유상종이에요. 친구 탓 하지 마세요.',
    '나를 치장하려고 낭비가 심하면 안돼요.',
    '마음을 곱게 쓰다보니 돌아오는게 있네요.',
    '뜻밖의 금전이 들어오니 마음이 즐겁네요.',
    '헤어스타일을 바꿔봐도 좋은 날이네요.',
    '부드러운 말투를 써보면 나도 좋아요.',
    '당장은 손해보는 것 같아도 아닐 거예요.',
    '기분 좋은 상상만 해도 생각이 바뀌어요.',
    '무엇이든 결정을 하면 후회가 남아요.',
    '남들이 싫어한다고 나까지 그러면 안 돼요.',
    '덥다고 너무 차가운 음식은 탈이 나요.',
    '귀찮다고 게으름 부리면 손해 봐요.',
    '운전은 항상 조심해야 하고 차조심해요.',
    '내가 할 일을 하고 나서 대가를 바라야죠.',
    '새로운 일을 도모하기에는 무리가 돼요.',
    '무슨 결정이든 과거를 돌이켜보고 해요.',
    '즐겁지 않은 일들이 연달아 생기네요.',
    '정에 이끌려서 실수하는 일은 없어야죠.',
    '세상에 공짜는 없는 법이니 다시 생각해요.',
    '지출이 갑자기 커지니 감당이 안 돼요.',
    '실력도 없으면서 소리만 요란해요.',
    '컨디션이 좋으니 마음이 가벼워요.',
    '원하는 것을 얻으려면 노력해야지요.',
    '칭찬을 들으니 신나서 움직이게 돼요.',
    '지겹다고 포기하지 말고 끈기를 가져요.',
    '남의 것을 탐내지 말고 내 것에 만족해요.',
    '사람을 편견을 가지고 대하지 마세요.',
    '일이 바쁘게 돌아가니 정신이 없어요.',
    '무엇이든 얻는 것에 대해 감사하세요.',
    '불필요한 지출은 최대한 삼가세요.',
    '네것 내것 따질 때가 아니니 자중해요.',
    '실수는 할 수 있지만 인정하는 게 중요해요.',
    '몸상태를 잘 체크하고 관리해야 해요.',
    '남의 말도 귀담아들어야 하는 날이에요.',
    '내 짜증을 남에게 전가하지 마세요.'
];

// 배열의 요소를 무작위로 뽑아서 가져오기
// - Math.random() 함수 이용하기
// - Math.random()은 0 이상 1 미만의 무작위 소수를 출력
// - Math.random() * n은 0 이상 n 미만의 무작위 소수를 출력
// - Math.floor(Math.random * n)은 버림 연산을 하므로 0부터 n-1까지의 무작위 정수를 출력
// - 즉, 이를 사용하면 배열의 인덱스 0...{배열의 길이 - 1} 범위 내에서 무작위 수 추출
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]

// 랜덤으로 운 받기
// - 배열의 map 함수 이용하기
// - profileArr에 들어있는 각 객체의 항목을 그대로 사용하고, 스프레드 연산자를 통해 운세만 추가
const newArr = profileArr.map((obj) => ({...obj, fortune: getRandomElement(fortuneArr)}))
console.log(newArr);

// TODO: 띠별로 다른 운세 받기 (태어난 년도를 12로 나눈 나머지 0...11에 따라 fortuneArr의 0...11번째 항목을 운세로 설정)
// 아래 코드를 주석 해제하여 이용하세요.
/*
const nuevoArr = {YOUR_OWN_CODE}
console.log(nuevoArr)
*/