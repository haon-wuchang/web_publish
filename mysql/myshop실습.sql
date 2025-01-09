
/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from customer;
desc customer;
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from employee;
desc employee;
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from product;
desc product;
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_header;
desc order_header;
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_detail;
desc order_detail; 
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
show tables;
desc customer;
select customer_id, customer_name,city,gender,email,phone from customer;
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
desc employee;
select employee_name,employee_id,gender,hire_date,phone from employee;
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
desc customer;
select customer_name, customer_id, gender, point,city, phone from customer where customer_name='홍길동';
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, point, phone from customer where gender='F';
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where city='울산';

-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
		from customer
        where point >= 500000; 

-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
		from customer
         where customer_name like '% %';

-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
		from customer	
        where phone not like '010-%';
        -- where left(phone,3) != '010';  -- 이렇게하는게 위에꺼보다 속도 쫌 빠름

-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
		from customer
        where city = '서울' and point >= 500000;

-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
		from customer
        where point >=500000 and city != '서울';

-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
		from customer
        where point >= 400000 and city = '서울' and gender = 'M';
        
-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
		from customer
        where city = '강릉' or city ='원주';
        
-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
    		from customer
			where city in('서울','부산','제주','인천');

-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
    		from customer
            where point between 400000 and 500000;

-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
	select * from customer;
			select customer_id, customer_name, gender, city, phone, point 
				from customer
				where left(birth_date,4) = '1990';
            
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
		select customer_id, customer_name, gender, city, phone, point 
    		from customer
            where left(birth_date,4) = '1990' and gender='F';
            
-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
	select customer_id, customer_name, gender, city, phone, point 
    		from customer
            where left(birth_date,4)='1990' and city in('대구','경주') and gender ='M';
            
-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
	-- 단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
select concat(customer_name,'(', customer_id,')'), gender, city, phone, point 
    		from customer
            where left(birth_date,4)='1990' and gender='M';

-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
	show tables;
    select * from employee;
    select employee_name,employee_id,gender,phone,hire_date 
		from employee 
        where retire_date is null;
        
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
    select employee_name,employee_id,gender,phone,hire_date 
		from employee 
        where retire_date is null and gender='M';
        
-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.
    select employee_name,employee_id,gender,phone,hire_date,retire_date
		from employee
        where retire_date is not null;
        
-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
		show tables;
        desc order_header;
        select * from order_header 
			where order_date between '2019-01-01'and '2019-01-08' 
            order by customer_id;
    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
        select * from order_header 
			where order_date between '2019-01-01'and '2019-01-08' 
            order by total_due desc;
            
-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.
        select * from order_header 
			where order_date between '2019-01-01'and '2019-01-08' 
            order by employee_id, order_date desc;
/**
	그룹함수
**/
/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.
	select sum(point)
		from customer;
    
-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.
	select sum(point)
		from customer
		where city='서울';
    
-- Q03) '서울' 지역 고객의 수를 조회하세요.
	select * from customer;
	select count(*)
		from customer
		where city='서울';
    
-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
     select sum(point),
		avg(point)
		from customer
        where city ='서울';
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.
	select 
		sum(point),
		avg(point),
		min(point),
		max(point)
		from customer
        where city ='서울';
-- Q06) 남녀별 고객의 수를 조회하세요.
		select gender,
			count(*)
			from customer
            group by gender ;
-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
	select city, 
		count(*)
		from customer
        group by city
        order by city;
 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
	select city,
		count(*)
		from customer
        group by city
        having count(*) >= 10
        order by city ;        
    
-- Q09) 남녀별 포인트 합을 조회하세요.
		select gender,
			sum(point)
         from customer
         group by gender;
         
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
		select
			city,
            sum(point)
			from customer
            group by city
            order by city;
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
		select 
			city,
            sum(point) 포인트합
			from customer
            group by city
            having 포인트합 >=1000000
            order by 포인트합 desc;
      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
	select city,
		sum(point) 포인트합
		from customer
        group by city
        having 포인트합
        order by 포인트합 desc;

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
	select
		city,
        count(*),
        sum(point)
		from customer
        group by city
        order by city;

-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
	select city,
		sum(point)
		from customer
        where point is not null
        group by city
        order by city;
-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
	select city,
		gender,
        sum(point),
        avg(point)
		from customer
       where city in('서울','부산','대구') 
        group by city, gender
        order by city , gender;

/** order_header 테이블 사용 **/
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.( rollup 사용 , 부서총합 이라는 이름으로 만들어라)
	select if (grouping(customer_id),'부서총합',ifnull(customer_id,'0')) cid,
		sum(total_due)
		from order_header
        where left(order_date,7) = '2019-01'
        group by customer_id
        with rollup;
-- Q17) 주문연도별 전체금액 합계를 조회하세요.
	select left(order_date,4),
		sum(total_due)
		from order_header
        group by left(order_date,4);
-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.
		select 
			left(order_date,4) 주문연도별, 
            substring(order_date,6,2) 주문월별,
            sum(total_due)
			from order_header
            where order_date between '2019-01-01'and '2019-06-30'
            group by left(order_date,4), substring(order_date,6,2);
