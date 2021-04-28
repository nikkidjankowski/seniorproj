-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: neoan3
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `id` binary(16) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `insert_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (_binary '\n\Ô{oˆ\íëµ‰\Ã1†\Î\â','225 Conference Room','2021-03-19 19:55:23',NULL),(_binary ',˜\0¡\ç\ë‹$\Ã1†\Î\â','234 Projects Room','2021-04-20 14:45:53',NULL),(_binary 'D{\áÙ‹uëµ‰\Ã1†\Î\â','227 Adler North','2021-03-23 01:15:34',NULL),(_binary 'EE0´ˆðëµ‰\Ã1†\Î\â','228 Adler South','2021-03-19 20:18:30',NULL),(_binary '¤\êS\'ˆðëµ‰\Ã1†\Î\â','233 Small Conference Room','2021-03-19 20:21:10',NULL);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `id` binary(16) NOT NULL,
  `room_id` binary(16) DEFAULT NULL,
  `user_id` binary(16) DEFAULT NULL,
  `booking_day` date DEFAULT NULL,
  `booking_time` time DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `insert_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (_binary '\n¢¦–B\ë“\Ð\Ã1†\Î\â',NULL,NULL,NULL,NULL,'hi','2021-04-05 19:06:37',NULL),(_binary 'ðæ„–D\ë“\Ð\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-09','09:00:00','book','2021-04-05 19:21:28',NULL),(_binary '!ÿI(¡…\ë©\Ã1†\Î\â',_binary '¤\êS\'ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-22','08:00:00','hi','2021-04-20 03:04:33',NULL),(_binary '\"h§w–B\ë“\Ð\Ã1†\Î\â',NULL,NULL,'2021-04-09','09:00:00','hello','2021-04-05 19:07:15',NULL),(_binary '/\Ò\Ä\\—\à\ë“\Ð\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-11','09:00:00','science','2021-04-07 20:31:09',NULL),(_binary '4Œ²qŒû\ë“\Ð\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-03-26','11:00:00','meeting','2021-03-24 23:46:51',NULL),(_binary 'Hø#}¡w\ë©\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-22','09:00:00','class','2021-04-20 01:25:26',NULL),(_binary 'O´^ß¢3\ë‹$\Ã1†\Î\â',_binary '¤\êS\'ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-23','08:00:00','test','2021-04-20 23:51:22',NULL),(_binary '[†\ÓØ–A\ë“\Ð\Ã1†\Î\â',NULL,NULL,NULL,NULL,'test','2021-04-05 19:01:41',NULL),(_binary 'a¾\rC–B\ë“\Ð\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-08','08:00:00','math','2021-04-05 19:09:01',NULL),(_binary 'bY±¡V\ë©\Ã1†\Î\â',_binary 'D{\áÙ‹uëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-20','08:00:00',NULL,'2021-04-19 21:29:55',NULL),(_binary 's;\Ý	¡V\ë©\Ã1†\Î\â',_binary 'D{\áÙ‹uëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-21','08:00:00',NULL,'2021-04-19 21:30:23',NULL),(_binary 'Z¸I¡^\ë©\Ã1†\Î\â',_binary '¤\êS\'ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-22','09:00:00','meeting','2021-04-19 22:28:50',NULL),(_binary '¥û[Œëµ‰\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-03-23','11:00:00','meeting','2021-03-23 20:45:05',NULL),(_binary 'ªvç·–B\ë“\Ð\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-09','14:00:00','classtime','2021-04-05 19:11:03',NULL),(_binary 'µÙ‰—ëµ‰\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-03-22','10:00:00',NULL,'2021-03-20 16:17:03',NULL),(_binary '\á\ê§% Š\ë©\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-22','08:00:00','meeting','2021-04-18 21:13:12',NULL),(_binary '\å\ìMÌ–C\ë“\Ð\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-04-10','08:00:00','presentation','2021-04-05 19:19:52',NULL),(_binary 'ùˆ_$‰—ëµ‰\Ã1†\Î\â',_binary 'EE0´ˆðëµ‰\Ã1†\Î\â',_binary '™[ž®‰ëµ‰\Ã1†\Î\â','2021-03-22','11:00:00','meeting','2021-03-20 16:18:58',NULL);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` binary(16) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` enum('student','faculty') DEFAULT 'student',
  `insert_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email_uindex` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (_binary 'û0¡\é\ë‹$\Ã1†\Î\â','vlcolque@go.olemiss.edu','$2y$10$rgjups7W82FyCsm2uvP2wu.GCNu2/M5gN3G9q0Pe3QCkQUG7AvgmC','student','2021-04-20 14:59:31',NULL),(_binary '\r\Ü>À¡\é\ë‹$\Ã1†\Î\â','hsfitch@go.olemiss.edu','$2y$10$EZ0Xk0b1TikRgX9dLhTiP.dE9hw7bIV./tlMBk55eN02dtO.GeFV2','student','2021-04-20 14:59:49',NULL),(_binary 'F¡)¡\é\ë‹$\Ã1†\Î\â','ptfreel@go.olemiss.edu','$2y$10$nRCBwyP0ynR5Te2h./SvXeQADkj9Ugnol/q3MbTHN7t86WCvWHwKy','student','2021-04-20 15:00:02',NULL),(_binary '!\çOj¡\é\ë‹$\Ã1†\Î\â','mgolden@olemiss.edu','$2y$10$6SsdpNtboBygM91VMv3bzeTkpmHZ3QtN6hdmpdMeO1v91WsUw0uXO','student','2021-04-20 15:00:23',NULL),(_binary '#÷ÿ¶‹tëµ‰\Ã1†\Î\â','jhlucas1@olemiss.edu','$2y$10$y9v5DVwMWOv4b2x/8v4aQeC/pmzFPknUXwQ78oNtIIBy0NiD8B8HW','faculty','2021-03-23 01:07:30',NULL),(_binary '$\'†¡\è\ë‹$\Ã1†\Î\â','testttt@go.olemiss.edu','$2y$10$0Wy2fEkGZbzV1Bj76yBq1Ortuyf1s1ufT5N4OTTLQ6611y.6MiVGS','student','2021-04-20 14:53:17','2021-04-20 15:29:10'),(_binary '&”Hÿ¡\é\ë‹$\Ã1†\Î\â','jghale@olemiss.edu','$2y$10$chmDpFVHtKqDVQe4KN4B1eCXbplz7aOZY8ismIuxsZegaoqhl3zKe','student','2021-04-20 15:00:31',NULL),(_binary '-É\'‹tëµ‰\Ã1†\Î\â','jlvaughn@olemiss.edu','$2y$10$IZaqxdW/BTAhH7AXjW4lX..Skk/Vv7UTF5/IoikgFwoWaB8bo3S/y','faculty','2021-03-23 01:07:46',NULL),(_binary '2uš\ê¡\é\ë‹$\Ã1†\Î\â','akanchar@olemiss.edu','$2y$10$CkyJvjV8S5tRNvmpDOQAR.c6rgffVzUvNVV4jKNxu9hoUQhgP7FT.','student','2021-04-20 15:00:51',NULL),(_binary '4Ok‹tëµ‰\Ã1†\Î\â','dwilkins@cs.olemiss.edu','$2y$10$NUGSIXGCszKLs3iK1II6GeieCw4gMTizFtxPMpjwr7rTVHoRd.sGa','faculty','2021-03-23 01:07:57',NULL),(_binary '8®)+¡\é\ë‹$\Ã1†\Î\â','srkokamt@olemiss.edu','$2y$10$C3733gp0k/i/CdiIznDJ1eKhEVoCiLUMvjcWQKUCoxPAmFi2JEPie','student','2021-04-20 15:01:01',NULL),(_binary ':;±Ê‹tëµ‰\Ã1†\Î\â','jcarlis1@olemiss.edu','$2y$10$oImi60MODAEUOyMCDWuYgObXIqpwViibWDU5a36XCawzVr8VHf5ha','faculty','2021-03-23 01:08:07',NULL),(_binary 'CsW¡\é\ë‹$\Ã1†\Î\â','meskk@go.olemiss.edu','$2y$10$nn7pOgK7D0Aus/bRSO5CqODMh.LfZefCp4J/JS7e.hrLFpK//L0Y2','student','2021-04-20 15:01:19',NULL),(_binary 'Cs¸•‹tëµ‰\Ã1†\Î\â','ychen@cs.olemiss.edu','$2y$10$XePI8syvm0A72aYesJA8muUFx5JVvjOhOhSCPnwUyAOLi5IRe3xce','faculty','2021-03-23 01:08:22',NULL),(_binary 'GP¬n‹1ëµ‰\Ã1†\Î\â','adbolen@olemiss.edu','$2y$10$091hUxQfiD6SFWUORVpVvu6G9tIUVu.zaVN3QJb5YMCTaxWUq660G','faculty','2021-03-22 17:08:53',NULL),(_binary 'H®¡\é\ë‹$\Ã1†\Î\â','asmarott@go.olemiss.edu','$2y$10$wXnkc9Myvlmd0Cpx2ouhk.wKYmuRm43CW1f3z85PRKw3No.phF4di','student','2021-04-20 15:01:28',NULL),(_binary 'ILx‹tëµ‰\Ã1†\Î\â','hcc@cs.olemiss.edu','$2y$10$aDwPt9/ctUZoIN3LUpE67ex6I.6PIkgpXrKLOc259bM92K70PsEZm','faculty','2021-03-23 01:08:32',NULL),(_binary 'N©ö5¡\é\ë‹$\Ã1†\Î\â','mnazrul@go.olemiss.edu','$2y$10$KyM9OqNnqShbbMlzIzazy.7Cw9WBVewnsgyUzwO7TwvZso2yinQTe','student','2021-04-20 15:01:38',NULL),(_binary 'PI?‹tëµ‰\Ã1†\Î\â','kdavidso@olemiss.edu','$2y$10$xYKrUNUoy4T88luLOK4Vb.qgSn7fHbd6zDKBu98GaUkBEgVM.8Vqa','faculty','2021-03-23 01:08:44',NULL),(_binary 'U]BN¡\é\ë‹$\Ã1†\Î\â','jomarum@olemiss.edu','$2y$10$4wFPOxgeirFIno5cQODhN.b3UvK0uTTTwFXrdVQ6eRduZ8QzwgJcu','student','2021-04-20 15:01:49',NULL),(_binary 'VN\Ä‹tëµ‰\Ã1†\Î\â','fleming@olemiss.edu','$2y$10$.lR8faMHHrnM1HDmPGubW.MqcYgL1hn9HUJgsOQAnGM1NVVsS/si.','faculty','2021-03-23 01:08:54',NULL),(_binary '_a©\î¡\é\ë‹$\Ã1†\Î\â','srpatel3@olemiss.edu','$2y$10$NWZir1AX0sNSB/..2R2pLu7DGVy9AoKzg5kgpvoa5EZT3tnu4NIHS','student','2021-04-20 15:02:06',NULL),(_binary 'a\Îu[‹tëµ‰\Ã1†\Î\â','tlholsto@olemiss.edu','$2y$10$.k.dRRTWGJ5i2mbAnLl7uOe9UcywJxDrhIW49EESkwcEwxb0YBILS','faculty','2021-03-23 01:09:13',NULL),(_binary 'f\ì\Û*¡\é\ë‹$\Ã1†\Î\â','bnpharr@olemiss.edu','$2y$10$sQZihChMat/zWDRDfuQuYec4j/Vxs5aFHG.NyBNvJPTZllCgrrmTy','student','2021-04-20 15:02:19',NULL),(_binary 'mRg©¡\é\ë‹$\Ã1†\Î\â','sphilli6@go.olemiss.edu','$2y$10$qDKYl1eMF3FUx.CMI085OuvlN4wUupVqP7AHCb/CljpGXBgHmFkFW','student','2021-04-20 15:02:29',NULL),(_binary 't\çñÆ‹tëµ‰\Ã1†\Î\â','bjang@cs.olemiss.edu','$2y$10$TrDfpw2a16yCZxJDBHKmR.I6wZ0ZkZZAUVYk83XEKO4iMUgp5mrMO','faculty','2021-03-23 01:09:45',NULL),(_binary 'uh\ÈÀ¡\é\ë‹$\Ã1†\Î\â','spokhrel@go.olemiss.edu','$2y$10$iYGJfXScRCTGYY5872WbAOoMZTDMY1EuFTg0.t6fLkIPy2F1CNa7y','student','2021-04-20 15:02:43',NULL),(_binary 'zZB»‹tëµ‰\Ã1†\Î\â','jajone13@olemiss.edu','$2y$10$ckuoSZZcVjVLhUY6uQ8RWeYvpH5Kg2D3Tk5BouP0Xccle2Y0lpFXK','faculty','2021-03-23 01:09:55',NULL),(_binary '€ws\ä‹tëµ‰\Ã1†\Î\â','rhodes@cs.olemiss.edu','$2y$10$c7Qrjku7v.uK6NFnFR1tGOHIXl7drn7sgAmUoOu4d/oTTmqsZdx6C','faculty','2021-03-23 01:10:05',NULL),(_binary '–\Þ_¡\é\ë‹$\Ã1†\Î\â','ccrego@olemiss.edu','$2y$10$dUavRiDXLgBOZUyN0J.S5uMHMH0v.JeXgWAgVe5.hjt/QGlfMTsBS','student','2021-04-20 15:03:03',NULL),(_binary '†þ\ÅW‹tëµ‰\Ã1†\Î\â','cwwalter@olemiss.edu','$2y$10$UQI633lJM23a5X1ilDIwgu.pIRcirD5RdcqS9dSExVveT0zXBwg7e','faculty','2021-03-23 01:10:16',NULL),(_binary '[£Ü‹tëµ‰\Ã1†\Î\â','fwang@cs.olemiss.edu','$2y$10$TgDa/VS6na82ReSVmdHfF.bRQMC0nWXhnsPXYmROG8BpjY6nEA2mu','faculty','2021-03-23 01:10:26',NULL),(_binary '”\Ô\ãT‹tëµ‰\Ã1†\Î\â','hxiong@olemiss.edu','$2y$10$9NkhFxEkmuwD/ZUIlQo2qOcR12UduRHdd56oBrTaiMccz4c2JZ9EO','faculty','2021-03-23 01:10:39',NULL),(_binary '™[ž®‰ëµ‰\Ã1†\Î\â','ndjankow@go.olemiss.edu','$2y$10$2izcg87U/fNHlaGUFwy/cO2a4M.TBIUewoLjFHoqzFK/wX7S0gRCu','faculty','2021-03-20 15:26:10',NULL),(_binary '³ÿ\ì¡\ç\ë‹$\Ã1†\Î\â','msmith@go.olemiss.edu','$2y$10$pd8pdyNb3OQxJmCy5ZPOq.v5pR9zkKuO8EvyrboaedTnrwZAN983.','student','2021-04-20 14:50:07','2021-04-20 15:28:56'),(_binary '\ÔS>Œ‹tëµ‰\Ã1†\Î\â','rmblaylo@go.olemiss.edu','$2y$10$q1iQz8d7cVXCCHWirdyOL.07TFVvK/iYZ3ImqAofqqaqYf3/sFXeG','student','2021-03-23 01:12:25',NULL),(_binary '\Ù½Ç‹tëµ‰\Ã1†\Î\â','lchen9@go.olemiss.edu','$2y$10$XiWR6GEolFFcHii9Ei8u1.N/NYoitxfZxjAfKEkAAp8D76/97KsaO','student','2021-03-23 01:12:33',NULL),(_binary '\ß<‹tëµ‰\Ã1†\Î\â','tcilloni@go.olemiss.edu','$2y$10$/Jz.HJs/RRXkpZxqyLV5QeXla.wINPOURxKVZxA9SdMPMNPw9QygS','student','2021-03-23 01:12:44',NULL),(_binary '\ä§j{‹tëµ‰\Ã1†\Î\â','jdcoker@go.olemiss.edu','$2y$10$DiYVdEyMRkCrD3cl8XbEj.6cdrU0DOI8wNFMgQqMNtoxn5EyVNAu2','student','2021-03-23 01:12:53','2021-04-18 22:34:38'),(_binary 'æ½œ¡\ç\ë‹$\Ã1†\Î\â','msmihith@go.olemiss.edu','$2y$10$s9RhpT4iy0jzuulxkc0fPeq2ybNv5J12QVFEIDiKCVSjx1ZQLNWSS','student','2021-04-20 14:51:34','2021-04-20 15:28:49');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 21:22:11
