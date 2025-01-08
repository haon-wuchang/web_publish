

show databases; 
use hrdb2019; 
select database();
show tables;

show tables;
desc department;
desc employee;
desc unit;
desc vacation;

show tables;
desc employee;
select emp_id, emp_name from employee;
select * from employee;

-- 사원테이블에서 사원아이디,사원명,성별,입사일을 조회하기
show tables;
desc employee;
select emp_id, emp_name, gender, hire_date from employee;

-- 사원테이블에서 사원명,부서명,입사일,폰번호,연봉을 조회하기
show tables;
desc employee;
select emp_name, dept_id, hire_date, phone, salary from employee;

-- 부서테이블의 모든 컬럼을 조회하기
show tables;
desc department;
select * from department;


-- 사원테이블에서 아이디,성명,입사일,부서명,연봉 별칭을 바꿔서 조회 컬럼을 출력하기
show tables;
desc employee;
select emp_id, emp_name, hire_date, dept_id, salary from employee;
select 
		emp_id as '아이디',
		emp_name as'성명', 
        hire_date as '입사일', 
		dept_id as '부서명', 
        salary as '연봉' from employee;
        

select 
		emp_id  아이디,
		emp_name 성명, 
        hire_date  입사일, 
		dept_id  부서명, 
        salary  연봉 from employee;
-- 사원테이블에서 사원명,부서명,연봉을 조회하라
show tables;
desc employee;
select emp_name as '사원명', dept_id as '부서명', salary  as '연봉' from employee;

desc employee;

select emp_name '사원명',salary '연봉', salary*0.1 인센티브 from employee;

-- 현재의 날짜를 조회하라, 컬럼명을 date 로 변경하라
select curdate();
select curdate() as 'date';


-- 사원테이블에서 sys 부서에 근무하는 모든 사원을 조회하라
show tables;
desc employee;
select * from employee where dept_id='SYS';   -- 문자일때는 ''이거 붙여야대 ""금지

-- 사원테이블에서 사원명이 '정주고'인 사원을 조회하라
select * from employee where emp_name='정주고';

-- 사원테이블에서 사원아이디가 S0011 인 사원의 정보를 모두 조회하라
desc employee;
select emp_id from employee;
select * from employee where emp_id= 'S0011'; -- 데이터의 정보는 대소문자 잘 구분해서 똑바로 넣어야한다

 -- 사원테이블에서 연봉이 5000인 사원의 모든 정보 조회
 select * from employee where salary=5000;

-- 사원테이블에서 여성사원들의 아이디,이름, 입사일,이메일 정보를 조회하라
-- 출력되는 아이디 컬럼명을 '사원번호'로 변경하라
select emp_id 사원번호, emp_name, hire_date, email from employee where gender='F';

-- 사원테이블에서 부서명이 sys 인 사원들의 아이디,사원명,입사일을 조회
select emp_id 사원번호, emp_name, hire_date from employee WHERE dept_id='SYS';

-- 사원테이블에서 마케팅부서의 모든사원정보를 조회하라
show tables;
desc employee;
select dept_id from employee;
select * from employee where dept_id='MKT';

-- 사원테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회하라 
select * from employee where hire_date='2014-08-01';
	-- date type 은 처리는 숫자형식으로, 표현은 문자형식으로 한다.
-- 연봉이 5000인 사원 정보 조회
select * from employee where salary=5000;

select * from employee;

-- 사원테이블에서 eng_name 이 null 인 모든사원정보를 조회하라
select * from employee where eng_name is null;
-- 연봉이 정해지지 않은 사원을 조회하라
select * from employee where salary is null;

select emp_name, salary, ifnull(salary,0) as salary2
	from employee;

-- eng_name 이 null인 사원들은 'smith' 이름으로 변경 후 조회하라
-- 출력되는 컬럼명은 eng_name2 로 변경하라
select emp_name, ifnull(eng_name,'smith') eng_name2
	from employee;
    
-- 모든 사원의 아이디,사원명,입사일,퇴사일을 조회하라
-- 현재 근무중인 사원의 퇴사일에 현재의 날짜를 출력하라
    select emp_id, emp_name, ifnull(retire_date,curdate()) as 'retire',hire_date 
		from employee;

/************************12/30 ************************************************** */
-- 사원테이블에서 사원번호와 부서컬럼을 출력하라(중복배제)
desc employee;
select distinct emp_id, dept_id from employee;

-- 명령어가 실행된시점에서 저장소에서 제일가까운곳부터 데이터를 넣기때문에 정렬이 되어있지 않다

-- 사원테이블에서 사원명,사원아이디,입사일,연봉을 조회하라
-- 사원아이디 기준 오름차순으로 정렬하라
select emp_id,emp_name, hire_date, salary from employee order by emp_id ;

-- 사원아이디 기준 오름차순 정렬을 하고 입사일 기준으로 내림차순으로 정렬하라
select emp_id,emp_name,hire_date from employee order by emp_id, hire_date desc;

-- 급여를 기준으로 오름차순으로 정렬 후 조회
select * 
	from employee 
    order by salary;

-- eng_name 이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
select * 
	from employee 
    where eng_name is null 
    order by hire_date desc;

-- 퇴직한 사원들을 급여가 높은 순으로 조회 
select *
	from employee 
    where retire_date is not null 
    order by salary desc;

-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
select * from employee where dept_id= 'SYS' order by salary desc;

-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회하라
select * from employee where dept_id='SYS' order by hire_date desc, salary;

-- 사원중에서 연봉이 5000 이상인 사원들을 조회
select * from employee where salary >= 5000;

-- 입사일이 2016년 1월1일 이전에 입사한 사원들 조회
-- date 타입은 표현은 문자처럼 처리방식은 숫자처럼 처리한다!!
select * from employee where hire_date < '2016-01-01'; 

-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000이상인 사원들을 조회
select * from employee where hire_date > '2015-01-01' and salary >= 6000;

-- 입사일이 2015년 1월 1일 이후이거나, 급여가 6000이상인 사원들을 조회
select * from employee where hire_date >'2015-01-01' or salary >= 6000;

-- 입사일이 2015년 1월 1일부터 2017년 12월 31일 사이에 입사한 사원들을 조회
select * from employee where hire_date >= '2015-01-01' and hire_date <= '2017-12-31';
-- 연봉구간이 5000 이상 부터 7000미만 사이의 사원들을 조회
select * from employee where salary >= 5000 and salary < 7000 order by salary desc;

-- 2016년 입사자를 조회
select * from employee where hire_date between '2016-01-01'and '2016-12-31';

-- 사원아이디가 'S0001' 'S0010' 'S0020' 인 사원의 모든 정보를 조회하라
select * from employee where emp_id = 'S0001' or emp_id = 'S0010' or emp_id = 'S0020';

-- 부서아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
select * from employee where dept_id = 'MKT' or dept_id = 'GEN' or dept_id = 'HRD';

-- 사원아이디가 'S0001' 'S0010' 'S0020' 인 사원의 모든 정보를 조회하라
select * from employee where emp_id in('S0001', 'S0010', 'S0020');
-- 부서아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
select * from employee where dept_id in('MKT', 'GEN', 'HRD');

-- 영어 이름이 f 로 시작하는 모든 사원들을 조회
select * from employee where eng_name like 'f%';

-- '한'씨 성을 가진 모든 사원들을 조회
select * from employee where emp_name like '한%';

-- 이메일 주소의 두번째 자리에 'a'가 들어가는 모든 사원을 조회
select * from employee where email like '_a%'; 

-- 이메일 주소가 4자리인 모든 사원을 조회하라
select * from employee where email like '____@%';

-- 이름에 '삼'이 들어가는 모든 사원을 조회하라
select * from employee where emp_name like '%삼%';


-- 1. 숫자함수 : abs(),rand(),truc(),...
	-- (1) abs함수 : 절댓값 표현 함수
	select 100, -100, abs(100) as '절댓값1', abs(-100) 
		from dual;

	-- (2) floor 함수 : 소숫점을 버리는(삭제) 함수 => 소숫점 자리 지정 불가능. 무조건 버림
    --     truncate 함수 : 소숫점을 삭제하는 함수 => 소숫점 자리 지정 가능 trunc(데이터,자릿수)
    --  => 이전버전에서는 trunc 명령어가 사용가능하다.
	select 123.756, floor(123.756)
		from dual;
	select 123.756, truncate(123.756,1) '소숫점자리1', truncate(13.456,2) '소숫점자리2'
		from dual;
	
	-- (3) rand 함수 : 임의의 수를 생성하는 함수(랜덤)
    select rand() from dual;
	select rand()*1000 from dual;
	-- 정수만 출력하는 쿼리를 실행하라
	select 
		floor(rand()) 'rand1',
		truncate(rand()*1000,0) 'rand2',
        truncate(rand()*100000,2) rand3
		from dual;
        
	-- (4) mod 함수 : 모듈러 연산을 실행하는 함수(= 나머지 연산)
	-- 형식 : mod(숫자데이터, 연산숫자)
	select mod(100,2) 짝, mod(101,2) 홀 from dual;

-- 1~3 자리의 정수를 생성하고 생성한 정수를 2로 나누는 모듈러 함수를실행하는 쿼리를 완성해라
select 
    mod(truncate(rand()*1000,0),2) 결과
    from dual;

-- 사원테이블에서 사원아이디,사원명,부서아이디,입사일,연봉, 인센티브(연봉의 20%) 를 조회하라
-- 인센티브의 소수점 생략하라
-- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함
-- 연봉이 5000 미만의 사원들 정보만 출력
select 
	emp_id,
	emp_name,
    dept_id,
    hire_date,
    ifnull(salary,0) as salary,
	ifnull(truncate(salary*0.2,0),0) as '인센티브'
	from employee
    where salary < 5000 or salary is null;
	-- 고소해까지 출력하기 위해서 is null 사용한거임( 연봉 5000 미만은 맞자나)
	-- 여기서 where salary between 0 and 4999 쓰면 고소해 안나옴 
    -- ( 왜냐면 where 먼저 실행되고 from 실행되고 하니까 where 단계에서는 0 이 아직 없음)


-- 2. 문자함수 : concat(),substring(),...
	-- (1) concat 함수 : 문자열을 결합할때 사용하는 함수
			-- concat(문자열, 문자열, ...)
    select concat('민초','우유','00') 결과 from dual;
-- 사원테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 test_name 으로 실행하라
-- 영어이름이 정해지지않은 사원은 빈 문자열로 치환해서 실행하라
select 
	emp_name, 
	eng_name, 
    concat(emp_name,'/',ifnull(eng_name,'')) test_name 
	from employee;

-- 사원테이블에서 사원아이디와 5자리의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성하고 조회하라
-- 사원아이디, 사원명, 입사일,급여, 퇴사일, 사원번호 를 조회하라
-- 현재 근무중인 사원은 현재 날짜를 퇴사일에 입력해주세요
select 
	emp_id,
    emp_name,
    hire_date,
    salary,
	ifnull(retire_date,curdate()) retire_date,
    ifnull(retire_date,now()) retire_date_hour,
    concat(emp_id,'-',truncate(rand()*100000,0)) 사원번호
	from employee;
    
