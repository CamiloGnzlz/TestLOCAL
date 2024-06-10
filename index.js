fetch('../users/datos.json')

      .then(response => response.json())
      .then(data => { mostrarDatos(data) })
      .catch(error => console.error(error));

      const calcularEdad = (fechaNacimiento) => {
      let hoy = new Date();
      let cumpleanos = new Date(fechaNacimiento);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      let m = hoy.getMonth() - cumpleanos.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
      }
      return edad;
    }
      const mostrarDatos = (data) => {
      let body = ''
      for (let i = 0; i < data.length; i++) {
        let edad = calcularEdad(data[i].fecha_de_nacimiento);
        body += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].nombre}</td>
        <td>${data[i].fecha_de_nacimiento}</td>
        <td>${edad}</td>
      </tr>`
      }
      document.getElementById('insertar-tabla').innerHTML = body;
    }