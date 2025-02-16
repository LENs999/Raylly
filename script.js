const dataDeInicio = new Date('2025-01-29T00:00:00'); // Coloque a data do início do relacionamento
const countdownElement = document.getElementById('countdown');

function atualizarContagem() {
    const agora = new Date();
    const diff = agora - dataDeInicio;

    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4167)) % 12;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const segundos = Math.floor(diff / 1000) % 60;

    countdownElement.innerHTML = `
        <p>Já se passaram:</p>
        <p>${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos</p>
    `;
}

setInterval(atualizarContagem, 1000);
