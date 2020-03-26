const calc = (size, material, option, promocode, result, state) => {
   let   sizeBlock = document.querySelector(size),
         materialBlock = document.querySelector(material),
         optionBlock = document.querySelector(option),
         promocodeBlock = document.querySelector(promocode),
         resultBlock = document.querySelector(result),
         btn = document.querySelector('.button-order');   
   let sum = 0;
   
   const calcFunction = () => {
      resultBlock.style.fontSize = '24px';
      resultBlock.style.padding = '4rem 0.5rem';

      sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionBlock.value)); 

      if (sizeBlock.value == '' || materialBlock.value == '') {
         resultBlock.textContent = 'Выберете первые два поля';
      } else if (promocodeBlock.value === 'IWANTPOPART') {
         resultBlock.textContent = Math.round(sum * 0.7) + 'рублей';
         state.price = Math.round(sum * 0.7) + 'рублей';
      } else {
         resultBlock.textContent = sum + 'рублей';
         state.price = sum + 'рублей';

      }

   };

   

   sizeBlock.addEventListener('change', calcFunction);
   materialBlock.addEventListener('change', calcFunction);
   optionBlock.addEventListener('change', calcFunction);
   promocodeBlock.addEventListener('input', calcFunction);



};

export default calc;