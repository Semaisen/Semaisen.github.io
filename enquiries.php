<html>
<head>
	<title>Enquiry</title>
	<meta charset="utf-8" />

	<link href="css/style.css" type="text/css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>
<body>

<?php

include 'inc/navbar.php'

?>

<div class="main">
	<div class="main-area">
		<h1>Enquiry</h1>
		<form action="enquiries.php">
			<ul style="list-style-type:none;">
				<li><label for="name">Name: </label></li>
				<li><input type="text" id="name" name="name" placeholder="Name.."></li>
				<li><label for="subject">Subject:</label></li>
				<li><textarea id="subject" name="subject" placeholder="Message.."></textarea></li>
				<li><input class="submit-button" type="submit" value="Send"></li>
			</ul>
		</form>
	</div>
</div>

<?php

include 'inc/socials.php'

?>

</body>
</html>