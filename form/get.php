<?php
include 'an.php' ;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


$sql= "SELECT * FROM users";
$result = mysqli_query($conn , $sql) ;
$json_array = array();

while($row = mysqli_fetch_assoc($result)){
    $json_array[] = $row ;
}

echo json_encode($json_array) ;
/*
echo '<pre>' ;
print_r($json_array);
*/
?>