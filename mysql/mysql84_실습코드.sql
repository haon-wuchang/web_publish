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



show databases;  -- 모든 데이터베이스의 목록을 출력한다
use hrdb2019; 
select database();
show tables;
select * from employee;