<?php 
        $servername = "localhost";
        $username = "root";
        $password = "1932";
        $dbname = "techtalkhub";

        $conn = new mysqli($servername, $username, $password, $dbname);
         
        // Check connection
        if ($conn->connect_error) {
            die("onnection failed: " . $conn->connect_error ."<br>");
        } 
        echo "<i>DB Connected successfully...</i>";
?>
