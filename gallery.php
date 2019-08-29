<html>
<head>
	<title>Gallery</title>
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
		<h1>Gallery</h1>
		
		<div id="painting-card" class="project-card"></div>
		<button id="previousPainting">Previous</button>
		<button id="nextPainting">Next</button>
		<script src="js/loadPainting.js"></script>
	</div>
</div>

<?php

include 'inc/socials.php'

?>

</body>
</html>