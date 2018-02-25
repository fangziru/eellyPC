# Host: localhost  (Version: 5.5.53)
# Date: 2017-10-21 20:38:54
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "eellyuser"
#

DROP TABLE IF EXISTS `eellyuser`;
CREATE TABLE `eellyuser` (
  `userphone` char(11) NOT NULL,
  `userpass` varchar(20) NOT NULL,
  PRIMARY KEY (`userphone`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "eellyuser"
#

/*!40000 ALTER TABLE `eellyuser` DISABLE KEYS */;
INSERT INTO `eellyuser` VALUES ('18392433511','aaa111'),('18392433512','aaa111'),('18392433513','111aaa'),('18392433514','123123aa'),('18392433515','1231231a'),('18392433516','aaa111'),('18392433517','111aaa'),('18392433518','aaa111'),('18392433519','111aaa');
/*!40000 ALTER TABLE `eellyuser` ENABLE KEYS */;

#
# Structure for table "goodscart"
#

DROP TABLE IF EXISTS `goodscart`;
CREATE TABLE `goodscart` (
  `goodsId` varchar(10) NOT NULL,
  `userName` varchar(100) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `beiyong14` varchar(100) DEFAULT NULL,
  `beiyong15` varchar(100) DEFAULT NULL,
  `beiyong16` varchar(100) DEFAULT NULL,
  `beiyong17` varchar(100) DEFAULT NULL,
  `beiyong18` varchar(100) DEFAULT NULL,
  `beiyong19` varchar(100) DEFAULT NULL,
  `beiyong20` varchar(100) DEFAULT NULL,
  `beiyong21` varchar(100) DEFAULT NULL,
  `beiyong22` varchar(100) DEFAULT NULL,
  `beiyong23` varchar(100) DEFAULT NULL,
  `beiyong24` varchar(100) DEFAULT NULL,
  `beiyong25` varchar(100) DEFAULT NULL,
  `beiyong26` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodscart"
#

/*!40000 ALTER TABLE `goodscart` DISABLE KEYS */;
INSERT INTO `goodscart` VALUES ('000001','18392433511',4,';;;;;;;F-4;;;;;;;;;','320.00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('000009','18392433519',18,';M-3;;M-4,L-3,XL-2;;;XXL-3,3Xl-3','702.00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('000010','18392433519',5,'F-5','750.00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `goodscart` ENABLE KEYS */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('000001','秋季新款气质简约时尚大气披肩百搭长款丝巾三宅一生女','衣饰',80,51,'杰萌服饰','small_qYYBAFnc2buIXawUAAIxZWwzRsUAAAB5wHL5dUAAjF940.jpeg','12色/1码','3年老店','广东省 广州市 越秀区 站西服装城2号楼 5层 和美雅特 5001','small_118_rIYBAFnc3suILD60AAZA_jKnuVIAAAB6QHMKn8ABkEW27.jpeg','small_118_p4YBAFncqcGIC8JWAAE3x2siQwsAABkvgPoEW8AATff40.jpeg','small_118_p4YBAFncqHeIVvmAAAC9J32C_0gAABkvgNsbxoAAL0_09.jpeg','160.00','228.00','128.00','','','',''),('000002','[广周服饰]女装新品真丝羊毛大玫瑰双色渐变丝巾防晒空调围巾美爆了','衣饰',58,785,'广州服饰','small_qYYBAFnZxLWIJoGYAAF57937ZzcAAABggIrCesAAXoH025.jpg','9色/1码','5年老店','提示：商家地址还未通过实体认证，暂不显示','small_118_poYBAFnYtDOIbT7HAAGjNlWMqHAAABrUwIPo38AAaNO616.jpg','small_118_p4YBAFna2y6IJYYdAAC6uFvv9k4AABkegEBp9MAALrQ595.jpg','small_118_rIYBAFna2b2IB0raAAM6HkU7K2sAAABmwOGJokAAzo2016.jpg','71.00','81.00','91.00','','','',''),('000003','[广周服饰]女装新品真丝羊毛大玫瑰双色渐变丝巾防晒空调围巾美爆了','衣饰',160,942,'高端奢侈品皮具','small_qYYBAFnZxLWIJoGYAAF57937ZzcAAABggIrCesAAXoH025.jpg','9色/1码','1年店','提示：商家地址还未通过实体认证，暂不显示','small_118_poYBAFnYtDOIbT7HAAGjNlWMqHAAABrUwIPo38AAaNO616.jpg','small_118_p4YBAFna2y6IJYYdAAC6uFvv9k4AABkegEBp9MAALrQ595.jpg','small_118_rIYBAFna2b2IB0raAAM6HkU7K2sAAABmwOGJokAAzo2016.jpg','171.00','281.00','191.00','','','',''),('000004','2017秋冬新款韩版甜美大格子流苏女式平纹保暖围巾披肩','衣饰',46,316,'韩艳时尚服饰','small_qYYBAFnZxLWIJoGYAAF57937ZzcAAABggIrCesAAXoH025.jpg','9色/1码','1年店','提示：商家地址还未通过实体认证，暂不显示','small_118_poYBAFnYtDOIbT7HAAGjNlWMqHAAABrUwIPo38AAaNO616.jpg','small_118_p4YBAFna2y6IJYYdAAC6uFvv9k4AABkegEBp9MAALrQ595.jpg','small_118_rIYBAFna2b2IB0raAAM6HkU7K2sAAABmwOGJokAAzo2016.jpg','82.00','86.00','86.00','','','',''),('000005','2017秋冬新款韩版甜美大格子流苏女式平纹保暖围巾披肩','衣饰',55,48,'丽人行服装','small_qYYBAFnZxLWIJoGYAAF57937ZzcAAABggIrCesAAXoH025.jpg','4色/1码','1年店','提示：商家地址还未通过实体认证，暂不显示','small_118_poYBAFnYtDOIbT7HAAGjNlWMqHAAABrUwIPo38AAaNO616.jpg','small_118_p4YBAFna2y6IJYYdAAC6uFvv9k4AABkegEBp9MAALrQ595.jpg','small_118_rIYBAFna2b2IB0raAAM6HkU7K2sAAABmwOGJokAAzo2016.jpg','65.00','50.00','55.00','','','',''),('000006','大牌专柜同款双层100%顶级真丝长巾批发 配套包装180-65','衣饰',130,602,'时尚品牌批发部','small_qIYBAFncfiyIbiWzAAMr7seUoT8AABrwAPSHSEAAywG506.jpg','2色/1码','7年老店','提示：商家地址还未通过实体认证，暂不显示','small_118_poYBAFnYtDOIbT7HAAGjNlWMqHAAABrUwIPo38AAaNO616.jpg','small_118_p4YBAFna2y6IJYYdAAC6uFvv9k4AABkegEBp9MAALrQ595.jpg','small_118_rIYBAFna2b2IB0raAAM6HkU7K2sAAABmwOGJokAAzo2016.jpg','200.00','50.00','55.00','','','',''),('000007','大牌专柜同款双层100%顶级真丝长巾批发 配套包装180-65','衣饰',15,272,'欧韩高端配饰','small_qIYBAFncfiyIbiWzAAMr7seUoT8AABrwAPSHSEAAywG506.jpg','2色/1码','7年老店','提示：商家地址还未通过实体认证，暂不显示','small_118_poYBAFnYtDOIbT7HAAGjNlWMqHAAABrUwIPo38AAaNO616.jpg','small_118_p4YBAFna2y6IJYYdAAC6uFvv9k4AABkegEBp9MAALrQ595.jpg','small_118_rIYBAFna2b2IB0raAAM6HkU7K2sAAABmwOGJokAAzo2016.jpg','200.00','50.00','55.00','','','',''),('000008','大牌专柜同款双层100%顶级真丝长巾批发 配套包装180-65','衣饰',225,1272,'劲鸿皮具','small_qIYBAFncfiyIbiWzAAMr7seUoT8AABrwAPSHSEAAywG506.jpg','1色/1码','6年老店','提示：商家地址还未通过实体认证，暂不显示','small_118_poYBAFnYtDOIbT7HAAGjNlWMqHAAABrUwIPo38AAaNO616.jpg','small_118_p4YBAFna2y6IJYYdAAC6uFvv9k4AABkegEBp9MAALrQ595.jpg','small_118_rIYBAFna2b2IB0raAAM6HkU7K2sAAABmwOGJokAAzo2016.jpg','200.00','2250.00','255.00','','','',''),('000009','高领打底衫女长袖t恤修身大码韩版女百搭上衣秋冬季加厚小衫914','女装',39,10000,'伊人丽影','small_640_poYBAFnaBKmIdFfhAAKGy2ZOWq0AABrcAIFUEAAAobj576.jpg','7色/6码','6年老店','广东省 广州市 天河区 金马1层 143','small_118_qIYBAFnaBKyIE9X-AAINo6x_v5EAABrcAIH1yMAAg27699.jpg','small_118_qoYBAFnaBKqIQ39aAAJIk2pVSR0AAABigP9YmgAAkir947.jpg','small_118_rIYBAFnaBK6Ia4jwAAMB9y8mv7wAAABiwAAAAAAAwIP830.jpg','39.00','37.00','36.00','','','',''),('000010','瑞裳高端定制，海外专柜同步新款上市，原标，兔毛拼接流苏毛衣斗篷针织衫','女装',150,341,'瑞裳优品旗舰店','small_qIYBAFnjWXiIMx3EAADt35iUyK4AABsvgMjDesAAO33991.jpg','1色/1码','2年店','广东省 广州市 荔湾区 十三行新中国 -2层 安琪服饰 2463','small_118_qYYBAFnjYEyIGFslAADs-1BWNb4AAAC0wGiorMAAO0T129.jpg','small_118_poYBAFnjYECISQrrAADRcUH4E9oAABswAFlQ2wAANGJ809.jpg','small_118_qoYBAFngsR6IYCYLAADthmqvTBYAAACcAP3R0cAAO2e632.jpg','150.00','150.00','145.00','','','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "goodsmsg"
#

DROP TABLE IF EXISTS `goodsmsg`;
CREATE TABLE `goodsmsg` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsmsg"
#

/*!40000 ALTER TABLE `goodsmsg` DISABLE KEYS */;
INSERT INTO `goodsmsg` VALUES ('000001','杰萌服饰','衣饰',80,1000,'秋季新款气质简约时尚大气披肩百搭长款丝巾三宅一生女','','small_118_qYYBAFnc2buIXawUAAIxZWwzRsUAAAB5wHL5dUAAjF940.jpeg','small_118_rIYBAFnc2b6IZz0hAAMp7s3ZQ38AAAB6AGy1vIAAyoG34.jpeg','small_118_q4YBAFnc2b2IH5JTAAJmqZARUuMAAAB5wHOF1IAAmbB11.jpeg','','','黑色/白色/深灰色/黄色/粉红色/酒红色/紫色/紫罗兰/桔色/褐色/红色/绿色/军绿色/蓝色/深蓝色/咖啡色/墨绿色','F','','','','','',''),('000009','伊人丽影','女装',39,100000,'【伊人丽影】实拍 高领打底衫女长袖t恤修身大码韩版女百搭上衣秋冬季加厚小衫914','','small_118_poYBAFnaBKmIdFfhAAKGy2ZOWq0AABrcAIFUEAAAobj576.jpg','small_118_qoYBAFnaBKqIQ39aAAJIk2pVSR0AAABigP9YmgAAkir947.jpg','small_118_qIYBAFnaBKyIE9X-AAINo6x_v5EAABrcAIH1yMAAg27699.jpg','small_118_rIYBAFnaBK6Ia4jwAAMB9y8mv7wAAABiwAAAAAAAwIP830.jpg','','黑色/白色/酒红色/军绿色/驼色/孔雀蓝/黑灰色','S/M/L/XL/XXL/3Xl','','','','','',''),('000010','瑞裳优品旗舰店','女装',150,100000,'瑞裳高端定制，海外专柜同步新款上市，原标，兔毛拼接流苏毛衣斗篷针织衫','','small_118_qIYBAFnjWXiIMx3EAADt35iUyK4AABsvgMjDesAAO33991.jpg','small_118_qIYBAFnjWXqIfvfyAAE5ZJNySZIAABsvgM_5n0AATl8413.jpg','small_118_qIYBAFnjWXuIZW0oAAE5yBxZDMEAABsvgNR1PcAATng068.jpg','small_118_qYYBAFnjWXqIZtVmAAKZis2HjeIAAAC0QPsy-cAApmi359.jpg','small_118_pYYBAFnjWXuIepGjAAKznc64n_IAABlswMA2r0AArO1937.jpg','如图色','F','','','','','','');
/*!40000 ALTER TABLE `goodsmsg` ENABLE KEYS */;

#
# Structure for table "userel2"
#

DROP TABLE IF EXISTS `userel2`;
CREATE TABLE `userel2` (
  `userphone` varchar(11) DEFAULT NULL,
  `userpass` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "userel2"
#

/*!40000 ALTER TABLE `userel2` DISABLE KEYS */;
INSERT INTO `userel2` VALUES ('18392433514','123123aa');
/*!40000 ALTER TABLE `userel2` ENABLE KEYS */;
