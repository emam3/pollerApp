<?php
include 'an.php' ;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$body = file_get_contents('php://input');
/*
$body = str_replace('[', '', $body);
$body = str_replace(']', '', $body);
$body = str_replace('},', '}.', $body);
$body = explode (".", $body);
*/
$someArray = json_decode($body, true);
// echo $someArray[1]["type"] ;
echo gettype($someArray[0]["question"]);

if (true) {

    for($i =0 ; $i < count($someArray) ; $i++){
        $sql = 'insert into form(type,question,answers) values(?,?,?)';
        $type = $someArray[$i]["type"];
        $question = $someArray[$i]["question"];
        $answer = implode($someArray[$i]["answer"]);
        if(!$answer){
            $answer = ' ' ;
        }

        if(!mysqli_stmt_prepare($stmt,$sql)){
            echo "faild" ;
            exit();
        } else {
            mysqli_stmt_bind_param($stmt,"sss",$type,$question,$answer);
            mysqli_execute($stmt);

            echo "connection succeded " ;
        }
    }


}

else {
    echo "we did fail" ;

}

?>
