<?php

function mailto($message)
{
    // Отправка сообщения на почту с помощью WordPress
    $to = 'lesha_novitskiy@mail.ru';
    $subject = 'Новое сообщение с сайта';
    $headers = array('Content-Type: text/html; charset=UTF-8');

    if (wp_mail($to, $subject, $message, $headers)) {
        // Подготовка ответа в формате JSON в случае успешной отправки
        $response = array("success" => true, "message" => "Сообщение успешно отправлено");
        echo json_encode($response);
    } else {
        // Подготовка ответа в формате JSON в случае ошибки отправки
        $response = array("success" => false, "message" => "Ошибка при отправке сообщения");
        echo json_encode($response);
    }
}

if ($_POST["formName"] === "defaultForm") {
    $tel = $_POST["tel"];
    $message = 'Телефон: ' . $tel;

    mailto($message);
    return;
}

if ($_POST["formName"] === "laminationForm") {
    $tel = $_POST["tel"];
    $back = $_POST["back"];
    $knob = $_POST["knob"];
    $message =
        'Телефон: ' . $tel . "\n" .
        "Цвет ламинации окна:" . $back . "\n" .
        "Цвет ручек окна:" . $knob;

    mailto($message);
    return;
}

if ($_POST["formName"] === "notExitForm") {
    $title = "Получить полезное пособие";
    $tel = $_POST["tel"];
    $called = $_POST["called"];
    $message =
        $title . "\n" .
        'Телефон: ' . $tel . "\n" .
        'Соц. сеть для отправки: ' . $called;

    mailto($message);
    return;
}

if ($_POST["formName"] === "quizForm") {
    $tel = $_POST["tel"];
    $timeCall = $_POST["timeCall"];
    $social = $_POST["social"];
    $house = $_POST["house"];
    $configure = $_POST["configure"];
    $variants = $_POST["variants"];
    $gift = $_POST["gift"];
    $message =
        'Телефон: ' . $tel . "\n" .
        'Время для связи: ' . $timeCall . "\n" .
        'Выбраная соц. сеть: ' . $social . "\n" .
        'Тип дома: ' . $house . "\n" .
        'Телефон: ' . $tel . "\n" .
        $variants . "\n" .
        'Подарок: ' . $gift;

    mailto($message);
    return;
}

$response = array("success" => false, "message" => "Ошибка: Неверное имя формы");
echo json_encode($response);
