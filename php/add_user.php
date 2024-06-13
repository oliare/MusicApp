<?php
$bd_musicApp = mysqli_connect('localhost', 'root', '', 'music_application');

if (!$bd_musicApp) {
    die("Connection failed: " . mysqli_connect_error());
}

$fullName = $_POST['fullName'];
$username = $_POST['username'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['password'];
 
$sql = "INSERT INTO users (FullName, Username, Email, Phone, Password)
 VALUES ('$fullName', '$username', '$email', '$phone', '$password')";

if (mysqli_query($bd_musicApp, $sql)) {
    header("Location: ../pages/user.html");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($bd_musicApp);
}

mysqli_close($bd_musicApp);
?>  