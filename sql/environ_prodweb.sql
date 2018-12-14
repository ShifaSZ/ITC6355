


CREATE DATABASE PRODWEB;

USE PRODWEB;

CREATE TABLE USERS
(
ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
USERNAME VARCHAR(100),
PASSWORD CHAR(82)
) DEFAULT CHARACTER SET UTF8;


CREATE TABLE PERSON
(
ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
FNAME VARCHAR(250),
LNAME CHAR(250)
) DEFAULT CHARACTER SET UTF8;
	    
 
INSERT INTO PRODWEB.PERSON VALUES(null, 'Preeyanan', 'Wachirakantapong');            
INSERT INTO PRODWEB.PERSON VALUES(null, 'Soledad',  'Sugai'); 
INSERT INTO PRODWEB.PERSON VALUES(null, 'Susan', 	  'Vecchi'); 
INSERT INTO PRODWEB.PERSON VALUES(null, 'Aniket',   'Ankush Kondhalkar');  
INSERT INTO PRODWEB.PERSON VALUES(null, 'Dongjun',  'Park');
INSERT INTO PRODWEB.PERSON VALUES(null, 'Rasesh',   'Saraiya');	
INSERT INTO PRODWEB.PERSON VALUES(null, 'Shifa',    'Zhang'); 

SELECT FNAME, LNAME FROM PERSON ORDER BY FNAME;           

SELECT FNAME, LNAME FROM PERSON ORDER BY FNAME;
+-----------+-------------------+
| FNAME     | LNAME             |
+-----------+-------------------+
| Aniket    | Ankush Kondhalkar |
| Dongjun   | Park              |
| Preeyanan | Wachirakantapong  |
| Rasesh    | Saraiya           |
| Shifa     | Zhang             |
| Soledad   | Sugai             |
| Susan     | Vecchi            |
+-----------+-------------------+
