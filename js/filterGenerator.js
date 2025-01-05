// generates buttons for filtering the works table,
// out of a given list.



function filterGenerator(list){
  len = Object.keys(list).length;
  for (var i=0; i < len; i++){
    var item = $("<a>").addClass("dropdown-item").text(list[i]).attr("href", "#");

    var item2 = item.clone();
    $("#dropDownDe").append(item);
    $("#dropDownEn").append(item2);
  }
}
