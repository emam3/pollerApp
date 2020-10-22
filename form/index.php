<?php
include 'an.php' ;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$body = file_get_contents('php://input');
echo $body ;
/*
$body = str_replace('[', '', $body);
$body = str_replace(']', '', $body);
$body = explode (",", $body);

print_r($body);

*/
// ( [0] => true [1] => "ahmed" [2] => "male" [3] => "01110533785" [4] => "Egyptian" [5] => "Cairo" [6] => "part" )



if (true) {



                    $sql = "insert into users(USER) values(?)";

                    if(!mysqli_stmt_prepare($stmt,$sql)){
                        header("Location:../index.php?sqlerror");
                        echo "faild" ;
                        exit();
                    } else {
                        $user = $body ;
                        echo "connection succeded" ;
                        mysqli_stmt_bind_param($stmt,"s",$user);
                        mysqli_execute($stmt);

                    }


            } else {
    echo "we did fail" ;

}

?>
