const arr = [
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '조명기사 및 영사기사',
        name: '백성호',
        gender: 'M',
        address: '광주광역시 남구 삼성772길',
        mail: 'ygim@daum.net',
        birthday: '1916/8/11'
      },
      number: '36757403069217',
      expiration: '10/29',
      cvc: '451'
    },
    {
      brand: 'American Express',
      profile: {
        job: '기타 전기/전자기기 설치 및 수리원',
        name: '김중수',
        gender: 'M',
        address: '충청남도 용인시 기흥구 서초대444가 (준호김최면)',
        mail: 'ogyeongja@daum.net',
        birthday: '1961/1/2'
      },
      number: '341955160214915',
      expiration: '01/27',
      cvc: '2457'
    },
    {
      brand: 'VISA 13 digit',
      profile: {
        job: '상품 대여원',
        name: '김경자',
        gender: 'F',
        address: '대구광역시 서대문구 삼성437로',
        mail: 'junhyeoggim@naver.com',
        birthday: '1946/2/16'
      },
      number: '4312183592950',
      expiration: '09/23',
      cvc: '825'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '전산 자료 입력원 및 사무 보조원',
        name: '이은서',
        gender: 'F',
        address: '전라북도 천안시 서북구 압구정가 (영희윤이동)',
        mail: 'isunog@hotmail.com',
        birthday: '2011/6/18'
      },
      number: '4037707076373371',
      expiration: '07/28',
      cvc: '048'
    },
    {
      brand: 'JCB 15 digit',
      profile: {
        job: '조림/영림 및 벌목원',
        name: '김경수',
        gender: 'M',
        address: '세종특별자치시 강서구 오금거리 (경희송김동)',
        mail: 'iseonyeong@naver.com',
        birthday: '1987/11/17'
      },
      number: '213186808416994',
      expiration: '11/29',
      cvc: '632'
    },
    {
      brand: 'American Express',
      profile: {
        job: '물리 및 작업 치료사',
        name: '황은영',
        gender: 'F',
        address: '부산광역시 서구 반포대31로',
        mail: 'seongjingim@hotmail.com',
        birthday: '1924/2/27'
      },
      number: '343387658098618',
      expiration: '04/26',
      cvc: '1179'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '국악 및 전통예능인',
        name: '김현준',
        gender: 'M',
        address: '전라남도 부여군 선릉5거리 (정호송이마을)',
        mail: 'ngim@dreamwiz.com',
        birthday: '1927/10/5'
      },
      number: '4786298918931868',
      expiration: '12/21',
      cvc: '526'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '통계관련 사무원',
        name: '이현정',
        gender: 'F',
        address: '세종특별자치시 종로구 반포대로 (진우진면)',
        mail: 'gominji@gmail.com',
        birthday: '1934/4/7'
      },
      number: '3546914263344985',
      expiration: '03/24',
      cvc: '808'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '신발제조기 조작원 및 조립원',
        name: '황정희',
        gender: 'F',
        address: '충청남도 안성시 서초대491가',
        mail: 'cunjagim@naver.com',
        birthday: '1966/10/4'
      },
      number: '3532200179864464',
      expiration: '06/27',
      cvc: '811'
    },
    {
      brand: 'American Express',
      profile: {
        job: '장례 상담원 및 장례 지도사',
        name: '서은영',
        gender: 'F',
        address: '대전광역시 금천구 영동대가 (정남성강마을)',
        mail: 'songboram@daum.net',
        birthday: '1994/3/21'
      },
      number: '341821889954795',
      expiration: '06/25',
      cvc: '2645'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '방문 판매원',
        name: '구경자',
        gender: 'F',
        address: '경상북도 논산시 역삼71거리 (상호강읍)',
        mail: 'yeongmio@hotmail.com',
        birthday: '1938/3/8'
      },
      number: '30132929159320',
      expiration: '11/28',
      cvc: '043'
    },
    {
      brand: 'VISA 19 digit',
      profile: {
        job: '법무사 및 집행관',
        name: '배정순',
        gender: 'F',
        address: '광주광역시 도봉구 개포656가',
        mail: 'eunji25@nate.com',
        birthday: '1915/12/16'
      },
      number: '4155993770554047493',
      expiration: '05/26',
      cvc: '943'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '마술사 및 기타 문화/ 예술 관련 종사자',
        name: '박민재',
        gender: 'M',
        address: '대전광역시 서초구 학동길',
        mail: 'xcoe@live.com',
        birthday: '1978/12/15'
      },
      number: '2586795113517075',
      expiration: '06/30',
      cvc: 'CVV: 495'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '매표원 및 복권 판매원',
        name: '차성민',
        gender: 'M',
        address: '전라북도 청주시 흥덕구 반포대0거리',
        mail: 'jiucoe@nate.com',
        birthday: '1931/6/25'
      },
      number: '4522759349466419',
      expiration: '06/25',
      cvc: '324'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '배우 및 모델',
        name: '이옥자',
        gender: 'F',
        address: '부산광역시 은평구 논현332거리',
        mail: 'seonghyeon68@nate.com',
        birthday: '1995/9/29'
      },
      number: '30591484530433',
      expiration: '07/30',
      cvc: '123'
    },
    {
      brand: 'VISA 19 digit',
      profile: {
        job: '일반기계 조립원',
        name: '최재현',
        gender: 'M',
        address: '대구광역시 송파구 도산대3거리 (옥순이장마을)',
        mail: 'ynam@live.com',
        birthday: '1999/3/12'
      },
      number: '4626293842503218504',
      expiration: '06/23',
      cvc: '258'
    },
    {
      brand: 'American Express',
      profile: {
        job: '임상병리사',
        name: '고하윤',
        gender: 'F',
        address: '대구광역시 양천구 압구정30길 (서연한김리)',
        mail: 'baghyeonju@gmail.com',
        birthday: '1959/5/11'
      },
      number: '342349108332774',
      expiration: '06/25',
      cvc: '8279'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '채소 및 특용작물 재배원',
        name: '김민수',
        gender: 'M',
        address: '전라남도 청주시 흥덕구 압구정034로 (준호류황리)',
        mail: 'jihyeoni@naver.com',
        birthday: '1995/6/29'
      },
      number: '3560957850207942',
      expiration: '04/24',
      cvc: '082'
    },
    {
      brand: 'American Express',
      profile: {
        job: '장례 상담원 및 장례 지도사',
        name: '김현우',
        gender: 'M',
        address: '대전광역시 금천구 테헤란7로',
        mail: 'naogsun@gmail.com',
        birthday: '1931/10/4'
      },
      number: '343379173928528',
      expiration: '09/27',
      cvc: '5243'
    },
    {
      brand: 'Discover',
      profile: {
        job: '운송장비 조립원',
        name: '김순자',
        gender: 'F',
        address: '충청남도 화성시 언주가 (성진김면)',
        mail: 'gyeonghyiyu@live.com',
        birthday: '1999/3/5'
      },
      number: '6011673959651231',
      expiration: '05/28',
      cvc: '198'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '세탁원 및 다림질원',
        name: '강상호',
        gender: 'M',
        address: '전라남도 성남시 중원구 잠실가',
        mail: 'seonghyeon42@hanmail.net',
        birthday: '1968/4/20'
      },
      number: '2293278083310304',
      expiration: '06/29',
      cvc: 'CVV: 914'
    },
    {
      brand: 'Discover',
      profile: {
        job: '세무사',
        name: '양영호',
        gender: 'M',
        address: '충청북도 정선군 오금로 (숙자류박마을)',
        mail: 'dbaeg@live.com',
        birthday: '1938/11/8'
      },
      number: '6011949278282977',
      expiration: '12/22',
      cvc: '300'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '기타 식품가공관련 종사원',
        name: '고정남',
        gender: 'M',
        address: '경기도 영월군 석촌호수거리',
        mail: 'coeseoyun@hanmail.net',
        birthday: '1927/5/19'
      },
      number: '2225702990846145',
      expiration: '01/28',
      cvc: 'CVV: 238'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '안경사',
        name: '김수빈',
        gender: 'F',
        address: '경상북도 동두천시 논현997가',
        mail: 'ogsun24@hanmail.net',
        birthday: '1921/3/2'
      },
      number: '3549946317920698',
      expiration: '07/26',
      cvc: '832'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '컴퓨터 강사',
        name: '김미숙',
        gender: 'F',
        address: '인천광역시 용산구 선릉4가',
        mail: 'dohyeon35@naver.com',
        birthday: '1949/8/22'
      },
      number: '4681842985148579',
      expiration: '08/24',
      cvc: '581'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '영양사',
        name: '홍지훈',
        gender: 'M',
        address: '충청남도 강릉시 양재천길 (재호백동)',
        mail: 'ci@nate.com',
        birthday: '1932/5/10'
      },
      number: '3595552958423548',
      expiration: '06/25',
      cvc: '332'
    },
    {
      brand: 'VISA 19 digit',
      profile: {
        job: '보육 교사',
        name: '박현주',
        gender: 'F',
        address: '서울특별시 중구 개포가 (경수우강마을)',
        mail: 'minseoyang@nate.com',
        birthday: '1946/4/26'
      },
      number: '4230714969321940308',
      expiration: '03/31',
      cvc: '875'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '기계공학 기술자 및 연구원',
        name: '김민재',
        gender: 'M',
        address: '전라북도 인제군 압구정559길 (영숙박이읍)',
        mail: 'hbag@dreamwiz.com',
        birthday: '1942/9/9'
      },
      number: '5404394509962849',
      expiration: '06/22',
      cvc: 'CVV: 744'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '전기/전자 및 기계 공학 시험원',
        name: '권영미',
        gender: 'F',
        address: '전라남도 성남시 분당구 역삼0거리 (현우박백읍)',
        mail: 'bagseongho@nate.com',
        birthday: '1956/9/6'
      },
      number: '4906415961867303',
      expiration: '12/21',
      cvc: '575'
    },
    {
      brand: 'American Express',
      profile: {
        job: '전기 및 전자 설비 조작원',
        name: '이우진',
        gender: 'M',
        address: '광주광역시 은평구 반포대98거리',
        mail: 'mgim@daum.net',
        birthday: '2000/3/28'
      },
      number: '376927218048171',
      expiration: '08/29',
      cvc: '4809'
    },
    {
      brand: 'American Express',
      profile: {
        job: '섬유제조 기계조작원',
        name: '이상훈',
        gender: 'M',
        address: '대전광역시 남구 오금가',
        mail: 'gimsanghun@gmail.com',
        birthday: '2010/5/14'
      },
      number: '343246892280152',
      expiration: '12/25',
      cvc: '9402'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '물품이동 장비 조작원',
        name: '윤옥순',
        gender: 'F',
        address: '울산광역시 강동구 역삼길 (정식양리)',
        mail: 'minjaegim@nate.com',
        birthday: '1957/8/22'
      },
      number: '30264777830239',
      expiration: '04/25',
      cvc: '506'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '제관기 조작원',
        name: '황현준',
        gender: 'M',
        address: '인천광역시 강북구 서초중앙길 (은서김이리)',
        mail: 'qsong@live.com',
        birthday: '1939/7/23'
      },
      number: '3516524437493240',
      expiration: '06/24',
      cvc: '492'
    },
    {
      brand: 'VISA 13 digit',
      profile: {
        job: '주방 보조원',
        name: '김정웅',
        gender: 'M',
        address: '부산광역시 용산구 반포대거리',
        mail: 'ogsun04@hanmail.net',
        birthday: '1930/3/31'
      },
      number: '4830389675790',
      expiration: '09/23',
      cvc: '761'
    },
    {
      brand: 'VISA 13 digit',
      profile: {
        job: '직업상담사 및 취업 알선원',
        name: '장은정',
        gender: 'F',
        address: '세종특별자치시 성동구 서초중앙26가',
        mail: 'hyeonjun72@nate.com',
        birthday: '1988/4/25'
      },
      number: '4203596753976',
      expiration: '04/27',
      cvc: '375'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '기타 제조관련 기계 조작원',
        name: '이병철',
        gender: 'M',
        address: '부산광역시 구로구 가락82로 (서준김면)',
        mail: 'xgim@gmail.com',
        birthday: '1968/3/12'
      },
      number: '3538378376160656',
      expiration: '08/28',
      cvc: '352'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '전자 부품 및 제품 제조 기계조작원',
        name: '류예준',
        gender: 'M',
        address: '전라남도 파주시 학동길 (현정박송읍)',
        mail: 'jongsu17@hotmail.com',
        birthday: '1983/1/26'
      },
      number: '2362709767367414',
      expiration: '06/26',
      cvc: 'CVV: 958'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '여행상품 개발자',
        name: '김경희',
        gender: 'F',
        address: '충청남도 안산시 상록구 봉은사103거리',
        mail: 'mjang@daum.net',
        birthday: '1982/4/18'
      },
      number: '2277843423117774',
      expiration: '11/23',
      cvc: 'CVV: 575'
    },
    {
      brand: 'VISA 19 digit',
      profile: {
        job: '기타 건설/전기 및 생산 관련 관리자',
        name: '한은영',
        gender: 'F',
        address: '경기도 인제군 압구정거리',
        mail: 'yeonghyihan@live.com',
        birthday: '1920/5/25'
      },
      number: '4147943797756233462',
      expiration: '07/23',
      cvc: '972'
    },
    {
      brand: 'VISA 13 digit',
      profile: {
        job: '운송장비 조립원',
        name: '고현지',
        gender: 'F',
        address: '경상남도 괴산군 강남대로 (보람정마을)',
        mail: 'junseo70@live.com',
        birthday: '1990/10/27'
      },
      number: '4185851215934',
      expiration: '12/23',
      cvc: '395'
    },
    {
      brand: 'JCB 15 digit',
      profile: {
        job: '기타 건설/전기 및 생산 관련 관리자',
        name: '최은정',
        gender: 'F',
        address: '충청북도 용인시 기흥구 학동36거리 (현우김면)',
        mail: 'jeonghun75@hotmail.com',
        birthday: '2004/3/24'
      },
      number: '180067767395248',
      expiration: '02/22',
      cvc: '667'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '항공기 정비원',
        name: '이미경',
        gender: 'F',
        address: '광주광역시 광진구 삼성길 (성민이리)',
        mail: 'minjun14@hotmail.com',
        birthday: '1999/1/20'
      },
      number: '3532775937886081',
      expiration: '08/25',
      cvc: '610'
    },
    {
      brand: 'JCB 15 digit',
      profile: {
        job: '이용사',
        name: '최성현',
        gender: 'M',
        address: '전라남도 안산시 상록구 서초중앙길',
        mail: 'nbae@live.com',
        birthday: '2007/2/2'
      },
      number: '213122862532756',
      expiration: '11/29',
      cvc: '302'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '육류/어패류 및 낙농품 가공 기계조작원',
        name: '홍영일',
        gender: 'M',
        address: '경기도 안산시 상록구 삼성17거리 (예지이마을)',
        mail: 'gimjeongsug@dreamwiz.com',
        birthday: '1965/7/5'
      },
      number: '38803123438452',
      expiration: '12/23',
      cvc: '408'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '단조원',
        name: '김정희',
        gender: 'F',
        address: '충청남도 양양군 학동4로 (성훈김면)',
        mail: 'bagjihun@hotmail.com',
        birthday: '1909/8/26'
      },
      number: '3550734052478734',
      expiration: '03/25',
      cvc: '232'
    },
    {
      brand: 'VISA 19 digit',
      profile: {
        job: '화가 및 조각가',
        name: '김성현',
        gender: 'M',
        address: '제주특별자치도 예산군 잠실15가 (영철김읍)',
        mail: 'fi@naver.com',
        birthday: '1959/9/19'
      },
      number: '4811467974428765695',
      expiration: '07/23',
      cvc: '345'
    },
    {
      brand: 'American Express',
      profile: {
        job: '보일러 설치 및 정비원',
        name: '김명숙',
        gender: 'F',
        address: '대구광역시 강동구 논현가 (지민이마을)',
        mail: 'jihu24@hotmail.com',
        birthday: '2000/8/20'
      },
      number: '375019935299666',
      expiration: '06/23',
      cvc: '8324'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '건축가 및 건축공학 기술자',
        name: '최준혁',
        gender: 'M',
        address: '충청북도 괴산군 삼성거리',
        mail: 'yejinyun@gmail.com',
        birthday: '2019/1/5'
      },
      number: '38876090937490',
      expiration: '11/30',
      cvc: '616'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '화학제품 생산기 조작원',
        name: '김서영',
        gender: 'F',
        address: '경상남도 당진시 반포대306거리',
        mail: 'bagyejun@hanmail.net',
        birthday: '1943/6/28'
      },
      number: '4482491779405802',
      expiration: '06/22',
      cvc: '162'
    },
    {
      brand: 'Maestro',
      profile: {
        job: '관세사',
        name: '김종수',
        gender: 'M',
        address: '경상북도 인제군 봉은사길',
        mail: 'junyeong23@hanmail.net',
        birthday: '1924/7/4'
      },
      number: '503801052880',
      expiration: '02/25',
      cvc: 'CVV: 490'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '총무 사무원',
        name: '김옥순',
        gender: 'F',
        address: '강원도 횡성군 반포대0가 (민준김마을)',
        mail: 'fseo@nate.com',
        birthday: '2000/10/14'
      },
      number: '5568694672266049',
      expiration: '01/22',
      cvc: 'CVV: 535'
    },
    {
      brand: 'Discover',
      profile: {
        job: '변호사',
        name: '최하은',
        gender: 'F',
        address: '부산광역시 노원구 학동거리',
        mail: 'boram43@gmail.com',
        birthday: '1992/5/20'
      },
      number: '6536282038749192',
      expiration: '12/28',
      cvc: '679'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '시스템 소프트웨어 개발자',
        name: '한승현',
        gender: 'M',
        address: '대구광역시 동대문구 학동585로',
        mail: 'can@hotmail.com',
        birthday: '1909/5/6'
      },
      number: '4813636661139311',
      expiration: '07/23',
      cvc: '718'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '주유원',
        name: '김도윤',
        gender: 'M',
        address: '경기도 포천시 논현거리 (성민남마을)',
        mail: 'minjun42@gmail.com',
        birthday: '1917/4/12'
      },
      number: '4059317590369070',
      expiration: '05/23',
      cvc: '260'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '배우 및 모델',
        name: '권현준',
        gender: 'M',
        address: '전라남도 삼척시 논현201거리 (정식이유마을)',
        mail: 'haeun03@hotmail.com',
        birthday: '1922/6/4'
      },
      number: '2373967512678421',
      expiration: '11/27',
      cvc: 'CVV: 690'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '섬유공학 기술자 및 연구원',
        name: '김지영',
        gender: 'F',
        address: '전라북도 화성시 압구정거리 (지은이강리)',
        mail: 'coehyeonu@daum.net',
        birthday: '2008/4/10'
      },
      number: '30463751188370',
      expiration: '01/24',
      cvc: '993'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '금속가공관련 제어장치 조작원',
        name: '김민수',
        gender: 'M',
        address: '제주특별자치도 오산시 가락11가',
        mail: 'seonyeong21@gmail.com',
        birthday: '1997/8/7'
      },
      number: '4557393749356463',
      expiration: '07/21',
      cvc: '142'
    },
    {
      brand: 'Maestro',
      profile: {
        job: '기타 배관공',
        name: '이미숙',
        gender: 'F',
        address: '울산광역시 관악구 서초중앙972거리 (수빈최마을)',
        mail: 'coejihu@live.com',
        birthday: '2008/2/29'
      },
      number: '060446137410',
      expiration: '08/23',
      cvc: 'CVV: 603'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '데이터베이스 개발자',
        name: '김성수',
        gender: 'M',
        address: '경기도 괴산군 서초중앙가',
        mail: 'boram13@hanmail.net',
        birthday: '1906/11/24'
      },
      number: '4797444984643378',
      expiration: '08/27',
      cvc: '324'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '인사 및 교육/훈련 사무원',
        name: '김영숙',
        gender: 'F',
        address: '부산광역시 중구 가락거리 (지후이면)',
        mail: 'bagseoyeon@live.com',
        birthday: '1949/3/18'
      },
      number: '4747018173443989',
      expiration: '01/30',
      cvc: '742'
    },
    {
      brand: 'Maestro',
      profile: {
        job: '선박 갑판승무원 및 관련 종사원',
        name: '박정남',
        gender: 'M',
        address: '경상남도 영동군 석촌호수2가 (영환김김동)',
        mail: 'seojunho@gmail.com',
        birthday: '1930/11/12'
      },
      number: '583635534600',
      expiration: '09/30',
      cvc: 'CVV: 964'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '환경공학 시험원',
        name: '김중수',
        gender: 'M',
        address: '강원도 부여군 논현가 (민재이문동)',
        mail: 'misug80@hanmail.net',
        birthday: '1966/3/27'
      },
      number: '4692297567059792',
      expiration: '07/31',
      cvc: '648'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '주조기 조작원',
        name: '최정웅',
        gender: 'M',
        address: '충청북도 수원시 학동034가',
        mail: 'xgim@daum.net',
        birthday: '1939/10/29'
      },
      number: '4864968408370943',
      expiration: '09/26',
      cvc: '434'
    },
    {
      brand: 'Discover',
      profile: {
        job: '냉/난방 관련 설비 조작원',
        name: '박진우',
        gender: 'M',
        address: '전라남도 홍성군 역삼거리',
        mail: 'jongsuryu@naver.com',
        birthday: '1911/4/11'
      },
      number: '6011810049197912',
      expiration: '06/23',
      cvc: '406'
    },
    {
      brand: 'VISA 13 digit',
      profile: {
        job: '주조원',
        name: '이수빈',
        gender: 'F',
        address: '부산광역시 성동구 서초중앙거리 (정숙이이리)',
        mail: 'yeonghyigweon@hotmail.com',
        birthday: '1915/10/5'
      },
      number: '4810956462285',
      expiration: '12/22',
      cvc: '058'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '배우 및 모델',
        name: '김예원',
        gender: 'F',
        address: '인천광역시 강북구 양재천길 (성진김읍)',
        mail: 'sangceol14@naver.com',
        birthday: '1927/3/12'
      },
      number: '4885708477500821',
      expiration: '11/21',
      cvc: '131'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '통신서비스판매원',
        name: '강현주',
        gender: 'F',
        address: '강원도 안산시 논현3가 (광수이김리)',
        mail: 'ncoe@gmail.com',
        birthday: '1930/2/10'
      },
      number: '4914450771540113',
      expiration: '09/30',
      cvc: '009'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '단열공',
        name: '심성민',
        gender: 'M',
        address: '경기도 파주시 역삼29길 (수민양고읍)',
        mail: 'yangboram@daum.net',
        birthday: '1957/9/3'
      },
      number: '4372151583169308',
      expiration: '03/28',
      cvc: '624'
    },
    {
      brand: 'Discover',
      profile: {
        job: '임상 심리사 및 기타 치료사',
        name: '홍영미',
        gender: 'F',
        address: '경상북도 예산군 영동대9로 (미정박이면)',
        mail: 'rcoe@live.com',
        birthday: '1963/7/20'
      },
      number: '6516277689942504',
      expiration: '04/26',
      cvc: '976'
    },
    {
      brand: 'American Express',
      profile: {
        job: '보건의료관련 관리자',
        name: '황성현',
        gender: 'M',
        address: '대전광역시 송파구 역삼19가',
        mail: 'jihun01@live.com',
        birthday: '1930/6/12'
      },
      number: '377185473545121',
      expiration: '01/26',
      cvc: '5783'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '임산물채취 및 기타 임업 관련 종사원',
        name: '성중수',
        gender: 'M',
        address: '인천광역시 도봉구 잠실가 (서준박김리)',
        mail: 'miyeong61@hanmail.net',
        birthday: '1971/12/18'
      },
      number: '38148507408840',
      expiration: '10/28',
      cvc: '429'
    },
    {
      brand: 'VISA 13 digit',
      profile: {
        job: '기타 사무원',
        name: '박영식',
        gender: 'M',
        address: '대전광역시 중구 삼성가 (경자고마을)',
        mail: 'yeongsuni@hotmail.com',
        birthday: '1950/8/28'
      },
      number: '4470398896366',
      expiration: '09/23',
      cvc: '665'
    },
    {
      brand: 'JCB 15 digit',
      profile: {
        job: '섬유공학 기술자 및 연구원',
        name: '김숙자',
        gender: 'F',
        address: '충청남도 고성군 백제고분74가',
        mail: 'jiuhong@nate.com',
        birthday: '1957/5/8'
      },
      number: '213105328330626',
      expiration: '10/28',
      cvc: '648'
    },
    {
      brand: 'Maestro',
      profile: {
        job: '기타 경호 및 보안 관련 종사원',
        name: '우영진',
        gender: 'M',
        address: '강원도 하남시 백제고분17로',
        mail: 'eunseo18@live.com',
        birthday: '1934/4/29'
      },
      number: '587143247985',
      expiration: '10/22',
      cvc: 'CVV: 691'
    },
    {
      brand: 'Maestro',
      profile: {
        job: '기타 배관공',
        name: '이현숙',
        gender: 'F',
        address: '광주광역시 동구 역삼가 (광수김김읍)',
        mail: 'pgim@dreamwiz.com',
        birthday: '1919/9/1'
      },
      number: '060453039681',
      expiration: '07/28',
      cvc: 'CVV: 093'
    },
    {
      brand: 'VISA 13 digit',
      profile: {
        job: '유리제조 및 가공기 조작원',
        name: '이지훈',
        gender: 'M',
        address: '서울특별시 구로구 개포34로',
        mail: 'ugim@naver.com',
        birthday: '1910/4/13'
      },
      number: '4437993040211',
      expiration: '04/26',
      cvc: '802'
    },
    {
      brand: 'American Express',
      profile: {
        job: '표백 및 염색 관련 조작원',
        name: '유상철',
        gender: 'M',
        address: '충청북도 안산시 학동길',
        mail: 'minseoghwang@gmail.com',
        birthday: '2000/3/23'
      },
      number: '374607253498687',
      expiration: '08/27',
      cvc: '4872'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '귀금속 및 보석 세공원',
        name: '장준호',
        gender: 'M',
        address: '경상북도 광명시 봉은사04길 (상철박김마을)',
        mail: 'yeweonbag@naver.com',
        birthday: '1966/11/16'
      },
      number: '3508224125697422',
      expiration: '11/23',
      cvc: '214'
    },
    {
      brand: 'VISA 19 digit',
      profile: {
        job: '기타 서비스관련 단순 종사원',
        name: '윤현지',
        gender: 'F',
        address: '경기도 옥천군 반포대05거리',
        mail: 'di@daum.net',
        birthday: '1925/2/5'
      },
      number: '4308829827194741631',
      expiration: '09/29',
      cvc: '059'
    },
    {
      brand: 'Maestro',
      profile: {
        job: '',
        name: '양성현',
        gender: 'M',
        address: '경상북도 고양시 일산서구 봉은사거리',
        mail: 'ki@hanmail.net',
        birthday: '1950/6/14'
      },
      number: '630477863264',
      expiration: '07/27',
      cvc: 'CVV: 253'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '시스템 소프트웨어 개발자',
        name: '한경자',
        gender: 'F',
        address: '세종특별자치시 노원구 역삼850길 (성훈한박리)',
        mail: 'oi@naver.com',
        birthday: '1943/10/26'
      },
      number: '3535084819273394',
      expiration: '01/29',
      cvc: '703'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '무용가 및 안무가',
        name: '김미숙',
        gender: 'F',
        address: '대구광역시 용산구 잠실238거리',
        mail: 'ogjai@hotmail.com',
        birthday: '1987/1/8'
      },
      number: '3567462628926116',
      expiration: '11/27',
      cvc: '850'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '통신공학 기술자 및 연구원',
        name: '김지우',
        gender: 'F',
        address: '경기도 인제군 논현가 (아름이동)',
        mail: 'dohyeon36@hotmail.com',
        birthday: '1942/9/20'
      },
      number: '30277046862668',
      expiration: '06/28',
      cvc: '526'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '캐드원',
        name: '이지영',
        gender: 'F',
        address: '대전광역시 구로구 오금길 (경자김마을)',
        mail: 'ui@gmail.com',
        birthday: '1955/1/1'
      },
      number: '3519571897480933',
      expiration: '08/21',
      cvc: '249'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '조사 전문가',
        name: '박경자',
        gender: 'F',
        address: '경상남도 용인시 기흥구 서초중앙628로 (수민김동)',
        mail: 'eunjui@daum.net',
        birthday: '1992/8/9'
      },
      number: '3574541441138065',
      expiration: '01/26',
      cvc: '439'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '기타 전기/전자기기 설치 및 수리원',
        name: '이승현',
        gender: 'M',
        address: '충청남도 가평군 도산대686길',
        mail: 'hongmisug@hanmail.net',
        birthday: '2020/9/16'
      },
      number: '4410364947436784',
      expiration: '10/29',
      cvc: '908'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '법률관련 사무원',
        name: '이영미',
        gender: 'F',
        address: '충청북도 속초시 양재천거리 (예원김윤면)',
        mail: 'jeongho51@live.com',
        birthday: '1976/10/2'
      },
      number: '2266170548093455',
      expiration: '12/24',
      cvc: 'CVV: 741'
    },
    {
      brand: 'VISA 13 digit',
      profile: {
        job: '기타 건축마감관련 기능 종사원',
        name: '최서현',
        gender: 'F',
        address: '경기도 철원군 압구정로',
        mail: 'hanyeeun@naver.com',
        birthday: '1992/12/12'
      },
      number: '4980971790273',
      expiration: '11/30',
      cvc: '663'
    },
    {
      brand: 'VISA 19 digit',
      profile: {
        job: '선박 갑판승무원 및 관련 종사원',
        name: '서광수',
        gender: 'M',
        address: '대구광역시 북구 영동대7로 (재호서동)',
        mail: 'ni@hanmail.net',
        birthday: '1978/7/23'
      },
      number: '4908800827162129967',
      expiration: '12/30',
      cvc: '592'
    },
    {
      brand: 'VISA 16 digit',
      profile: {
        job: '기타 직물 및 신발 관련 기계조작원 및 조립원',
        name: '최민수',
        gender: 'M',
        address: '충청북도 영동군 언주47가 (지우손면)',
        mail: 'oi@gmail.com',
        birthday: '1987/8/25'
      },
      number: '4473044431537016',
      expiration: '12/28',
      cvc: '845'
    },
    {
      brand: 'Mastercard',
      profile: {
        job: '증권 및 외환 딜러',
        name: '김지영',
        gender: 'F',
        address: '대구광역시 용산구 강남대1거리 (은주윤동)',
        mail: 'ihyeonju@naver.com',
        birthday: '2003/2/10'
      },
      number: '2222657076951834',
      expiration: '11/29',
      cvc: 'CVV: 228'
    },
    {
      brand: 'American Express',
      profile: {
        job: '기계공학 기술자 및 연구원',
        name: '강미숙',
        gender: 'F',
        address: '경상북도 횡성군 강남대066거리 (미정김면)',
        mail: 'ogsun15@nate.com',
        birthday: '1920/12/22'
      },
      number: '372496658821681',
      expiration: '01/22',
      cvc: '9487'
    },
    {
      brand: 'JCB 15 digit',
      profile: {
        job: '육아 도우미',
        name: '김지우',
        gender: 'F',
        address: '충청북도 안산시 상록구 압구정82로 (종수김면)',
        mail: 'joseongsu@live.com',
        birthday: '2017/6/27'
      },
      number: '213123534502946',
      expiration: '04/26',
      cvc: '939'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '도금 및 금속분무기 조작원',
        name: '이영숙',
        gender: 'F',
        address: '경상남도 성남시 백제고분가 (진우이리)',
        mail: 'boram21@daum.net',
        birthday: '1917/2/19'
      },
      number: '30266110798452',
      expiration: '02/24',
      cvc: '439'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '관세행정 사무원',
        name: '김영진',
        gender: 'M',
        address: '인천광역시 동대문구 언주가',
        mail: 'coejeongsig@live.com',
        birthday: '2011/4/28'
      },
      number: '3591081682884522',
      expiration: '11/28',
      cvc: '523'
    },
    {
      brand: 'Discover',
      profile: {
        job: '어부 및 해녀',
        name: '주지민',
        gender: 'F',
        address: '충청남도 시흥시 삼성5가 (명자이면)',
        mail: 'gimjihun@hanmail.net',
        birthday: '2018/2/15'
      },
      number: '6011103424084065',
      expiration: '09/28',
      cvc: '400'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '판금원',
        name: '박영길',
        gender: 'M',
        address: '서울특별시 노원구 봉은사86로 (현주김이면)',
        mail: 'hyeonju34@dreamwiz.com',
        birthday: '2008/4/6'
      },
      number: '30419755384720',
      expiration: '10/23',
      cvc: '174'
    },
    {
      brand: 'Diners Club / Carte Blanche',
      profile: {
        job: '상품 대여원',
        name: '이수민',
        gender: 'F',
        address: '경상남도 구리시 서초중앙3가 (경자김강마을)',
        mail: 'jangjaeho@hotmail.com',
        birthday: '1959/9/21'
      },
      number: '30478721583500',
      expiration: '06/31',
      cvc: '802'
    },
    {
      brand: 'Discover',
      profile: {
        job: '웨이터',
        name: '이도윤',
        gender: 'M',
        address: '대구광역시 노원구 잠실로',
        mail: 'hamyeongja@live.com',
        birthday: '1942/7/31'
      },
      number: '6011102956539009',
      expiration: '03/31',
      cvc: '982'
    },
    {
      brand: 'JCB 16 digit',
      profile: {
        job: '경영 및 진단 전문가',
        name: '이광수',
        gender: 'M',
        address: '부산광역시 성북구 서초중앙05로 (미경권장리)',
        mail: 'jieun77@gmail.com',
        birthday: '1996/5/22'
      },
      number: '3535530365116213',
      expiration: '06/29',
      cvc: '159'
    }
  ]

const newArrShallow = Object.assign({}, arr); //얕은 복사

arr[0].brand = '파이썬 알고리즘 스터디'

function deepCopy(o) {
  const result = {};
  if(typeof o === "object" && o !==null)
    for (i in o) result[i] = deepCopy(o[i]);
  else result = o;
  return result;
}

const newArrDeep = deepCopy(arr); //깊은 복사

arr[0].profile.job = '대학생'

const buttons = document.querySelectorAll("button")
const resultDiv = document.getElementById("result")

buttons.forEach((button) => button.addEventListener('click', (e) => resultDiv.innerText = e.target.id === 'shallow' ? newArrShallow[0] : newArrDeep[0]))