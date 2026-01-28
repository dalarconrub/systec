# Sistema de Timeboxing Bidimensional  

## Meta – Acción – Resultado (MAR) / Goal – Action – Outcome (GAO)  

Este documento define el sistema **Meta–Acción–Resultado (MAR)** —*Goal–Action–Outcome (GAO)*— y su integración con un modelo de **timeboxing bidimensional (macro y micro)**, aplicado a los elementos de SYSTEC: **eventos, hábitos, tareas y metas**.

Las **acciones** constituyen la **única unidad ejecutable** del sistema.

---

## 1. Marco conceptual del sistema MAR / GAO

| Español | Inglés | Función |
|--------|--------|---------|
| **Meta** | Goal | Dirección y propósito |
| **Acción** | Action | Ejecución concreta |
| **Resultado** | Outcome | Evidencia de avance |

> Nada se ejecuta sin convertirse en acción.  
> Nada se evalúa sin producir resultados.

En SYSTEC:

- Las **metas** corresponden a **intenciones de plazo medio/largo** (con deadline).  
- Las **tareas** son trabajo flexible con fecha.  
- Las **acciones** son unidades atómicas que ocupan bloques de tiempo.  
- Los **resultados** se derivan de acciones ejecutadas de forma consistente.

---

## 2. Definición general del timeboxing

El sistema se estructura en dos niveles complementarios:

- **Macro-timeboxing**: gobierna metas, prioridades y revisiones.
- **Micro-timeboxing**: organiza la ejecución diaria en bloques indivisibles.

La ejecución **solo ocurre en el nivel micro** y **solo mediante acciones**.

---

## 3. Macro-timeboxing (nivel estructural)

El macro-timeboxing define **cuándo se planifica, revisa y gobierna** cada elemento, sin asignación horaria concreta.

### 3.1 Escalas temporales

| Escala | Función |
|--------|--------|
| Diaria | Ejecución |
| Semanal | Priorización |
| Mensual | Consolidación |
| Anual | Dirección estratégica |

### 3.2 Clasificación por tipo de elemento

| Tipo (SYSTEC) | Escala macro dominante |
|---------------|------------------------|
| Eventos | Diaria / Semanal |
| Hábitos | Diaria / Semanal / Anual |
| Tareas | Diaria / Semanal |
| Metas | Mensual / Anual |

El macro-timeboxing **clasifica**, no fragmenta.

---

## 4. Micro-timeboxing (nivel operativo)

La jornada se divide en **bloques indivisibles de 30 minutos**, que constituyen la unidad mínima de compromiso.

### 4.1 Bloques

- Un bloque = 30 minutos.  
- Un bloque se asigna a **una acción**.  
- Todo bloque debe cerrarse con un **estado explícito**.

> En SYSTEC, los **eventos** ocupan bloques directamente;  
> las **metas y tareas** generan acciones que ocupan bloques.

---

## 5. Acciones (Actions)

### 5.1 Definición

Una **acción (action)** es una unidad **ejecutable, estimable y trazable** que puede realizarse en uno o más bloques de 30 minutos.

> Solo las acciones pueden ocupar bloques.

Las acciones proceden de:

- **Metas** (vía descomposición)  
- **Tareas** (vía atomicidad)

En Todoist, esto se implementa como **tareas atómicas** (sin subtareas internas de alto nivel conceptual).

---

## 6. Tipos de elementos y reglas

### 6.1 Eventos (Events)

**Características**

- Fecha y hora obligatorias.  
- Duración conocida.

**Reglas**

- Los eventos **reservan bloques automáticamente** en el calendario mental del día.  
- No generan acciones adicionales.  
- No compiten por priorización con acciones: son compromisos rígidos.

Ejemplo:  
Evento 10:00–11:30 → 3 bloques bloqueados.

---

### 6.2 Hábitos (Habits)

**Características**

- Fecha de repetición.  
- Sin hora fija.

**Reglas**

