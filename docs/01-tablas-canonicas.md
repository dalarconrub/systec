# Tablas canónicas

## Tipos de acción

| Tipo  | Rasgo discriminante                              |
|------|--------------------------------------------------|
| Evento | Con hora                                       |
| Hábito | Recurrente, sin hora, sin deadline             |
| Meta   | No recurrente, sin hora, con deadline          |
| Tarea  | Sin hora, sin deadline, no recurrente, con fecha |
| Idea   | Sin fecha ni deadline                          |

## Filtros canónicos en Todoist

| Tipo  | Filtro base (simplificado)                  |
|------|----------------------------------------------|
| Evento | !no time                                   |
| Hábito | recurring & no time & no deadline          |
| Meta   | !recurring & no time & !no deadline        |
| Tarea  | !recurring & no time & no deadline & !no date |
| Idea   | no date & no deadline                      |

> Para versiones avanzadas con etiquetas (`@evento`, `@habito`, `@meta`, `@tarea`, `@idea`) y prefiltros de archivo/ búsqueda, consulta `model/04-filtros-todoist.md`.  
> Allí también se documenta el uso intencional de **doble negación `!!no time`** en el filtro de Meta debido a un comportamiento específico del parser de Todoist.
