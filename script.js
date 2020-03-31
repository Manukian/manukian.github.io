window.onload = function() {
    var border = window.innerWidth*0.26;
    var margk = 0.95;
    var margtopk = window.innerHeight*0.02;
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
            margin = e.clientX*margk;
            margintop = Math.abs((e.clientY/(window.innerHeight))-1)*margtopk;
            scale = onetozero;
            rotate = onetozero*45;
            //variable = onetozero*1000;
            //letter = onetozero*45;
            linkcolor = e.clientX/(window.innerWidth-border);
            wrap.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
            if (e.clientX<window.innerWidth-border) {
                for (i=0; i<projects.length; i++) {
                    projects[i].style.transform = 'scale(' + (scale/i + 1) + ')';
                }
                for (i=0; i<links.length; i++) {
                    links[i].style.transform = 'rotate(' + (rotate/i) + 'deg)';
                    links[i].style.marginTop =  margintop + 'px';
                    links[i].style.width = 'auto';
                }
                wrap.style.marginLeft = margin + 'px';
                //role.style.letterSpacing = letter - 0.4 + 'px';
                //name.style.color = 'rgb(' + changecol(1,198) + ', ' + changecol(153,1) + ', ' + changecol(68,131) + ')';
            } else {
                for (i=0; i<projects.length; i++) {
                    projects[i].style.transform = 'scale(' + 1 + ')';
                }
                for (i=0; i<links.length; i++) {
                    links[i].style.transform = 'rotate(' + 0 + 'deg)';
                    links[i].style.width = '100%';
                }
                wrap.style.marginLeft = (window.innerWidth-border)*margk + 'px';
                console.log(wrap.innerWidth);
                //role.style.letterSpacing = - 0.4 + 'px';
                //name.style.color = 'rgb(1,153,68)';
            }
            //name.style["font-variation-settings"] = "'wght' " + variable;
    }

    var touchanimate = function(e) {
        e.preventDefault();
        var touch = e.touches[0];
        x = ((touch.clientX/window.innerWidth)*2-1)*45;
        y = ((touch.clientY/window.innerHeight)*2-1)*45;
        onetozero = Math.abs((touch.clientX/(window.innerWidth-border))-1);
        margin = touch.clientX*margk;
        margintop = Math.abs((touch.clientY/(window.innerHeight))-1)*margtopk;
        scale = onetozero;
        rotate = onetozero*45;
        linkcolor = touch.clientX/(window.innerWidth-border);
        wrap.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
        if (touch.clientX<window.innerWidth-border) {
            for (i=0; i<projects.length; i++) {
                projects[i].style.transform = 'scale(' + (scale/i + 1) + ')';
            }
            for (i=0; i<links.length; i++) {
                links[i].style.transform = 'rotate(' + (rotate/i) + 'deg)';
                links[i].style.marginTop =  margintop + 'px';
                links[i].style.width = 'auto';
            }
            wrap.style.marginLeft = margin + 'px';
        } else {
            for (i=0; i<projects.length; i++) {
                projects[i].style.transform = 'scale(' + 1 + ')';
            }
            for (i=0; i<links.length; i++) {
                links[i].style.transform = 'rotate(' + 0 + 'deg)';
                links[i].style.width = '100%';
            }
            wrap.style.marginLeft = (window.innerWidth-border)*margk + 'px';
            console.log(wrap.innerWidth);
        }
}

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile || (window.innerWidth < 1080)){
        window.addEventListener('touchmove',touchanimate);
    } else {
        window.addEventListener('mousemove',animate);
        document.addEventListener('mouseleave',function(){
            wrap.style.opacity = '0.1';
            wrap.style.transition = 'opacity 0.3s';
        });
        document.addEventListener('mouseenter',function(){
            wrap.style.opacity = '1';
            wrap.style.transition = 'opacity 0.6s';
        });
    }
};