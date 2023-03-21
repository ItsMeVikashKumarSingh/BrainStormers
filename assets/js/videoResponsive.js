let videoResponsive = (element,opt) => {
    var player = document.getElementById(element);
        opt.ratio = opt.width/opt.height;
    if(window.innerWidth < opt.minwidth && window.innerWidth > opt.mobileBreakpoint) {
        // stay inside the container
        player.style.width  = opt.minwidth+'px';
        player.style.height = (opt.minwidth/opt.ratio)+'px';
    } else if(window.innerWidth > opt.minwidth && window.innerWidth < opt.maxwidth) {
        // resize video beetwen (min)container and defined max-width
        player.style.width  = window.innerWidth+'px';
        player.style.height = (window.innerWidth/opt.ratio)+'px';
    } else if(window.innerWidth <= opt.mobileBreakpoint){
        // resize with mobile proportions
        player.style.width  = window.innerWidth+'px';
        player.style.height = (window.innerWidth/(opt.mobileW/opt.mobileH))+'px';
    }else {
        // defeault sizes
        player.style.width  = opt.maxwidth+'px';
        player.style.height = (opt.maxwidth/opt.ratio)+'px';
    }   
}
