// Generates the table with all of Gerhards compositions,
// out of a json file.
function tableGenerator(json){
  len = Object.keys(json).length;
  for (var i=1; i < len; i++) {

      var row = $("<tr>").addClass();

      row.append($("<td>").addClass("workNumber").text(i));

      var nameInstruments = $("<td>").addClass("nameInstruments");
      nameInstruments.append($("<p>").addClass("workName").text(json[i]['name']));

      var instrumentsText = json[i]['instruments'].join(", ") + "."

      nameInstruments.append($("<p>").addClass("workInstruments").text(instrumentsText));

      row.append(nameInstruments);

      row.append($("<td>").addClass("workDuration").text(json[i]['duration']));
      row.append($("<td>").addClass("workDate").text(json[i]['date']));

      var sample = $("<td>").addClass("sample")
      if (json[i]['sample'] == 'yes'){
        sample.html('<a href="' + '#' + '"> <img src="./images/play_circle.svg" class="play-button" width="50" height="30" alt=""></a>')
      };
      console.log(sample)
      row.append(sample)

      var row2 = row.clone();
      $("#worksTableDe").append(row)
      $("#worksTableEn").append(row2)

    }
}
