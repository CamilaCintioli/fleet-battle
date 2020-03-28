# fleet-battle

## Analisís

- 2 jugadores
- cada jugador no puede conocer el tablero del oponente
- ninguno de los jugadores puede conocer todo el juego
- si el cliente tiene la informacion, no se puede garantizar que el jugador no haga trampa
- necesitamos un servidor que conozca todo el juego y le de a cada jugador solo la informacion que puede conocer


- un cliente (react)
- un servidor (node) que tegna la logica del juego

- la partida tiene un estado
  - el estado tiene dos jugadores y dos tableros
    - cada tablero tiene barcos y disparos

- jugador 1 conoce barcos de tablero 1 y disparos de ambos tableros
- jugador 2 conoce barcos de tablero 2 y disparos de ambos tableros

- el estado del juegos se gobierna por las reglas de la batalla naval
- la batalla naval tiene 3 estados
  - Preparacion: poner barcos. los dos jugaodres en simultaneo.
    - Como jugador quiero poner mis barcos en mi tablero para iniciar el juego.
  - Juego: disparar. lo hace un jugador a la vez, de forma turnada.
    - Como jugador quiero ver los lugares donde disparé para no repetir
    - Como jugador quiero disparar en una coordenada solo si es mi turno para atacar al contrincante
  - Finalizado: se muestra quien gano, y el estado completo del juego.
    - Como jugador quiero ver el estado completo del juego para ver donde estaban los barcos enemigos

## Modelado de estado del juego

```json
{
  "state": "preparation",
  "turn": 0,
  "boards":
    [
      {
        "bombs": [
          {"x": 0, "y": 2}
        ],
        "ships": [
          {"x": 0, "y": 1, "size": 2, "direction": "n"},
          {"x": 0, "y": 1, "size": 2, "direction": "s"},
          {"x": 0, "y": 1, "size": 2, "direction": "e"},
          {"x": 0, "y": 1, "size": 2, "direction": "w"},
        ]
      }, 
      {
        "bombs": [
          {"x": 0, "y": 2}
        ],
        "ships": [
          {"x": 0, "y": 1, "size": 2, "direction": "n"},
          {"x": 0, "y": 1, "size": 2, "direction": "s"},
          {"x": 0, "y": 1, "size": 2, "direction": "e"},
          {"x": 0, "y": 1, "size": 2, "direction": "w"},
        ]
      }, 
    ]
}
```