<?php
$bd_musicApp = mysqli_connect('localhost', 'root', '', 'music_application');

if (!$bd_musicApp) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['username'])) {
    $username = mysqli_real_escape_string($bd_musicApp, $_POST['username']);

    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($bd_musicApp, $sql);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            echo 'exists'; 
        } else {
            echo 'available'; 
        }
    } else {
        echo 'error'; 
    }
}

mysqli_close($bd_musicApp);
?>
