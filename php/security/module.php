<?php
$arr = [
    [
        'account_id' => '3',
        'type' => 'stock',
        'code' => '111',
        'name' => 'aaaa',
        'disable' => 0,
        'create_time' => '2018-01-11 11:22:03',
    ],
    [
        'account_id' => '4',
        'type' => 'stock',
        'code' => '111',
        'name' => 'bbbb',
        'disable' => 0,
        'create_time' => '2018-01-11 11:22:03',
    ],
];

echo json_encode($arr);
exit;