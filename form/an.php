<?php
/*
$dbhost = "http://sql108.unaux.com/" ;
$dbuser = "unaux_26803411" ;
$dbpassword ="y0gcfwe35lh";
$db = "poller";
111111111zZz@2
*/

$dbhost = "localhost" ;
$dbuser = "id14875421_poller_user" ;
$dbpassword ="111111111zZz@2";
$db = "id14875421_poller";

$conn = mysqli_connect($dbhost , $dbuser , $dbpassword , $db) ;
$stmt = mysqli_stmt_init($conn);

?>