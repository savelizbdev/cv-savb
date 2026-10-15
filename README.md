# Samuel Veliz — Portafolio Profesional 🚀

> **Landing page personal y portafolio interactivo** desarrollado con tecnologías web nativas (**HTML5, CSS3 y JavaScript ES6+**), con un diseño moderno, ultra-rápido, *mobile-first* y listo para desplegar en **GitHub Pages**.

![Vista previa del Portafolio](images/profile.webp)

---

## 👨‍💻 Sobre Samuel Antonio Veliz Benavides

**Ingeniero de Sistemas** graduado de la *Escuela Militar de Ingeniería (EMI)* en La Paz, Bolivia.  
Especialista en desarrollo web Full Stack (**React, TypeScript, FastAPI, Python**), desarrollo de aplicaciones móviles multiplataforma (**Flutter**), soluciones con **Sistemas Multiagentes de IA** e inteligencia de negocios (**Power BI**).

- 📍 **Ubicación:** La Paz, Bolivia 🇧🇴
- 📧 **Correo:** [samuelantoni2002@gmail.com](mailto:samuelantoni2002@gmail.com)
- 💬 **WhatsApp:** [+591 71832939](https://wa.me/59171832939)
- 💼 **LinkedIn:** [samuel-veliz](http://www.linkedin.com/in/samuel-veliz)
- 🐙 **GitHub:** [@savelizbdev](https://github.com/savelizbdev)

---

## ✨ Características de la Landing Page

- **📱 Diseño Mobile-First & Responsive:** Experiencia fluida y adaptada tanto a dispositivos móviles como a pantallas de escritorio.
- **🎨 Estética Moderna:** Interfaz con efectos de *glassmorphism*, bordes con gradientes sutiles y micro-interacciones.
- **🌗 Selector de Tema (Dark / Light Mode):** Soporta modo oscuro por defecto con opción de alternar a modo claro y persistencia en `localStorage`.
- **⚡ Carga Instantánea (Zero Dependencies):** Construido sin frameworks pesados ni dependencias externas; ideal para máxima velocidad y SEO en GitHub Pages.
- **📂 Filtro Interactivo de Proyectos:** Filtrado dinámico por categorías: *Todos*, *IA & Web*, *Mobile*, y *BI & Datos*.
- **📋 Copiado Rápido al Portapapeles:** Botón interactivo con notificación flotante (toast) para copiar el correo electrónico con un solo toque o clic.
- **📄 Descarga de Currículum en PDF:** Botón directo en Hero, menú y Sobre Mí para descargar el archivo `CV_Samuel_Veliz.docx.pdf`.
- **🔗 Integración de Enlaces Reales:** Enlaces a repositorios de GitHub, plataforma en producción (Luci IA) y contacto directo a WhatsApp.

---

## 🗂️ Secciones Incluidas

1. **Hero / Inicio:** Foto de perfil, disponibilidad laboral en tiempo real, resumen de especialidades, botones de llamado a la acción y métricas destacadas.
2. **Sobre Mí:** Resumen del perfil profesional y 4 pilares de especialización (Full Stack, Mobile, Multiagentes & IA, Datos & BI).
3. **Experiencia Profesional:** Línea de tiempo interactiva con logos oficiales de instituciones y empresas:
   - **Solidar Suisse (Proyecto Fuerza Joven):** Mantenimiento técnico y soporte de Luci IA (React, FastAPI, Supabase).
   - **ECONOTEC SRL:** Desarrollo Full Stack (CodeIgniter, PostgreSQL) de módulos para la clínica veterinaria ANIMALL.
   - **JCI Empresarios La Paz (Activa Mujer):** Despliegue en AWS EC2, SSL y capacitación en la plataforma Luci IA.
   - **JCI Empresarios La Paz (Tesista):** Arquitectura e implementación de plataforma multiagente con Google ADK y FastAPI.
   - **Ministerio de Defensa de Bolivia:** Digitalización del control de dotaciones de las FF.AA. con Flutter Web y Firebase.
4. **Proyectos Destacados:**
   - 🏆 **DestinIA (Build with AI):** *Mención Especial a Mejor Presentación*. Generación de landing pages con scraping y LLMs.
   - 🚀 **Plataforma Ambiental NASA Space Apps:** *5° Lugar*. Proyección y concientización sobre pérdida de áreas verdes.
   - 🟢 **Luci IA (Producción):** Plataforma para incubadoras con diagnóstico automatizado por multiagentes ([luci.enkaigroup.com](https://luci.enkaigroup.com/)).
   - 📱 **Contador de Push-Ups & Squats:** App móvil en Flutter con Google ML Kit para reconocimiento de posturas.
   - 👾 **Juego Móvil de Combate Espacial:** Modos PvP y PvE con lógica de IA oponente.
   - 📊 **Dashboards en Power BI:** Modelado dimensional, ETL y fórmulas DAX para análisis empresarial.
5. **Habilidades & Tecnologías:** Agrupadas en Lenguajes (TypeScript, Python, Dart, SQL, PHP), Web & Backend, Mobile y Analítica / Cloud.
6. **Educación & Certificaciones:** Licenciatura en la EMI y certificaciones en SQL, Google ADK, Power BI, Flutter y Python.
7. **Contacto Directo:** Enlaces directos a WhatsApp, correo con copiado de un clic, LinkedIn y GitHub.

---

## 🛠️ Stack Tecnológico

- **HTML5:** Semántica estricta, accesibilidad (WAI-ARIA) y metadatos Open Graph para compartir en redes sociales.
- **CSS3 (Vanilla):** CSS Custom Properties (variables), Flexbox, CSS Grid, Media Queries y transiciones optimizadas por GPU.
- **JavaScript (Vanilla ES6+):** Control del drawer móvil, switch de temas, observador de scroll (`IntersectionObserver`) y filtro de proyectos.

---

## 🚀 Despliegue Automatizado con GitHub Actions

El proyecto cuenta con un workflow automatizado en [deploy.yml](file:///.github/workflows/deploy.yml) que despliega la landing page a **GitHub Pages** en cada actualización de la rama `main`.

### Activación en tu repositorio (única vez):
1. Entra a tu repositorio: [github.com/savelizbdev/cv-savb](https://github.com/savelizbdev/cv-savb)
2. Ve a la pestaña **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
3. En la sección **Build and deployment > Source**, cambia de *Deploy from a branch* a **GitHub Actions**.
4. ¡Listo! El workflow se encargará de compilar y desplegar automáticamente.

Tu portafolio estará disponible en:  
🌐 **[https://savelizbdev.github.io/cv-savb/](https://savelizbdev.github.io/cv-savb/)**

---

## 💻 Visualización Local

Para probarlo localmente, simplemente abre `index.html` en tu navegador o levanta un servidor estático rápido:

```bash
# Con Python 3
python -m http.server 8000

# O con extensiones como Live Server en VS Code / IDE
```

Luego abre [http://localhost:8000](http://localhost:8000) en tu navegador.
