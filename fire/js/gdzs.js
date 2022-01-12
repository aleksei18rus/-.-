function gdzs() {
  document.querySelector("#b_1").addEventListener("click", () => {
    var p_min_on = document.querySelector(".p_min_on").value;
    document.getElementById("p_min_on").textContent = p_min_on;
    var kof_szh;
    if (p_min_on >= 200) {
      kof_szh = 1.1;
    } else {
      kof_szh = 1;
    }
    var time_1 = document.querySelector(".time_1").value;
    var time_1_on = time_1.split("");
    console.log(time_1_on);
    var hour_on = time_1_on[0] + time_1_on[1];
    var min_on = time_1_on[3] + time_1_on[4];
    var time_3 = document.querySelector(".time_3").value; //фактическое время
    var time_3_out = time_3.split("");
    console.log(time_3_out);
    var hour_out = time_3_out[0] + time_3_out[1];
    var min_out = time_3_out[3] + time_3_out[4];
    document.getElementById("fact").textContent = hour_out + ":" + min_out;

    function ob_time() {
      document.getElementById("time_on").textContent = hour_on + ":" + min_on;
      var p_min_on = document.querySelector(".p_min_on").value;
      document.getElementById("p_min_on").textContent = p_min_on;
      var t_total_rab = ((p_min_on - 10) * 6.8) / (kof_szh * 40); //расчет общего времени работы
      document.getElementById("temp").textContent = Math.floor(t_total_rab); // общее время работы
      var minutes = Number(min_on) + Number(Math.floor(t_total_rab));
      if (minutes > 59) {
        minutes = minutes - 60;
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        hour_on++;
        if (hour_on > 23) {
          hour_on = hour_on - 24;
          if (hour_on < 10) {
            hour_on = "0" + hour_on;
          }
        }
      }
      var time_on = hour_on + ":" + minutes;
      document.getElementById("time_ozhid").textContent = time_on;
    }
    function och() {
      alert("Какое Pмин.очага? Введите данные.");
    }
    //--------------------------------------------------------------------------------------------------------------------------------
    if (document.querySelector(".usloviya").checked) {
      //проверка условий, сложные
      if (document.querySelector(".ochag").checked) {
        //очаг не найден
        ob_time();
        var p_min_on = document.querySelector(".p_min_on").value;
        document.getElementById("p_min_on").textContent = p_min_on;
        var p_max_pad = (p_min_on - 10) / 3;
        //document.getElementById('p_max_pad').textContent = Math.ceil(p_max_pad); //Р максимальное падения
        var delta_t = (p_max_pad * 6.8) / (kof_szh * 40);
        document.getElementById("delta_t").textContent = Math.floor(delta_t); // Дельта Т
        var minutes = Number(min_on) + Number(Math.floor(delta_t));
        if (minutes > 59) {
          minutes = minutes - 60;
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          hour_on++;
          if (hour_on > 23) {
            hour_on = hour_on - 24;
            if (hour_on < 10) {
              hour_on = "0" + hour_on;
            }
          }
        }
        var time_on = hour_on + ":" + minutes;
        document.getElementById("voz_t").textContent = time_on;
        document.getElementById("fact").textContent = "";
      }
      //--------------------------------------------------------------------------------------------------------------------------------
      else {
        //очаг найден
        ob_time();
        var p_min_och = document.querySelector(".p_min_och").value;
        document.getElementById("p_min_och").textContent = p_min_och;
        if (p_min_och > 0) {
          var p_max_pad = p_min_on - p_min_och;
          document.getElementById("p_zatrata").textContent =
            Math.ceil(p_max_pad); // Р затрачено
          var p_kon_out = p_max_pad + p_max_pad + 10;
          if (p_kon_out<50) {
            p_kon_out = 50;
          }
          document.getElementById("p_kon_out").textContent = p_kon_out;
          var t_rab_och = ((p_min_och - p_kon_out) * 6.8) / (kof_szh * 40);
        } else {
          och();
          document.getElementById("p_zatrata").textContent =
            "Какое Pмин.очага?";
        }
        if (t_rab_och > 0) {
          document.getElementById("rab").textContent = Math.floor(t_rab_och); // время работы у очага
        }
        var time_2 = document.querySelector(".time_2").value;
        var time_2_och = time_2.split("");
        console.log(time_2_och);
        var hour_och = time_2_och[0] + time_2_och[1];
        var min_och = time_2_och[3] + time_2_och[4];
        var minutes_och = Number(min_och) + Number(Math.floor(t_rab_och));
        if (minutes_och > 59) {
          minutes_och = minutes_och - 60;
          if (minutes_och < 10) {
            minutes_och = "0" + minutes_och;
          }
          hour_och++;
          if (hour_och > 23) {
            hour_och = hour_och - 24;
            if (hour_och < 10) {
              hour_och = "0" + hour_och;
            }
          }
        }
        document.getElementById("voz_t").textContent =
          hour_och + ":" + minutes_och;
        if (min_out > min_och) {
          let a = (min_out - min_och) * 6.5;
          console.log(a);
          fact_p = p_min_och - a;
          document.getElementById("fact_p").textContent = Math.floor(fact_p);
        } else {
          let a = (60 + (min_out - min_och)) * 6.5;
          fact_p = p_min_och - a;
          console.log(a);
          document.getElementById("fact_p").textContent = Math.floor(fact_p);
        }
      }
      //--------------------------------------------------------------------------------------------------------------------------------
    } else {
      // легкие условия
      if (document.querySelector(".ochag").checked) {
        //очаг не найден
        ob_time();
        var p_min_on = document.querySelector(".p_min_on").value;
        document.getElementById("p_min_on").textContent = p_min_on;
        console.log(p_min_on);
        var p_max_pad = (p_min_on - 10) / 2.5;
        //document.getElementById('p_max_pad').textContent = Math.ceil(p_max_pad); //Р максимальное падения
        var delta_t = (p_max_pad * 6.8) / (kof_szh * 40);
        console.log(delta_t);
        document.getElementById("delta_t").textContent = Math.floor(delta_t); // Дельта Т
        var minutes = Number(min_on) + Number(Math.floor(delta_t));
        if (minutes > 59) {
          minutes = minutes - 60;
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          hour_on++;
          if (hour_on > 23) {
            hour_on = hour_on - 24;
            if (hour_on < 10) {
              hour_on = "0" + hour_on;
            }
          }
        }
        var time_on = hour_on + ":" + minutes;
        document.getElementById("voz_t").textContent = time_on;
        document.getElementById("fact").textContent = "";
      }
      //--------------------------------------------------------------------------------------------------------------------------------
      else {
        // очаг найден
        ob_time();
        var p_min_och = document.querySelector(".p_min_och").value;
        document.getElementById("p_min_och").textContent = p_min_och;
        if (p_min_och > 0) {
          var p_max_pad = p_min_on - p_min_och;
          document.getElementById("p_zatrata").textContent =
            Math.ceil(p_max_pad); // Р затрачено
          var p_kon_out = p_max_pad + p_max_pad / 2 + 10;
          if (p_kon_out<50) {
            p_kon_out = 50;
          }
          document.getElementById("p_kon_out").textContent = p_kon_out;
          var t_rab_och = ((p_min_och - p_kon_out) * 6.8) / (kof_szh * 40);
        } else {
          och();
          document.getElementById("p_zatrata").textContent =
            "Какое Pмин.очага?";
        }
        if (t_rab_och > 0) {
          document.getElementById("rab").textContent = Math.floor(t_rab_och); // время работы у очага
        }
        var time_3 = document.querySelector(".time_2").value;
        var time_3_och = time_3.split("");
        console.log(time_3_och);
        var hour_och = time_3_och[0] + time_3_och[1];
        var min_och = time_3_och[3] + time_3_och[4];
        var minutes_och = Number(min_och) + Number(Math.floor(t_rab_och));
        if (minutes_och > 59) {
          minutes_och = minutes_och - 60;
          if (minutes_och < 10) {
            minutes_och = "0" + minutes_och;
          }
          hour_och++;
          if (hour_och > 23) {
            hour_och = hour_och - 24;
            if (hour_och < 10) {
              hour_och = "0" + hour_och;
            }
          }
        }
        document.getElementById("voz_t").textContent =
          hour_och + ":" + minutes_och;
        if (min_out > min_och) {
          let a = (min_out - min_och) * 6.5;
          console.log(a);
          fact_p = p_min_och - a;
          document.getElementById("fact_p").textContent = Math.floor(fact_p);
        } else {
          let a = (60 + (min_out - min_och)) * 6.5;
          fact_p = p_min_och - a;
          console.log(a);
          document.getElementById("fact_p").textContent = Math.floor(fact_p);
        }
      }
    }
  });
  //--------------------------------------------------------------------------------------------------------------------------------
  document.querySelector("#b_2").addEventListener("click", () => {
    location.reload();
  });

  document.querySelector("#b_3").addEventListener("click", () => {
    var age = document.querySelector(".age").value;
    var ves = document.querySelector(".ves").value;
    document.getElementById("age").textContent = age;
    var p_1 = document.querySelector(".p_1").value * 6;
    var p_2 = document.querySelector(".p_2").value * 6;
    var n_1 = ves * 0.25 * 20;
    var n_2 = ves * 0.5 * 20;
    var resultat = (n_1 + ((n_2 - n_1) * (170 - p_1)) / (p_2 - p_1)) / 70;
    document.getElementById("resultat").textContent = resultat.toFixed(1);
    if (age < 19) {
      alert("Возраст меньше 19 лет, ты должен быть еще в армии!!!");
    }
    if (age >= 20 && age <= 29) {
      if (resultat <= 14.2) {
        document.getElementById("rab_spo").textContent = "Низкая";
        let elem = document.querySelector("th#rab_spo");
        elem.style.cssText = "color:red";
      } else {
        if (resultat >= 14.3 && resultat <= 16.2) {
          document.getElementById("rab_spo").textContent = "Пониженная";
          let elem = document.querySelector("th#rab_spo");
          elem.style.cssText = "color:rgb(243,135,53)";
        } else {
          if (resultat >= 16.3 && resultat <= 19.3) {
            document.getElementById("rab_spo").textContent = "Средняя";
            let elem = document.querySelector("th#rab_spo");
            elem.style.cssText = "color:rgb(248,168,51)";
          } else {
            if (resultat >= 19.4 && resultat <= 20.9) {
              document.getElementById("rab_spo").textContent = "Высокая";
              let elem = document.querySelector("th#rab_spo");
              elem.style.cssText = "color:rgb(164,152,30)";
            } else {
              if (resultat >= 21) {
                document.getElementById("rab_spo").textContent =
                  "Очень высокая";
                let elem = document.querySelector("th#rab_spo");
                elem.style.cssText = "color:green";
              }
            }
          }
        }
      }
    }
    if (age >= 30 && age <= 39) {
      if (resultat <= 12.9) {
        document.getElementById("rab_spo").textContent = "Низкая";
        let elem = document.querySelector("th#rab_spo");
        elem.style.cssText = "color:red";
      } else {
        if (resultat >= 13.0 && resultat <= 14.9) {
          document.getElementById("rab_spo").textContent = "Пониженная";
          let elem = document.querySelector("th#rab_spo");
          elem.style.cssText = "color:rgb(243,135,53)";
        } else {
          if (resultat >= 15.0 && resultat <= 17.9) {
            document.getElementById("rab_spo").textContent = "Средняя";
            let elem = document.querySelector("th#rab_spo");
            elem.style.cssText = "color:rgb(248,168,51)";
          } else {
            if (resultat >= 18.0 && resultat <= 19.1) {
              document.getElementById("rab_spo").textContent = "Высокая";
              let elem = document.querySelector("th#rab_spo");
              elem.style.cssText = "color:rgb(164,152,30)";
            } else {
              if (resultat >= 19.2) {
                document.getElementById("rab_spo").textContent =
                  "Очень высокая";
                let elem = document.querySelector("th#rab_spo");
                elem.style.cssText = "color:green";
              }
            }
          }
        }
      }
    }
    if (age >= 40 && age <= 49) {
      if (resultat <= 11.5) {
        document.getElementById("rab_spo").textContent = "Низкая";
        let elem = document.querySelector("th#rab_spo");
        elem.style.cssText = "color:red";
      } else {
        if (resultat >= 11.6 && resultat <= 13.4) {
          document.getElementById("rab_spo").textContent = "Пониженная";
          let elem = document.querySelector("th#rab_spo");
          elem.style.cssText = "color:rgb(243,135,53)";
        } else {
          if (resultat >= 13.5 && resultat <= 16.4) {
            document.getElementById("rab_spo").textContent = "Средняя";
            let elem = document.querySelector("th#rab_spo");
            elem.style.cssText = "color:rgb(248,168,51)";
          } else {
            if (resultat >= 16.5 && resultat <= 17.9) {
              document.getElementById("rab_spo").textContent = "Высокая";
              let elem = document.querySelector("th#rab_spo");
              elem.style.cssText = "color:rgb(164,152,30)";
            } else {
              if (resultat >= 18.0) {
                document.getElementById("rab_spo").textContent =
                  "Очень высокая";
                let elem = document.querySelector("th#rab_spo");
                elem.style.cssText = "color:green";
              }
            }
          }
        }
      }
    }
    if (age >= 50 && age <= 59) {
      if (resultat <= 9.7) {
        document.getElementById("rab_spo").textContent = "Низкая";
        let elem = document.querySelector("th#rab_spo");
        elem.style.cssText = "color:red";
      } else {
        if (resultat >= 9.8 && resultat <= 12.0) {
          document.getElementById("rab_spo").textContent = "Пониженная";
          let elem = document.querySelector("th#rab_spo");
          elem.style.cssText = "color:rgb(243,135,53)";
        } else {
          if (resultat >= 12.1 && resultat <= 14.9) {
            document.getElementById("rab_spo").textContent = "Средняя";
            let elem = document.querySelector("th#rab_spo");
            elem.style.cssText = "color:rgb(248,168,51)";
          } else {
            if (resultat >= 15.0 && resultat <= 16.4) {
              document.getElementById("rab_spo").textContent = "Высокая";
              let elem = document.querySelector("th#rab_spo");
              elem.style.cssText = "color:rgb(164,152,30)";
            } else {
              if (resultat >= 16.5) {
                document.getElementById("rab_spo").textContent =
                  "Очень высокая";
                let elem = document.querySelector("th#rab_spo");
                elem.style.cssText = "color:green";
              }
            }
          }
        }
      }
    }
  });
//--------------------------------------------------------------------------------------------------------------------------------
document.querySelector("#b_4").addEventListener("click", () => {
  if (document.querySelector(".rost").checked) {
    document.getElementById("metronom").textContent = 110;
  }
  var p_1 = document.querySelector(".p_1").value;
  var p_2 = document.querySelector(".p_2").value;
  var p_3 = document.querySelector(".p_3").value;
  var resultat_ist = 500/((p_1 + p_2 + p_3)*2);
  document.getElementById("resultat_ist").textContent = resultat_ist.toFixed(0);
  if (resultat_ist<55) {
    document.getElementById("ocenka").textContent = "Низкая";    
    let elem = document.querySelector("th#ocenka");
    elem.style.cssText = "color:red";
  } else {
    if (resultat_ist>=55 && resultat_ist<=64) {
      document.getElementById("ocenka").textContent = "Ниже среднего";  
      let elem = document.querySelector("th#ocenka");
      elem.style.cssText = "color:rgb(243,135,53)";  
    } else {
      if (resultat_ist>=65 && resultat_ist<=79) {
        document.getElementById("ocenka").textContent = "Средняя";   
        let elem = document.querySelector("th#ocenka");
        elem.style.cssText = "color:rgb(248,168,51)"; 
      } else {
        if (resultat_ist>=80 && resultat_ist<=89) {
          document.getElementById("ocenka").textContent = "Хорошая";  
          let elem = document.querySelector("th#ocenka");
          elem.style.cssText = "color:rgb(164,152,30)";  
        } else {
          if (resultat_ist>=90) {
            document.getElementById("ocenka").textContent = "Высокая";  
            let elem = document.querySelector("th#ocenka");
            elem.style.cssText = "color:green";  
          }
        }
      }
    }
  }
});

}
