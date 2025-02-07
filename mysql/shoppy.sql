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

-- 체크 작업 : 결과를 count 함수로 반환해야한다 !! 외워
select count(id) as result from shoppy_member where id = 'test1';
-- 여기서 나온 결과로 중복체크 작업 하는거임 0,1

-- 2/5 수업//////////////////////////////////////////////
select count(*) 
	from shoppy_member 
	where id = 'test1' and pwd = '1234';

-- 2/7------------------------------------------
-- a. shoopy_product 테이블 생성
select * from information_schema.tables
	where table_name like 'shoppy%';

create table shoppy_product(
	pid int primary key auto_increment, -- 리뷰아이디, 주문아이디 는 auto_increment 사용!  ( 얘는 insert 시 맵핑안함)
	pname varchar(50) not null,   -- not null 은 벨리데이션 체크 꼭
    price int,
    description varchar(200) ,
    upload_file varchar(100),
    source_file varchar(100),
    pdate datetime -- 상품등록날짜
);

show tables;
desc shoppy_product;
select * from shoppy_product;
-- 여기에 데이터 등록은 브라우저에서 내용 다채우고 등록버튼 눌럿을때 서버 거쳐서 들어오는거얌

-- f.




















