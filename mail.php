<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


// $filename = basename($_FILES['upload']['name']);
// $ext = substr($filename, strrpos($filename, '.') + 1);

//$mail->SMTPDebug = 3;                               // Enable verbose debug output


  

$name=$_REQUEST['name'];
$phone=$_REQUEST['phone'];
$email=$_REQUEST['mail'];
$usermail = $_REQUEST['usermail'];
$message = $_REQUEST['message'];
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'noreply-rbdance@yandex.ru'; // Ваш логин  от почты с которой будут отправляться письма
$mail->Password = 'rbdance123'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('noreply-rbdance@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress($usermail);     // Кому будет уходить письмо 

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Запрос от клиента через форму обратной связи' ;
$mail->Body    = '<br>Имя: '.$name.'<br> Телефон: '.$phone.'<br>Email: '.$email.'<br>Сообщение: '.$message;
$mail->AltBody = '';

if(!$mail->send()) {
   echo 'yep';
} else {
	   echo 'nope';
	// echo $files;
    // echo "<script>parent.fileUploaded();</script>";

}
?>




