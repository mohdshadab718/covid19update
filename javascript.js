//Fetching Data
fetch();
function fetch() {

    $.get("https://api.covid19api.com/summary",

        function (data) {
            //                    console.log(data['Countries'].length);            

            document.getElementById('global1').innerHTML = data['Global']['TotalConfirmed'];
            document.getElementById('global2').innerHTML = data['Global']['TotalRecovered'];

            document.getElementById('global3').innerHTML = data['Global']['TotalDeaths'];

            //--------------------India Data------------------------------------------

            document.getElementById('ind1').innerHTML = data['Countries'][76]['TotalConfirmed'];
            document.getElementById('ind2').innerHTML = data['Countries'][76]['TotalRecovered'];

            document.getElementById('ind3').innerHTML = data['Countries'][76]['TotalDeaths'];



            //--------------------------------------------------------------------------

            document.getElementById('global4').innerHTML = data['Global']['TotalConfirmed'] - data['Global']['TotalDeaths'] - data['Global']['TotalRecovered'];


            var tbval = document.getElementById('tbval');
            //                console.log(tbval);
            for (var i = 1; i < data['Countries'].length; i++) {
                var x = tbval.insertRow();
                x.insertCell(0);
                tbval.rows[i].cells[0].innerHTML = data['Countries'][i - 1]['Country'];
                tbval.rows[i].cells[0].style.background = '#ff8080';
                tbval.rows[i].cells[0].style.color = '#000';

                x.insertCell(1);
                tbval.rows[i].cells[1].innerHTML = data['Countries'][i - 1]['TotalConfirmed'];
                tbval.rows[i].cells[1].style.background = '#ffe6e6';
                tbval.rows[i].cells[1].style.color = '#000';


                x.insertCell(2);
                tbval.rows[i].cells[2].innerHTML = data['Countries'][i - 1]['TotalRecovered'];
                tbval.rows[i].cells[2].style.background = '#ffcccc';
                tbval.rows[i].cells[2].style.color = '#000';


                x.insertCell(3);
                tbval.rows[i].cells[3].innerHTML = data['Countries'][i - 1]['TotalDeaths'];
                tbval.rows[i].cells[3].style.background = '#ffb3b3';
                tbval.rows[i].cells[3].style.color = '#000';


                //                        x.insertCell(4);
                //                        tbval.rows[i].cells[4].innerHTML = data['Countries'][i-1]['NewConfirmed'];
                //                        tbval.rows[i].cells[4].style.background = '#ffe6e6';
                //                        tbval.rows[i].cells[4].style.color = '#000';
                //                        
                //                        
                //                        x.insertCell(5);
                //                        tbval.rows[i].cells[5].innerHTML = data['Countries'][i-1]['NewRecovered'];
                //                        tbval.rows[i].cells[5].style.background = '#ffcccc';
                //                        tbval.rows[i].cells[5].style.color = '#000';
                //                        
                //                        x.insertCell(6);
                //                        tbval.rows[i].cells[6].innerHTML = data['Countries'][i-1]['NewDeaths'];
                //                        tbval.rows[i].cells[6].style.background = '#ffb3b3';
                //                        tbval.rows[i].cells[6].style.color = '#000';
                //                        

            }

        }
    )
}
//--------------On Scroll Effects-----------------------------------//          

$(document).ready(function () {
    $(window).scroll(function () {
        var topposi = $(document).scrollTop();
        //          console.log(topposi);
        if (topposi > 40) {

            document.getElementById('nav').style.top = "0px";


        }

        if (topposi < 40) {

            document.getElementById('nav').style.top = "-60px";


        }


        if (topposi > 200) {

            document.getElementById('si').style.bottom = '-295px';

        }
        if (topposi > 13300) {
            document.getElementById('si').style.bottom = '0px';
        }


    });



});

//-----------Img On Click----------------//

function down() {

    document.getElementById('si').style.bottom = '-295px';
}

      
      
//---------------------Test corona-------------------//-->

    function test() {

        var name = document.getElementById('name').value;

        var gender = document.getElementById('gender').value;

        var opt1 = document.getElementById('check1').value;

        var opt2 = document.getElementById('check2').value;

        var opt3 = document.getElementById('check3').value;

        var age = document.getElementById('age').value;

        if (name.trim() == "" || age.trim() == "" || age <= 0) {
            alert("Please Fill Details Correctly");
            return false;

        }

        var check1 = document.getElementById("c1").checked;
        var check2 = document.getElementById("c2").checked;
        var check3 = document.getElementById("c3").checked;
        var check4 = document.getElementById("c4").checked;
        var check5 = document.getElementById("c5").checked;
        var check6 = document.getElementById("c6").checked;
        var check7 = document.getElementById("c7").checked;
        var check8 = document.getElementById("c8").checked;

        var val;

        if (check8 == 0) {

            val = 0 + check1 + check2 + check3 + check4 + check5 + check6 + check7;
            if (val == 0) {
                val = 0;
            }
            else {
                val = 100;

            }

        }
        else {
            val = 0;

        }



        var check21 = document.getElementById("c21").checked;
        var check22 = document.getElementById("c22").checked;
        var check23 = document.getElementById("c23").checked;
        var check24 = document.getElementById("c24").checked;
        var check25 = document.getElementById("c25").checked;
        var check26 = document.getElementById("c26").checked;
        var check27 = document.getElementById("c27").checked;
        var result = document.getElementById("result");

        var val2;
        if (check27 == 0) {
            var val2 = 0 + check21 + check22 + check23 + check24 + check25 + check26;
            if (val2 == 0) {
                val2 = 0

            }
            else {

                val2 = 100;
            }

        }

        else {
            val2 = 0;
        }


        //    +parseInt(age)

        var testresult = parseInt(gender) + parseInt(opt1) + parseInt(opt2) + parseInt(opt3) + parseInt(val) + parseInt(val2);


        if (gender = 60) {


            if (age > 0 && age < 60) {
                if (opt1 == 90) {

                    result.value = "Risk is 100%; You need medical checkup right now";
                }

                else {

                    if (testresult == 390 || testresult == 290 || testresult == 300 || testresult == 250 || testresult == 260 || testresult == 350) {
                        result.value = "Risk is 99% You need medical chekcup;";
                    }
                    if (testresult == 190 || testresult == 150 || testresult == 200 || testresult == 160) {
                        result.value = "Risk is 80%";
                    }
                    if (testresult == 100) {
                        result.value = "rsik is 40% you don't need to worry";
                    }
                    if (testresult == 60) {
                        result.value = "Don't Worry Just Follow Lock Donwn And Stay At Home";
                    }

                }
            }
            else {
                if (opt1 == 90) {

                    result.value = "Risk is 100% ; You need extra care contact covid-19 helpline and stay in quarantine;";
                }

                else {

                    if (testresult == 390 || testresult == 290 || testresult == 300 || testresult == 250 || testresult == 350 || testresult == 260) {
                        result.value = "Risk is 99% You need medical chekcup;";
                    }
                    if (testresult == 190 || testresult == 150 || testresult == 200 || testresult == 160) {
                        result.value = "Risk is 100%";
                    }
                    if (testresult == 100) {
                        result.value = "risk is 60% ";
                    }
                    if (testresult == 60) {
                        result.value = "Don't Worry Just Follow Lock Down And Stay At Home";
                    }

                }

            }

        }

        alert(`Hello ${name} Thank You For Using Our Site ;)`);
    }      