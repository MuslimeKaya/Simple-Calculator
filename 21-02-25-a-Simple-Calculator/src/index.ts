
const inputDisplay = document.getElementById("calculator-display") as HTMLInputElement;
const buttonAc = document.getElementById("buttonAc") as HTMLButtonElement;
const buttonYüzde = document.getElementById("buttonyüzde") as HTMLButtonElement;
const buttonEşittir = document.getElementById("buttonEşittir") as HTMLButtonElement;
const buttonKarekök = document.getElementById("buttonKarekök") as HTMLButtonElement;

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

buttons.forEach(button => {
    const buttonElement = document.getElementById(button.id) as HTMLButtonElement;
    if (buttonElement) {
        buttonElement.addEventListener('click', () => {
            appendValue(button.value);
        });
    } else {
        console.warn(`Button ID not found: ${button.id}`);
    }
});


function appendValue(value: string): void {
    if (inputDisplay.value === '0' && value !== '.') {
        inputDisplay.value = value;
    } else {
        inputDisplay.value += value;
    }
}

function yüzdeHesaplama(): void {
    try {
        const result = parseFloat(inputDisplay.value) / 100;
        inputDisplay.value = result.toString();
    } catch {
        inputDisplay.value = 'Hata';
    }
}

function karekökHesapla(): void {
    try {
        const value = parseFloat(inputDisplay.value);
        if (value < 0) {
            inputDisplay.value = "Hata";
        } else {
            inputDisplay.value = Math.sqrt(value).toString();
        }
    } catch {
        inputDisplay.value = 'Hata';
    }
}
function sonucuHesapla(): void {
    try {
        let expression = inputDisplay.value.replace(/,/g, '.'); 
        const hesaplanmışSonuç = new Function('return ' + expression)();
        inputDisplay.value = hesaplanmışSonuç.toString();
    } catch {
        inputDisplay.value = 'Hata';
    }
}

buttonYüzde?.addEventListener('click', yüzdeHesaplama);
buttonKarekök?.addEventListener('click', karekökHesapla);
buttonEşittir?.addEventListener('click', sonucuHesapla);
buttonAc?.addEventListener('click', () => { inputDisplay.value = '0'; });
