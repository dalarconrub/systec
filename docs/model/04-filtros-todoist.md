# Filtros en Todoist

## Idea
no date & no deadline

## Meta

> **Nota:** Se usa **doble negación `!!no time`** por un comportamiento específico del parser de filtros de Todoist. Lógicamente es equivalente a `no time`, pero **debe escribirse así** para que siempre funcione como se espera.

!recurring & !!no time & !no deadline

## Hábito
recurring & no time & no deadline

## Tarea
no time & !no deadline

## Evento
!no time


## Filtro de contenidos guardados o categorias no revisables
(!#Z-* & !search:*) 

Por ejemplo en Tarea:
(!#Z-* & !search:*) & (no time & !no deadline)



# SYSTEC — Filtros temporales de horizonte

---

## 1. Objetivo de los filtros temporales

SYSTEC define **filtros temporales de horizonte** para responder a una única pregunta operativa:

> **¿Cuándo debe atenderse esta acción?**

Estos filtros **no clasifican el tipo** de acción  
(eso lo hacen los filtros SYSTEC: Idea, Meta, Tarea, Hábito, Evento).

Son **vistas de tiempo**, no de ontología.

---

## 2. Horizontes temporales definidos

SYSTEC utiliza cinco horizontes temporales, **mutuamente excluyentes**:

- **+->Hoy** → deuda temporal y compromiso inmediato  
- **-+>1 Día** → compromiso de mañana  
- **+->1 Semana** → corto plazo  
- **+->1 Mes** → medio plazo  
- **+->1 Año** → largo plazo  

---

## 3. Principio de exclusividad

Una acción **solo puede pertenecer a un horizonte a la vez**.

Jerarquía temporal:

```

+->Hoy → -+>1 Día → +->1 Semana → +->1 Mes → +->1 Año

````

Cada filtro **excluye implícitamente** a los anteriores.

---

## 4. Filtro +->Hoy

### Definición
Acciones que **debían haberse realizado antes de hoy** o que deben ejecutarse **hoy o antes de mañana**.

### Filtro Todoist

```text
(!#Z-* & !search:*) & (overdue | due before: +1 day)
```

### Lectura SYSTEC

> Deuda temporal y compromiso inmediato. No se planifica, se liquida.

---

## 5. Filtro -+>1 Día

### Definición

Acciones previstas para **mañana** (desde ayer hasta pasado mañana).

### Filtro Todoist

```text
(!#Z-* & !search:*) & due after: yesterday & due before: +2day
```

### Lectura SYSTEC

> Compromiso de corto plazo, aún flexible pero próximo.

---

## 6. Filtro +->1 Semana

### Definición

Acciones previstas para los **próximos 7 días**, excluyendo hoy y mañana.

### Filtro Todoist

```text
(!#Z-* & !search:*) & due after: today & due before: +7day
```

### Lectura SYSTEC

> Compromisos cercanos, aún flexibles.

---

## 7. Filtro +->1 Mes

### Definición

Acciones previstas para el **resto del mes**, excluyendo esta semana.

### Filtro Todoist

```text
(!#Z-* & !search:*) & (due after: +7 days & due before: +30 days)
```

### Lectura SYSTEC

> Trabajo planificable sin presión inmediata.

---

## 8. Filtro +->1 Año

### Definición

Acciones de **horizonte largo**, sin urgencia operativa.

### Filtro Todoist

```text
(!#Z-* & !search:*) & (due after: +30 days & due before: +365 days)
```

### Lectura SYSTEC

> Intención estratégica, no acción inmediata.

---

## 9. Tabla resumen

| Horizonte     | Filtro Todoist                                                                    | Significado                    |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------ |
| +->Hoy        | `(!#Z-* & !search:*) & (overdue \| due before: +1 day)`                            | Deuda y compromiso inmediato   |
| -+>1 Día      | `(!#Z-* & !search:*) & due after: yesterday & due before: +2day`                    | Compromiso de mañana           |
| +->1 Semana   | `(!#Z-* & !search:*) & due after: today & due before: +7day`                       | Corto plazo                    |
| +->1 Mes      | `(!#Z-* & !search:*) & (due after: +7 days & due before: +30 days)`                | Medio plazo                    |
| +->1 Año      | `(!#Z-* & !search:*) & (due after: +30 days & due before: +365 days)`              | Largo plazo                    |

---

## 10. Relación con SYSTEC

El uso correcto es siempre:

1. **Clasificar por tipo** (SYSTEC)
2. **Visualizar por horizonte** (+->Hoy / -+>1 Día / +->1 Semana / +->1 Mes / +->1 Año)

Ejemplos:

* *Tareas +->Hoy*
* *Eventos +->1 Semana*
* *Hábitos +->1 Mes*

---

## 11. Regla final

> **En SYSTEC, los filtros de tipo dicen qué es una acción.
> Los filtros temporales dicen cuándo vive.**

Nunca se mezclan.


