console.log("im running!");

window.onload = function() {
  console.log("im running onload!");
  setTimeout(function() {
    console.log("im running timeout!");

    var section = $('h4[data-a-target="international-section-header"]').parent().parent().last();
    section.css('visibility', 'hidden');
    section.css('width', '0px');
    section.css('height', '0px');
  }, 1000)
}
// data-a-target='international-section-header'
