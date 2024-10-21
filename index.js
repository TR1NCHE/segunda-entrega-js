function cotizarSeguro() {
    const añoActual = 2024;

    // Datos de marcas y precios base
    const marcas = [
        { nombre: 'fiat', precioBase: 500 },
        { nombre: 'ford', precioBase: 600 },
        { nombre: 'bmw', precioBase: 700 },
        { nombre: 'honda', precioBase: 800 }
    ];

    // Datos de las versiones y sus factores
    const versiones = [
        { nombre: 'básica', factor: 0.9 },
        { nombre: 'media', factor: 1.0 },
        { nombre: 'premium', factor: 1.3 }
    ];

    let marcaSeleccionada;
    let precioBase = 0;

    // Selección de la marca
    do {
        const marca = prompt("Ingresa la marca del auto (Fiat, Ford, Bmw, Honda):").toLowerCase();

        marcaSeleccionada = marcas.find(m => m.nombre === marca);

        if (marcaSeleccionada) {
            precioBase = marcaSeleccionada.precioBase;
        } else {
            console.log("Marca no válida. Intenta nuevamente.");
        }
    } while (!marcaSeleccionada);

    let año;
    let factorAño = 1;

    // Selección del año
    do {
        año = parseInt(prompt("Ingresa el año del auto (ej. 2024):"));

        if (isNaN(año) || año < 1900 || año > añoActual) {
            console.log("Año no válido. Intenta nuevamente.");
        }
    } while (isNaN(año) || año < 1900 || año > añoActual);

    // Ajuste de precio según el año
    factorAño = año >= 2024 ? 1.2 : año >= 2010 ? 1.0 : 0.8;

    let versionSeleccionada;
    let factorVersion = 1;

    // Selección de la versión
    do {
        const version = prompt("Ingresa la versión del auto (Básica, Media, Premium):").toLowerCase();

        versionSeleccionada = versiones.find(v => v.nombre === version);

        if (versionSeleccionada) {
            factorVersion = versionSeleccionada.factor;
        } else {
            console.log("Versión no válida. Intenta nuevamente.");
        }
    } while (!versionSeleccionada);

    // Calcular el presupuesto final
    const presupuestoFinal = precioBase * factorAño * factorVersion;

    // Mostrar el presupuesto final
    console.log(`El presupuesto para tu seguro es: ${presupuestoFinal.toFixed(2)}`);
}

cotizarSeguro();
