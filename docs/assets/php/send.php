<?php

function is_ajax() {
return isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&  $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
}

if(is_ajax()) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $people = $_POST['number'];
  $time = $_POST['time'];
  $when = $_POST['date'];

  $header = 'From: ' . $email . " \r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
  $header .=  "Mime-Version: 1.0  \r\n";
  $header .= "Content-Type: text/plain";

  $body = "Name: " . $name . "  \r\n";
  $body .= "Email:" . $phone . " \r\n";
  $body .= "For: " . $people ." People  \r\n";
  $body .= "Reservation date " . $when .  " \r\n";
  $body .= "Time: " . $time .  " \r\n";
  $body .= "This reservation was made on the website";

  $for = "jim@pulamusic.com";
  $subject = "New Reservation!";
  mail($for, $subject, $body, $header);

  echo json_encode(array(
         'message' => 'Reservation Submitted!',
         'name'   => $name
      ));

} else {
  die('NO!!!')
}
 ?>
