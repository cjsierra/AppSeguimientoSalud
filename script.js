// Mostrar una sección específica
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// Agregar sección de comida
function addFoodSection() {
    const foodSections = document.getElementById('foodSections');
    const newSection = document.createElement('div');
    newSection.className = 'new-item';
    newSection.innerHTML = `
        <h3>Nueva Comida</h3>
        <label for="mealType">Tipo de Comida:</label>
        <select id="mealType">
            <option value="Desayuno">Desayuno</option>
            <option value="Comida">Comida</option>
            <option value="Cena">Cena</option>
            <option value="Entre Horas">Entre Horas</option>
        </select><br>

        <label for="foodName">Nombre del Alimento:</label>
        <input type="text" id="foodName"><br>

        <label for="ingredients">Ingredientes Principales:</label>
        <textarea id="ingredients"></textarea><br>

        <label for="mealTime">Hora de Ingesta:</label>
        <input type="time" id="mealTime"><br>

        <label for="mealNotes">Comentarios y Sensaciones:</label>
        <textarea id="mealNotes"></textarea><br>
    `;
    foodSections.appendChild(newSection);
}

// Agregar depósito gastrointestinal
function addBowelMovement() {
    const bowelMovements = document.getElementById('bowelMovements');
    const newMovement = document.createElement('div');
    newMovement.className = 'new-item';
    newMovement.innerHTML = `
        <h3>Nuevo Depósito</h3>
        <label for="movementTime">Horario:</label>
        <input type="time" id="movementTime"><br>

        <label for="consistency">Consistencia:</label>
        <select id="consistency">
            <option value="Líquida">Líquida</option>
            <option value="Semisólida">Semisólida</option>
            <option value="Sólida">Sólida</option>
        </select><br>

        <label for="color">Color:</label>
        <select id="color">
            <option value="Marrón claro">Marrón claro</option>
            <option value="Marrón oscuro">Marrón oscuro</option>
            <option value="Negro">Negro</option>
            <option value="Verde">Verde</option>
        </select><br>

        <label for="odor">Olor:</label>
        <select id="odor">
            <option value="Débil">Débil</option>
            <option value="Moderado">Moderado</option>
            <option value="Fuerte">Fuerte</option>
        </select><br>

        <label for="movementNotes">Notas Adicionales:</label>
        <textarea id="movementNotes"></textarea><br>
    `;
    bowelMovements.appendChild(newMovement);
}

// Guardar datos del registro diario
function saveDiaryData() {
    alert('Datos diarios guardados correctamente.');
}

// Guardar datos del registro semanal
function saveWeeklyData() {
    alert('Datos semanales guardados correctamente.');
}