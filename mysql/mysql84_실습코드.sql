

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
	distinct : 데이터의 중복을 배제할때 사용=> 중복된 데이터 하나만 출력
    형식 : select distinct 컬럼리스트(중복된 컬럼리스트) from 테이블명 ;  
    
    출력하려는 컬럼들이 중복이 됐을때만 배제를 한다(출력하려는 모든 컬럼들의 데이터가 중복될때만 배제가 된다)
*/
-- 사원테이블에서 사원번호와 부서컬럼을 출력하라(중복배제)
desc employee;
select distinct emp_id, dept_id from employee;
	-- emp_id 는 중복이 없기때문에 dept_id 의 중복들이 배제되지 않았다

-- 명령어가 실행된시점에서 저장소에서 제일가까운곳부터 데이터를 넣기때문에 정렬이 되어있지 않다
/*
	order by : 데이터 정렬시 사용(오름차순=asc,내림차순=desc)
	형식 : select 컬럼리스트 from 테이블명 order by 정렬할컬럼리스트 오름차순(내림차순);
	오름차순은 생략가능한데 내림차순일때는 꼭 적어줘야 한다
    order by 는 맨 마지막에 적어준다
    정렬할 컬럼리스트는 출력할 컬럼리스트에 꼭 포함되어야 한다!!
*/
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

-- 퇴직한 사원들을 급여가 높은 순으로 조회 /*is not null */
select *
	from employee 
    where retire_date is not null 
    order by salary desc;

-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
select * from employee where dept_id= 'SYS' order by salary desc;

-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회하라
select * from employee where dept_id='SYS' order by hire_date desc, salary;

/*
	특정 범위의 데이터를 검색 : where 조건절 + 비교연산자( > , < )
    형식 : select 컬럼리스트 from 테이블명 where 컬럼명 비교연산자 조건절 ;
*/
-- 사원중에서 연봉이 5000 이상인 사원들을 조회
select * from employee where salary >= 5000;

-- 입사일이 2016년 1월1일 이전에 입사한 사원들 조회
-- date 타입은 표현은 문자처럼 처리방식은 숫자처럼 처리한다!!
select * from employee where hire_date < '2016-01-01'; 

-- <and, or 연산>
-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000이상인 사원들을 조회
-- and 연산( ~이고) : 두개의 조건을 모두 만족한 데이터만 조회
select * from employee where hire_date > '2015-01-01' and salary >= 6000;

-- 입사일이 2015년 1월 1일 이후이거나, 급여가 6000이상인 사원들을 조회
-- or 연산(~ 또는) : 두개의 조건중 하나만 만족해도 데이터를 조회
select * from employee where hire_date >'2015-01-01' or salary >= 6000;

-- 입사일이 2015년 1월 1일부터 2017년 12월 31일 사이에 입사한 사원들을 조회
select * from employee where hire_date >= '2015-01-01' and hire_date <= '2017-12-31';
-- 연봉구간이 5000 이상 부터 7000미만 사이의 사원들을 조회
select * from employee where salary >= 5000 and salary < 7000 order by salary desc;

/*
	위에처럼 작성 안함 between and 많이 사용함
	between ~ and : 같은 컬럼리스트 내에서 특정 구간 조회 시 사용
    형식 : select from where 컬럼명 between 시작구간 and 종료구간 ;
*/
-- 2016년 입사자를 조회
select * from employee where hire_date between '2016-01-01'and '2016-12-31';

-- 사원아이디가 'S0001' 'S0010' 'S0020' 인 사원의 모든 정보를 조회하라
select * from employee where emp_id = 'S0001' or emp_id = 'S0010' or emp_id = 'S0020';

-- 부서아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
select * from employee where dept_id = 'MKT' or dept_id = 'GEN' or dept_id = 'HRD';

/*

*/













