<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

session_start();
$_SESSION['a'] = "a";

if(isset($_SESSION['aa'])) {
    echo "success" ;
    header('Location:index.php');

} else {
    echo "failed" ;

    header("Location:https://www.facebook.com/");
}

?>