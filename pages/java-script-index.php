<!DOCTYPE html>
<html>
<head>
  <title>JS</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../../style.css" type="text/css">
  <link rel="icon" href="../../favicon.png" type="image/x-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Outfit:wght@500&family=Roboto:wght@100&display=swap" rel="stylesheet"> 
</head>
<body>
<section>
  <div class="container">
    <div class="title">
      <h1>    
      <h1>
          <a id = "a_uniq" href="http://my-site/pages/java-script-index.php" title="Структурная информация по JavaScript">JS</a> 
          <a href="http://my-site/pages/html-index.php" title="Структурная информация по HTML">HTML</a>
          <a href="http://my-site/pages/css-index.php" title="Структурная информация по CSS">CSS</a>
          <a href="http://my-site/pages/sa-index.php" title="Структурная информация по CSS">SA</a>
      </h1>
      </h1>
    </div>
  </div>
</section>
<h4>
    <a href="http://my-site/index.php">ALL</a>
    <a href="http://my-site/pages/css.php">CSS</a>
    <a href="http://my-site/pages/html.php">HTML</a>
    <a href="http://my-site/pages/java-script.php">JS</a>
    <a href="http://my-site/pages/sa.php">SA</a>
    <a href="http://my-site/pages/sql.php">SQL</a>
</h4>

<table id="Htable">
<thead>
  <tr>
    <th id="th1">Элемент</th>
    <th id="th2">Описание</th>
    <th id="th3">Подробнее</th>
  </tr>
</thead>
<tbody>
<?php
      // Подключение к базе данных
      $host = 'localhost';
      $username = 'root';
      $password = '';
      $dbname = 'duckburg';

      $conn = mysqli_connect('localhost', 'root', '', 'duckburg');
      if (!$conn) {
          die("Ошибка подключения: " . mysqli_connect_error());
      }

      // Запрос данных из базы данных
      $sql = "SELECT * FROM js_cases";
      $result = mysqli_query($conn, $sql);

      // Вывод данных из базы данных
      while ($row = mysqli_fetch_assoc($result)) {
        $imagePath = 'uploads/' . $row['img'];
        ?>
        <tr>
          <td><?php echo htmlspecialchars($row['name']); ?></td>
          <td id="td2"><?php echo htmlspecialchars($row['des']); ?></td>
          <td><img src="<?php echo htmlspecialchars($imagePath); ?>"></td> 
        </tr>
        <?php
      }

      // Закрытие соединения с базой данных
      mysqli_close($conn);
    ?>
</tbody>
</table>
</body>
</html>
