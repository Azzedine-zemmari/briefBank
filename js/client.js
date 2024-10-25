var slides = document.getElementById("slides");


var content = [<div class="slide">
                    <h3>1.Education:</h3>
                    <p>The bank has funded over 1,500 scholarships since 2015, supporting students in pursuing higher education and investing $2 million in local educational programs.</p>
                </div>, <div class="slide">
                    <h3>2. Entrepreneurship:</h3>
                    <p>In the past year, the bank has provided $5 million in loans to 200 local entrepreneurs, facilitating the creation of 300 new jobs and fostering economic growth.</p>
                </div>, <div class="slide">
                    <h3>3. Associations:</h3>
                    <p>The bank has partnered with 50 local associations, contributing $1 million in financial support to various community initiatives, enhancing social impact and driving positive change.</p>
                </div>];


var i = 0;
slides.innerHTML = content[i];
        setInterval(()=>{
    if(i < content.length){
            slides.innerHTML = content[i];
            i++;

       } else{
            i = 0;
            slides.innerHTML = content[i];
        }

    },2000)

    var button_return = document.getElementById("button_return");
    var button_next = document.getElementById("button_next");

    button_return.onclick = ()=>{

        if(i <= 0){
            i = content.length -1;
            slides.innerHTML = content[i];
        }else{
            i -= 1;
            slides.innerHTML = content[i];
        }
    }

    button_next.onclick = ()=>{

        if(i >= content.length -1){
            i = 0;
            slides.innerHTML = content[i];
        }else{
            i += 1;
            slides.innerHTML = content[i];
        }
    }