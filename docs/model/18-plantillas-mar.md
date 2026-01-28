# Plantillas MAR

## Estructura base y plantillas fundacionales

> **Todo comienza por el manual y las plantillas.  
> El sistema MAR existe **porque se escribe, se usa y se ejecuta** a través de ellas.**

---

## 1. Estructura base del sistema MAR

Estructura mínima recomendada (conceptual y de carpetas):

```text
MAR/
├─ 00_MANUAL/
│  ├─ MAR_Manual_Identidad.md
│  ├─ MAR_Manual_Operacion.md
│
├─ 01_PLANTILLAS/
│  ├─ Plantilla_Meta.md
│  ├─ Plantilla_Accion.md
│  ├─ Plantilla_Resultado.md
│  ├─ Plantilla_Dia.md
│  └─ Plantilla_Semana.md
│
├─ 02_METAS/
├─ 03_ACCIONES/
├─ 04_RESULTADOS/
└─ 99_ARCHIVO/
```

El **manual define**.  
Las **plantillas obligan a ejecutar**.

---

## 2. Manual operativo MAR (núcleo)

### 📘 `MAR_Manual_Operacion.md`

```md
# Manual Operativo MAR  
## Meta – Acción – Resultado

Este documento define cómo se usa el sistema MAR en la práctica diaria.

Principio rector:
> Nada existe en el sistema si no está escrito en una plantilla MAR.

---

## 1. Flujo básico del sistema

1. Se define una **Meta**
2. La meta se traduce en **Acciones**
3. Las acciones se ejecutan en bloques de tiempo
4. La ejecución genera **Resultados**
5. Los resultados retroalimentan metas y acciones

---

## 2. Reglas innegociables

- No hay acciones sin meta o tarea origen
- No hay resultados sin acciones ejecutadas
- El tiempo solo se compromete en acciones
- Todo día debe cerrar con resultados

---

## 3. Unidades del sistema

| Unidad | Función |
|------|--------|
| Meta | Dirección |
| Acción | Ejecución |
| Resultado | Evidencia |
| Día | Contenedor operativo |
| Semana | Contenedor estratégico |

---

## 4. Timeboxing

- Unidad mínima: **30 minutos**
- Un bloque = una acción
- Un bloque debe cerrarse con estado

Estados válidos:
- ✅ Completado
- 🔁 Migrado
- ❌ Cancelado (con causa)

---

## 5. Revisión

- Diaria → resultados
- Semanal → metas y carga
- Mensual → sistema
```

---

## 3. Plantillas fundacionales

### 🟠 Plantilla de META

#### `Plantilla_Meta.md`

```md
---
tipo: meta
estado: activa
fecha_inicio:
fecha_limite:
prioridad: alta | media | baja
---

# META: {{Título de la meta}}

## Descripción
¿Para qué existe esta meta?

## Criterio de éxito
¿Cómo sabré que está lograda?

## Acciones asociadas
- [[Acción - …]]
- [[Acción - …]]

## Restricciones
Tiempo, recursos, dependencias.

## Estado actual
Breve nota de seguimiento.
```

---

### 🔵 Plantilla de ACCIÓN (unidad ejecutable)

#### `Plantilla_Accion.md`

```md
---
tipo: accion
origen: meta | tarea
meta_asociada:
estimacion_bloques: 1
estado: pendiente | en_progreso | cerrada
---

# ACCIÓN: {{Descripción concreta}}

## Definición
¿Qué se hace exactamente?

## Criterio de completado
¿Cuándo se considera hecha?

## Bloques ejecutados
- [ ] Bloque 1
- [ ] Bloque 2

## Incidencias
Bloques migrados o cancelados y causa.

## Resultado esperado
¿Qué debería producir esta acción?
```

---

### ⚪ Plantilla de RESULTADO

#### `Plantilla_Resultado.md`

```md
---
tipo: resultado
fecha:
acciones_origen:
---

# RESULTADO: {{Título}}

## Qué se hizo
Resumen factual de acciones ejecutadas.

## Evidencia
Datos, entregables, enlaces, métricas.

## Valor aportado
¿En qué mejora el sistema?

## Aprendizajes
Qué ajustar para la próxima iteración.
```

---

### 📅 Plantilla de DÍA (timeboxing)

#### `Plantilla_Dia.md`

```md
---
tipo: dia
fecha:
---

# Día {{YYYY-MM-DD}}

## Eventos
- Evento …

## Hábitos
- [ ] Hábito …

## Acciones planificadas
- [ ] [[Acción - …]] (1 bloque)
- [ ] [[Acción - …]] (2 bloques)

## Timeboxing
| Bloque | Acción | Estado |
|------|-------|--------|
| 1 | | |
| 2 | | |
| 3 | | |

## Resultados del día
- [[Resultado - …]]

## Cierre
Evaluación breve del día.
```

---

### 📊 Plantilla de SEMANA

#### `Plantilla_Semana.md`

```md
---
tipo: semana
semana:
---

# Semana {{WW / YYYY}}

## Metas activas
- [[Meta - …]]

## Acciones clave
- [[Acción - …]]

## Resultados obtenidos
- [[Resultado - …]]

## Métricas
- Acciones ejecutadas:
- Bloques completados:
- Bloques migrados:

## Ajustes
Qué cambiar la próxima semana.
```

---

## 4. Principio fundacional (clave)

> **El manual define el sistema.  
> Las plantillas lo fuerzan.  
> El uso diario lo convierte en realidad.**

A partir de aquí, todo lo demás (automatizaciones, KPIs, scripts, dashboards) **es accesorio**.
