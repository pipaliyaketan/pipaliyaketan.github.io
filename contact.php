<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
if (!empty($_POST['name']) && !empty($_POST['email'])) {
    //Server settings
    // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = '';                 // SMTP username
    $mail->Password = '';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('uppervaliteam@gmail.com', 'Github');
    $mail->addAddress('uppervaliteam@gmail.com', 'Ketan');     // Add a recipient           


    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New Contact Request';
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $mobileno = $_POST['mobileno'];
    $subject = $_POST['subject'];
    $role = $_POST['role'];
    $messages = $_POST['message'];
    $message = "<html>";
    $message .= "<body>";
    $message .= "<b>Name : </b>" . $name . "<br/>";
    $message .= "<b>Email : </b>" . $email . "<br/>";
    $message .= "<b>Mobile No : </b>" . $mobileno . "<br/>";
    $message .= "<b>Subject. : </b>" . $subject . "<br/>";
    $message .= "<b>role. : </b>" . $role . "<br/>";
    $message .= "<b>Message. : </b>" . $messages . "<br/>";
    $message .= "</body>";
    $message .= "</html>";
    $mail->Body    = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $result= $mail->send();
     if($result===true){
        echo '<div class="alert alert-success"><strong>Success!</strong> Email Sent Successfully !!!. </div>';
    }else{
        echo '<div class="alert alert-danger"><strong>Wrong!</strong> Somthing Went Wrong ! Please Try Again !!!. </div>';
    }
}
/*if (!empty($_POST['name']) && !empty($_POST['email'])) {
    $to      = "ketan.pipaliya333@gmail.com";
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $mobileno = $_POST['mobileno'];
    $subject = $_POST['subject'];
    $role = $_POST['role'];
    $messages = $_POST['message'];
    $sub     = "New Contact Request";
    $message = "<html>";
    $message .= "<body>";
    $message .= "<b>Name : </b>" . $name . "<br/>";
    $message .= "<b>Email : </b>" . $email . "<br/>";
    $message .= "<b>Mobile No : </b>" . $mobileno . "<br/>";
    $message .= "<b>Subject. : </b>" . $subject . "<br/>";
    $message .= "<b>role. : </b>" . $role . "<br/>";
    $message .= "<b>Message. : </b>" . $messages . "<br/>";
    $message .= "</body>";
    $message .= "</html>";
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // More headers
    $headers .= 'From: Github Resume Contact Inquiry <donotreply@socialpriest.com>' . "\r\n";
    $result = mail($to, $sub, $message, $headers);
    if($result===true){
        echo '<div class="alert alert-success"><strong>Success!</strong> Email Sent Successfully !!!. </div>';
    }else{
        echo '<div class="alert alert-danger"><strong>Wrong!</strong> Somthing Went Wrong ! Please Try Again !!!. </div>';
    }
}*/
?>
