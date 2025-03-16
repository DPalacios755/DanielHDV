import React from "react";
import Header from "./Header.tsx";
import Section from "./Section.tsx";
import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <Header />

        <div className="resume-body">
          {/* Columna izquierda */}
          <div className="left-column">
            <Section title="Perfil Profesional">
              <p>🔹 Desarrollador de software en formación, apasionado por la tecnología y la innovación. Proactivo y en constante aprendizaje, con habilidades en resolución de problemas, trabajo en equipo y adaptación a nuevas tecnologías. Busco oportunidades para aplicar y expandir mis conocimientos en el ámbito del desarrollo de software. </p>
            </Section>
            <Section title="Experiencia Laboral">
  <ul>
    <li>🏫 <strong>Auxiliar de Laboratorio</strong> - Alianza Educativa, Colegio Las Margaritas (2021 - Actualidad)</li>
  </ul>
  <h4>Funciones:</h4>
  <ul>
    <li>🔹 Inspeccionar periódicamente los elementos de la infraestructura TI del Colegio y reportar su estado.
    <br />🔹 Informar a la mesa de servicio sobre novedades identificadas en la infraestructura TI.
    <br />🔹 Investigar, diagnosticar y localizar incidentes relacionados con la infraestructura TI.
    <br />🔹 Ejecutar acciones para resolver incidentes de manera oportuna.
    <br />🔹 Apoyar en el mantenimiento preventivo de equipos de cómputo e impresoras.
    <br />🔹 Brindar asistencia a usuarios en incidentes con equipos, programas y sistemas.
    <br />🔹 Prestar soporte en instalación, configuración y actualización de equipos de cómputo.
    <br />🔹 Participar en la logística de eventos del Colegio y adecuación de locaciones.
    <br />🔹 Participar en actividades de archivo y documentación.
    <br />🔹 Realizar otras funciones asignadas por la autoridad competente.</li>
  </ul>
</Section>

            
          </div>

          {/* Columna derecha */}
          <div className="right-column">
          <Section title="Formación Académica">
              <ul>
                <li>🎓 <strong>Tecnólogo en Análisis y Desarrollo de Software</strong> - SENA (2023 - En curso)</li>
                <li>🎓 <strong>Técnico en Desarrollo de Software</strong> - SENA (2018 - 2019)</li>
                <li>🏫 <strong>Educación Secundaria</strong> - IE Manuela Ayala de Gaitán (2019)</li>
              </ul>
            </Section>
            <Section title="Certificaciones y Cursos">
              <ul>
                <li>📜 Diplomado en Desarrollo de Videojuegos - UNAL (2023)</li>
                <li>🛡️ Ciberseguridad - Ministerio TIC (2023)</li>
                <li>🎨 Manejo de Adobe Illustrator y Photoshop - SENA (2023)</li>
                <li>🗣️ Certificación Inglés A2 - British Council (2024)</li>
                <li>🖥️ C++ Conceptualización - SENA (2024)</li>
                <li>📜 Desarrollo Full Stack - TalentoTech y MinTIC</li>
                <li>🖥️Curso de Excel intermedio avanzado (2024)</li>
              </ul>
            </Section>
            
          </div>
        </div>

        <div className="resume-body">
          {/* Sección de habilidades */}
          <div className="left-column">
            <Section title="Habilidades Técnicas">
              <ul>
                <li>✅ Programación en Java, JavaScript y PHP</li>
                <li>✅ Desarrollo web con HTML, CSS y frameworks</li>
                <li>✅ Bases de datos (MySQL, JSON)</li>
                <li>✅ Control de versiones con Git y GitHub</li>
              </ul>
            </Section>
          </div>

          <div className="right-column">
            <Section title="Otras Habilidades">
              <ul>
                <li>✔️ Trabajo en equipo</li>
                <li>✔️ Proactividad y autonomía</li>
                <li>✔️ Adaptabilidad a nuevas tecnologías</li>
                <li>✔️ Resolución de problemas</li>
                <li>✔️ Comunicación efectiva</li>
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