- Cada hábito ocupa **1 bloque por ocurrencia**.  
- No se consideran acciones (son rutina, no proyecto).  
- Se asignan **antes que las acciones** derivadas de metas/tareas.

---

### 6.3 Metas (Goals)

**Características**

- Fecha de inicio (opcional).  
- Fecha límite obligatoria (deadline).

**Regla fundamental**

> Las metas **no se ejecutan directamente**.

Proceso:

1. La meta se descompone en **acciones**.  
2. Las acciones se estiman en bloques.  
3. Los bloques se ejecutan en el día.

Las metas gobiernan la dirección;  
las acciones materializan el avance.

---

### 6.4 Tareas (Tasks)

**Características**

- Fecha de inicio.  
- Alcance limitado.

**Reglas**

- Toda tarea debe convertirse en **una o varias acciones**.  
- Cada acción se estima en **n bloques**.  
- No se recomiendan más de **3 bloques consecutivos** por acción.

---

## 7. Algoritmo diario de planificación

La asignación de bloques sigue un **orden estricto**:

1. **Eventos** (bloques reservados).  
2. **Hábitos**.  
3. **Acciones derivadas de metas activas**.  
4. **Acciones derivadas de tareas**.

Si no quedan bloques libres, **no se planifica nada más**.

Este algoritmo convive con los **horizontes temporales** de SYSTEC:

- Los horizontes (+->Hoy, -+>1 Día, etc.) dicen **cuándo vive** cada compromiso.  
- El timeboxing MAR/GAO dice **en qué bloques concretos** se ejecuta.

---

## 8. Estados de cierre de bloque

Todo bloque asociado a una acción debe cerrarse en uno de estos estados:

- ✅ Completado (*Completed*).  
- 🔁 Migrado (*Migrated*, con justificación).  
- ❌ Cancelado (*Cancelled*, con causa).

Estos estados son la base para derivar métricas y resultados.

---

## 9. Resultados (Outcomes)

Un **resultado (outcome)** es la **agregación evaluable** de acciones ejecutadas.

> Resultado ≠ acción completada.  
> Resultado = **conjunto coherente de acciones ejecutadas con eficacia**.

Ejemplos:

- “Preparar informe trimestral enviado” puede requerir 6–8 bloques ejecutados en acciones distintas.  
- “Dominar un tema” se evidencia por bloques recurrentes de estudio + producción.

---

## 10. Métricas derivables

Al combinar SYSTEC + MAR/GAO se pueden obtener métricas como:

- Acciones planificadas vs ejecutadas.  
- Bloques por acción.  
- % de bloques completados.  
- Tasa de migración.  
- Distribución de acciones por meta / tarea / horizonte.  
- Carga de trabajo por día / semana / mes.

---

## 11. Principios del sistema MAR / GAO

- Las **metas dirigen**, las **acciones ejecutan**, los **resultados evidencian**.  
- El tiempo se compromete en **bloques**, no en intenciones vagas.  
- La sobreplanificación está prohibida: no se asignan más bloques de los disponibles.  
- Todo avance debe ser **medible y revisable**.  
- Los horizontes temporales de SYSTEC y el timeboxing MAR/GAO se usan juntos, nunca en conflicto.

---

## 12. Notas de implementación

El sistema MAR/GAO es agnóstico de herramienta y puede implementarse sobre:

- **Obsidian** (Markdown + propiedades).  
- **Notion** (bases relacionales).  
- **Todoist** (acciones como tareas atómicas dentro del marco SYSTEC).

En el contexto de SYSTEC:

- Los **tipos temporales** (Evento, Hábito, Meta, Tarea, Idea) definen **qué es** cada elemento.  
- Los **horizontes y bandejas** definen **cuándo vive**.  
- MAR/GAO y el **timeboxing bidimensional** definen **cómo se ejecuta y cómo se mide**.

El sistema **Meta–Acción–Resultado / Goal–Action–Outcome** se convierte así en el **marco único de ejecución y evaluación** sobre la ontología temporal de SYSTEC.

