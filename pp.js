
         let previewContainer = document.querySelector('.products-preview');
         let previewBox = previewContainer.querySelectorAll('.priview');
         document.querySelectorAll('.product-container .product').forEach(product =>{
            product.onclick = ()=>{ 

                previewContainer.style.display = 'flex';
                let  name= product.getAttribute('data-name');
            previewBox.forEach(priview =>{
               let target = priview.getAttribute('data-target');
                if(name == target ){
                    priview.classList.add('active');
                }
            });

            };
          
         });
         previewBox.forEach(close =>{
            close.querySelector('.fa-times').onclick = ()=>{
                close.classList.remove('active');
                              previewContainer.style.display = 'none';
            }
         })
   