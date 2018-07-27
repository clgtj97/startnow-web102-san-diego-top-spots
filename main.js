$(document).ready(function() {
// write your code here
$.getJSON('./data.json',(function(dats) {


    for (var i = 0;i < dats.length;i++){
        console.log(i);
         indiData = dats[i];
         var a = '<tr>';
         var d = '</tr>';
         a += '<td class=\"nameW\">' + indiData["name"] + '</td>';
         a += '<td class=\"desW\">' + indiData["description"] + '</td>';
         a += '<td class=\"linW\">' + "\<a href=\'" + "https://www.google.com/maps?q=" + indiData["location"] + "\'> CLICK HERE  </a>" + '</td>' + d;
        //  nameJ = $("tr").append("<td> indiData.['name'] </td>");
        //  desJ = $("tr").append("<td> indiData.['description'] </td>");
        //  locJ = $("tr").append("<td> indiData.['location'] </td>");
        $("table").append(a);
        //$("table").css("background-color":"#A0B8E8","border":"3px #0A3997 outset");

        //   trCre;
        //     nameJ;
        //     desJ;
        //     locJ;
         
    }

}));


});
