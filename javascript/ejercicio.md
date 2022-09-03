crear una clase Car con las siguientes carateristicas:
- atributos
    - color
    - max_speed
    - speed (siempre de ser instanciado en 0)

- metodos:
    - paint, debe recibir como argumento un color y cambiar el atributo color de la instancia (this.color)
    - speedUp, debe recibir como argumento un numero y este debe modificar a speed (this.speed -= speed)
    - speedDown <-- logica inversa a speedUp (pero si se frena de mas debemos setaear en cero la velocidad)
    - en los 2 casos anteriores, no debe permitir subir la velocidad mas alla a de max_speed (>=) ni debajo del 0. 
    - el constructor debe recibir max_speed (y por default ser 100), color (por d3fault 'WHITE')
crear varias intancias y probar diferentes casos de uso         