-- (2) substring 함수 : 문자열을 추출할때 사용하는 함수
		-- substring(문자열, 추출할위치, 추출할자릿수)
        -- 빈 문자열도 하나의 자리로 취급함
select substring('mint choco 22',1,4) 민트,
	substring('mint choco 22',6,5) 초코 
    from dual;

-- 사원테이블에서 사원아이디,사원명,입사년도,입사월,입사일,급여를 조회하라
select 
	emp_id,
    emp_name,
    substring(hire_date,1,4) 입사년도,
    substring(hire_date,6,2) 입사월,
    substring(hire_date,9,2) 입사일,
    salary
	from employee;
    
-- 2015년도에 입사한 모든 사원을 조회하라
select * from employee where substring(hire_date,1,4) = '2015';

-- 2018년도에 정보시스템부서sys에 입사한 모든 사원들을 조회
select * from employee where dept_id='SYS' and substring(hire_date,1,4)='2018';

	-- (3) left,right 함수 : left(문자열,추출할자릿수) , right(문자열,추출할자릿수)
	select left('대한민국 크크크 만세',4) 추출결과 from dual;
	select right('대한민국 크크크 만세',2) 추출결과2 from dual;

-- 2014년도에 입사한 모든 사원을 조회하라
select * from employee where left(hire_date,4)='2014';
-- 모든 사원의 폰번호 마지막 4자리를 조회하라
select emp_name,emp_id,dept_id,hire_date,right(phone,4) phone from employee;

	-- (4) upper, lower 함수 : upper(문자열을 대문자로 변경) lower(문자열을 소문자로 변경)
    -- (mysql 은 대소문자 구별을 안하지만 오라클에서는 함)
-- 사원들의 영어이름과 이메일 주소를 모두 대문자로 출력하라
select upper(eng_name),upper(email) from employee;

	-- (5) trim 함수 : 공백 제거 함수 | trim(문자열)
select trim('        ghghgh           '),
	trim('ghghgh           '),
    trim('ghghgh ㅇ   ㅇㅇㅇㅇ       ')from dual; -- 가운데에 있는 빈공간은 삭제되지 않는다

	-- (6) format 함수 : 문자열의 포맷을 수정할때 사용
		-- format(문자열 또는 숫자, 소숫점자리)
		-- 숫자를 3자리씩 , 로 구분하여 출력하는 포맷이다 
select format(124353,0) from dual;
select format(125323,2) from dual; -- 소숫점자리를 2자리까지 지정합니다 라는 뜻
	
-- 컨트럴 d = 해당행 복사

-- 사원테이블의 사원아이디,사원명,입사일,연봉을 조회하고, 연봉 협상 전인 사원은 0 으로 변환 후 조회하고,
-- 연봉은 3자리씩 , 로 구분하여 조회한다
select emp_id,emp_name,hire_date,concat(format(ifnull(salary,0),0),'만원') 연봉 from employee;
-- => format 먼저하고 ifnull 하면 안된다 에러임 ! format 을하게되면 문자열로 변경되기때문에 얘가 다시 숫자열로는 변경할수없어서 ifnull 을 할수없당

-- 사원아이디, 사원명, 부서명,입사일, 연봉, 보너스(연봉0.05%) 조회하고
-- 연봉과 보너스 컬럼은 3자리씩 ,로 구분해여 출력 후 '만원' 을 추가
-- 보너스 컬럼은 소숫점 1자리까지 출력한다
select emp_id,emp_name,dept_id,hire_date,
	concat(format(salary,0),'만원') salary,
	concat(format(salary*0.05,1),'만원') 보너스 
    from employee;
    
    --   12/31 -------------------------------------------------------------------------------
-- 3. 날짜 함수 : curdate(),now(),sysdate()
	-- (1) curdate 함수 : 현재 시스템 날짜를 출력 ( 시스템 - 현재사용하는 pc) , 년월일 만 출력됨
    select curdate() from dual;
    -- (2) now 함수 : msSQL에서 사용되는 함수이다
    -- (2) sysdate 함수 : 오라클에서 사용되는 함수이다
    -- 현재 시스템 날짜를 출력, 년월일 시분초 까지 출력됨
    select now(), sysdate() from dual;
    
-- 4. 형변환 함수 : cast(), convert()=> 얘는 잘 사용안함
    -- (1) cast 함수 : cast(변경할데이터 as 변경할테이터타입)
    -- 데이터타입 : 문자 (char) 숫자(unsigned integer) 날짜(date)
	select 12435 숫자, cast(12435 as char) 문자 from dual;
	select '12435' 문자 , cast('12435' as unsigned integer) 정수 from dual;

-- 입력폼에서 '20150101' 입사날짜를 입력받으면 문자데이터로 들어오게 된다. 이 데이터를 날짜를 가진 사원을 조회
select * from employee where hire_date = cast('20150101' as date);

-- floor 함수를 적용한 cast 함수
select floor('12-34-5') 문자,
	floor(cast('12-34-5' as unsigned integer)) 정수
	from dual;

-- 5. 문자열 치환 함수 : replace(문자열, old값, new값) 
select replace('123,456', ',', '') 문자,
	cast(replace('123,456', ',', '') as unsigned integer) 숫자
from dual;

-- 사원테이블의 입사일 포맷을 변경 '2015-01-01' 을 '2015/01/01' 로 변경하라
select emp_name, replace(hire_date,'-','/') from employee;
 -- ( 실제 db에는 - 으로 되어있고 화면에 출력할때만 / 로 나온느거임)

/******************************
	그룹(집계)함수 : sum(), avg(), min() , max(), count() ...
    - group by : 그룹함수에서만 사용됨! | 그룹함수를 적용하기 위해 일반 컬럼을 그룹핑하는 단위
    - having : 그룹함수에서만 사용됨! | 그룹함수의 조건절을 적용하는 구문
    그룹함수를 사용할때는 일반컬럼이 같이 조회가 불가능하다!!
***************************/
-- 1. sum 함수 : sum(숫자 또는 숫자를 가진 컬럼) , 
-- 사원테이블에서 모든 사원의 연봉 총합을 조회, 3자리씩 끊어서 조회
select emp_id, sum(salary) total from employee;
	-- 이케 하면 에러뜸 ,그룹함수를 사용할때는 일반컬럼과(유니크한컬럼) 함께 사용하지 못한다
	-- emp_id 는 20개나 값이 있는데 연봉은 다 숫자라 하나로 합쳐지자넝
select concat(format(sum(salary),0),'만원') total from employee;

-- 2. avg 함수(average) : avg(숫자 또는 숫자를 가진 컬럼) 
-- 사원들의 총연봉과 평균연봉을 조회
-- 소숫점 한자리까지 출력
select concat(format(sum(salary),1),'만원') 총연봉,
concat(format(avg(salary),1),'만원') 평균연봉
from employee;

-- 3. min 함수 : min(숫자 또는 숫자를 가진 컬럼)  최솟값 출력 시 사용
-- 4. max 함수 : max(숫자 또는 숫자를 가진 컬럼)  최댓값 출력 시 사용
-- 사원들의 총연봉, 평균연봉, 최소연봉, 최대연봉을 조회 
select concat(format(sum(salary),0),'만원') 총연봉, 
	concat(format(avg(salary),0),'만원') 평균연봉, 
    concat(format(min(salary),0),'만원') 최소연봉, 
    concat(format(max(salary),0),'만원') 최대연봉
    from employee;

-- 5. count 함수 : count(컬럼명)
-- 테이블에있는 모든 low 를 카운팅하여 출력함
-- 예외 ) null 을 포함한 데이터의 count 는 계산하지 않는다 !! 
-- count 는 사칙연산이 가능하다 => count 로 나오는 결과값이 숫자이기때문에
select count(*) from employee; -- 20 : 총 사원 수
select count(salary) from employee; -- 19 : 연봉 null 인 애가 1명 있기때문에 19이다

select count(*),
	count(salary) '연봉협상완료 사원수'
    from employee;
select * from employee where salary is null;

-- 총사원수를 구하고 퇴직사원수, 현재근무하는사원수를 조회
select concat(cast(count(*)as char),'명') 총사원수,
	concat(cast(count(retire_date) as char),'명') 퇴직사원수,
    concat(cast(count(*)-count(retire_date) as char),'명') 현재근무하는사원수
	from employee;

-- 사원테이블에서 정보시스템부서의 사원수를 구하라
select count(*) from employee where dept_id = 'SYS';

-- 2015년도에 입사한 사원수를 조회
select count(*),sum(salary) from employee where substring(hire_date,1,4)='2015';

-- 가장 최근 입사자와 가장 오래된 입사자의 입사일 조회
select min(hire_date) 오래된입사자, max(hire_date) 최근입사자 from employee ;

-- hrd 부서의 가장 최근 입사자와 가장 오래된 입사자의 입사일 조회
select min(hire_date) 오래된입사자, max(hire_date) 최근입사자 from employee where dept_id='HRD';

-- 마케팅부서 기준 가장 낮은 연봉과 높은 연봉을 조회
select min(salary) 최저연봉, max(salary) 최대연봉 from employee where dept_id='MKT';

/*
group by 적용 : ~~별 (ex. 년도별) 그룹함수를 적용해야 하는 경우 | 중복된 데이터가 있어야 그룹핑하는 의미가 있으니까 중복된데이터있을때 사용함
형식: from 뒤에서 사용한다 | group by 그룹핑하려는컬럼명
	그룹핑하려는컬럼명 은 여러개도 가능하다
	group by에 사용된 일반컬럼은 그룹함수와 같이 조회가 가능하다 !!!!
    그룹바이에 사용된 컬럼은 select 에서도 형식이 동일하게 들어가야한다
*/
-- 사원테이블에서 부서별 사원수를 조회
select dept_id, count(*) 부서별사원수 
 from employee
 group by dept_id;

-- 입사년도 별 총연봉, 평균연봉, 최저연봉,최고연봉, 입사사원수를 조회
select left(hire_date,4) 입사년도 , -- 얘의 형식이 일치해야지만 사용이 가능하다 얘한테만 concat 이런거 사용못함 하려면 밑에잇는애한테도 해줘야함
	format(sum(salary),0)  총연봉,
	format(avg(salary),0) 평균연봉,
	min(salary) 최저연봉,
	max(salary) 최고연봉,
    count(*) 입사사원수
	from employee
    group by left(hire_date,4); -- 얘의 형식과

-- 부서별 총연봉, 평균연봉, 최저연봉,최고연봉, 입사사원수를 조회
select 
	dept_id,
	sum(ifnull(salary,0)) 총연봉,
	truncate(avg(ifnull(salary,0)),0) 평균연봉,
	min(ifnull(salary,0)) 최저연봉,
	max(ifnull(salary,0)) 최고연봉,
    count(*) 입사사원수
	from employee
	group by dept_id;

