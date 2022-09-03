Ejericio1:
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

ejericio2:
Dado el array [1, 23, 33, 44, 54, 12, 11, 9000, 7, 6, 5, 22, "coco", 30, "pepe"] , realizar un loop que identifique que valores son pares , cuales impares, y cuales no se puede calculr esto. 

ejecicio3:
hacer una funcion que acepte como parametos los simbolos (+ o -) y 2 numeros, y que devuelva la suma o la resta dependiendo del simbolo que se le pase. pista --> function caluclate(symbol, n1, n2)

ejercios4:
hacer una funcion que sume todos los numeros multiplo de 3 entre 2 numeros que se pacen por parametro.
pista --> multipl3 (n1, n2) 