<?php
// Allow cross-origin requests (CORS)
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Origin: *');


// Receive data and Send result
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$jsonString = file_get_contents('php://input');
	$data = json_decode($jsonString, true);
	sort($data['dataFromReact']);

	$arrayInteger = $data['dataFromReact'];

	$n = 0;
	foreach ($arrayInteger as $key => $value) {
		if($value%2 == 1)
			$n++ ;
	}
	$jsonData = array(
		'array' => join(' ', $arrayInteger),
  		'max' => $arrayInteger[count($arrayInteger) - 1],
  		'min' => $arrayInteger[0],
  		'noo' => $n,
	);

	echo json_encode($jsonData);

}
?>