/*
	having : group by 와 함께 사용이 된다 (혼자는 사용 불가능)
    - group by 를 통해 그룹핑한 결과에 조건절을 추가하는 구문이다
    형식 : select ~~ from ~~ group by ~~ having ;
    - having 절에서는 별칭 이름으로 조건처리가 가능하다
*/
-- 부서별 평균연봉 조회
	-- null 값이 포함된 경우 0 으로 변환
	-- 소숫점자리는 절삭
	-- 부서 평균연봉이 6000 이상인 부서만 조회
    -- 평균연봉 기준 오름차순으로 ( 정렬은 항상 마지막에 한다)
select dept_id 부서아이디,
	truncate(avg(ifnull(salary,0)),0) 평균연봉  -- ifnull = 오라클 nvl(컬럼명, 변환할 값)
	from employee
    group by dept_id
    having 평균연봉 >= 6000
    order by 평균연봉;

-- 입사년도 기준 총연봉, 평균연봉을 조회
	-- 총연봉이 6500 이상인 사원들만 출력
	-- null 값을 포함한경우 0 으로 처리
select left(hire_date,4) 입사년도,
	sum(ifnull(salary,0)) 총연봉,
    format(avg(ifnull(salary,0)),0) 평균연봉,
    count(*) 사원수
	from employee
	group by left(hire_date,4)
    having 총연봉 >= 6500;

-- 부서별 남 녀 사원의 사원수를 조회
select dept_id,
	gender,
	count(*)
	from employee
    group by dept_id, gender ;


-- 6. rollup 함수 : reporting 을 위한 함수 (보고서 작성을 위한 함수)
	-- 형식 : select 컬럼리스트 from 테이블명 where 조건절 group by 그룹핑컬럼 with rollup;
-- 부서별 총 연봉을 조회( 연봉이 정해지지않은 부서는 포함하지 않음)
select if(grouping(dept_id), '부서총합',ifnull(dept_id, '-')) 부서아이디,
	sum(salary) 총연봉
	from employee
	where salary is not null
    group by dept_id with rollup;
	-- 부서총합 부분은 원래 null 값으로 비어있는데 여기에 내용넣으려고 if 사용한거임

show tables;
-- 사원들의 휴가 사용 내역 조회
select * from vacation;

-- 사원아이디별 휴가상신횟수, 총휴가사용일 조회 , 총휴가사용일을 기준으로 내림차순 정렬하라
select emp_id,
	count(*) 휴가상신횟수,
    sum(duration) 총휴가사용일자
	from vacation
    group by emp_id
    order by sum(duration) desc;

-- 2016~2017 년도 사이에 사원아이디별 휴가사용 횟수 조회
	-- 리포팅함수 사용, '사원별휴가사용총합' 컬럼명 추가
select if(grouping(emp_id),'사원별휴가사용총합',ifnull(emp_id,'-')) 사원아이디,
	count(*) 총상신횟수,
    sum(duration) 총휴가사용횟수
	from vacation
    where left(begin_date,4) between 2016 and 2017
    group by emp_id with rollup
    order by sum(duration);



-- 입사년도 별 평균연봉을 조회 (연봉이 정해지지않은 부서는 포함하지 않음, 평균연봉이 6000 이상인 입사년도만 출력)
	-- 리포팅함수 사용, '연도별 총합계' 컬럼명 추가
select if(grouping(left(hire_date,4)),'연도별총합',ifnull(left(hire_date,4),'-')) 입사년도,
	concat(format(avg(salary),0),'만원') 평균연봉
	from employee
    where salary is not null 
    group by left(hire_date,4) with rollup;
-- mysql 에서는 grouping 안에 함수를 넣으면 실행이 안된다 !! 그냥 바로 컬럼리스트를 넣어야됨

-- 1/2 ////////////////////////////////////////////////////////////////////////////
/*
	DDL : 테이블 생성, 수정, 삭제 하는 작업
    명령어 : create(생성) , alter(수정) , drop(제거) , truncate( 얘 함수아님요!! )

	1. 테이블 생성 : create
		형식 : create table 생성할테이블명 (
			생성할컬럼명 테이터타입(크기)  제약사항(ex.해당컬럼은 null 이 들어가면안댑니다 등), ...  );
		 테이블명,컬럼명은 중복되면 안댕
	
*/
show databases;
use hrdb2019;
select database();
show tables;

-- test 테이블 생성 / 제거 작업
create table test(
	id char(4) not null
    );
show tables;
desc test;
select * from test;
drop table test;
show tables;

/* 데이터 타입 정리 : 숫자 , 문자 , 날짜(시간)
	 1. 숫자 데이터타입 
			(1)정수 : smallint(2), int(), bigint(8) 
		 		=> 괄호안에 있는 숫자는 2바이트란 뜻임(글자를 최대 2개까지 넣을수있다는거임)
			(2)실수 : float(4), double(8)
					=>  소숫점포함4자리 란 뜻
	2. 문자 : char(크기) ->:고정형, varchar(크기) -> :가변형
		=> 문자는 크기를 내가 지정할 수 있음
		고정형 : 메모리에 무조건 내가 준 크기를 고정한다 ( 크기 20 하고 글씨를 2개만 써도 20만큼의 크기를 차지함)
		가변형 : 최대 20글자까지 저장가능하고 실제 데이터에 따라서 메모리크기가 변경된다
		가변형은 데이터가 들어갈때 메모리에 크기가 픽스가 되고 고정형은 처음에 크기 지정한 순간부터 메모리에 크기가 고정된다
		고정형은 크기를 딱 고정해서 쓸때 사용한다(그래서 해당 자릿수 맞춰서 사용해야한다)
		ex desc employee; 해서 보면 emp_id 는 char(5) 라서 아이디들이 다 5글자씩 맞춰서 사용한거고
		emp_name 은 varchar라서 사람이름은 5글자도 될수있으니까 고정하면 안대서 varchar 쓴거임
	3. 텍스트 : text - 긴 문장을 저장하는 데이터타입
	4. blob 타입 : blob - 큰 바이너리 타입의 데이터를 저장할때 사용 (최대 2기가까지)
	5. 날짜 : date -년월일 만 저장, datetime- 년월일 시분초 까지 저장
		-> 데이터 타입에 맞는 날짜 함수를 사용하여야한다 (datetime 쓰고 curdate쓰면 시분초밖에 안나옴용)
 */               
desc employee;
-- db 에서는 스네이크타입만 사용가능(카멜케이스 노노)
select * from employee;

-- emp 테이블 생성
-- 컬럼리스트 : emp_id 고정형(4), emp_name 가변형(10), hire_date 날짜/시간, salary 정수(5)
create table emp (
	emp_id char(4), 
    emp_name varchar(10),
    hire_date datetime,
    salary int(5)
);
show tables;
desc emp;

desc department;
-- dept 테이블 생성 : dept_id 고정형3, dept_name 가변형10, loc 가변형20
create table dept(
	dept_id char(3), dept_name varchar(10), loc varchar(20)
);
show tables;
desc dept;
-- emp, dept 테이블의 모든 데이터 조회
select * from emp;
select * from dept;

/*
	2. 테이블 생성(복제) : create table as select => cas 라고 줄여서 부른다
    -- 물리적으로 메모리에 생성이된다.
    -- 복제할때 기본key,참조key 등의 제약사항은 복제가 안된다, 따라서 복제 후 alter table 명령어로 제약사항을 추가해야한다
    형식 : create table 생성(복제)할테이블명 
			as 
			select 컬럼리스트 from 테이블명 (where) ;
	명령어 쓸때 select 로 값 잘 가져온느지 확인하고 create 하면댐
*/
-- 정보시스템 부서의 사원들만 별도로 테이블 복제하기
	-- 테이블명 : employee_sys
create table employee_sys 
	as
    select * from employee where dept_id='SYS';

show tables;
desc employee_sys;
select * from employee_sys;
desc employee;

-- 퇴직한 사원들을 복제하여 employee_retire 테이블로 관리
create table employee_retire
as
select * from employee where retire_date is not null;
show tables;
select * from employee_retire;

-- 2015년,2017년 입사자들을 복제하여 관리
	-- 테이블명 : employee_2015_2017
create table employee_2015_2017
as
select * from employee 
	where left(hire_date,4)= '2015'or left(hire_date,4)= '2017';
select * from employee_2015_2017;

/*
	3. 테이블 제거 : drop
		형식 : drop table 제거할테이블명;
        명령즉시 메모리에서 바로 테이블을 삭제하므로 주의! -> 복원불가
*/
show tables;
-- employee_2015_2017 테이블 제거
drop table employee_2015_2017;
-- drop 하면 메모리에서 실제로 삭제가 된다 !!! 그래서 mysql-command 들어가서 봐도 삭제된걸 확인할수잇다
-- DDL 명령어는 바로바로 적용이된다.

-- employee_retire 테이블 제거
drop table employee_retire;
show tables;

-- 재직중인 사원테이블 복제 employee_working
create table employee_working
	as
	select * from employee where retire_date is null;
show tables;
select * from employee_working;

/*  제거 = 복구불가능, 삭제 = 가능한듯
	 4. 테이블의 데이터만 제거 : truncate
		형식 : truncate table 데이터를가진테이블명;
      명령즉시 메모리에서 바로 테이블의 데이터 모두 제거하므로 주의!
*/
show tables;
select * from employee_working;
-- employee_working 테이블의 모든 데이터(row)를 제거하기
truncate table employee_working;
show tables;
select * from employee_working;

/* 
	 5. 테이블 구조 변경 : alter
		형식 : alter table 변경할테이블명 
			1) 컬럼 추가 : add column 추가할컬럼명 데이터타입(크기) 제약사항;
			2) 컬럼명 변경 : modify column 변경할컬럼명 데이터타입(크기) 제약사항;
			3) 컬럼 삭제 : drop column 삭제할컬럼명; => 삭제할때는 한번에 하나의 컬럼만 삭제된다 , , 쓴다고 여려개삭제안댐
*/
show tables;
select * from employee_working;
-- 테이블안에 데이터가 없는경우에는 컬럼추가,컬럼명변경,컬럼삭제 가 자유롭다
-- 근데 데이터가 잇다면 emp_id 가 char(5) 인데 내가 맘대로 char(2) 이렇게 바꿀수 없다!
-- 모든 데이터베이스에서는 데이터의 크기를 늘리는것은 허용되지만 줄이는것은 안된다 !!!!!
desc employee_working;
-- employee_working 테이블에 bonus 컬럼 추가 , 데이터타입 : 정수형 4자리 , null 값 허용 
alter table employee_working 
	add column bonus int(4);
desc employee_working;
-- employee_working 테이블에 dname 컬럼 추가 , 데이터타입 : 가변형 10 null 값 허용
alter table employee_working
	add column dname varchar(10);
desc employee_working;
-- employee_working 테이블의 email컬럼의 크기를 30으로 수정
alter table employee_working 
	modify column email varchar(30);
desc employee_working;
-- employee_working 테이블의 salary 컬럼을 실수타입(더블)로 수정
alter table employee_working
	modify column salary double;
