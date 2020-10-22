<?php
include 'an.php' ;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$body = file_get_contents('php://input');
$data = JSON_decode($body);
$user = $data[0] ;
$pw = $data[1];


if (true) {

    $sql = "SELECT * FROM admin WHERE user_name=? OR pw=?";

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("Location:../index.php?sqlerror");
        echo "faild";
        exit();
    } else {
        mysqli_stmt_bind_param($stmt,"ss",$user,$pw) ;
   //     mysqli_stmt_excute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        if($row = $result) {
            $pwCheck = password_verify($pw , $row['pw']);
                    if($pwCheck == false) {
                     header("http://pollerapp.com");
                    exit();
        } else if ($pwCheck == true) {
        session_start();
        $_SESSION['userUId'] =  $row['user_name'];
        echo "login happened" ;
                    } else {
                        echo "wrong user or password" ;
                    }
        } else {
         echo "idk" ;
        }
    }

} else {
    echo "we failed" ;
}

?>

