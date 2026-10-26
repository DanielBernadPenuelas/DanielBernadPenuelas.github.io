# Valhalla Gym: web completa para un gimnasio

**[Ver la web en vivo →](https://danielbernadpenuelas.github.io/)**

Web de un gimnasio ficticio que cubre todo el recorrido de un cliente real: conocer el gimnasio, registrarse, elegir un plan, pagarlo y entrar en su área privada. La hice con **HTML, CSS y JavaScript sin frameworks**, para dominar las bases sobre las que funcionan React, Angular o Vue.

<!-- Añade aquí una captura o un GIF de la web en móvil y escritorio -->

---

## Qué demuestra este proyecto

| Lo que implementé | Dónde lo uso en un equipo |
|---|---|
| Recorrido completo de usuario: registro → login → pago → área de cliente | Pensar en producto y en conversión, no en pantallas sueltas |
| Diseño responsive para móvil, tablet y escritorio | La mayoría del tráfico web llega desde el móvil |
| Validación de formularios en el cliente | Menos errores y menos abandono en registros y pagos |
| Manejo del DOM y del estado con JavaScript sin librerías | Base sólida para aprender cualquier framework rápido y depurar cuando falla |
| Persistencia de sesión con `localStorage` | Entender el estado en el navegador y sus límites de seguridad |
| 9 páginas con navegación y estilos coherentes | Mantener un proyecto de varias vistas ordenado y consistente |
| Desplegada en GitHub Pages | Entregar algo que funciona y que cualquiera puede abrir, no solo código |

---

## Recorrido del usuario

```
Inicio ──► Crear cuenta ──► Iniciar sesión ──► Clubes / Horarios / Blog
                                                    │
                                                    ▼
                          Área de cliente ◄── Pago ◄── Métodos de pago
```

| Página | Para qué sirve |
|---|---|
| `Valhalla_gym.html` | Portada con promociones y navegación principal |
| `Crearcuenta.html` · `IniciarSesion.html` | Registro y acceso de socios, con validación |
| `Clubes.html` | Sedes y su información |
| `Horario.html` | Horario de clases y actividades |
| `Blog.html` | Artículos de fitness y nutrición |
| `Métodospagos.html` · `Pago.html` | Elección de plan, carrito y confirmación |
| `Área de cliente.html` | Panel del socio: membresía e historial de pagos |

---

## Alcance y límites

Es un **prototipo frontend**: no tiene servidor ni base de datos.

- Los **usuarios y la sesión** se guardan en `localStorage`. Vale para la demo, pero no es seguro para datos reales porque cualquiera puede leerlo o modificarlo desde el navegador.
- Los **pagos están simulados**: no se procesa ningún cobro.

### Qué cambiaría para llevarlo a producción

- **Backend real** con autenticación en el servidor, contraseñas hasheadas (bcrypt) y sesiones con cookies `HttpOnly` o JWT.
- **Pagos con una pasarela** (Stripe o Redsys), sin guardar nunca datos de tarjeta propios.
- **Base de datos** para socios, reservas y pagos.
- **Accesibilidad y SEO:** revisar contraste, navegación con teclado y puntuación de Lighthouse.

---

## Ejecutarlo en local

No necesita instalar nada:

```bash
git clone https://github.com/danielbernadpenuelas/danielbernadpenuelas.github.io.git
# Abre Valhalla_gym.html en el navegador
```

## Stack

HTML5 · CSS3 · JavaScript ES6+ · GitHub Pages