desc employee_working;

-- employee_sys 테이블의 email 컬럼의 크기를 가변형10 으로 수정
alter table employee_sys
	modify column email varchar(10);
	-- > 크기를 줄였을때 1개의 데이터가 유실될가능성이 있으므로 에러가 발생하였다
desc employee_sys;
select count(*) from employee_sys;

-- employee_working 테이블의 bonus,dname 컬럼 삭제
alter table employee_working
	drop column bonus;
desc employee_working;
alter table employee_working
	drop column dname;
-- employee_working 테이블 제거
drop table employee_working;
show tables;

-- employee 테이블에서 hrd 부서의 속한 사원들의 사원아이디,사원명,입사일,연봉,보너스(연봉*0.1) 정보를 
-- 별칭을 사용하여 조회한 후 , employee_hrd 이름으로 복제하라
create table employee_hrd
as
select emp_id 사원아이디,emp_name 사원명,hire_date 입사일,salary 연봉,salary*0.1 보너스 
	from employee
    where dept_id='HRD';
show tables;
select * from employee_hrd;

/*
	DML : insert(C), select(R), update(U), delete(D)
    
    1. insert : 데이터 추가
    형식 : insert into 테이블명(컬럼리스트)
				values(추가되는데이터리스트 ...);
		컬럼리스트랑 추가되는데이터의 순서는 맞춰야 한다!! ( 아이디컬럼에 이름적고 그러면 안댕)
        	-- 컬럼리스트 생략 시 해당테이블 생성 시의 컬럼의 순서대로 데이터입력이 진행된다 (desc 로 검색해서 나오는게 생성할때의 순서임)

*/
show tables;
desc emp;
select * from emp;
-- emp 테이블에 데이터 추가 S001,사필안,현재날짜,1000
insert into emp(emp_id,emp_name,hire_date,salary)
	values('S001','사필안',curdate(),1000);
select * from emp;
-- emp 테이블에 데이터 추가 S002,홍길동,현재날짜,2000
insert into emp(emp_id,emp_name,hire_date,salary)
	values('S002','홍길동',now(),2000);
select * from emp;
-- emp 테이블에 데이터 추가 S003,범무구,현재날짜,3000
	-- 컬럼리스트 생략하여 진행
desc emp;
insert into emp values('S003','범무구',now(),3000);
select * from emp;
-- emp 테이블에 데이터 추가 S004,이삐란,현재날짜(now,sysdate),연봉협상x
desc emp; -- 로 salary 에 null 이 들어갈수잇는지 확인한다
insert into emp(emp_id,emp_name,hire_date,salary) 
	values('S004','이삐란',now(),null);
select * from emp;

-- employee 테이블의 정보시스템부서의 사원들이며 2016년 이전에 입사한 사원들 정보 중
-- 사원아이디,사원명,입사일,부서아이디,연봉을 복제하여,
-- employee_sys 테이블을 생성하라
create table employee_sys
as
select emp_id 사원아이디,emp_name 사원명,hire_date 입사일,dept_id 부서아이디,salary 연봉
	from employee where dept_id='SYS' and left(hire_date,4)<'2016';
show tables;
select * from employee_sys;
-- employee_sys 테이블에 2016년도 이후에 입사한 정보시스템 부서 사원을 추가 하라(서브쿼리를 이용한 데이터추가)
desc employee_sys;
insert into employee_sys(사원아이디,사원명,입사일,부서아이디,연봉)
select emp_id ,emp_name ,hire_date ,dept_id ,salary 
	from employee 
    where dept_id='SYS' and left(hire_date,4)>='2016';
select * from employee_sys;

-- dept 테이블 구조 확인 및 데이터 추가
	-- sys, 정보시스템, 서울
    -- mkt , 마케팅, 뉴욕
    -- hrd, 인사 ,부산  
    -- acc, 회계, 정해지지않음
desc dept;
insert into dept(dept_id,dept_name,loc)
	values('sys', '정보시스템', '서울');
select * from dept;
insert into dept(dept_id,dept_name,loc)
	values('mkt' , '마케팅', '뉴욕');
insert into dept(dept_id,dept_name,loc)
	values('hrd', '인사' ,'부산');
insert into dept(dept_id,dept_name,loc)
	values('acc', '회계', null);
select * from dept;

-- insert into dept(dept_id,dept_name)
-- 	values('sal', '세일', '대구');
-- => 에러발생 : 컬럼리스트와 values 값이 1:1로 매칭이 안되서 에러발생
insert into dept(loc,dept_id,dept_name)
	values('sales', '세일', '대구');
-- => 이거는 1:1로 매칭안하고 마구잡이고 데이터 써서 이상하게 데이터가들어가게되었다

/*
	제약사항(= constraint) : 데이터 저장 시 데이터 무결성의 원칙을 적용하기 위한 규칙이다 
		1. unique : 유니크(중복방지) 제약사항 
        2. not null : null 값을 허용하지 않는 제약사항
		3. primary key(=기본키) : unique + not null 제약을 지정 => 중복도 안되고 null값도 허용하지 않는다
        4. foreign key(=참조키) : 타 테이블을 참조하기 위한 제약사항 => 데이터타입에 표시될때는 multiple 로 나온다
		5. default('지정할디폴트값') : 디폴트로 저장되는 데이터를 정의하는 제약사항
        6. check(체크할컬럼명>=조건) : check 제약
        
	사용형식 : 1) create table + 제약사항
			 2) alter table + 제약사항
*/
-- db의 스키마구조를 통해 각 테이블의 제약사항을 확인하는 명령어
-- select * from information_schema.table_constraints;
	-- 이떄 not null 의 제약사항은 확인되지 않는다

select * from information_schema.table_constraints
	where table_name = 'employee';
desc employee;
show tables;
desc emp;
-- emp_const 테이블 생성
	-- emp_id -기본키제약, emp_name -유니크제약, hire_date, salary -not null 제약
create table emp_const(
	emp_id char(4) primary key,
    emp_name varchar(10) unique,
    hire_date datetime,
    salary int not null
);
show tables;
desc emp_const;
select * from information_schema.table_constraints
	where table_name = 'emp_const';
-- emp_const 에 데이터 추가
-- 	S001, 홍길동,현재날짜,1000
insert into emp_const values('S001','홍길동',now(),1000);
select * from emp_const;

-- insert into emp_const values('S001','이삐묵',now(),1000); 
-- > Error Code: 1062. Duplicate entry 'S001' for key 'emp_const.PRIMARY'
-- emp_id 는 primary key 라서 무결성 원칙에 위배가 되서 에러가 발생하였다
-- => primary key 로 설정되어있는 컬럼은 입력폼에서 아이디중복체크 기능을 통해 확인이 가능하다
-- 해결방법 : null 또는 중복된 값을 제외하고 입력
insert into emp_const values('S002','이삐묵',now(),1000); 
select * from emp_const;

-- insert into emp_const values(null,'이춘배',now(),1000); 
-- >Error Code: 1048. Column 'emp_id' cannot be null
-- emp_id 는 primary key 라서 null 값이 들어갈 수 없다
-- 해결방법 : null 또는 중복된 값을 제외하고 입력
insert into emp_const values('S003','이춘배',now(),1000); 
select * from emp_const;

-- insert into emp_const values('S004','이춘배',now(),1000); 
-- Error Code: 1062. Duplicate entry '이춘배' for key 'emp_const.emp_name'	
-- 이춘배의 이름이 중복되어서 에러가 발생하였다
insert into emp_const values('S004','이나비',now(),1000); 
select * from emp_const;

-- emp_name 에 null 값 추가
desc emp_const;
insert into emp_const values('S005',null,now(),2000); 
select * from emp_const;
-- emp_name 에 null 값 하나 더 추가
insert into emp_const values('S006',null,now(),2000); 
select * from emp_const; -- 오라클에서는 null 이 두개이상이면 에러가 발생한다 (null 중복)

-- insert into emp_const values('S007','무구삐',now(),null); 
-- > Error Code: 1048. Column 'salary' cannot be null	
-- salary 에는 not null 제약사항이 있기때문에 null 을 넣어서 에러 발생
insert into emp_const values('S007','무구삐',now(),9000); 
select * from emp_const;

select * from information_schema.table_constraints
	where table_name = 'emp_const';

-- emp_const2 테이블 생성
-- emp_id =primary key , emp_name =unique;
create table emp_const2(
	emp_id char(4), 
    emp_name varchar(10),
	constraint pk_emp_id primary key(emp_id),
	constraint uk_emp_name unique(emp_name)
);
/*select * from information_schema.table_constraints; 를 했을때 
constraint_name 이 primary, 이렇게 나오면 이게 어떤 컬럼리스트인지 모르니까
	형식 : constraint 설정할constraint이름 제약사항(해당컬럼명)  이렇게 하면 해당 설정한이름으로 출력이된다
    ( 근데 primary 는 이름바꿔도 그대로 primary 로 나옴, 다른애들은 다 잘나온다)
*/
desc emp_const2;
select * from information_schema.table_constraints
	where table_name = 'emp_const2';

-- 제약사항 테스트를 위한 테이블 생성 : const_test
-- 컬럼명: UID char4 기본키제약 , name varchar10 not null, 
--  	age int null허용, addr varchar30 null 허용
show databases;
use hrdb2019;
select database();
show tables;

create table const_test(
	UID char(4) primary key,
    NAME varchar(10) not null,
    AGE int ,
    ADDR varchar(30)
);
desc const_test;
select *
	from information_schema.table_constraints
    where table_name = 'const_test';

-- const_test테이블에 dept_id 컬럼을 추가 => char(3) 디폴트제약, 기본값은 'HRD' 
alter table const_test
	add column DEPT_ID char(3) default('HRD'); -- insert 할때 DEPT_ID 컬럼에 값을 안넣으면 기본값으로 hrd 가 들어간다는거임
desc const_test;

-- S001, 홍길동, 20 , 서울시 , SYS부서 insert 작업을 해라
insert into const_test 
	values('S001', '홍길동', 20 , '서울시' , 'SYS');
