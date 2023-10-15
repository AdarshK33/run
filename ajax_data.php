<?php


$servername = "localhost";
$username = "root";
$password="";
$database="runn_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 //echo "Connected successfully";
$type = $_POST['type'];
    switch ($type) {
        case 'ids':
        $uniid= uniqid();
            $sql = "INSERT INTO new_table(user_id) VALUES ('". $uniid ."')";
            $result = $conn->query($sql);
            echo $uniid;
            break;

     case 'play':
      $uid = trim($_POST['uid']);
     
      $sql = "UPDATE new_table SET  play = play + 1   WHERE user_id='". $uid."'";
      $result = $conn->query($sql);
    //    echo $result;
    //    echo $sql;
      break;
      case 'male':
        $uid = trim($_POST['uid']);
       
        $sql = "UPDATE new_table SET  male = male + 1   WHERE user_id='". $uid."'";
        $result = $conn->query($sql);
        //  echo $result;
        //  echo $sql;
        break;
     case 'female':
            $uid = trim($_POST['uid']);
           
            $sql = "UPDATE new_table SET  female = female + 1   WHERE user_id='". $uid."'";
            $result = $conn->query($sql);
            //  echo $result;
            //  echo $sql;
            break;
        case 'score':
                $uid = trim($_POST['uid']);
                $total_score = trim($_POST['total_score']);
                $sql = "UPDATE new_table SET  score= $total_score    WHERE user_id='". $uid."'";
                $sql1 = "INSERT INTO score_count(userid,score) VALUES ( '". $uid."','". $total_score."') ";
               
                $conn->query($sql1);
                $result = $conn->query($sql);
                //  echo $result;
                //  echo $sql;s
                break;
        case 'play_again':
                    $uid = trim($_POST['uid']);
                   
                    $sql = "UPDATE new_table SET  play_again = play_again + 1   WHERE user_id='". $uid."'";
                    $result = $conn->query($sql);
                    //  echo $result;
                    //  echo $sql;
                    break;
         case 'submit_click':
            $uid = trim($_POST['uid']);
                       
            $sql = "UPDATE new_table SET  score_submit_click = score_submit_click + 1   WHERE user_id='". $uid."'";
         $result = $conn->query($sql);
                        //  echo $result;
                        //  echo $sql;
                        break;
          case 'info':

            $uid = trim($_POST['uid']);
             $name = $_POST['name'];
       
             $mobile = $_POST['mobile'];
                    
             $sql = "UPDATE new_table SET name= '$name',mobile= '$mobile' WHERE user_id='". $uid ."'";             
                      
          $conn->query($sql); 
          $sql1 = "UPDATE new_table SET  form_submit= form_submit + 1   WHERE user_id='". $uid."'";
          $conn->query($sql1); 
                                //echo "New record created successfully";       
                             
            break;
            case 'retry':
                $uid = trim($_POST['uid']);
   
                $sql = "UPDATE new_table SET  retry= retry + 1   WHERE user_id='". $uid."'";
                $conn->query($sql);
                
              
                break;
  

        default:
        echo "Something  error";
            break;
    }

    



















































?>

