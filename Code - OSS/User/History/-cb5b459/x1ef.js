function generateQRCode() {
    const text = document.getElementById('text').value;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, text);

    document.getElementById('save-btn').style.display = 'block';
}

function saveQRCodeAsPNG() {
    const qrcodeContainer = document.getElementById('qrcode');
    const qrcode = qrcodeContainer.querySelector('canvas').toDataURL('image/png');
    const link = document.createElement('a');
    link.href = qrcode;
    link.download = 'qrcode.png';
    link.click();
}