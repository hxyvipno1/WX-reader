<?php   
    $link=mysql_connect("localhost","root","123456");   
    if(!$link) echo "没有连接成功!";   
    else echo "连接成功!";   
?>