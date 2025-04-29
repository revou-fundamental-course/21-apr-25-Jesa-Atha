function konversiSuhu() {
    const suhu = parseFloat(document.getElementById('inputSuhu').value);
    const satuan = document.getElementById('inputSatuan').value;
    let hasil = "";

    if (isNaN(suhu)) {
        hasil = "Masukkan angka yang valid!";
    } else {
        if (satuan === "celsius") {
            hasil = `
                Fahrenheit: ${(suhu * 9/5 + 32).toFixed(2)} °F<br>
                Kelvin: ${(suhu + 273.15).toFixed(2)} K
            `;
        } else if (satuan === "fahrenheit") {
            hasil = `
                Celsius: ${((suhu - 32) * 5/9).toFixed(2)} °C<br>
                Kelvin: ${(((suhu - 32) * 5/9) + 273.15).toFixed(2)} K
            `;
        } else if (satuan === "kelvin") {
            hasil = `
                Celsius: ${(suhu - 273.15).toFixed(2)} °C<br>
                Fahrenheit: ${((suhu - 273.15) * 9/5 + 32).toFixed(2)} °F
            `;
        }
    }

    document.getElementById('hasil').innerHTML = hasil;
}
