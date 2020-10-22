<?php
include 'an.php' ;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$body = file_get_contents('php://input');
echo gettype($body);


$query = "DELETE FROM form WHERE question='$body' ";
$data = mysqli_query($conn,$query) ;
if($data) {
    echo "deleted" ;
} else {
    echo "failed" ;
}



?>