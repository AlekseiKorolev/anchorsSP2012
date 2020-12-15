//соответствие диаметров болтов типам
function checkType(event) {
  typeA = event.value;
  if (
    typeA == "с отгибом" ||
    typeA == "прямой" ||
    typeA == "конический (распорный)"
  ) {
    for (i = 0; i < 17; i++) {
      if (i < 8) {
        document.getElementById("diamA").options[i].disabled = false;
      } else {
        document.getElementById("diamA").options[i].disabled = true;
      }
      document.getElementById("diamA").options[3].selected = true;
    }
  } else if (typeA == "с анк.плитой глухой") {
    for (i = 0; i < 17; i++) {
      document.getElementById("diamA").options[i].disabled = false;
    }
  } else if (typeA == "с анк.плитой съёмный") {
    for (i = 0; i < 17; i++) {
      if (i < 8) {
        document.getElementById("diamA").options[i].disabled = true;
      } else {
        document.getElementById("diamA").options[i].disabled = false;
      }
      document.getElementById("diamA").options[8].selected = true;
    }
  }
}
//проверка всех данных при вводе
function CheckAll(event) {
  if (event.value == 0) {
    event.className = "error";
    document.getElementById("calcRes").innerHTML =
      '<div class="warningTitle">Введены не все исходные данные</div>';
  } else if (event.id == "c" || event.id == "ls") {
    if (
      menuResult == 0 &&
      (document.getElementById("ls").value.length == 0 ||
        document.getElementById("c").value.length == 0)
    ) {
    } else {
      if (
        document.getElementById("c").value * 2 >
        document.getElementById("ls").value
      ) {
        document.getElementById("c").className = "error";
        document.getElementById("ls").className = "error";
        document.getElementById("calcRes").innerHTML =
          '<div class="warningTitle">Введены не все исходные данные</div>';
      } else {
        document.getElementById("c").className = "";
        document.getElementById("ls").className = "";
        InputAll();
      }
    }
  } else if (event.id == "b" || event.id == "h") {
    if (
      menuResult == 1 &&
      (document.getElementById("h").value.length == 0 ||
        document.getElementById("b").value.length == 0)
    ) {
    } else {
      if (
        document.getElementById("b").value * 2 >
        document.getElementById("h").value
      ) {
        document.getElementById("b").className = "error";
        document.getElementById("h").className = "error";
        document.getElementById("calcRes").innerHTML =
          '<div class="warningTitle">Введены не все исходные данные</div>';
      } else {
        document.getElementById("b").className = "";
        document.getElementById("h").className = "";
        InputAll();
      }
    }
  } else if (event.value.length != 0) {
    event.className = "";
    var k = event.value;
    l = "";
    for (i = 0; i <= k.length; i++) {
      if (k[i] == ",") {
        l += ".";
      } else if (
        k[i] == 0 ||
        k[i] == 1 ||
        k[i] == 2 ||
        k[i] == 3 ||
        k[i] == 4 ||
        k[i] == 5 ||
        k[i] == 6 ||
        k[i] == 7 ||
        k[i] == 8 ||
        k[i] == 9
      ) {
        l += k[i];
      } else if (k[i] == ".") {
        l += ".";
      } else if (
        i == 0 &&
        k[i] == "-" &&
        (event.id == "N" || event.id == "Nmin")
      ) {
        l += "-";
      } //минус для силы N
    }
    event.value = l;
    InputAll();
  } else {
    event.className = "error";
    document.getElementById("calcRes").innerHTML =
      '<div class="warningTitle">Введены не все исходные данные</div>';
  }
}

function InputAll() {
  document.getElementById("calcRes").innerHTML =
    '<div class="warningTitle">Введены не все исходные данные</div>'; //очистка
  //корректировка исходных данных
  if (menuResult == 0) {
    document.getElementById("trNoColon").hidden = true;
    document.getElementById("trPcheck").hidden = true;
    document.getElementById("trSumyi").hidden = true;
    document.getElementById("try1").hidden = true;
    document.getElementById("trQy").hidden = true;
    document.getElementById("trb").hidden = true;
    document.getElementById("trh").hidden = true;
    document.getElementById("trls").hidden = false;
    document.getElementById("trbs").hidden = false;
    document.getElementById("trc").hidden = false;
    document.getElementById("qxTD").title = "Горизонтальная сила";
    document.getElementById("qxTD").innerHTML = "Q";
    document.getElementById("trNmin").hidden = false;
    document.getElementById("nTitle").title =
      "Количество болтов на одной стороне";
    //document.getElementById('trn').hidden=false;
    document.getElementById("trN").hidden = false;
    document.getElementById("trM").hidden = false;
    //document.getElementById('fSize').hidden=false;
  } else if (menuResult == 1) {
    document.getElementById("trNoColon").hidden = true;
    document.getElementById("trPcheck").hidden = true;
    document.getElementById("trSumyi").hidden = true;
    document.getElementById("try1").hidden = true;
    document.getElementById("trQy").hidden = false;
    document.getElementById("trb").hidden = false;
    document.getElementById("trh").hidden = false;
    document.getElementById("trls").hidden = true;
    document.getElementById("trbs").hidden = true;
    document.getElementById("trc").hidden = true;
    document.getElementById("qxTD").title =
      "Горизонтальная сила в плоскости момента";
    document.getElementById("qxTD").innerHTML = "Q<sub>x</sub>";
    document.getElementById("trNmin").hidden = false;
    document.getElementById("nTitle").title =
      "Количество болтов на одной стороне";
    //document.getElementById('trn').hidden=false;
    document.getElementById("trN").hidden = false;
    document.getElementById("trM").hidden = false;
    //document.getElementById('fSize').hidden=false;
  } else if (menuResult == 2) {
    document.getElementById("trPcheck").hidden = false;
    document.getElementById("trSumyi").hidden = false;
    document.getElementById("try1").hidden = false;
    document.getElementById("trQy").hidden = true;
    document.getElementById("qxTD").title = "Горизонтальная сила";
    document.getElementById("qxTD").innerHTML = "Q";
    document.getElementById("trNmin").hidden = true;
    document.getElementById("trb").hidden = true;
    document.getElementById("trh").hidden = true;
    document.getElementById("trls").hidden = true;
    document.getElementById("trbs").hidden = true;
    document.getElementById("trc").hidden = true;
    document.getElementById("nTitle").title = "Общее количество болтов";
    //document.getElementById('trn').hidden=false;
    document.getElementById("trN").hidden = false;
    document.getElementById("trM").hidden = false;
    //document.getElementById('fSize').hidden=false;
  }

  if (alphaCheck.checked == true) {
    document.getElementById("k0").options[2].selected = true;
  }

  if (menuResult == 0) {
    calcSolid();
  }
  if (menuResult == 1) {
    calcNoSolid();
  }
  if (menuResult == 2) {
    calcNoColon();
  }
}
