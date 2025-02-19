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
    upload_file json,
    source_file json,
    pdate datetime -- 상품등록날짜
);

show tables;
desc shoppy_product;
select * from shoppy_product;
-- 여기에 데이터 등록은 브라우저에서 내용 다채우고 등록버튼 눌럿을때 서버 거쳐서 들어오는거얌


-- 2/10 
set sql_safe_updates = 0;
delete from shoppy_product;
commit;


select * from shoppy_product;



-- 11-3.
--  upload_file varchar(100),
--     source_file varchar(100), 를 json 으로 바꾸기

select 
                    pid,
                    pname as name,
                    price,
                    description as info,
                    concat('http://localhost:9000/', upload_file->>'$[0]') image,
                    source_file,
                    pdate
                from shoppy_product;
                


select * from shoppy_product;

-- 2/11  . 리액트는 카멜케이스 쓰니까 sql 만들떄도 카멜케이스로 만드는게 좋다
-- 서버는 확장이 가능해 주소 변경이 될수잇어서 업로드파일앞에 서버주소까지는 안붙임.
-- 게시판, 공지사항, 리뷰리스트 애들은 다 프라이머리키 가지고 잇어야해
desc shoppy_product;

select 
	pid,
	pname as name,
	price, 
	description as info,
	upload_file as uploadFile,
	source_file as sourceFile,
	pdate,
    concat('http://localhost:9000/',upload_file->>'$[0]') as image,
    -- json_array(n 번지의 이미지를 가져와서 배열객체로 생성하는 함수 ) as imgList
	 json_array(
		 concat('http://localhost:9000/',upload_file->>'$[0]'),
		 concat('http://localhost:9000/',upload_file->>'$[1]'),
		 concat('http://localhost:9000/',upload_file->>'$[2]')
     ) as imgList, 
     json_arrayagg(    
		concat('http://localhost:9000/',jt.filename) 
     ) as detailImgList
from shoppy_product , 
	json_table(shoppy_product.upload_file,'$[*]' 
		columns(filename varchar(100) path '$')) as jt   
        -- 0번지데이터가져와서 문자로 리턴할거라서 varchar100
        -- path 부분은 => 호출되는부분(filename)에 n번지 데이터를 $에 넣어서 보낸다는거?..
where pid=7
group by pid;

-- 2/12  5-4.
select pid,
		pname,
        price,
        description,
        concat('http://localhost:9000/',upload_file->>'$[0]') as image
from shoppy_product
-- 5-4-0.이렇게하면 상품 여러개가져오게 수정 ( or 사용 )
where pid in (7,8,9);
-- 이 789 부분을 ? 로 넣어야하는데 이 갯수가 pids 갯수와 동일하면 된다



select * from shoppy_member;
select * from shoppy_product;

-- 2/13 
-- 어떤 회원(pk:id)이 어떤상품(pk:pid)을 넣었는지 구분해야함
-- shoppy_cart table 만들기
	-- 컬럼리스트 : cid(pk) auto_increment, id(fk(참조키):shoppy_member), pid(fk(참조키):shoppy_product) ,
				-- qty, size, cdate(장바구니 등록날짜)
desc shoppy_member;  -- id carchar(30)  !!
desc shoppy_product;  -- pid int 이 데이터타입에 맞춰서 만들어주기!!

create table shoppy_cart(
		cid int primary key auto_increment,
        qty int not null,
        size varchar(10) not null ,
        cdate datetime,
        id varchar(30)  not null  ,
        pid int not null,
	-- constraint 제약명 foreign key(카트에서정한컬럼명)
-- 			reference (참조하는 테이블과 컬럼명)
	constraint fk_id_shoppy_member_id foreign key(id)
			references shoppy_member(id),
	constraint fk_pid_shoppy_product_pid foreign key(pid)
			references shoppy_product(pid)
);
-- fk 만들고나면 다이어그램으로 잘 연결됐는지 확인해야대

show tables;
desc shoppy_cart;
select * from shoppy_cart;
-- c-3.
insert into shoppy_cart (size, qty, id, pid ) values(?,?,?,? );

truncate table shoppy_cart;  -- 해당 테이블 내용 전체 삭제

desc shoppy_cart;
desc shoppy_product;
desc shoppy_member;

insert into shoppy_cart(size,qty,cdate,id,pid)
values('xs',1,now(),'test2','10');
-- 2/13
-- 회원정보,상품정보 가져오기 위해서 3개테이블 조인하기 (shoppy_cart, shoppy_member, shoppy_product)
select *
from shoppy_member as sm, 
	shoppy_cart as sc , 
	shoppy_product as sp
where sm.id = sc.id and sc.pid = sp.pid;

select *  from shoppy_cart;

-- truncate table shoppy_cart;

select count(*)  from shoppy_cart where id = 'test1';

select * from shoppy_cart where cid = '1';


-- 1. 주문서 페이지에서 보여줄 테이터 조인작업 
-- 2-1. view만들기 조건절에잇는 sm.id 빼고 

create view view_orderList
as 
select 
	sm.id,
    sm.name,
    sm.phone,
    concat(sm.emailname, '@', sm.emaildomain) as email,
	sm.zipcode,
    sm.address,
    sp.pid,
    sp.pname,
    sp.price,
    sp.description as info,
    concat('http://localhost:9000/',sp.upload_file->>'$[0]') as image,
	sc.cid,
    sc.size,
    sc.qty
from shoppy_member as sm,  
	shoppy_cart as sc , 
	shoppy_product as sp
where sm.id = sc.id and sc.pid = sp.pid;
	-- and sm.id = 'test1';

select * from view_orderList where id = 'test1';
-- view 에 내용추가 삭제 되면 뷰 삭제하고 다시만들어ㅑ대 
-- 2-2. 만든 쿼리를 레파지토리에 수정하기 

-- 다른데도 코드 긴애 잇으면 뷰로 만들기 
-- 안쓰는 뷰는 삭제해야함 메모리 용량차지 많이함 '
-- 오라클은 뷰 생성 시 별도의 권한이 필요함 
create view view_cartList as
            select sc.cid,	
                    sc.size,
                    sc.qty,
                    sm.id,
                    sm.zipcode,
                    sm.address,
                    sp.pid,
                    sp.pname,
                    sp.price,
                    sp.description as info,
                    concat('http://localhost:9000/',sp.upload_file->>'$[0]') as image
                from shoppy_member as sm, 
                    shoppy_cart as sc , 
                    shoppy_product as sp
                where sm.id = sc.id and sc.pid = sp.pid;
                        -- and sm.id = 'test1';
					select * from view_cartList where id = 'test1';


create view view_getProduct as
           select 
            pid,
            pname as name,
            price, 
            description as info,
            upload_file as uploadFile,
            source_file as sourceFile,
            pdate,
            concat('http://localhost:9000/',upload_file->>'$[0]') as image,
            json_array(
                concat('http://localhost:9000/',upload_file->>'$[0]'),
                concat('http://localhost:9000/',upload_file->>'$[1]'),
                concat('http://localhost:9000/',upload_file->>'$[2]')
            ) as imgList, 
            json_arrayagg(
                concat('http://localhost:9000/',jt.filename) 
            ) as detailImgList
        from shoppy_product , 
            json_table(shoppy_product.upload_file,'$[*]' 
                columns(filename varchar(100) path '$')) as jt 
        -- where pid='7'
        group by pid;
        
        
        select * from view_getProduct where pid = '10';
