<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "team@pollafrique.com";
  $email = $_REQUEST['email'];
  $subject = "Notify Me When You Launch";
  $comment = "My email address is : ".$email.". Please notify me when PollAfrique is back online. Thank you" ;

  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);

  //Email response
  echo "Thank you for contacting us!";
  }

  //if "email" variable is not filled out, display the form
  else  {

echo "Email not sent";

  }
?>