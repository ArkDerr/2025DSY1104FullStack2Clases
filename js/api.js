const contenedorferiados = document.getElementById("feriados");

fetch("https://api.boostr.cl/holidays.json")
    .then((res) => res.json())
    .then((json) => {
        if (json.status != "success" || !Array.isArray(json.data)) {
            throw new Error("Error en la respuesta de la API");
        }

        const feriados = json.data;

        contenedorferiados.innerHTML = "";

        const htmlFeriados = feriados
            .map(
                (f) => `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${f.title} (${f.date})</h5>
                        <p>${f.type}</p>
                    </div>
                </div>                     
                `
            ).join("");

        contenedorferiados.innerHTML = htmlFeriados;

    });

