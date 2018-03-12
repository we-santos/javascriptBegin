var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            tdNome = paciente.querySelector(".info-nome");
            nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove("invisivel");
        });
    }
});