select * from const_test;
-- S002, 범무구, 20 , 중국 , HRD부서 insert 작업을 해라(HRD 는 디폴트로 줘서 입력안해도 알아서 들어감 근데 제약사항에 not null이면 에러뜬다
insert into const_test(UID,NAME,AGE,ADDR)
	values('S003', '범무구', 20 , '중국');
-- const_test에 salary컬럼을 추가 : int : 연봉이 3000이상인 숫자만 등록되게 체크=>check제약
alter table const_test
	add column salary int check(salary>=3000);
    -- 기존에 입력된 애들이 3명잇자나 그래서 salary에 not null 안쓴거임
    -- not null 쓰게되면 기존에 작성된애들이 에러가 뜬다.
    -- 따라서 기존에 데이터가 있고 새로운 컬럼을 추가할때는 우선 null 허용상태로 만들고 나중에 수정을 해야된다고한다
desc const_test;
select * from const_test;
-- S004, 이삐묵, 5 , 서울시 , HRD부서,3000  insert 작업을 해라
insert into const_test(UID,NAME,AGE,ADDR,SALARY)
	values('S004', '이삐묵', 5 , '서울시' , 3000);
select * from const_test;

-- 상품테이블 생성 product_test
-- 컬럼 : PID INT PRIMARY KEY, PNAME VARCHAR(30) NOT NULL, PRICE INT NULL허용, COMPANY VARCHAR(20) NULL 허용
-- !!!!!!!!auto_increment 사용 => 기본키에 적용하라 ( 오라클에서는 sequence 이다) !!!!!!!!!!!!!!
create table product_test(
PID int primary key auto_increment,  -- auto_increment : 자동으로 번호 생성(정수로 번호가 생성된다) ,따라서 데이터타입도 정수로 설정해야한다
PNAME varchar(30) not null,
PRICE int,
COMPANY varchar(20)
);
show tables;
desc product_test;
-- PID는 오토로 넣어서 insert할때 생략이 가능하다
-- 키보드, 100, 삼성 데이터를 insert 하라
insert into product_test(PNAME,PRICE,COMPANY)
	values('모니터',1000,'LG');
select * from product_test;

/*
	2. update(U) : 데이터 수정
    형식 : update 테이블명 set 컬럼명 ='수정할데이터',... 
			where 조건절;
		where 에는 수정하려는데이터 조건을 지정해야한다(조건지정안하면 해당컬럼명에있는모든데이터에 데이터수정내용이 반영된다)
*/
select * from const_test;
-- const_test 테이블의 홍길동 사원의 연봉을 업데이트 하라 3500
update const_test 
	set salary = 3500
    where uid='S001'; -- 홍길동을 선택할때 유니크한 값으로 조건절을 지정해야한다 이름으로 하면 안댕(동명이인)
select * from const_test;

-- 사필안의 연봉을 5000 으로 업데이트 진행
update const_test
	set salary = 5000
    where uid='S002';
select * from const_test;

show tables;
-- employee 테이블을 복제하여 cp_employee 테이블을 생성하라
-- cp_employee 에 제약사항추가
create table cp_employee
	as
	select * from employee;
show tables;
select * from cp_employee;
desc cp_employee;
desc employee;
-- 복제한 테이블의 emp_id 컬럼에 기본키제약 추가 ( 추가하기전에 해당컬럼에 빈값이나, 중복값이 있는지 확인을 해야한다)
alter table cp_employee 
   
	add constraint pk_emp_id primary key(emp_id);
desc cp_employee;
select * from information_schema.table_constraints
	where table_name ='cp_employee';

-- cp_employee phone,email 에 유니크제약추가
alter table cp_employee
	add constraint uk_phone unique(phone);
alter table cp_employee
	add constraint uk_email unique(email);
desc cp_employee;

-- 제약 삭제
-- cp_employee 테이블의 폰에 추가된 제약사항 삭제 (제약명으로 삭제하면된다)
desc cp_employee;
select * from information_schema.table_constraints
	where table_name ='cp_employee';
alter table cp_employee
	drop constraint uk_phone;
desc cp_employee;

--   cp_employeesys인 부서아이디를 '정보' 로 수정
update cp_employee
	set dept_id='정보'
	where dept_id = 'SYS';
	
--  cp_employee2016년도에 입사한 사원들의 입사일 -> 현재날짜로 수정
-- desc 로 데이터타입 확인하고 date 면 curdate 로 하고 datetime 이면 now 나 sysdate를 사용한다
update cp_employee
	set hire_date = curdate()
    where left(hire_date,4) = '2016';

-- safe update mode 설정변경  해제=0 설정=1
set sql_safe_updates = 0 ;

select * from cp_employee;

--  cp_employee강우동 사원의 영어이름을 kang 로 수정, 입사일을 현재 날짜로 수정, 부서는 sys 로 수정
update cp_employee
	set eng_name = 'kang', hire_date = curdate(), dept_id = 'SYS'
    where emp_name = '강우동';
select * from cp_employee;

/*
	3. delete : 데이터 한줄 싹 삭제
	형식 : delete from 테이블명 where 조건절 ;
	- 트랜잭션 관리법에 따라 삭제된 데이터를 복원할 수 있다 (auto commit 상태에서는 불가능하다)
*/
commit;   -- 현재까지 진행한 모든 작업을 db 에 반영함
-- 이 밑에부터는 새로 시작함
select * from cp_employee;
--  cp_employee강우동 사원 삭제
delete from cp_employee 
	where emp_id = 'S0003';

use hrdb2019;
select database();
select * from cp_employee;

--  cp_employee김삼순 삭제
commit;
delete from cp_employee
	where emp_id='S0004';
rollback;  -- 롤백은 commit 한 부분 밑에서부터 롤백치기 전까지의 내용을 롤백한다

-- 프로그램 개발을 통해 실시간 접속시에는 auto commit 으로 실행됨 --
-- 

show databases;
use hrdb2019;
select database();
select * from cp_employee;
--  cp_employee연봉이 7000 이상인 사원 삭제
delete from cp_employee where salary>=7000;
set sql_safe_updates = 0;
select * from cp_employee;

-- cp_employee  정보시스템부서 직원들 모두 삭제
delete from cp_employee
	where dept_id = '정보';
select count(*) from cp_employee where dept_id = '정보';
--  cp_employee 2017년 이후 입사자들 모두 삭제 (터미널이용)
 select count(*) from cp_employee where left(hire_date,4)>'2017';

show tables;

/*
	1/6
	하나 이상의 테이블 생성 및 연결, 조회
    생성 : create table
    연결 : foreign key(참조키) 제약 추가
    조회(select) : join, subquery
    
    - 데이터베이스의 테이블 설계과정 : 데이터베이스 모델링
		-> 데이터 정규화 ->  이 과정을 통해 나오는 결과물 = ERD(entity relationship diagram)
    
    테이블을 따로따로 만들고 연결이 필요할때 참조키를 사용한다
*/
show databases;
use hrdb2019;
select database();
show tables;

-- ERD 확인 하는 방법 : 메뉴 - 데이터베이스 - reverse engineering
-- 정규화 : 데이터베이스 저장 효율성을 높이기 위한 방식 ( 예) 데이터 중복배제, 테이블 분리작업...
-- 반정규화 : 예) 분리된 테이블을 하나로 합치는 방식
-- erd 만들면 노란키가 기본키 이다

-- 예 ) KK전자의 인사관리시스템 : 사원테이블 생성  => 정규화 진행
-- 사원테이블의 데이터 : 사원아이디(kid, primary key), 사원명 , 주소 , 입사일 , 연봉, 부서번호 ,부서명, 부서위치 
create table KK_department(
dept_id char(3) primary key, dept_name varchar(10) not null, loc varchar(30)
);
show tables;
desc KK_department;

insert into KK_department values('ACC','회계관리','서울시 강남구');
select * from KK_department;

create table KK_employee(
kid int primary key auto_increment , kname varchar(10) not null,
address varchar(30) , hire_date date, salary int , dept_id char(3) ,
constraint FK_KK_employee foreign key(dept_id) references KK_department(dept_id)
) ;
	-- constraint 한거는 얘 cosntraint_name 바꾸려고 쓴거임
	-- foreign key는 기본키와 컬럼명은 달라도되는데 데이터타입은 똑같아야한다 references에 참조할 기본키의테이블명(참조할컬럼명) 을 넣어야한다
	-- foreign key(해당테이블에서 참조키를 사용할 컬럼명)
desc KK_employee;
select * from information_schema.table_constraints
	where table_name like 'KK%';
select * from KK_employee;

insert into KK_employee(kname,address,hire_date,salary,dept_id) 
-- 참조하는 dept_id 는 부서테이블에있는 데이터값만 넣을수있다('ABC' 이런거 내맘대로 넣으면안댕 먼저 부서테이블에 추가하고 나서 사원테이블에 넣어야한다)
	values('스미스','뉴욕','2019-01-01',9000,'HRD');

/*
	학사관리 시스템 설계
    1. 과목테이블 subject
    - sid(과목번호)- 기본키 자동생성, sname(과목명)- 널허용안함, sdate(과목등록일)- 년월일시분초
    
    2. 학생테이블 student
    - 반드시 하나이상의 과목을 수강해야한다
    - stid(학생번호)- 기본키 자동생성, sname(학생명)- 널허용안함, gender(성별)- 문자1자 널허용안함,
    - sid(과목번호),stdate(등록일)- 년월일시분초
    
    3. 교수테이블 professor
    - 교수테이블은 반드시 하나이상의 과목을 강의해야한다
    - pid(교수아이디)- 기본키 자동생성, pname(교수명)- 널허용안함, sid(과목아이디), pdate(등록일자)- 년월일시분초
*/
create table subject(
sid int primary key auto_increment, sname varchar(20), sdate datetime
);
desc subject;

create table student(
stid int primary key auto_increment ,sname varchar(10) not null,
gender char(1) not null ,sid int , stdate datetime,
foreign key(sid) references subject(sid)
);
desc student;

create table professor(
pid int primary key auto_increment, pname varchar(10) not null, sid int, pdate datetime,
foreign key(sid) references subject(sid)
);
desc professor;

-- 과목테이블에 데이터 추가
insert into subject(sname,sdate) values('HTML',now());
insert into subject(sname,sdate) values('CSS',now());
insert into subject(sname,sdate) values('JavaScript',now());
select * from subject;

-- 학생 데이터 추가
insert into student(sname,gender,sid,stdate) values('이삐란','M',1,now());
insert into student(sname,gender,sid,stdate) values('범무구','M',2,now());
insert into student(sname,gender,sid,stdate) values('믿어핑','M',3,now());
select * from student;

-- 교수데이터 추가
insert into professor(pname,sid,pdate) values('악교수',2,sysdate());
insert into professor(pname,sid,pdate) values('멋교수',1,sysdate());
insert into professor(pname,sid,pdate) values('핑교수',3,sysdate());
select * from professor;

-- html 과목 조회
select * from subject where sname = 'HTML';

/*
	join : 두 개 이상의 테이블을 연동(테이블의 갯수 상관없음 100개도됨)
		- 두 개 이상의 테이블을 조합하여 집합
        1. cross(catesian) join(=합집합) : 두 개의 테이블이 독립적으로 생성된 경우, join연결고리가 없는경우에 사용
			- ex> professor & student =>결과값: professor(3행) * student(4행) =12행 으로 결과가 나오게 된다
            - => 얘는 되도록 안쓰는게 좋다
            - 형식 : select 컬럼리스트 from 테이블명1 (as 별칭), 테이블명2 ,... (별칭은 생략가능) where 조건절
			- 하나의 db 안에 있으면 다 join 이 가능하다
            -  오라클에서 catesian 조인이라고하고 ansi 에서 cross 조인이라고한다
		2. inner(equi) join(=교집합) : 두 개의 테이블이 join 연결고리를 통해 연동되어 있을때 사용  !!!!!!!!!!!!!!!!!!!!!!!!!
			- 형식 : select 컬럼리스트 from 테이블명1 (as 별칭), 테이블명2 ,... (별칭은 생략가능) 
						where 테이블명1.조인컬럼 = 테이블2.조인컬럼
							and 기타 추가적인 조건절
                            (조인컬럼은 기본키,참조키 컬럼 말하는거임) , and 는 있어도되고 없어도됨
                            조인컬럼 기준으로 오름차순정렬이 자동으로 된다
                            조인컬럼의 데이터가 동일한애들만 선택해서 조인한다
                            오라클에서는 equi 조인 이라고 한다
                            ansi 에서는 innner 조인이다
    subquery : 
*/
 -- 교수테이블과 학생테이블의 cross join
 select * from professor, student order by pname;

