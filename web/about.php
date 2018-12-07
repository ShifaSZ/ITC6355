<?php

$link = mysqli_connect('localhost', 'sole', 'neu5355');
$db='PRODWEB';

if (!$link) {
	echo 'Unable to connect to the database server.';
	exit();
}

if (!mysqli_select_db($link, $db)) {
	echo 'Unable to locate the '.$db.' database.';
	exit();
}

echo "Group 4 is composed of:<br><br>";

$sql = "SELECT * FROM PERSON ORDER BY LNAME ASC;";
$results = mysqli_query($link,$sql);
while($row = mysqli_fetch_assoc($results)){
  echo $row['FNAME'].' '.$row['LNAME'].'<br>';
}

?>

