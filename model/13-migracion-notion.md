# Migración de SYSTEC a Notion

## 🎯 Objetivo

Migrar el sistema de productividad SYSTEC (basado en propiedades temporales de Todoist) a Notion usando **bases de datos relacionadas** y **múltiples fuentes** para mantener la lógica temporal y la clasificación automática.

---

## 📊 Arquitectura de Bases de Datos

### Base de Datos Principal: **Acciones**

Esta es la base de datos central donde viven todas las acciones del sistema.

#### Propiedades Requeridas

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| **Título** | Title | Nombre de la acción |
| **Tipo** | Select | IDEA, META, HÁBITO, TAREA, EVENTO (calculado) |
| **Fecha** | Date | Fecha de ejecución/compromiso |
| **Hora** | Date (con hora) | Hora específica (solo para eventos) |
| **Deadline** | Date | Fecha límite (solo para tareas) |
| **Recurrente** | Checkbox | Si es una acción recurrente |
| **Frecuencia** | Select | @d (diario), @s (semanal), @m (mensual), @a (anual) |
| **Tipo Manual** | Select | Override manual del tipo (opcional) |
| **Horizonte Temporal** | Formula | +Ayer, +Hoy, +Semana, +Mes, +Año (calculado) |
| **Estado** | Select | Activa, Completada, Cancelada |
| **Proyecto** | Relation | Relación con base de datos "Proyectos" |
| **Notas** | Text | Información adicional |

#### Fórmulas Clave

##### 1. Tipo (Clasificación Automática)

```notion
if(
  prop("Tipo Manual") != empty(),
  prop("Tipo Manual"),
  if(
    prop("Hora") != empty(),
    "EVENTO",
    if(
      prop("Deadline") != empty(),
      "TAREA",
      if(
        prop("Recurrente"),
        "HÁBITO",
        if(
          prop("Fecha") == empty() and prop("Deadline") == empty(),
          "IDEA",
          "META"
        )
      )
    )
  )
)
```

**Lógica de precedencia:**
1. Si tiene `Tipo Manual` → usar ese
2. Si tiene `Hora` → EVENTO
3. Si tiene `Deadline` → TAREA
4. Si es `Recurrente` → HÁBITO
5. Si no tiene fecha ni deadline → IDEA
6. Resto → META

##### 2. Horizonte Temporal

```notion
if(
  prop("Fecha") < dateSubtract(now(), 1, "days"),
  "+Ayer",
  if(
    prop("Fecha") == dateSubtract(now(), 0, "days"),
    "+Hoy",
    if(
      prop("Fecha") <= dateAdd(now(), 7, "days"),
      "+Semana",
      if(
        prop("Fecha") <= dateAdd(now(), 30, "days"),
        "+Mes",
        "+Año"
      )
    )
  )
)
```

---

## 🔗 Bases de Datos Relacionadas

### 1. Base de Datos: **Proyectos**

Para gestionar proyectos y exclusiones (equivalente a `!#Z-*` en Todoist).

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| **Nombre** | Title | Nombre del proyecto |
| **Excluido** | Checkbox | Si está fuera del sistema SYSTEC |
| **Acciones** | Relation | Relación con "Acciones" |

### 2. Base de Datos: **Vistas Filtradas**

Base de datos que almacena las vistas predefinidas del sistema.

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| **Nombre Vista** | Title | Nombre de la vista |
| **Tipo Filtro** | Select | Tipo, Horizonte, Operativo |
| **Filtros** | Text | Descripción de los filtros aplicados |

---

## 📋 Vistas por Tipo (Múltiples Fuentes)

