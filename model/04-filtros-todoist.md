# Filtros en Todoist

## Idea
no date & no deadline

## Meta
!recurring & no time & no deadline

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

- **+Ayer** → deuda temporal  
- **+Hoy** → compromiso activo  
- **+Semana** → corto plazo  
- **+Mes** → medio plazo  
- **+Año** → largo plazo  

---

## 3. Principio de exclusividad

Una acción **solo puede pertenecer a un horizonte a la vez**.

Jerarquía temporal:

```

+Ayer → +Hoy → +Semana → +Mes → +Año

````

Cada filtro **excluye implícitamente** a los anteriores.

---

## 4. Filtro +Ayer

### Definición
Acciones que **debían haberse realizado antes de hoy** y no se completaron.

### Filtro Todoist
```text
overdue
````

### Lectura SYSTEC

> Deuda temporal. No se planifica, se liquida.

---

## 5. Filtro +Hoy

### Definición

Acciones cuya ejecución corresponde **al día actual**.

### Filtro Todoist

```text
today
```

### Incluye

* Tareas con fecha hoy
* Eventos con hora hoy
* Metas fijadas para hoy

### Excluye

* Acciones vencidas (+Ayer)
* Acciones futuras

---

## 6. Filtro +Semana

### Definición

Acciones previstas para los **próximos días**, excluyendo hoy.

### Filtro Todoist

```text
due after: today & due before: +7 days
```

### Lectura SYSTEC

> Compromisos cercanos, aún flexibles.

---

## 7. Filtro +Mes

### Definición

Acciones previstas para el **resto del mes**, excluyendo hoy y esta semana.

### Filtro Todoist

```text
due after: +7 days & due before: +30 days
```

### Lectura SYSTEC

> Trabajo planificable sin presión inmediata.

---

## 8. Filtro +Año

### Definición

Acciones de **horizonte largo**, sin urgencia operativa.

### Filtro Todoist

```text
due after: +30 days & due before: +365 days
```

### Lectura SYSTEC

> Intención estratégica, no acción inmediata.

---

## 9. Tabla resumen

| Horizonte | Filtro Todoist                                | Significado       |
| --------- | --------------------------------------------- | ----------------- |
| +Ayer     | `overdue`                                     | Deuda             |
| +Hoy      | `today`                                       | Compromiso activo |
| +Semana   | `due after: today & due before: +7 days`      | Corto plazo       |
| +Mes      | `due after: +7 days & due before: +30 days`   | Medio plazo       |
| +Año      | `due after: +30 days & due before: +365 days` | Largo plazo       |

---

## 10. Relación con SYSTEC

El uso correcto es siempre:

1. **Clasificar por tipo** (SYSTEC)
2. **Visualizar por horizonte** (+Ayer / +Hoy / +Semana / +Mes / +Año)

Ejemplos:

* *Tareas +Hoy*
* *Eventos +Semana*
* *Hábitos +Mes*

---

## 11. Regla final

> **En SYSTEC, los filtros de tipo dicen qué es una acción.
> Los filtros temporales dicen cuándo vive.**

Nunca se mezclan.


