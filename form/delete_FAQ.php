<?php
include 'an.php' ;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$body = file_get_contents('php://input');
echo $body;
$query = "DELETE FROM FAQ WHERE question='$body' ";
$data = mysqli_query($conn,$query) ;
if($data) {
    echo "deleted" ;
} else {
    echo "failed" ;
}


if(isset($_SESSION['a'])) {
    '<br>' ;
    echo "successssssssssssssssss" ;
} else {
    '<br>' ;
    echo "faileddddddddddddddd" ;

//    header("Location:https://www.facebook.com/");
}

?>