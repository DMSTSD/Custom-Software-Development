<?php
	$sender_name = $_POST['InputName'];
	$sender_email = $_POST['InputEmail'];
	$mail_body = $_POST['InputMessage'];
	
	$body = $sender_name." sent a new message for you from the advertising Page of Custom Software Development<br><br> Name: ".$sender_name."<br>Email: ".$sender_email."<br>Message: ".$mail_body;
	
	sendMail($sender_name , $sender_email, $body);
	
	function sendMail($sender, $sender_mail, $body) {
		$to = 'work@thesanmark.com'; // Set Receiver Email Here
		$myemail = 'work@thesanmark.com'; // Set Sender Email Here
		$subject = "New Sanmark Client"; // Set Subject Here
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";            
		$headers .= "From: Sanmark Solutions PVT LTD <work@thesanmark.com>\r\n"; // Set Header Here
		
		$message = $body;
		
		$sentmail = mail($to,$subject,$message,$headers);
		if($sentmail) { 
			// echo "Request submitted successfully. We will contact with you very soon."; 
			header('Location: //sanmark.lk/landing/custom-software-development?status=success');
		}

		else { 
			header('Location: //sanmark.lk/landing/custom-software-development?status=error');
		 }
	}

?>