select pid,pname,sid,sname,gender,stdate from professor,student;
-- 이케하면 에러뜸 왜냐면 sid 는 교수,학생한테 둘다있기때문에 누구의 sid 를 가져올지모르기때문에 에러발생
select pid,pname,p.sid,sname,gender,stdate from professor p,student s; -- 별칭사용
-- 따라서 해당테이블.컬럼명 으로 선택하면 된다 => professor.sid

-- professor,student,department 테이블의 모든데이터를 조회하라
-- 맨처음할일 : ERD 확인하기, 공통된 부분이 없으니 그냥 크로스 조인을 한다
select count(*) from professor; -- 3
select count(*) from student; -- 3
select count(*) from department;  -- 7
select count(*) from professor,student,department;  -- 63   오라클방식  ( 오라클방식으로 join 많이한다)
select count(*) from professor 
			cross join student
			cross join department;  -- ANSI SQL 방식(SEQUL::MS-SQL) 이게 엔씨 임.. nc인줄
            
-- inner join 을 이용해 subject & professor 테이블을 조인하라
select * from subject s, professor p where s.sid = p.sid ;          
            
-- html 과목을 강의하는 모든 교수 조회
select * from subject, professor where subject.sid = professor.sid and sname='HTML';
-- ansi sql 방식으로 작성
select * from subject s inner join professor p
			on s.sid = p.sid 
            where sname='HTML';
            
 -- 멋교수가 강의하는 과목아이디, 과목명, 교수아이디, 교수명, 교수등록일을 조회하라 (오라클, 앤씨 방식 2가지 다 진행)
 select s.sid,s.sname,p.pid,p.pname,p.pdate 
	from subject s,professor p 
    where s.sid = p.sid and p.pname='멋교수'; -- 그냥 pname 이라고 쓰면 명확하지않을수있으니 p.pname 이렇게 적어도됑 걍 pname 이케 적어도되긴해
select s.sid,sname,pid,pname,pdate 
	from subject s inner join professor p on s.sid=p.sid 
    where p.pname='멋교수';
            
-- html 과목을 수강하는 모든 학생 조회 ( 오라클, 앤씨 방법 둘 다 사용해서 조회)
select * 
	from subject su, student st 
	where su.sid = st.sid and su.sname='HTML';
select * 
	from subject inner join student on subject.sid = student.sid 
	where subject.sname='HTML';

-- html 과목을 수강하는 모든학생과 강의하는 모든 교수 조회 !!!!
	-- join은 두개 테이블 관계에서만 사용임 
	-- 그래서 테이블 3개 할때는
	-- 교수 & 과목 1개조인하고 학생 & 과목 1개조인한다 / 교수 & 학생 하면 cross join 이라 안댐!!!
select * 
	from subject su , professor p , student st
    where su.sid = p.sid and su.sid = st.sid and su.sname='HTML';
-- 내가 쓴 순서대로 조인 결과 나오는거양 subject랑 professor 먼저 만들고 그뒤에 student 꺼 조인하는거임

select *
	from subject su inner join professor p inner join student st
		on su.sid=p.sid and su.sid=st.sid where su.sname='HTML';

-- employee , department, vacation, unit 의 테이블 erd 를 참조하여
-- 모든 사원들의 사원번호,사원명,성별,부서명(dept_name),입사일 을 조회하라
	-- 사원번호 기준으로 오름차순을 하라
select emp_id, emp_name, gender, dept_name, hire_date
from department, employee 
	where department.dept_id = employee.dept_id
    order by emp_id;

select emp_id, emp_name, gender, dept_name, hire_date
	from employee inner join department 
	on employee.dept_id = department.dept_id
    order by emp_id;

-- 영업 부서에 속한 사원들의 사원번호,사원명,입사일,연봉,부서명을 조회
select emp_id,emp_name,hire_date,salary,dept_name
	from employee e , department d where e.dept_id = d.dept_id
    and dept_name='영업';
    
-- 인사과에 속한 사원들중 휴가를 사용한 사원들의 리스트를 모두 조회
select * from employee,vacation,department
	where employee.emp_id = vacation.emp_id 
    and employee.dept_id = department.dept_id 
    and dept_name='인사';

/*
	1/7 1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

-- 휴가사용이유가 두통 인 사원들 중에
-- 영업부서인 사원의 사원명,폰번호,부서명,휴가사용이유,소속본부(유닛) 조회
	-- 부서명 사원정보 휴가정보 유닛 다 조인하기
select e.emp_name, phone,dept_name,reason,unit_name
	from department d , employee e , unit u , vacation v 
    where d.unit_id = u.unit_id and e.dept_id = d.dept_id and e.emp_id = v.emp_id
		and reason = '두통' and dept_name = '영업';

select e.emp_name, phone,dept_name,reason,unit_name
	from department d  inner join employee e inner join unit u inner join vacation v
        on  d.unit_id = u.unit_id and e.dept_id = d.dept_id and e.emp_id = v.emp_id
			where reason = '두통' and dept_name = '영업';

-- 2014년도부터 2015년도까지 입사한 사원들 중에서 퇴사하지않은 사원들의
	-- 사원아이디,사원명,부서명,입사일,소속본부를 조회
	-- 소속본부기준으로 오름차순 진행
select e.emp_id, e.emp_name, d.dept_name, e.hire_date, unit_name
	from employee e,department d,unit u
    where e.dept_id = d.dept_id and d.unit_id = u.unit_id
		and retire_date is null and left(hire_date,4) between '2014'and '2015' 
        order by unit_name;

/*
	join
    3. outer join : inner join(교집합) 한 결과 + 선택한(이너조인에 사용한) 테이블 중 교집합에서 제외된 데이터가 추가됨
		- 형식 : 
        - 선택한 테이블은 보통 참조키로 쓰이는 기본키가 있는 테이블이 많이 쓰인다 (subject, professor 중에서 subject 임 )
		- ansi 에서도 outer join 이라고 함 오라클도 똑같음

*/
select * from subject;
select * from professor;
-- 오라클에서 outer join 형식 : where 에서  null 이 추가되는 테이블에 (+) 을 적어주면 된다 ( 현재 지원 안됨 ansi 방식으로 사용하셈)
-- select * 
-- 	from subject s , professor p  
-- 	where s.sid = p.sid(+);

-- ansi sql 에서 outer join 형식 : 왼쪽 테이블을 기준으로 하느냐, 오른쪽테이블을 기준으로 하는지에 따라
-- left outer join, right outer join  으로 나뉜다
	-- left outer join :  왼쪽에 잇는 테이블의 데이터를 모두 출력하고 맵핑되는 데이터가 없으면 null 로 출력
	-- right outer join :  오른쪽에 잇는 테이블의 데이터를 모두 출력하고 맵핑되는 데이터가 없으면 null 로 출력

select * 
	from subject s left outer join professor p  
		on s.sid = p.sid;

select * 
	from subject s right outer join professor p  
		on s.sid = p.sid;

-- department unit 테이블을 참고하여
-- 모든 부서의 부서아이디, 본부아이디, 본부명 을 조회하라
select * from department;
select * from unit;

select dept_id, u.unit_id, unit_name 
	from department d left outer join unit u 
	on d.unit_id = u.unit_id
    order by unit_id;

-- 2017년부터 2018년까지 입사한 사원들의 사원명,입사일,연봉,부서명,소속본부명,소속본부아이디 을 조회하라
	-- 단 퇴사한 사원들은 제외하여 조회하라
    select * from employee where left(hire_date,4) between '2017'and '2018';
    -- unit_id 가 없는 '고소해'도 출력이 되어야한다
    
select *
	from 
		employee e inner join department d left outer join unit u
		 on d.unit_id = u.unit_id 
			-- left outer join은 위에 employee랑 department 조인한 결과에 아우터조인하는거임
    where left(hire_date,4) between '2017'and '2018'
		and retire_date is null;
-- ansi sql 에서는 inner join 이랑 outer join 같이 쓸때는 on 도 각각 조인에 맞게 별도로 적어줘야한다 한번에 적으면안댕!!!!!!!!!!!!

-- subject, student 테이블을 사용하여 학생들이 선택하지 않은 과목을 조회하라
select * 
	from subject su left outer join student st
	on su.sid = st.sid
    where st.sid is null;

/*
join
	4. self join : 하나의 테이블을 조인할떄 사용 -> 얘는 잘 안씀 sub query 를 더 많이 쓴당
		self join 대신 거의 sub query를 사용한다
        - 한 테이블에 pk 를 참조하는 컬럼이 존재하는 경우에 사용  
        형식: inner join 과 동일하다
*/
-- self join을 위한 테이블 복제
create table emp
as
select * from employee;
show tables;
select * from emp;
desc emp;

-- emp 테이블에 emp_id 컬럼에 기본키제약 추가
alter table emp 
	add constraint pk_emp_id primary key (emp_id);
-- emp 테이블에 mgr 컬럼을 추가 ( emp_id 를 self join 할 컬럼임 )
alter table emp
	add column mgr char(5);
-- sys 부서의 사원들의 매니저를 홍길동(S0001)으로 수정하라
update emp 
	set mgr='S0001' where dept_id = 'SYS';
    set sql_safe_updates = 0 ;
-- mkt 부서의 사원들의 매니저를 오감자(S0011)으로 수정하라
update emp
	set mgr='S0011' where dept_id = 'MKT';

-- hrd 부서의 사원들의 매니저를 정주고(S0019)으로 수정하라
update emp 
	set mgr='S0019' where dept_id = 'HRD';
select * from emp;

-- self join : emp 테이블의 emp_id(기본키) mgr(참조키) --------------self join 형식
	-- select * 
	-- 	from emp employee , emp manager
	-- 	where employee.emp_id = manager.mgr;
-- 홍길동 사원이 관리하는 모든 사원들의 사원번호,사원명,입사일,연봉,부서아이디,매니저번호, 부서명을 조회
select manager.emp_id, manager.emp_name,  manager.hire_date, manager.salary, dept_name,
	manager.dept_id,manager.mgr
	from emp employee , emp manager, department
	where employee.emp_id = manager.mgr and employee.dept_id = department.dept_id 
		and manager.mgr='S0001';
    
