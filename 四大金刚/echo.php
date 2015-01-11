<?php

	$data = [
		'ret' => true,
		'errcode' => 0,
		'errmsg' => 'success',
		'ver' => 1,
		'data' => [
			'page' => 1,
			'travelers' => [
				0 => [
					'nickName' => "andycall",
					'userImg' => "..."
				],
				1 => [
					'nickName' => "boolean93",
					'userImg' => "..."
				],
				2 => [
					'nickName' => "boolean93",
					'userImg' => "..."
				],
				3 => [
					'nickName' => "boolean93",
					'userImg' => "..."
				]
			],
			'travelerCnt' => 4,
			'size' => 20
		]
	];

	echo json_encode($data);
