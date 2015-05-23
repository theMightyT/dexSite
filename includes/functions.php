<?php
	function redirect_to($location) {
		if($location != NULL) {
			header("Location: {$location}");
			exit;
		}
	}
	
	function submitMessage($name, $email, $phone, $message) {
			$to = "trevor.vanrys@dexit.co";
			$subj = "Message From dexit.co";
			$extra = "Reply-To: ".$email."\r\n";			
			$msg = "Name: ".$name."\n\nPhone: ".$phone."\n\nEmail address: ".$email."\n\nComments: ".$message;
			$go = mail($to,$subj,$msg,$extra);
			return $name;
	}
?>