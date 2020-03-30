window.onload = function() {
    var border = 350;
    var wrap = document.getElementById('wrapper');
    wrap.style.minHeight = window.innerHeight-48+ 'px';
    var projects = document.getElementsByClassName('project-info');
    var links = document.getElementsByClassName('project-link');
    var role = document.getElementById('role');
    var name = document.getElementById('name');

    changecol = function(input,output){
        return ((input - output)*linkcolor + output);
    }

    var animate = function(e) {
            x = ((e.clientX/window.innerWidth)*2-1)*45;
            y = ((e.clientY/window.innerHeight)*2-1)*45;
            onetozero = Math.abs((e.clientX/(window.innerWidth-border))-1);
            margin = (e.clientX/window.innerHeight)*580;
            margintop = Math.abs((e.clientY/(window.innerHeight))-1)*12;
            scale = onetozero;
            rotate = onetozero*45;
            variable = onetozero*1000;
            letter = onetozero*45;
            linkcolor = e.clientX/(window.innerWidth-border);
            wrap.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
            if (e.clientX<window.innerWidth-border) {
                for (i=0; i<projects.length; i++) {
                    projects[i].style.transform = 'scale(' + (scale/i + 1) + ')';
                }
                for (i=0; i<links.length; i++) {
                    links[i].style.transform = 'rotate(' + (rotate/i) + 'deg)';
                    links[i].style.marginTop =  margintop + 'px';
                }
                //role.style.letterSpacing = letter - 0.4 + 'px';
                //name.style.color = 'rgb(' + changecol(1,198) + ', ' + changecol(153,1) + ', ' + changecol(68,131) + ')';
            } else {
                for (i=0; i<projects.length; i++) {
                    projects[i].style.transform = 'scale(' + 1 + ')';
                }
                for (i=0; i<links.length; i++) {
                    links[i].style.transform = 'rotate(' + 0 + 'deg)';
                }
                //role.style.letterSpacing = - 0.4 + 'px';
                //name.style.color = 'rgb(1,153,68)';
            }
            wrap.style.marginLeft = margin + 'px';
            //name.style["font-variation-settings"] = "'wght' " + variable;
    }

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile){
        window.addEventListener('mousemove',animate);
    } else {
        for (i=0; i<projects.length; i++) {
            projects[i].style.transform = 'scale(' + 1 + ')';
            projects[i].style.width = '100%';
        }
    }
};