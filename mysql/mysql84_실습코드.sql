/*
SQL(Structured Query Language) : 데이터 베이스에서 사용하는 구조화된 언어이다.
-> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어이다
  1.2.번은 개중요 2번이 더더 중요 !!!
  
	1. DDL(Data Definition Language) : 데이터 정의어 라고 한다
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어이다.
		- 명령어 :  CREATE, ALTER, TRUNCATE, DROP (대소문자 상관없음) 얘의 create 랑 CRUD 의 C랑은 다른애임
	2. DML(Data Manipulation Language) : 데이터 조작어 이다. 
		- 데이터의 CRUD 작업을 수행하는 언어 이다
        - 명령어 : insert(C), select(R), update(U), delete(D) !!!
    3. DCL(Data Control Language) : 데이터 제어어 이다
		- 데이터에 접근하는 권한을 제어하는 언어 이다
        - 명령어 : GRANT(권한부여),DEVOKE(권한해제)
    4. DTL(Data Transaction Language) : 트랜잭션 제어어 이다
		- 데이터베이스 작업 처리 단위인 트랜잭션을 관리하는 언어이다
        - 명령어 : commit(완료) ,rollback(취소), savepoint(작업구간별 저장) ..             
*/
/*
	데이터 베이스 선택 및 조회
    show databases; -- 모든 데이터베이스 목록 출력
    use 선택한 데이터베이스 ; -- 사용할 데이터베이스 선택
    select database(); -- 데이터베이스 선택
    show tables; -- 데이터베이스에 저장된 테이블 전체 조회
*/
show databases; 
use hrdb2019; 
select database();
show tables;

/*
	테이블 구조 확인 명령어 : DESC(DESCRIBE) 대소문자 상관 x
    형식 :  DESC 테이블명;
*/
show tables;
desc department;
desc employee;
desc unit;
desc vacation;

/*
	테이블 조회 명령어(단순) : select
    형식 : select 컬럼리스트(=필드리스트) from 테이블명;    
	전체컬럼리스트 조회: select * from 테이블명;
*/
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

/* 조회한 컬럼명을 ALIAS(별칭) 로 출력 */
-- 형식 : select 컬럼명 as '별칭', 컬럼명 as '별칭'... from 테이블명;
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
        
-- ms쪽에서는 불가능 ::  mysql,오라클 에서는 as 뺴고 써도 된다, '' 는 안에 있는단어가 공백이 없다면 지워도 된다 '사원 아이디' 이면 지우기불가능
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
-- 기존의 컬럼을 이용하여 가상컬럼 생성 - 연봉의 10%를 차지하는 인센티브 컬럼을 만들어라
-- 이 인센티브는 가상으로만 존재함
-- 타입이 숫자인 컬럼은 수식연산이 가능하다
-- 타입에는 숫자 문자 날짜 가 있다.
select emp_name '사원명',salary '연봉', salary*0.1 인센티브 from employee;

-- 현재의 날짜를 조회하라, 컬럼명을 date 로 변경하라
select curdate();
select curdate() as 'date';

/*
단순 = 테이블을 하나만 가지고 조회하는 환경이라는 뜻, 여러개는 복합 이라고함

	테이블 조회 명령어(단순) : select ~ from ~ where
	- 조건절을 추가하여 다양한 쿼리를 실행하는 형식이다
    형식 - select 출력할컬럼리스트 from 테이블명 where 조건절;
		- select * from 테이블명 where 조건절;
*/
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

-- WHERE 절 조건에 별칭으로 조회가 가능할까? 
select emp_id '사원 번호', emp_name, hire_date, DEPT_ID '부서 번호' from employee WHERE '부서 번호'='SYS';
-- 안된다  왜안되지? => 
	-- 별칭은 출력결과를 보여주기직전에 컬럼의 이름만 바꾸는것이다
	-- where 절이 제일먼저 필터링되서 실행된다, 그다움 from 그다음 select 임 
	-- 따라서 where 절부터 실행하기 때문에 '부서번호' 가 아직은 실행되지 않아서 조회가 안되는거임