-- hrd 부서를 관리하는 매니저의 사원번호,사원명,입사일,연봉,부서아이디,매니저번호, 부서명을 조회
select distinct -- distinct 중복된데이터를 하나만 출력함
	employee.emp_id, 
	employee.emp_name, 
	employee.hire_date, 
    employee.salary,
	employee.dept_id, 
    employee.mgr, 
    d.dept_name
	from emp employee, emp manager, department d
    where employee.emp_id = manager.mgr 
		and  employee.dept_id = d.dept_id 
		and  manager.dept_id = 'HRD';

-- 매니저가 없는 사원의 사원번호,사원명,입사일,연봉,부서아이디를 조회
	-- self join을하면 inner join 이 진행되어서 매니저가 없는 사원이 제외된다 
    -- => 따라서 outer join으로 제외되는 데이터까지 조회한다
select  manager.emp_id
	from emp manager left outer join emp employee
		on employee.emp_id = manager.mgr 
	where manager.mgr is null;

-- 홍길동 사원이 관리하는 사원들의 사원명,연봉,매니저가 관리하는 사원번호,매니저가 관리하는 사원명,매니저사원아이디 조회하라
select e.emp_id, e.emp_name, m.salary, m.mgr, m.emp_name
	from emp e, emp m -- e:매니저 사원 테이블 m:매니저가 관리하는 사원 테이블
	where e.emp_id = m.mgr
		and m.mgr='S0001';

/*
	sub query : 쿼리가 2개이상 만들어지는것
		- select 컬럼리스트 from 테이블명 where => 단일쿼리 또는 메인쿼리 라고 부른다
        < 서브쿼리 위치에 따른 명칭들 >
        - select 스칼라서브쿼리 from where => 컬럼명 자리에 서브쿼리가 들어가는것을 스칼라서브쿼리 라고 부른다 | 오라클에서는 사용불가능, 얘는 속도가 느려서 권장하지 않음
        - select from 인라인뷰 where  => 테이블명 자리에 서브쿼리가 들어가는것을 인라인뷰 라고 부른다
        - select from where 서브쿼리  => 조건절 자리에 서브쿼리가 들어가는것을 서브쿼리 라고 부른다 (보통 where 절에서 많이사용되기때문에 서브쿼리라고 부른다)
         
	<서브쿼리의 종류> - where 절에 사용되는 서브쿼리임
    1. 단일행 서브쿼리 :  
    2. 다중행 서브쿼리 : 	
        
	- 서브쿼리는 여러개 줄 수 있다
*/
-- 단일행 : 홍길동 사원이 속한 부서의 이름과 본부아이디를 조회 ( 서브쿼리 사용 )
	-- 조회에서 출력되는 애들이 메인 쿼리 이다 => department
    
	-- select dept_name, unit_id
	-- 	from department 
	--  where dept_id  = 홍길동사원이 속한 부서 ;
        
-- 홍길동사원이 속한 부서
-- select dept_id -- dept_id 로 department 와 employee 를 연결하니까 이걸 쓴거임
-- 	from employee 
--     where  emp_name = '홍길동';

select dept_name,unit_id
	from department
    where dept_id = (select dept_id from employee where  emp_name = '홍길동'); 

-- 서브쿼리를 실행했을떄 나오는결과가 단일행일때 단일행 서브쿼리 라고 한다(행이 1개)

-- 단일행서브쿼리 :  홍길동 사원이 사용한 휴가 내역을 조회
	-- 단, 2017~2018 년도의 휴가내역만 조회하라
select emp_id from employee where emp_id='S0001';
select *
	from vacation
    where emp_id = (select emp_id from employee where emp_id='S0001')
		and left(begin_date,4) between '2017' and '2018';
-- 위의 내용을 조인으로 바꿔서 조회하라
select vacation_id,e.emp_id, begin_date,end_date, reason, duration 
	from employee e ,vacation v
    where e.emp_id = v.emp_id 
		and emp_name ='홍길동' and left(begin_date,4) between '2017' and '2018';

-- 개발시에는 select의 컬럼리스트는 * 말고 컬럼명을 정확히 작성하는게 좋다 !!!

-- 제3본부에 속한 부서들을 모두 조회
select *
	from department
    where unit_id = (select unit_id from unit where unit_name='제3본부');

-- 제3본부에 속한 사원들을 모두 조회 ( ADV, MKT ) : 다중행
select * 
	from employee 
    where dept_id in (  -- 부서아이디가 2개이므로 다중행형식인 in 을 사용한다
				select dept_id 
					from department
					where unit_id = (select unit_id from unit where unit_name='제3본부')
    ) ;
		
-- 가장먼저 입사한 사원의 정보를 조회
select * 
	from employee 
    where hire_date = (select min(hire_date) from employee);

-- 급여가 가장 높은 사원의 정보 조회
select * 
	from employee
    where salary = (select max(salary) from employee);

-- 정보시스템 부서의 사원중에 휴가를 사용한 사원들을 조회
select * 
	from employee 	
	where dept_id = (select dept_id from department where dept_name ='정보시스템') 
		and emp_id in (select distinct emp_id from vacation);

-- 정보시스템 부서의 사원중에 휴가를 사용하지 않은 사원들을 조회 ( not 만 붙이면 댄당)
select * 
	from employee 	
	where dept_id = (select dept_id from department where dept_name ='정보시스템') 
		and emp_id not in (select distinct emp_id from vacation);

/*
	출력용 번호 생성 : row_number() over(order by 정렬할컬럼명)
		- select 의 컬럼리스트 자리에 사용되며, *와는 함께 사용이 불가능하다
        
        -이거 사용할때는 쿼리마지막에 order by 따로 또 안해도됨
        - 보통 번호는 맨앞에 나오니까 저거 함수도 컬럼리스트의 맨앞에 적으면 댐 (맨뒤에 적어도 상관없음)
*/
-- 정보시스템 부서 사원들의 사원명,사원아이디,입사일 조회
select row_number() over(order by emp_id) No,
	emp_id, emp_name, hire_date
	from employee
	where dept_id = (select dept_id from department where dept_name='정보시스템');

-- 모든 사원의 사원아이디,사원명,연봉,부서아이디를 조회( 출력행 포함 )
select 
	row_number() over(order by emp_id) No,
    emp_id,
    emp_name,
    salary,
    dept_id
from employee;

-- 인라인뷰 예제
-- 사원별 휴가사용 일수를 그룹핑하여, 사원아이디,사원명,입사일,연봉,휴가사용일수를 조회
	-- 휴가사용일수를 구하는 인라인뷰와 사원테이블을 조인하라
    -- 인라인뷰에는 반드시 별칭을 적어줘야 한다 !
    
select emp_id, sum(duration) vcount
	from vacation
    group by emp_id;
    
select row_number() over(order by vcount desc) no,
	e.emp_id, 
	e.emp_name, 
	e.hire_date, 
    concat(format(e.salary,0),'만원') salary, 
    v.vcount 휴가사용횟수
	from employee e,
		(select emp_id, sum(duration) vcount
			from vacation
			group by emp_id) v
	where e.emp_id = v.emp_id;
    
-- hrd 부서 사원들의 휴가 사용 일수와 사원아이디,사원명,부서아이디,부서명을 조회 ( 출력용 숫자도 조회)
    
    -- 1. hrd 부서의 사원중 휴가를 사용한 사원아이디와 휴가사용일수를 먼저 구한거임
    select emp_id,sum(duration) 
		from vacation 
        where emp_id in (select emp_id from employee where dept_id ='HRD')
        group by emp_id;
    
	-- 2. employee 와 1,번에서 구한 결과를 조인하여 사원 상세정보를 출력하라
    select row_number() over(order by emp_id) as no,
			e.emp_id, e.emp_name, e.dept_id,
            count
		from ( 
			select emp_id,sum(duration) count
				from vacation 
				where emp_id in ( select emp_id from employee where dept_id ='HRD')
				group by emp_id) as Vcount
		, employee e
        where e.emp_id = Vcount.emp_id;
        
	-- 1/8 -----------------------------------------------
-- [휴가를 사용한 사원정보만 출력] 사원별 휴가사용 일수를 그룹핑하여 
    -- 사원아이디, 사원명,입사일, 연봉, 휴가사용일수를 조회하라
    -- 1. 사원별 휴가사용 일수 그룹핑 작업을 수행하는 인라인뷰	
    select emp_id,sum(duration) Vcount
		from vacation
        group by emp_id ;

    -- 2. 인라인뷰와 사원정보테이블을 조인
      select row_number() over(order by Vcount) no, e.emp_id,emp_name,hire_date,salary,Vcount
		from employee e, 
				(select emp_id,sum(duration) Vcount
					from vacation
					group by emp_id) v
		where e.emp_id = v.emp_id;
    
-- [전체사원의 휴가일수 조회 :  휴가를 사용하지 않은 사원 + 휴가를 사용한 사원 ]
	-- 사원별 휴가결제횟수,휴가전체사용일수를 그룹핑하여
	-- 사원아이디,사원명,입사일,연봉,휴가결제횟수,휴가전체사용일수를 조회하라 (outer join 사용 )
	-- 단. 휴가를 사용하지 않은 사원의 휴가결제횟수,휴가전체사용일수는 0으로 할당하라
select emp_id, sum(duration) 휴가전체사용일수, count(emp_id) 휴가결제횟수
    from vacation
    group by emp_id;

select row_number() over(order by emp_id) no,
		e.emp_id,
		emp_name,
		hire_date,
		salary,
		ifnull(휴가전체사용일수,0) 휴가전체사용일수,
		ifnull(휴가결제횟수,0) 휴가결제횟수
	from employee e left outer join  -- 전체사원의 휴가일수니까 employee 가 전체 출력 되야함
						(select emp_id, sum(duration) 휴가전체사용일수, count(emp_id) 휴가결제횟수
							from vacation
							group by emp_id) v 
		on e.emp_id = v.emp_id;

-- 스칼라 서브쿼리 예제
-- hrd 부서의 사원의 사원아이디,사원명, 부서아이디, 부서명, 본부이름 조회
select 
		emp_id, 
		emp_name, 
		dept_id ,
		 (select dept_name 
			from department
			where dept_id ='HRD') dept_name,
		(select unit_name
			from unit
			where unit_id = (
					select unit_id
						from department
						where dept_id='HRD'
						) 
		)unit_id
	from employee 
    where dept_id = 'HRD';

-- 급여 순으로 사원들을 정렬 | 출력번호, 사원아이디, 사원명, 입사일, 부서아이디, 연봉을 조회
	-- ( 단 상위 5명만 출력하라 ) 

select no,emp_id, emp_name,hire_date,dept_id,salary				
	from (select row_number() over(order by salary desc) no,  
		emp_id, 
		emp_name,
		hire_date,
		dept_id,
		salary
		from employee) T1
	where no < 6 ;

-- 입사일이 가장 빠른 사원 10명의 사원아이디,사원명,부서아이디,입사일 조회
select row_number() over(order by hire_date desc) no, emp_id, emp_name, dept_id,hire_date
	from employee;

