<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/config.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data) {
        $data = $_POST;
    }

    $required = ['name', 'email', 'phone', 'eventType'];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            throw new Exception("Campo obrigatório: {$field}");
        }
    }

    $name = filter_var($data['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($data['phone'], FILTER_SANITIZE_STRING);
    $eventType = filter_var($data['eventType'], FILTER_SANITIZE_STRING);
    $date = isset($data['date']) ? filter_var($data['date'], FILTER_SANITIZE_STRING) : 'Não definida';
    $message = isset($data['message']) ? filter_var($data['message'], FILTER_SANITIZE_STRING) : '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("E-mail inválido");
    }

    $whatsappMessage = "Olá, Bruno! 

Nome: {$name}
E-mail: {$email}
Telefone: {$phone}
Tipo de Evento: {$eventType}
Data Pretendida: {$date}

Mensagem: {$message}";

    $whatsappUrl = "https://wa.me/" . WHATSAPP_PHONE . "?text=" . urlencode($whatsappMessage);

    $response = [
        'success' => true,
        'message' => 'Mensagem recebida com sucesso!',
        'whatsappUrl' => $whatsappUrl
    ];

    echo json_encode($response);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
