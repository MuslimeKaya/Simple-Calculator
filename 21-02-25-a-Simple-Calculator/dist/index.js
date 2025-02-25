"use strict";
// DOM öğelerini tanımlama
const inputDisplay = document.getElementById("calculator-display");
const buttonAc = document.getElementById("buttonAc");
const buttonYüzde = document.getElementById("buttonyüzde");
const buttonEşittir = document.getElementById("buttonEşittir");
const buttonKarekök = document.getElementById("buttonKarekök");
// Butonları tanımlama
const buttons = [
    { id: 'button1', value: '1' },
    { id: 'button2', value: '2' },
    { id: 'button3', value: '3' },
    { id: 'button4', value: '4' },
    { id: 'button5', value: '5' },
    { id: 'button6', value: '6' },
    { id: 'button7', value: '7' },
    { id: 'button8', value: '8' },
    { id: 'button9', value: '9' },
    { id: 'button0', value: '0' },
    { id: 'buttonBöl', value: '/' },
    { id: 'buttonCarp', value: '*' },
    { id: 'buttonTopla', value: '+' },
    { id: 'buttonCikar', value: '-' },
    { id: 'buttonVirgül', value: '.' },
    { id: 'buttonNokta', value: '.' },
];
// Butonlara tıklama olaylarını ekleme
buttons.forEach(button => {
    const buttonElement = document.getElementById(button.id);
    if (buttonElement) {
        buttonElement.addEventListener('click', () => {
            appendValue(button.value);
        });
    }
    else {
        console.warn(`Button ID not found: ${button.id}`);
    }
});
// Sayıları ve işlemleri input alanına yazdırmak için fonksiyon
function appendValue(value) {
    if (inputDisplay.value === '0' && value !== '.') {
        inputDisplay.value = value;
    }
    else {
        inputDisplay.value += value;
    }
}
// Yüzde hesaplaması için fonksiyon
function yüzdeHesaplama() {
    try {
        const result = parseFloat(inputDisplay.value) / 100;
        inputDisplay.value = result.toString();
    }
    catch (_a) {
        inputDisplay.value = 'Hata';
    }
}
// Karekök hesaplaması için fonksiyon
function karekökHesapla() {
    try {
        const value = parseFloat(inputDisplay.value);
        if (value < 0) {
            inputDisplay.value = "Hata";
        }
        else {
            inputDisplay.value = Math.sqrt(value).toString();
        }
    }
    catch (_a) {
        inputDisplay.value = 'Hata';
    }
}
// Sonucu hesaplamak için fonksiyon
function sonucuHesapla() {
    try {
        let expression = inputDisplay.value.replace(/,/g, '.');
        const hesaplanmışSonuç = new Function('return ' + expression)();
        inputDisplay.value = hesaplanmışSonuç.toString();
    }
    catch (_a) {
        inputDisplay.value = 'Hata';
    }
}
// Buton olaylarını ekleme
buttonYüzde === null || buttonYüzde === void 0 ? void 0 : buttonYüzde.addEventListener('click', yüzdeHesaplama);
buttonKarekök === null || buttonKarekök === void 0 ? void 0 : buttonKarekök.addEventListener('click', karekökHesapla);
buttonEşittir === null || buttonEşittir === void 0 ? void 0 : buttonEşittir.addEventListener('click', sonucuHesapla);
buttonAc === null || buttonAc === void 0 ? void 0 : buttonAc.addEventListener('click', () => { inputDisplay.value = '0'; });