-- Q19) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.
	select 
    left(order_date,4) 주문연도별, 
    substring(order_date,6,2) 주문월별,
    sum(total_due),
    avg(total_due)
		from order_header
        where order_date between '2019-01-01'and '2019-06-30'
        group by left(order_date,4), substring(order_date,6,2);
-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.
	-- > 이거 grouping 안에 함수들어가서 안되지 않나?
	select
		left(order_date,4) 주문연도별, 
        substring(order_date,6,2) 주문월별,
        sum(total_due) 총합,
        avg(total_due) 평균
		from order_header
        group by left(order_date,4), substring(order_date,6,2) with rollup;

/**
	테이블 조인
*/
show databases;
use myshop2019;
select database();
show tables;
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
	-- customer & order_header(customer_id), employee & order_header(employee_id), 
	select order_id, c.customer_id, e.employee_id, order_date, total_due
		from customer c , order_header o , employee e 
		where c.customer_id = o.customer_id and e.employee_id = o.employee_id and total_due >= 8500000;

-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
	select order_id, c.customer_id,customer_name, e.employee_id, order_date, total_due
		from customer c , order_header o , employee e 
		where c.customer_id = o.customer_id and e.employee_id = o.employee_id and total_due >= 8500000;

-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
	select order_id, c.customer_id, e.employee_id, employee_name,order_date, total_due
		from customer c , order_header o , employee e 
		where c.customer_id = o.customer_id and e.employee_id = o.employee_id and total_due >= 8500000;
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
	select order_id, c.customer_id,customer_name, e.employee_id, employee_name,order_date, total_due
		from customer c , order_header o , employee e 
		where c.customer_id = o.customer_id and e.employee_id = o.employee_id and total_due >= 8500000;
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
	select order_id, c.customer_id,customer_name, e.employee_id, employee_name,order_date, total_due
		from customer c , order_header o , employee e 
		where c.customer_id = o.customer_id and e.employee_id = o.employee_id 
			and total_due >= 8500000 and city='서울';
            
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
	select order_id, c.customer_id,customer_name, e.employee_id, employee_name,order_date, total_due
		from customer c , order_header o , employee e 
		where c.customer_id = o.customer_id and e.employee_id = o.employee_id 
			and total_due >= 8500000 and city='서울' and c.gender = 'M';
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
	-- order_detail, order_header(order_id)
    select h.order_id, p.product_id, order_qty, unit_price, total_due 
		from order_detail d, order_header h , product p 
        where d.order_id = h.order_id and d.product_id = p.product_id and order_qty >= 30;
-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
    select h.order_id, p.product_id, order_qty, unit_price, total_due,product_name
		from order_detail d, order_header h , product p 
        where d.order_id = h.order_id and d.product_id = p.product_id and order_qty >= 30;
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
select product_id, product_name, s.sub_category_id
	from product p , sub_category s , category c
    where p.sub_category_id  = s.sub_category_id and s.category_id = c.category_id;
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
select product_id, product_name, s.sub_category_id, sub_category_name, c.category_id
	from product p , sub_category s , category c
    where p.sub_category_id  = s.sub_category_id and s.category_id = c.category_id;
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
	-- 사원명, 년도, 상품명 , 주문내역
    select * 
		from employee e, order_header h, order_detail d, product p 
        where e.employee_id = h.employee_id and d.order_id = h.order_id and p.product_id = d.product_id
			and employee_name = '다정한' and left(order_date,4)='2019';
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
    select *
    from customer c, employee e , order_header h ,order_detail d ,product p
    where c.customer_id = h.customer_id and h.order_id = d.order_id
		and e.employee_id = h.employee_id and d.product_id = p.product_id
        and product_name like '%청소기';
/**
	서브쿼리
*/
-- Q13) 'mtkim', 'odoh', 'soyoukim', 'winterkim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.    
select order_id, customer_id, order_date, total_due
	from order_header
    where customer_id in (
		select customer_id from customer 
				where customer_id in ('mtkim', 'odoh', 'soyoukim', 'winterkim')
    ) ;

-- Q14) '전주' 지역 고객의 아이디를 조회하세요.  
select customer_id from customer where city = '전주';
  
-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
select order_id, customer_id, order_date, total_due 
	from order_header 
    where customer_id in (select customer_id from customer where city = '전주');

-- Q16) 고객의 포인트 최댓값을 조회하세요.
select *
	from (select row_number() over(order by point desc) no,
			customer_id, max(point) , point
			from customer 
			group by customer_id) t
	where no =1;
    ;
    
-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
select customer_name,customer_id,register_date, point
	from (select row_number() over(order by point desc) no,
			customer_id, max(point) , point, customer_name, register_date
			from customer 
			group by customer_id) t
	where no =1;

-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
select customer_name,customer_id, register_date, point 
	from customer
    where point > (select point from customer where customer_name ='홍길동') ;

-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
	--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
select customer_name,customer_id, city, register_date, point 
	from customer
    where city = (select city from customer where customer_name ='홍길동')
		order by customer_name; 

-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.
select row_number() over(order by point desc) no, 
	customer_name,customer_id,  register_date, point 
	from customer
    where point > (select point from customer where customer_name ='홍길동');

    








