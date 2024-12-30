

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

/* 지금 배우는거는전부 select 관련된거임 12/30 수업
	
    
*/
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


/*
	와일드 카드 문자 : 특정 문자열 검색 + like
    종류 : %(전체를 대체할때 사용하는 문자열)  _(한 문자를 대체하는 문자열임)
    사용법 : like 연산자와 함께 조건식을 추가하여 사용됨 !!!!
    형식 : select [컬럼리스트 ] from [테이블명] where 컬럼명 like [와일드카드문자를 이용한 특정문자열 검색 조건]
    like는 =임
*/
-- 영어 이름이 f 로 시작하는 모든 사원들을 조회
select * from employee where eng_name like 'f%';

-- '한'씨 성을 가진 모든 사원들을 조회
select * from employee where emp_name like '한%';

-- 이메일 주소의 두번째 자리에 'a'가 들어가는 모든 사원을 조회
select * from employee where email like '_a%'; -- _는 앞에 한글자는 아무거나 와도 되고 두번째에 a가 오면 된다는거 %는 a뒤에 어떤거든 와도 된다는거임

-- 이메일 주소가 4자리인 모든 사원을 조회하라
select * from employee where email like '____@%';

-- 이름에 '삼'이 들어가는 모든 사원을 조회하라
select * from employee where emp_name like '%삼%';


/*
오후수업 
*/
/*
내장함수(built-in) : 숫자,문자,날짜 함수
- 함수테스트를 위한 테이블 : dual
- select 실행하고자하는함수 from dual ;
*/
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