### Vista: **IDEA**

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Tipo` = "IDEA"
- `Estado` = "Activa"
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por fecha de creación (más recientes primero)

---

### Vista: **META**

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Tipo` = "META"
- `Estado` = "Activa"
- `Recurrente` ≠ true
- `Hora` = empty
- `Deadline` = empty
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Fecha` (ascendente)

---

### Vista: **HÁBITO**

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Tipo` = "HÁBITO"
- `Estado` = "Activa"
- `Recurrente` = true
- `Hora` = empty
- `Deadline` = empty
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Frecuencia` (diario, semanal, mensual, anual)

---

### Vista: **TAREA**

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Tipo` = "TAREA"
- `Estado` = "Activa"
- `Hora` = empty
- `Deadline` ≠ empty
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Deadline` (ascendente)

---

### Vista: **EVENTO**

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Tipo` = "EVENTO"
- `Estado` = "Activa"
- `Hora` ≠ empty
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Fecha` y `Hora` (ascendente)

---

## ⏱️ Vistas por Horizonte Temporal

### Vista: **+Ayer** (Deuda)

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Horizonte Temporal` = "+Ayer"
- `Estado` = "Activa"
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Fecha` (ascendente - más antiguas primero)

---

### Vista: **+Hoy** (Compromiso Activo)

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Horizonte Temporal` = "+Hoy"
- `Estado` = "Activa"
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Hora` (ascendente), luego por `Tipo`

---

### Vista: **+Semana** (Corto Plazo)

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Horizonte Temporal` = "+Semana"
- `Estado` = "Activa"
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Fecha` (ascendente)

---

### Vista: **+Mes** (Medio Plazo)

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Horizonte Temporal` = "+Mes"
- `Estado` = "Activa"
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Fecha` (ascendente)

---

### Vista: **+Año** (Largo Plazo)

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Horizonte Temporal` = "+Año"
- `Estado` = "Activa"
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Fecha` (ascendente)

---

## 🔧 Vistas Operativas (Filtros Combinados)

### Vista: **Tareas con Deadline Próximo**

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Tipo` = "TAREA"
- `Estado` = "Activa"
- `Deadline` <= dateAdd(now(), 3, "days")
- `Proyecto.Excluido` ≠ true

---

### Vista: **Eventos de Hoy**

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Tipo` = "EVENTO"
- `Estado` = "Activa"
- `Fecha` = today()
- `Proyecto.Excluido` ≠ true

**Orden:**
- Por `Hora` (ascendente)

---

### Vista: **Hábitos Diarios**

**Fuente:** Base de datos "Acciones"

**Filtros:**
- `Tipo` = "HÁBITO"
- `Estado` = "Activa"
- `Frecuencia` = "@d"
- `Proyecto.Excluido` ≠ true

---

## 📐 Estructura de Página Principal

### Dashboard SYSTEC

```
📊 SYSTEC Dashboard
│
├── 🎯 Por Tipo
│   ├── 📝 Ideas
│   ├── 🎯 Metas
│   ├── 🔁 Hábitos
│   ├── ✅ Tareas
│   └── 📅 Eventos
│
├── ⏱️ Por Horizonte
│   ├── ⏪ +Ayer (Deuda)
│   ├── 📌 +Hoy
│   ├── 📆 +Semana
│   ├── 📅 +Mes
│   └── 🗓️ +Año
│
├── 🔧 Operativas
│   ├── Tareas Urgentes
│   ├── Eventos de Hoy
│   └── Hábitos Diarios
│
└── 📁 Proyectos
    └── [Lista de proyectos]
