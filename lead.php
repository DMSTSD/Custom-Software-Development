<?php
	$sender_name = $_POST['name'];
	$sender_phone = $_POST['phone'];
	$sender_email = $_POST['email'];
		
	$body = $sender_name." sent a new message for you from the advertising Page of Custom Software Development<br><br> Name: ".$sender_name."<br> Phone: ".$sender_phone."<br>Email: ".$sender_email;
	
	sendMail($sender_name , $sender_phone , $sender_email, $body);
	
	function sendMail($sender, $sender_mail, $body) {
		$to = 'tharuka@thesanmark.com'; // Set Receiver Email Here
		$myemail = 'tharuka@thesanmark.com'; // Set Sender Email Here
		$subject = "New Sanmark Client"; // Set Subject Here
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";            
		$headers .= "From: Sanmark Solutions PVT LTD <work@thesanmark.com>\r\n"; // Set Header Here
		
		$message = $body;
		
		$sentmail = mail($to,$subject,$message,$headers);
		if($sentmail) { 
			// echo "Request submitted successfully. We will contact with you very soon."; 
			header('Location: //sanmark.lk/landing/custom-software-development?status=error');
		}

		else {
			header('Location: //sanmark.lk/landing/custom-software-development?status=success');
		 }
	}

?>