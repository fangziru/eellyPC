--create table ytz6 select zi,nr from ytz5 group by zi,nr order by id asc
create table yiti2 select * from yitizi group by zi order by id asc
create database eellyusers
create table eellyuser(
       userphone char(11) not null primary key,
       userpass varchar(20) not null
)
insert into eellyuser(userphone,userpass) value('18392433514','123123aa')
insert into userel(userphone,userpass) values('18392433515','123123aa')
insert into userel(userphone,userpass) values('18392433516','666666')
insert into userel(userphone,userpass) values('18392433517','666666')
insert into userel(userphone,userpass) value('18392433518','666666')
insert into userel(userphone,userpass) value('18392433519','666666')
create table userel2(
       userphone varchar(11),
       userpass varchar(20)
)
drop table eellyuser
drop table userel2