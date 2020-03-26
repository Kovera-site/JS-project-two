const changeModalState = (state) => {
   const pictureSize = document.querySelectorAll('#size'),
         pictureMaterial = document.querySelectorAll('#material'),
         pictureOptions = document.querySelectorAll('#options'),
         picturePrice = document.querySelectorAll('.calc-price');

  function bindActionToElems(event, elem, prop) {
     elem.forEach((item, i) => {
        item.addEventListener(event, () => {
           switch (item.nodeName) {
              case 'INPUT':
                  state[prop] = item.value;
                 break;
              case 'SELECT':
                 state[prop] = item.value;
                 break;
           }

           console.log(state);
        });
     });
  }
  

  bindActionToElems('change', pictureSize, 'size');
  bindActionToElems('change', pictureMaterial, 'material');
  bindActionToElems('change', pictureOptions, 'options');
  bindActionToElems('change', picturePrice, 'price');



};

export default changeModalState;