select * -- select 에 * 쓰면 서브쿼리에 있는 거 다 출력한다는거임
	from (select row_number() over(order by hire_date desc) no, emp_id, 
					emp_name, dept_id,hire_date
				from employee) t
	where no < 11 ;

-- 사원들의 급여합계가 가장 작은 부서의 사원들을 조회
select * 
	from employee
	where dept_id = (select dept_id
						from (select row_number() over(order by sum(salary)) no, 
								dept_id , sum(salary) sum
								from employee
								where salary is not null
								group by(dept_id))	 t
						where no <= 1);

select row_number() over(order by sum(salary)) no, dept_id , sum(salary) sum
	from employee
    where salary is not null
    group by(dept_id);


select dept_id
	from (select row_number() over(order by sum(salary)) no, dept_id , sum(salary) sum
			from employee
			where salary is not null
			group by(dept_id))	 t
    where no <= 1;
    
-- -------------------------------------------------------------
-- self join 을 서브쿼리로 변경해서 사용
-- 홍길동 사원이 관리하는 모든 사원들의 사원번호,사원명, 입사일, 급여 ,부서아이디, 부서명 조회
select row_number() over(order by emp_id) no,emp_id, emp_name, hire_date,salary, d.dept_id, dept_name, mgr
	from department d,(select emp_id, emp_name, hire_date, 
							salary, dept_id, mgr
							from emp 
							where mgr = (select emp_id 	
											from emp
											where emp_name = '홍길동')) e
	where d.dept_id = e.dept_id;

-- hrd 부서를 관리하는 매니저의 사원번호,사원명, 입사일, 급여 ,부서아이디, 부서명 조회
select  emp_id, emp_name, hire_date, salary, d.dept_id, dept_name, mgr
	from department d, (select emp_id, emp_name, hire_date, salary, dept_id, mgr
							from emp
							where emp_id = (select distinct mgr
												from emp
												where dept_id='HRD')) e
	where d.dept_id = e.dept_id;
;

-- 매니저가 없는 사원의 사원번호,사원명,입사일,연봉,부서아이디,부서명, 본부 조회 
-- 1. 방법  얘가 속도가 더 빠름( 집합ㅇ을 작게 만드는게 속도가 빨룸)
select emp_id,emp_name,hire_date,salary, d.dept_id, dept_name, u.unit_name,mgr  
	from department d , unit u , 
		(select emp_id,emp_name,hire_date,salary, dept_id,mgr 
									from emp 
									where mgr is null) e
	where d.unit_id = u.unit_id and  d.dept_id = e.dept_id ;
    
-- 2. 방법
select emp_id,emp_name,hire_date,salary, d.dept_id, dept_name, u.unit_name,mgr  
	from department d , unit u , emp e
	where d.unit_id = u.unit_id and  d.dept_id = e.dept_id
		and e.mgr is null;
        
	-- 근데 이거 고소해 는 안나오는뎅
	-- e outer join d inner join u 이케 해야 댈듯

/*
	쿼리 결과 합치기 : union, union all
    형식 : 쿼리1 union / union all 쿼리2
    주의사항 : 쿼리1과 쿼리2의 실행 결과 컬럼리스트가 동일해야 한다
    
    union all 은 실시간으로 데이터 꺼내올때는 적합하지는 않다 ( 그래도 쓸수는잇엉)
    union : 각각의 쿼리를 통해 나온 모든 결과를 중복제외하고 합친 후 출력 ( 중복허용x, 전체 데이터를 출력 )
    union all : 각각의 쿼리를 통해 나온 모든 결과를 중복상관 없이 합친 후 출력 
     예 ) 쿼리1 실행결과에 홍길동잇음 쿼리2 실행결과에도 홍길동잇음
		union all 을 하면 홍길동이 2번 나옴
        union 을 하면 중복제외하고 홍길동 1번 나옴
*/
-- HRD 부서의 사원아이디,사원명,부서아이디,연봉
-- SYS 부서의 사원아이디,사원명,부서아이디,연봉 실행결과를 합치기
select emp_id,emp_name,dept_id,salary
	from employee
    where dept_id = 'HRD'
union all
select emp_id,emp_name,dept_id,salary
	from employee
    where dept_id = 'SYS';

-- 영업과 정보시스템 부서로 조회
select emp_id,emp_name,dept_id,salary
	from employee
    where dept_id = (select dept_id
						from department
						where dept_name ='영업')
union all
select emp_id,emp_name,dept_id,salary
	from employee
    where dept_id = (select dept_id
						from department
						where dept_name= '정보시스템');

-- 2013~2016 년 사이에 입사한 사원과 ,sys 부서의 사원들의 사원아이디,사원명,부서아이디,폰번호, 연봉 조회(union 사용,중복제외)
select emp_id,emp_name,dept_id,phone,salary,hire_date
	from employee
    where left(hire_date,4) between '2013'and '2016'
union 
select emp_id,emp_name,dept_id,phone,salary,hire_date
	from employee
    where dept_id = 'SYS'
    order by hire_date;

-- 2013~2015연도별 부서들의 연봉합계가 가장 높은 부서만 조회  
select row_number() over(order by year) as no ,year, dept_id, salary
from (
	select  year, dept_id, salary
		from (select row_number() over(order by sum(salary) desc) no, 
						left(hire_date,4) as year,
						dept_id,
						sum(salary) salary
					from employee
					where left(hire_date,4) = '2013'
					group by year, dept_id) t
		where no = 1
	union
	select  year, dept_id, salary
		from (select row_number() over(order by sum(salary) desc) no, 
						left(hire_date,4) as year,
						dept_id,
						sum(salary) salary
					from employee
					where left(hire_date,4) = '2014'
					group by year, dept_id) t
		where no = 1
	union
	select  year, dept_id, salary
		from (select row_number() over(order by sum(salary) desc) no, 
						left(hire_date,4) as year,
						dept_id,
						sum(salary) salary
					from employee
					where left(hire_date,4) = '2015'
					group by year, dept_id) t
		where no = 1) t2;

/*
	view(뷰) : 논리적인 가상의 테이블
    - sql을 실행하여 생성되는 테이블
    - 형식 : create view 생성하는view의 이름 
				as 서브쿼리 / 쿼리
	
    - show 명령어는 물리적인 것을 보여준다 | 따라서 show view 는 불가능하다
	- 전체 view 를 확인 하는 법 
		select * from information_schema.views;
	- view 는 sql을 통해 생성되므로 information_schema라는 사전에 등록된다
    - 내가 만든 뷰는 select * from information_schema.views; 실행 후
		맨처음 sql 시작할때 선택한 데이터베이스의 이름으로 table_schema 컬럼에서 찾으면 된다
    - 얘 쓴다고 속도 빨라지는건 아님
    - 뷰 삭제 : drop view 삭제할view명 ;
    
*/ 
select * from information_schema.views;

-- employee, department, unit 테이블을 조인한 뷰를 생성
-- 뷰 이름 : view_emp_dept_unit	
create view view_emp_dept_unit
	as 
		select emp_id, emp_name, hire_date, d.dept_id, u.unit_id 	
			from employee e, department d , unit u
			where e.dept_id = d.dept_id and d.unit_id = u.unit_id
			order by e.emp_id;

select * from information_schema.views
	where table_schema = 'hrdb2019';

-- 이렇게 만든 뷰는 select 로 검색이 가능하다
select * from view_emp_dept_unit
	where dept_id = 'SYS';

drop view view_emp_dept_unit;

-- 2013~2015연도별 부서들의 연봉합계가 가장 높은 부서만 조회  (뷰 사용) 뷰이름:view_sum_salary
create view view_sum_salary
as
select row_number() over(order by year) as no ,year, dept_id, salary
from (
	select  year, dept_id, salary
		from (select row_number() over(order by sum(salary) desc) no, 
						left(hire_date,4) as year,
						dept_id,
						sum(salary) salary
					from employee
					where left(hire_date,4) = '2013'
					group by year, dept_id) t
		where no = 1
	union
	select  year, dept_id, salary
		from (select row_number() over(order by sum(salary) desc) no, 
						left(hire_date,4) as year,
						dept_id,
						sum(salary) salary
					from employee
					where left(hire_date,4) = '2014'
					group by year, dept_id) t
		where no = 1
	union
	select  year, dept_id, salary
		from (select row_number() over(order by sum(salary) desc) no, 
						left(hire_date,4) as year,
						dept_id,
						sum(salary) salary
					from employee
					where left(hire_date,4) = '2015'
					group by year, dept_id) t
		where no = 1) t2;

select * from information_schema.views
	where table_schema ='hrdb2019';

select no, concat(year,'년도') year, dept_id, concat(format(salary,0),'만원') salary
	from view_sum_salary;

-- 매니저에 따라 각각 관리하는 모든 사원들의 
-- 사원번호,사원명, 입사일, 급여 ,부서아이디, 부서명 조회하는 쿼리 생성후 뷰로 저장
-- view 이름 : view_emp_mgr
create view view_emp_mgr
	as
    select 
		e.emp_id mgr_id, e.emp_name mgr_name, 
			m.emp_id, m.emp_name, m.dept_id, dept_name
		from emp e, emp m, department d  -- e 매니저 정보 m 매니저가 관리하는 사원정보
		where e.emp_id = m.mgr and m.dept_id = d.dept_id
		order by e.emp_id;       
        
-- 홍길동 매니저가 관리하는 사원 조회
select row_number() over(order by mgr_id) no, 
	emp_id,emp_name,dept_id,dept_name
	from view_emp_mgr
	where mgr_name ='홍길동';
-- 정주고 매니저가 관리하는 사원 조회
select row_number() over(order by mgr_id) no,
	emp_id,emp_name,dept_id,dept_name
	from view_emp_mgr
	where mgr_name ='정주고';
-- 오감자 매니저가 관리하는 사원 조회
select row_number() over(order by mgr_id) no,
	emp_id,emp_name,dept_id,dept_name
	from view_emp_mgr
	where mgr_name ='오감자';

-- [전체사원의 휴가일수 조회 :  휴가를 사용하지 않은 사원 + 휴가를 사용한 사원 ]
	-- 사원별 휴가결제횟수,휴가전체사용일수를 그룹핑하여
	-- 사원아이디,사원명,입사일,연봉,휴가결제횟수,휴가전체사용일수, 부서아이디,부서명,소속본부 를 조회하라 
	-- 단. 휴가를 사용하지 않은 사원의 휴가결제횟수,휴가전체사용일수는 0으로 할당하라
    -- 뷰이름 : view_emp_vacation	
create view view_emp_vacation
as
select e.emp_id, emp_name, hire_date,salary, d.dept_id, dept_name, unit_name,
	ifnull(duration_count,0) duration_count,ifnull(total_duration,0) total_duration
	from employee e left outer join (select emp_id, count(emp_id) duration_count ,
										sum(duration) total_duration
										from vacation group by emp_id) v on e.emp_id = v.emp_id
		 inner join department d on e.dept_id = d.dept_id 
         left outer join unit u on d.unit_id = u.unit_id
         order by emp_id;
select * from  view_emp_vacation;




