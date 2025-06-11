let displayText = '';
      function calculate(){
        try {
        const result = eval(displayText);
        displayText = result.toString();
        document.querySelector('.js-para').innerText = displayText;
      } catch {
        document.querySelector('.js-para').innerText = 'Error';
        displayText = '';
      }
        
      }
      function deleteLast() {
      displayText = displayText.slice(0, -1);
      document.querySelector('.js-para').innerText = displayText || '0';
    }
      function press(value){
        displayText += value;
        document.querySelector('.js-para').innerHTML = displayText;

      }
      function clearDisplay() {
      displayText = '';
      document.querySelector('.js-para').innerText = '0';
    }
          function key(val){
        if(event.key === val){
          press(val);
        }
      }