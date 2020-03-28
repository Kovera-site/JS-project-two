const scrolling = (upSelector) => {
   const upElem = document.querySelector(upSelector);

   window.addEventListener('scroll', () => {
       if(document.documentElement.scrollTop > 1650) {
         upElem.classList.add('animated', 'fadeIn');
         upElem.classList.remove('fadeOut');

       } else {
         upElem.classList.add('fadeOut');
         upElem.classList.remove('fadeIn');
       }
   });

   //scrolling with raf

   let links = document.querySelectorAll('[href^="#"]'),
       spead = 0.3;
      
   links.forEach(link => {
      link.addEventListener('click', function (event) {
         event.preventDefault();

         let widthTop = document.documentElement.scrollTop,
             hash = this.hash,
             toBlock = document.querySelector(hash).getBoundingClientRect().top,
             start = null;
         
         requestAnimationFrame(step);
         
         function step(time) {
            if (start === null) {
               start = time;
            }

            let progress = time - start,
                r = (toBlock < 0 ? Math.max(widthTop - progress/spead, widthTop + toBlock) : 
                Math.min(widthTop + progress/spead, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if(r != widthTop + toBlock){
                   requestAnimationFrame(step);
                } else {
                   location.hash = hash;
                }
         }
      });
   });

   //Pure js scrolling
//    const element = document.documentElement,
//          body = document.body;
   
//    const calcScroll = () => {
//       upElem.addEventListener('click', function(event) {
//          let scrollTop = Math.round(body.scrollTop || element.scrollTop);

//          if(this.hash !=='') {
//             event.preventDefault();
//             let hashElemnt = document.querySelector(this.hash),
//                 hashElemntTop = 0;

//             while (hashElemnt.offsetPerent) {
//                hashElemntTop += hashElemnt.offsetTop;
//                hashElemnt = hashElemnt.offsetPerent;
//             }
//             hashElemntTop = Math.round(hashElemntTop);
//             smoothScroll(scrollTop,hashElemntTop, this.hash);
//          }
//       });
//    };

//    const smoothScroll = (from, to, hash) => {
//       let timeInterval = 1,
//           prevScrollTop,
//           spead;
         
//       if (to > from) {
//          spead = 30;
//       } else {
//          spead = -30;
//       }
   
//       let move = setInterval(function() {
//          let scrollTop = Math.round(body.scrollTop || element.scrollTop);

//          if (
//             prevScrollTop === scrollTop  ||
//             (to > from && scrollTop >= to || 
//             to < from && scrollTop <= to)
//          ) {
//             clearInterval(move);
//             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
//          } else {
//             body.scrollTop += spead;
//             element.scrollTop += spead;
//             prevScrollTop = scrollTop;
//          }
//       }, timeInterval);
//    };

//    calcScroll();

};

export default scrolling;