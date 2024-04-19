<?php

namespace controller;
// controller/mail.php
require '../../vendor/autoload.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;



class Mail
{
    private $mail;

    public function __construct($to, $subject, $message, $attachment = null)
    {
        $this->mail = new PHPMailer(true); // Set exceptions enabled
    
        // Server settings
        $this->mail->isSMTP();
        $this->mail->Host = 'smtp.gmail.com'; // SMTP server address
        $this->mail->SMTPAuth = true;
        $this->mail->Username = 'tiktaktiktaik15@gmail.com'; // SMTP username
        $this->mail->Password = 'spoalcfiyvgqigyq'; // SMTP password
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption; PHPMailer::ENCRYPTION_SMTPS encouraged
        $this->mail->Port = 587; // TCP port to connect to, use 465 for PHPMailer::ENCRYPTION_SMTPS above

        // Recipients
        $this->mail->setFrom('tiktaktiktaik15@gmail.com', 'TikTak');
        $this->mail->addAddress($to); // Add a recipient

        // Attachments
        if ($attachment !== null && file_exists($attachment)) {
            $this->mail->addAttachment($attachment); // Add attachments
        }

        // Content
        $this->mail->isHTML(true); // Set email format to HTML
        $this->mail->Subject = $subject;
        $this->mail->Body = $message;
    }

    public function send()
    {
        try {
            $this->mail->send();
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}