```

---

## 🔄 Flujo de Trabajo Diario

### 1. Captura (IDEA)

- Crear nueva acción en base de datos "Acciones"
- Dejar `Fecha`, `Hora`, `Deadline` vacíos
- Sistema automáticamente la clasifica como **IDEA**

### 2. Decisión

- Agregar `Fecha` → se convierte en **META**
- Agregar `Hora` → se convierte en **EVENTO**
- Agregar `Deadline` → se convierte en **TAREA**
- Marcar `Recurrente` → se convierte en **HÁBITO**

### 3. Ejecución

- Usar vistas filtradas por tipo o horizonte
- Marcar como completada cuando termine

### 4. Revisión Semanal

- Vista "+Ayer" para liquidar deuda
- Vista "+Semana" para planificar próxima semana
- Revisar y ajustar tipos si es necesario

---

## 🎨 Templates de Notion

### Template: Nueva Acción

**Propiedades predefinidas:**
- `Estado` = "Activa"
- `Tipo Manual` = empty (para clasificación automática)
- `Proyecto` = [seleccionar si aplica]

### Template: Evento

**Propiedades predefinidas:**
- `Tipo Manual` = "EVENTO"
- `Hora` = [requerido]
- `Fecha` = [requerido]

### Template: Tarea

**Propiedades predefinidas:**
- `Tipo Manual` = "TAREA"
- `Deadline` = [requerido]
- `Hora` = empty

### Template: Hábito

**Propiedades predefinidas:**
- `Tipo Manual` = "HÁBITO"
- `Recurrente` = true
- `Frecuencia` = [seleccionar]
- `Hora` = empty
- `Deadline` = empty

---

## 🔗 Relaciones y Rollups

### Relación: Acciones → Proyectos

**Rollup en Proyectos:**
- **Acciones Activas:** Count de acciones con `Estado` = "Activa"
- **Próxima Acción:** Min de `Fecha` de acciones activas

### Relación: Proyectos → Acciones

**Rollup en Acciones:**
- **Proyecto Excluido:** Checkbox del proyecto relacionado
- Usar en filtros para excluir proyectos del sistema

---

## 📊 Ventajas de Notion vs Todoist

### ✅ Ventajas

1. **Bases de datos relacionadas** - Mejor gestión de proyectos
2. **Fórmulas avanzadas** - Clasificación automática más flexible
3. **Múltiples vistas** - Mismo dato, diferentes perspectivas
4. **Rollups** - Agregaciones automáticas entre bases de datos
5. **Templates** - Captura rápida y consistente
6. **Notas ricas** - Más contexto por acción
7. **Búsqueda avanzada** - Filtros complejos sin sintaxis especial

### ⚠️ Consideraciones

1. **Recurrencias** - Notion no tiene recurrencia nativa como Todoist
   - **Solución:** Usar templates o automatización externa
2. **Sincronización con calendario** - Requiere integración externa
   - **Solución:** Zapier/Make.com o API de Notion
3. **Rapidez de captura** - Notion es más lento que Todoist
   - **Solución:** Usar templates y atajos de teclado

---

## 🚀 Automatizaciones Recomendadas

### Con Zapier/Make.com

1. **Captura desde email** → Crear acción como IDEA
2. **Recordatorios** → Notificaciones para eventos
3. **Sincronización calendario** → Bidireccional con Google Calendar
4. **Revisión semanal** → Recordatorio automático

### Con API de Notion

1. **Clasificación automática** → Script que actualiza tipos
2. **Horizontes temporales** → Actualización diaria de fórmulas
3. **Limpieza de completadas** → Archivar acciones antiguas

---

## 📝 Checklist de Migración

- [ ] Crear base de datos "Acciones" con todas las propiedades
- [ ] Crear base de datos "Proyectos"
- [ ] Configurar fórmulas de clasificación automática
- [ ] Crear todas las vistas filtradas
- [ ] Configurar templates para cada tipo
- [ ] Migrar acciones existentes desde Todoist
- [ ] Configurar dashboard principal
- [ ] Probar flujo de captura → decisión → ejecución
- [ ] Configurar automatizaciones (opcional)
- [ ] Documentar proceso para el equipo (si aplica)

---

## 🎯 Principios SYSTEC Mantenidos

✅ **Una acción pertenece a un solo tipo** - Garantizado por fórmula  
✅ **La hora implica rigidez** - EVENTO automático  
✅ **El deadline implica presión externa** - TAREA automática  
✅ **La recurrencia implica rutina** - HÁBITO automático  
✅ **Lo no decidido aún es una idea** - IDEA por defecto  
✅ **Sin etiquetas manuales** - Clasificación automática  
✅ **Filtros atemporales** - Vistas estables  
✅ **Excepción humana siempre gana** - Campo `Tipo Manual`

---

**El sistema SYSTEC funciona perfectamente en Notion manteniendo todos sus principios fundamentales.**
