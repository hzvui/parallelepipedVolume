    // добавление в историю
    function addToHistory(volume) {
      const history = document.getElementById('history');
      if (history.innerText === 'Нет сохранённых построений') {
        history.innerText = '';
      }
      const item = document.createElement('div');
      item.className = 'history-item';
      item.textContent = 'Объём: ' + volume;
      history.appendChild(item);
    }