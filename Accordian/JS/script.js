const accordian = document.getElementsByClassName("accordion-header");
        console.log(accordian);
        for (let i = 0; i < accordian.length; i++) {
            accordian[i].addEventListener("click", function () {
                const allContent = document.querySelectorAll(".accordion-content");
                allContent.forEach((content)=>content.style.display="none")
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            })
        }