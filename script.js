let celsiusToFahrenheit = true;

function konversi() {
    const input = parseFloat(document.getElementById('inputSuhu').value);
    const hasil = document.getElementById('hasil');
    const kalkulasi = document.getElementById('kalkulasi');

    if (isNaN(input)) {
        hasil.value = "";
        kalkulasi.value = "Masukkan angka yang valid.";
        return;
    }

    let output, rumus;
    if (celsiusToFahrenheit) {
        output = (input * 9/5) + 32;
        rumus = `${input}°C * (9/5) + 32 = ${output.toFixed(2)}°F`;
    } else {
        output = (input - 32) * 5/9;
        rumus = `(${input}°F - 32) * (5/9) = ${output.toFixed(2)}°C`;
    }

    hasil.value = output.toFixed(2);
    kalkulasi.value = rumus;
}

function reset() {
    document.getElementById('inputSuhu').value = '';
    document.getElementById('hasil').value = '';
    document.getElementById('kalkulasi').value = '';
}

function reverse() {
    celsiusToFahrenheit = !celsiusToFahrenheit;

    // Ganti semua label dan teks
    document.getElementById('label-input').textContent = celsiusToFahrenheit ? "Celsius (°C)" : "Fahrenheit (°F)";
    document.getElementById('label-output').textContent = celsiusToFahrenheit ? "Fahrenheit (°F)" : "Celsius (°C)";
    document.getElementById('inputLabel').textContent = celsiusToFahrenheit ? "Celsius (°C):" : "Fahrenheit (°F):";
    document.getElementById('outputLabel').textContent = celsiusToFahrenheit ? "Fahrenheit (°F):" : "Celsius (°C):";
    document.getElementById('teks-cara').textContent = celsiusToFahrenheit ? "Celsius (°C)" : "Fahrenheit (°F)";
    document.getElementById('teks-ke').textContent = celsiusToFahrenheit ? "Fahrenheit (°F)" : "Celsius (°C)";
    document.getElementById('satuan-input').textContent = celsiusToFahrenheit ? "Celsius (°C)" : "Fahrenheit (°F)";
    document.getElementById('satuan-output').textContent = celsiusToFahrenheit ? "Fahrenheit (°F)" : "Celsius (°C)";

    reset();
}
