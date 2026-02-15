const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function embedQR() {
    try {
        const publicPath = path.join(__dirname, '..', 'public');
        const pdfPath = path.join(publicPath, 'Verkaufs-One-Pager.pdf');
        const qrPath = path.join(publicPath, 'handwerker-qr-booking.png');
        const outputPath = path.join(publicPath, 'Verkaufs-One-Pager-updated.pdf');

        const existingPdfBytes = fs.readFileSync(pdfPath);
        const qrImageBytes = fs.readFileSync(qrPath);

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const qrImage = await pdfDoc.embedPng(qrImageBytes);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { width, height } = firstPage.getSize();

        // QR-Code Größe
        const qrDims = qrImage.scale(0.25); // Skalierung anpassen falls nötig

        // Platzierung: Unten rechts im Footer-Bereich
        // Da wir nicht wissen, wo genau "Live Demo" steht, platzieren wir es 
        // in einem typischen Footer-Bereich (ca. 50 Einheiten vom Rand)
        firstPage.drawImage(qrImage, {
            x: width - qrDims.width - 50,
            y: 50,
            width: qrDims.width,
            height: qrDims.height,
        });

        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(outputPath, pdfBytes);
        console.log('PDF erfolgreich aktualisiert: ' + outputPath);
    } catch (err) {
        console.error('Fehler beim Bearbeiten der PDF:', err);
    }
}

embedQR();
