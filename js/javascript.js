document.addEventListener('DOMContentLoaded', () => {

    // 1. **Contador Regresivo (Para main.html)**
    const countdownDisplay = document.getElementById('countdown-display');
    if (countdownDisplay) {
        // Establece la fecha de la boda: 14 de Enero de 2026
        const fechaBoda = new Date('January 14, 2026 16:00:00').getTime();

        const actualizarContador = () => {
            const ahora = new Date().getTime();
            const distancia = fechaBoda - ahora;
            
            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

            if (distancia < 0) {
                // Si la boda ya pasó
                clearInterval(intervalo);
                countdownDisplay.innerHTML = "¡NOS CASAMOS! ❤️";
            } else {
                // Rellena con cero y actualiza el display
                document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
                document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
                document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
                document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
            }
        }

        actualizarContador(); 
        const intervalo = setInterval(actualizarContador, 1000);
    }


    // 2. **Funcionalidad del Formulario (Para contacto.html)**
    const form = document.getElementById('form-confirmacion');
    const mensajeDinamico = document.getElementById('mensaje-dinamico');
    const btnEnviar = document.getElementById('btn-enviar');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            // Recoger valores
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const asistencia = document.getElementById('asistencia').value;

            // **Validación de formulario**
            if (nombre === "" || correo === "" || asistencia === "" || !correo.includes('@')) {
                mensajeDinamico.style.display = 'block';
                mensajeDinamico.textContent = '❌ Por favor, completa todos los campos correctamente.';
                mensajeDinamico.style.color = '#B00020'; // Rojo para error
                return;
            }

            // **Botón de “Confirmar asistencia” con mensaje dinámico**
            let mensajeFinal = `✅ ¡Gracias, ${nombre}! Tu respuesta ha sido enviada. `;
            
            if (asistencia === 'si') {
                mensajeFinal += '¡Estamos muy felices de que nos acompañes!';
                mensajeDinamico.style.color = 'var(--color-principal)';
            } else {
                mensajeFinal += 'Sentimos que no puedas acompañarnos, pero agradecemos tu aviso.';
                mensajeDinamico.style.color = 'var(--color-acento)';
            }

            // Simulación de envío
            console.log(`Confirmación recibida: ${nombre}, ${correo}, Asistencia: ${asistencia}`);
            
            // Mostrar mensaje, deshabilitar form y botón
            mensajeDinamico.textContent = mensajeFinal;
            mensajeDinamico.style.display = 'block';
            
            btnEnviar.textContent = '¡Confirmado!';
            btnEnviar.disabled = true;
            
            // Efecto: Cambio de color del botón a verde para 'Confirmado' (opcional)
            btnEnviar.style.backgroundColor = '#4CAF50'; 
            btnEnviar.style.boxShadow = '0 0 10px rgba(76, 175, 80, 0.5)';
        });
    }

});