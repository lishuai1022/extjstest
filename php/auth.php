<?php 
session_start();
if($_SESSION['authenticated'] == 'yes') {
    $result['success'] = true;
    $result['msg'] = '已登录';
} else {
    $result['success'] = false;
    $result['msg'] = '未登录';
}

echo json_encode($result); 