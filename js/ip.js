<?php
$ip = $_SERVER["REMOTE_ADDR"];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://www.ip138.com/ips138.asp?ip=$ip&action=2");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
$output = curl_exec($ch);
curl_close($ch);

$regex = '/ʡ([^<>]+)��/i';
$str = $output;
$matches = array();
 
preg_match($regex, $str, $matches);

switch ("$matches[1]")
{
	case "����":
	  header("Location: zjhangzhou.html");
	  break;  
	case "�Ϻ�":
	  header("Location: shanghai.html");
	  break;  
	default:
	  header("Location: index.html");
}
