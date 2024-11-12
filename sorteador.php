<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Máquina de Cassino</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Máquina de Cassino</h1>
        <form id="casino-form" method="post">
            <label for="inicio">Número inicial:</label>
            <input type="number" name="inicio" id="inicio" required>
            <label for="fim">Número final:</label>
            <input type="number" name="fim" id="fim" required>
            <label for="quantidade">Quantidade de números a sortear:</label>
            <input type="number" name="quantidade" id="quantidade" min="1" required>
            <button type="button" id="spin-button">GIRAR!</button>
        </form>

        <div class="spinner" id="spinner">🎰 0 🎰</div>
        <div class="result" id="result" style="display: none;"></div>
    </div>

    <!-- Adicionando o áudio -->
    <audio id="bigwin-audio" src="./AUDIO/Slot Machine Jackpot Sound Effect.mp3" preload="auto"></audio>

    <script src="script.js"></script>
</body>

</html>
