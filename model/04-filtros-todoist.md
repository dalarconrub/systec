# Filtros en Todoist

## Prefiltro común

Para excluir contenidos archivados o no operativos:

```text
(!#Z-* & !search:*)
```

Todas las variantes de filtros de tipo asumen este prefiltro.

---

## Evento

### Versión sin etiquetas

```text
(!#Z-* & !search:*) & !no time
```

### Versión con etiquetas

```text
(!#Z-* & !search:*) & ((!no time & (!@idea & !@tarea & !@meta & !@habito))  | (!@idea & !@tarea & !@meta & !@habito & @evento))
```

---

## Hábito

### Versión sin etiquetas

```text
(!#Z-* & !search:*) & (no time & recurring)
```

### Versión con etiquetas

```text
(!#Z-* & !search:*) & (((no time & recurring) & (!@idea & !@tarea & !@meta  & !@evento)) | (!@idea & !@tarea & !@meta & @habito & !@evento))
```

---

## Meta

> Nota: se usa **doble negación `!!no time`** por un comportamiento específico del parser de filtros de Todoist.  
> Lógicamente es equivalente a `no time`, pero **debe escribirse así** para que siempre funcione como se espera.

### Versión sin etiquetas

```text
(!#Z-* & !search:*) & (!!no time & !recurring & !no deadline)
```

### Versión con etiquetas

```text
(!#Z-* & !search:*) & (((!!no time & !recurring & !no deadline) & (!@idea & !@tarea & !@habito  & !@evento)) | (!@idea & !@tarea & @meta & !@habito & !@evento))
```

---

## Tarea

### Versión sin etiquetas

```text
(!#Z-* & !search:*) & (no time & !recurring & no deadline & !no date)
```

### Versión con etiquetas

```text
(!#Z-* & !search:*) & (((no time & !recurring & no deadline & !no date) & (!@idea & !@meta & !@habito  & !@evento)) | (!@idea & @tarea & !@meta & !@habito & !@evento))
```

---

## Idea

### Versión sin etiquetas

```text
(!#Z-* & !search:*) & (no date & no deadline & !subtask)
```

### Versión con etiquetas

```text
(!#Z-* & !search:*) & (((no date & no deadline & !subtask) & (!@tarea & !@meta & !@habito  & !@evento)) | (@idea  & !@tarea & !@meta & !@habito & !@evento))
```



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


