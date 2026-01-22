# Canvas — Árbol de decisión

```
┌──────────────────────────────┐
│ ¿Tiene hora fija?             │
└──────────────┬───────────────┘
               │
        ┌──────┴───────┐
        │              │
       SÍ             NO
        │              │
    EVENTO      ┌─────────────────────┐
                │ ¿Tiene deadline?     │
                └──────────┬──────────┘
                           │
                   ┌───────┴───────┐
                   │               │
                  SÍ              NO
                   │               │
                TAREA     ┌───────────────────┐
                          │ ¿Es recurrente?    │
                          └────────┬──────────┘
                                   │
                           ┌───────┴───────┐
                           │               │
                          SÍ              NO
                           │               │
                        HÁBITO           META
```

> Si no tiene fecha ni deadline → IDEA
