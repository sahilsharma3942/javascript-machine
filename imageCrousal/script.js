let index =0;
        const prevBtn = document.querySelector(".prevBtn");
        const nextBtn = document.querySelector(".nextBtn");
        const container =  document.querySelector(".container");
        const infiniteScroll = document.querySelector("#infiniteScroll");
        const dots = document.querySelectorAll(".dots input");
        
        function updateSlider(){
            container.style.transform = `translateX(${-index*400}px)`;
            dots.forEach((dot,i)=>{
                if(i===index){
                    dot.disabled=false;
                    dot.checked=true;
                }else{
                    dot.checked=false;
                    dot.disabled=true;
                }
            })

        }
        prevBtn.addEventListener("click",function(){
            
            index--;
            if(index<0){
                if(infiniteScroll.checked){
                    index=4;
                }else{
                    index=0;
                }
            };
            updateSlider();
        });
        nextBtn.addEventListener("click",function(){
            index++;
            if(index>4){
                if(infiniteScroll.checked){
                    index=0;
                }else{
                    index=4;
                }
            };
            updateSlider();
        });

        updateSlider();