/*
 shoppy 사이트 데이터베이스 테이블 정의 
*/
use hrdb2019;
select database();

--  shoppy_member 테이블 생성
show tables;

-- shoppy 로 시작하는 모든 테이블 검색
select * from information_schema.tables
	where table_name like 'shoppy%';

create table shoppy_member(
	id varchar(30) primary key,
	pwd varchar(50) not null,
	name varchar(10) not null,
	phone char(13) not null,
	emailname varchar(20) not null,
	emaildomain varchar(20) not null,
	zipcode char(5),
	address varchar(80),
	mdate datetime
);

desc shoppy_member;
select * from shoppy_member;

-- ㄴ. 체크 작업 : 결과를 count 함수로 반환해야한다 !! 외워
select count(id) as result from shoppy_member where id = 'test1';
-- 여기서 나온 결과로 중복체크 작업 하는거임 0,1









