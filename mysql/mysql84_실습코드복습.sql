-- 사원테이블에서 사원아이디,사원명,성별,입사일을 조회하기
show databases;
use hrdb2019;
select database();
show tables;

-- 사원테이블에서 사원명,부서명,입사일,폰번호,연봉을 조회하기
desc employee;
select emp_name,dept_id,hire_date,phone,salary from employee;
-- 부서테이블의 모든 컬럼을 조회하기
desc department;
-- 사원테이블에서 사원명,부서명,연봉을 조회하라
select emp_name, dept_id, salary from employee;
-- 현재의 날짜를 조회하라, 컬럼명을 date 로 변경하라
select curdate() date;
-- 사원테이블에서 sys 부서에 근무하는 모든 사원을 조회하라
show tables;
desc employee;
select * from employee where dept_id='SYS';
-- 사원테이블에서 사원명이 '정주고'인 사원을 조회하라
select * from employee where emp_name='정주고';
-- 사원테이블에서 사원아이디가 S0011 인 사원의 정보를 모두 조회하라
select * from employee where emp_id='S0011';
 -- 사원테이블에서 연봉이 5000인 사원의 모든 정보 조회
select * from employee where salary=5000;
-- 사원테이블에서 여성사원들의 아이디,이름, 입사일,이메일 정보를 조회하라
-- 출력되는 아이디 컬럼명을 '사원번호'로 변경하라
select emp_id '사원번호', emp_name, hire_date, email from employee where gender='F';
-- 사원테이블에서 부서명이 sys 인 사원들의 아이디,사원명,입사일을 조회
select emp_id, emp_name, hire_date from employee where dept_id='SYS';
-- 사원테이블에서 마케팅부서(MKT)의 모든사원정보를 조회하라
select * from employee where dept_id='MKT';
-- 사원테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회하라 
select * from employee where hire_date= '2014-08-01';
-- 연봉이 5000인 사원 정보 조회
select * from employee where salary=5000;
-- 사원테이블에서 eng_name 이 null 인 모든사원정보를 조회하라
select * from employee where eng_name is null;
-- 연봉이 정해지지 않은 사원을 조회하라
select * from employee where salary is null;
-- eng_name 이 null인 사원들은 'smith' 이름으로 변경 후 조회하라
-- 출력되는 컬럼명은 eng_name2 로 변경하라
select  emp_name, ifnull(eng_name,'smith') eng_name2 from employee;
-- 모든 사원의 아이디,사원명,입사일,퇴사일을 조회하라
-- 현재 근무중인 사원의 퇴사일에 현재의 날짜를 출력하라
select emp_id, emp_name, hire_date, ifnull(retire_date,curdate()) from employee;


