  function evalua() {
        var texto = document.getElementById('cadena').value;
        var mensaje = '';
        var Mayusculas = false;
        var Minusculas = false;


       for (var i = 0; i < texto.length; i++) {
            if (texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase()) {
                mensaje = 'La cadena de caracteres "'+ texto +'" contiene solamente Mayúsculas.';
                Mayusculas = true;
            }
            if (texto[i] === texto[i].toLowerCase() && texto[i] !== texto[i].toUpperCase()) {
                 mensaje = 'La cadena de caracteres "'+ texto + '" contiene solamente Minusculas.';
                 Minusculas = true;
            }
        }

        if(Mayusculas==Minusculas){
            mensaje = 'La cadena de caracteres "'+ texto + '" contiene Mayusculas y Minusculas.';
        }
       
        document.getElementById('parrafo').innerText = mensaje;
    }