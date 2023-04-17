var prevScroll = window.pageYOffset;
window.onscroll = function()
{
  var currentScroll = window.pageYOffset;
  if(prevScroll > currentScroll)
  {
    document.getElementById("navbaar").style.top = "0";
  }
  else
  {
    document.getElementById("navbaar").style.top = "-100px";
  }
  prevScroll = currentScroll;
}

