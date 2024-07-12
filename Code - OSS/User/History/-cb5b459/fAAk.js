function generateQRCode() {
    const text = document.getElementById('text').value;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, text);
}