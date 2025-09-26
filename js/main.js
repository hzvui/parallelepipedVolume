function calculateVolume() {
  const inputs = document.querySelectorAll('.inputs input');
  let values = Array.from(inputs).map(input => input.value.trim());

  let hasEmpty = false;
  for (let i = 0; i < values.length; i++) {
      if (values[i] === "") {
          hasEmpty = true;
          break;
      }
  }

  if (hasEmpty) {
      document.getElementById('message').innerHTML =
          '<div class="error" style="color: #6a00ff; margin-top: 15px; font-size: 20px">Значения не должны быть пустыми!</div>';
      return;
  }

  values = values.map(Number);

  // Начало векторов
  let x0 = values[0],
      y0 = values[1],
      z0 = values[2];
  // Концы
  let x1 = values[3],
      y1 = values[4],
      z1 = values[5];
  let x2 = values[6],
      y2 = values[7],
      z2 = values[8];
  let x3 = values[9],
      y3 = values[10],
      z3 = values[11];

  // Вектора a, b, c
  let a = [x1 - x0, y1 - y0, z1 - z0];
  let b = [x2 - x0, y2 - y0, z2 - z0];
  let c = [x3 - x0, y3 - y0, z3 - z0];

  // Считаем длины векторов
  let lena = Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
  let lenb = Math.sqrt(b[0] ** 2 + b[1] ** 2 + b[2] ** 2);
  let lenc = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2);

  let zerovectors = [];
  if (lena == 0) {
      zerovectors.push('1-й');
  }
  if (lenb == 0) {
      zerovectors.push('2-й');
  }
  if (lenc == 0) {
      zerovectors.push('3-й');
  }

  if (zerovectors.length == 0) {
      // Векторное произведение b * c
      let cross = [
          b[1] * c[2] - b[2] * c[1],
          b[2] * c[0] - b[0] * c[2],
          b[0] * c[1] - b[1] * c[0]
      ];

      // Скалярное произведение 
      let scalarTriple = a[0] * cross[0] + a[1] * cross[1] + a[2] * cross[2];

      // |смеш произвед|
      let volume = Math.abs(scalarTriple);

      if (volume == 0) {
          document.getElementById('message').innerHTML =
              '<div class="error" style="color: #6a00ff; margin-top: 15px; font-size: 20px">Векторы не должны лежать в одной плоскости!</div>';
      } else {
          document.getElementById('message').innerHTML =
              '<div class="result" style="color: #6a00ff; margin-top: 20px; font-size: 20px">Объём вашего параллелепипеда: ' + volume.toFixed(2) + ' куб. ед.</div>';
          addToHistory(volume.toFixed(2));
      }
  } 
  else if (zerovectors.length == 1) {
      document.getElementById('message').innerHTML =
          '<div class="error" style="color: #6a00ff; margin-top: 15px; font-size: 20px">Все векторы должны быть ненулевыми! Измените ' + zerovectors[0] + ' вектор!</div>';
      return;
  } 
  else {
      document.getElementById('message').innerHTML =
          '<div class="error" style="color: #6a00ff; margin-top: 15px; font-size: 20px">Все векторы должны быть ненулевыми! Измените ' + zerovectors.join(', ') + ' векторы!</div>';
  }
}