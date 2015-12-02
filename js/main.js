var wrap = $(window);

wrap.on("scroll", function(e) {
  e.preventDefault();
  if (this.scrollTop > 147) {
    wrap.addClass("fix-search");
    console.log('hello');
  } else {
    wrap.removeClass("fix-search");
  }
  
});