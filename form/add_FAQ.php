<?php
include 'an.php' ;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$body = file_get_contents('php://input');
$q_s = JSON_decode($body);
$question = $q_s[0];
$answer = $q_s[1];


if (true) {



    $sql = "insert into faq(question , answer) values(? ,?)";
    if(!mysqli_stmt_prepare($stmt,$sql)){
        echo "faild" ;
        exit();
    } else {
        echo "connection succeded" ;
        mysqli_stmt_bind_param($stmt,"ss",$question , $answer);
        mysqli_execute($stmt);
    }

} else {
    echo "we did fail" ;

}


?>