
# SYSTEC — Filtros temporales canónicos (documentación)

---

## 1. Propósito de estos filtros

Estos filtros definen **horizontes temporales de auditoría y planificación** en SYSTEC.  
No clasifican el tipo de acción (Idea, Meta, Tarea, Hábito, Evento), sino que responden a:

> **¿En qué horizonte temporal cae esta acción respecto al presente?**

Todos los filtros están pensados para ser:
- claros,
- estables,
- y utilizables directamente en Todoist.

---

## 2. Hasta Ayer

### Nombre SYSTEC
**Hasta Ayer**

### Filtro Todoist
```text
overdue
````

### Definición

Incluye todas las acciones cuya fecha **es anterior a hoy** y no se han completado.

### Lectura SYSTEC

> Deuda temporal acumulada.

### Uso recomendado

* Revisión diaria al comenzar el día
* Detección de sobrecarga o mala planificación
* Replanificación o cancelación consciente

---

## 3. Este Día

### Nombre SYSTEC

**Este Día**

### Filtro Todoist

```text
today
```

### Definición

Incluye todas las acciones asignadas **al día actual**.

### Incluye

* Tareas con fecha hoy
* Eventos con hora hoy
* Metas fijadas para hoy

### Excluye

* Acciones vencidas (Hasta Ayer)
* Acciones futuras

### Lectura SYSTEC

> Compromiso activo.

---

## 4. Esta Semana

### Nombre SYSTEC

**Esta Semana**

### Filtro Todoist

```text
due before: next week
```

### Definición

Incluye todas las acciones asignadas **a cualquier día de la semana actual**,
hasta el inicio de la próxima semana.

### Incluye

* Tareas de lunes a domingo de la semana en curso
* Acciones ya pasadas de esta misma semana

### Excluye

* Acciones de semanas posteriores

### Lectura SYSTEC

> Horizonte semanal natural.

---

## 5. Este Mes

### Nombre SYSTEC

**Este Mes**

### Filtro Todoist

```text
due after: next week & due before: end of month
```

### Definición

Incluye las acciones previstas para **el resto del mes actual**,
excluyendo la semana en curso.

### Incluye

* Acciones del tramo medio del mes
* Compromisos sin urgencia semanal

### Excluye

* Acciones de esta semana
* Acciones de meses posteriores

### Lectura SYSTEC

> Planificación mensual sin presión inmediata.

---

## 6. Este Año

### Nombre SYSTEC

**Este Año**

### Filtro Todoist

```text
due after: end of month & due before: next year
```

### Definición

Incluye acciones previstas para **el resto del año natural**,
más allá del mes actual.

### Incluye

* Objetivos de largo recorrido
* Compromisos estratégicos

### Excluye

* Acciones del mes actual
* Acciones del año siguiente

### Lectura SYSTEC

> Horizonte estratégico anual.

---

## 7. Tabla resumen

| Horizonte SYSTEC | Filtro Todoist                                    |
| ---------------- | ------------------------------------------------- |
| Hasta Ayer       | `overdue`                                         |
| Este Día         | `today`                                           |
| Esta Semana      | `due before: next week`                           |
| Este Mes         | `due after: next week & due before: end of month` |
| Este Año         | `due after: end of month & due before: next year` |

---

## 8. Regla de uso en SYSTEC

El uso correcto siempre sigue este orden:

1. **Clasificar por tipo** (SYSTEC)
2. **Visualizar por horizonte temporal**

Ejemplos:

* *Tareas · Este Día*
* *Eventos · Esta Semana*
* *Metas · Este Año*

---

## 9. Regla final

> **En SYSTEC, los filtros temporales no dicen qué es una acción,
> dicen cuándo entra en juego.**

Nunca se mezclan con la ontología.
