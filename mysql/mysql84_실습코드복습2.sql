

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

-- 사원테이블에서 사원번호와 부서컬럼을 출력하라(중복배제)
show databases;
use hrdb2019;
select database();
show tables;
select distinct emp_id, dept_id from employee;

-- 사원테이블에서 사원명,사원아이디,입사일,연봉을 조회하라
-- 사원아이디 기준 오름차순으로 정렬하라
select emp_name,emp_id,hire_date,salary from employee order by emp_id;

-- 사원아이디 기준 오름차순 정렬을 하고 입사일 기준으로 내림차순으로 정렬하라
select * from employee order by emp_id, hire_date desc;
-- 급여를 기준으로 오름차순으로 정렬 후 조회
select * from employee order by salary;

-- eng_name 이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
	select * from employee where eng_name is null order by hire_date desc;
-- 퇴직한 사원들을 급여가 높은 순으로 조회 
	select * from employee where retire_date is not null order by salary desc;
-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
	select * from employee where dept_id = 'SYS' order by salary desc;
-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회하라
	select * from employee order by hire_date, salary desc;
-- 사원중에서 연봉이 5000 이상인 사원들을 조회
	select * from employee where salary >=5000;
-- 입사일이 2016년 1월1일 이전에 입사한 사원들 조회
	select * from employee where hire_date < '2016-01-02';
-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000이상인 사원들을 조회
	select * from employee where hire_date >= '2015-01-01' and salary >= 6000;
-- 입사일이 2015년 1월 1일 이후이거나, 급여가 6000이상인 사원들을 조회
	select * from employee where hire_date > '2015-01-01' or salary >=6000;
-- 입사일이 2015년 1월 1일부터 2017년 12월 31일 사이에 입사한 사원들을 조회
	select * from employee where hire_date between '2015-01-01'and '2017-12-31';
-- 연봉구간이 5000 이상 부터 7000미만 사이의 사원들을 조회
	select * from employee where salary between 5000 and 6999;
-- 2016년 입사자를 조회
	select * from employee where hire_date between '2016-01-01'and '2016-12-31';
-- 사원아이디가 'S0001' 'S0010' 'S0020' 인 사원의 모든 정보를 조회하라
	select * from employee where emp_id in('S0001', 'S0010', 'S0020');
-- 부서아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
	select * from employee where dept_id in ('MKT','GEN', 'HRD');

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
-- 정수만 출력하는 쿼리를 실행하라
	select 100, abs(-100);
-- 3 자리의 정수를 생성하고 생성한 정수를 2로 나누는 모듈러 함수를실행하는 쿼리를 완성해라
	 select mod(truncate(rand()*1000,0),2);
-- 사원테이블에서 사원아이디,사원명,부서아이디,입사일,연봉, 인센티브(연봉의 20%) 를 조회하라
-- 인센티브의 소수점 생략하라
-- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함
-- 연봉이 5000 미만의 사원들 정보만 출력
	select emp_id,emp_name,dept_id,
		ifnull(salary,0) salary,
		ifnull(truncate(salary*0.2,0),0) 인센티브
        from employee
        where salary < 5000;

-- 사원테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 test_name 으로 실행하라(홍길동-hong)
-- 영어이름이 정해지지않은 사원은 빈 문자열로 치환해서 실행하라
	select concat(emp_name,'-',
		ifnull(eng_name,''))test_name 
        from employee ;

-- 사원테이블에서 사원아이디와 5자리의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성하고 조회하라
-- 사원아이디, 사원명, 입사일,급여, 퇴사일, 사원번호 를 조회하라
-- 현재 근무중인 사원은 현재 날짜를 퇴사일에 입력해주세요 
	select 
    emp_id, emp_name, 
    hire_date,
    salary,
    ifnull(retire_date,curdate()) retire_date,
	concat(emp_id,'-',truncate(rand()*100000,0)) 사원번호
        from employee;

-- 사원테이블에서 사원아이디,사원명,입사년도,입사월,입사일,급여를 조회하라
    select emp_id,emp_name, 
    substring(hire_date,1,4) 입사년도,
    substring(hire_date,6,2) 입사월,
    substring(hire_date,9,2) 입사일
    from employee;
    
-- 2015년도에 입사한 모든 사원을 조회하라(substring 사용)
	select * from employee where substring(hire_date,1,4)='2015';
-- 2018년도에 정보시스템부서sys에 입사한 모든 사원들을 조회 
select * from employee where dept_id='SYS' and substring(hire_date,1,4)='2015';
-- 2014년도에 입사한 모든 사원을 조회하라
	select * from employee where substring(hire_date,1,4)='2014';
-- 모든 사원의 폰번호 마지막 4자리를 조회하라
select emp_name, phone, right(phone,4) from employee;
-- 사원테이블의 사원아이디,사원명,입사일,연봉을 조회하고, 연봉 협상 전인 사원은 0 으로 변환 후 조회하고,
-- 연봉은 3자리씩 , 로 구분하여 조회한다
select emp_id,emp_name,hire_date,
	format(ifnull(salary ,0),0) salary
	from employee;

-- 사원아이디, 사원명, 부서명,입사일, 연봉, 보너스(연봉0.05%) 조회하고
-- 연봉과 보너스 컬럼은 3자리씩 ,로 구분해여 출력 후 '만원' 을 추가
-- 보너스 컬럼은 소숫점 1자리까지 출력한다
	select emp_id,emp_name,dept_id,hire_date,
		concat(format(salary,0),'만원'),
        format(salary*0.05,1) bonus 
        from employee;
    
    
    
    
    
    
    
    






