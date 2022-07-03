function taktika() {
    //---------------------------------------------------------------------------------------------------------------
    //Время работы стволовот АЦ или откр. водоисточника.  
    document.querySelector('#b_1').addEventListener('click', () => {
        let v_cis = document.querySelector('#v_cis').value;
        let v_otk = document.querySelector('#v_otk').value;
        let n_a = document.querySelector('#n_a').value;
        let n_b = document.querySelector('#n_b').value;
        let q_a = document.querySelector('#q_a').value;
        let q_b = document.querySelector('#q_b').value;
        let n_51 = document.querySelector('#n_51').value;
        let n_66 = document.querySelector('#n_66').value;
        let n_77 = document.querySelector('#n_77').value;
        let t_rab_stv = (v_otk * 0.9 + (v_cis - ((n_51 * 40) + (n_66 * 70) + (n_77 * 90)))) / (((n_a * q_a) + (n_b * q_b)) * 60);
        if (t_rab_stv <= 0 || (n_b == 0 && n_a == 0)) {
            alert('Не верное решение, воды не хватитвообще, перепроверь данные');
            document.out.out_v_stv.value = 'ошибка';
        } else {
            document.out.out_v_stv.value = t_rab_stv.toFixed(1);
        }
    })
    //---------------------------------------------------------------------------------------------------------------
    //Время работы ГПС-600 от АЦ или откр. водоисточника.
    document.querySelector('#b_2').addEventListener('click', () => {
        let v_po = document.querySelector('#v_po').value;
        let v_cis_po = document.querySelector('#v_cis_po').value;
        let v_otk_po = document.querySelector('#v_otk_po').value;
        let n_gps = document.querySelector('#n_gps').value;
        let n_51_po = document.querySelector('#n_51_po').value;
        let n_66_po = document.querySelector('#n_66_po').value;
        let n_77_po = document.querySelector('#n_77_po').value;
        let v_rastvora;
        let t_rab_gps;

        if ((((v_otk_po + v_cis_po) / 5.64) > (v_po / 0.36)) && (v_otk_po > 0)) {
            console.log("Установка на водоисточник");
            let v_otk_cis = ((Number(v_otk_po) * 0.9) + Number(v_cis_po));
            let v_otk_cis_po = v_otk_cis / v_po;
            console.log("Коэффициент:", v_otk_cis.toFixed(2));
            if (v_otk_cis_po < 15.7) {
                console.log("Вода закончится раньше");
                v_rastvora = (v_otk_cis / 15.7) + v_otk_cis;
                console.log("Объем раствора:", v_rastvora, "л.");
                t_rab_gps = (v_rastvora - (((n_51_po * 40) + (n_66_po * 70)) + (n_77_po * 90))) / ((n_gps * 6) * 60);
                console.log("Время работы ГПС-600: ", t_rab_gps.toFixed(2), "мин.");
            } else {
                console.log("Пена закончится раньше");
                v_rastvora = (v_po * 15.7) - v_po;
                console.log("Объем раствора:", v_rastvora, "л.");
                t_rab_gps = v_rastvora / ((n_gps * 6) * 60);
                console.log("Время работы ГПС-600: ", t_rab_gps.toFixed(2), "мин.");
            }
        }
        else {
            console.log("Без установки на водоисточник");
            let kof = v_cis_po / v_po;
            if (kof <= 15.7 && v_otk_po <= 0) {
                console.log("Коэффициент: ", kof.toFixed(1), "<= 15.7");
                console.log("Вода закончится раньше");
                v_rastvora = v_cis_po / 15.7 + Number(v_cis_po);
                console.log("Объем цистерны:", v_cis_po, "л.");
                console.log("Объем раствора:", v_rastvora, "л.");
            } else {
                console.log("Коэффициент: ", kof.toFixed(1), ">= 15.7");
                console.log("Пена закончится раньше");
                v_rastvora = (v_po * 15.7) - v_po;
                console.log("Объем пенобака:", v_po, "л.");
                console.log("Объем раствора:", v_rastvora, "л.");
            }
            t_rab_gps = (v_rastvora - (((n_51_po * 40) + (n_66_po * 70)) + (n_77_po * 90))) / ((n_gps * 6) * 60);
            console.log("Время работы ГПС-600: ", t_rab_gps.toFixed(2), "мин.");
        }

        if (t_rab_gps <= 0 || n_gps == 0) {
            alert('Не верное решение, перепроверь данные.');
            document.out_gps.out_v_gps.value = 'ошибка';
        } else {
            document.out_gps.out_v_gps.value = t_rab_gps.toFixed(2);
        }
    })

    //---------------------------------------------------------------------------------------------------------------
    // Время следования
    document.querySelector('#b_3').addEventListener('click', () => {
        let rasstoyanie = document.querySelector('#rasstoyanie').value;
        let skorost = document.querySelector('#skorost').value;
        let sled = (Number(rasstoyanie) * 60) / Number(skorost);
        document.sledovanie.sledovanie.value = Number(sled.toFixed(2));
    })

    //---------------------------------------------------------------------------------------------------------------
    // Время свободногораспространения пожара
    document.querySelector('#b_4').addEventListener('click', () => {
        let t_sbora = document.querySelector('#t_sbora').value;
        console.log(t_sbora);
        let t_soobcheniya = document.querySelector('#t_soobcheniya').value;
        let t_razvert = document.querySelector('#t_razvert').value;
        let v_sledovaniya = document.querySelector('#v_sledovaniya').value;
        let t_svoboda_out = Number(t_sbora) + Number(t_soobcheniya) + Number(t_razvert) + Number(v_sledovaniya);
        if (v_sledovaniya) {
            document.svoboda.t_svoboda.value = Number(t_svoboda_out.toFixed(2));
        } else {
            alert("Какое Время следования!!!")
        }

    })

    //---------------------------------------------------------------------------------------------------------------
    // Путь пройденный огнём
    document.querySelector('#b_5').addEventListener('click', () => {
        let liniya = document.querySelector('#liniya').value;
        let razvitie_pozh = document.querySelector('#razvitie_pozh').value;
        let do_10 = (0.5 * liniya) * razvitie_pozh;
        let bolee_10 = liniya * (razvitie_pozh - 5);
        if (razvitie_pozh <= 10) {
            document.r_pro.do_10.value = do_10.toFixed(2);
            document.r_pro.bolee_10.value = "нет результата";
        } else {
            document.r_pro.do_10.value = "нет результата";
            document.r_pro.bolee_10.value = bolee_10.toFixed(2);
        }

    })

    //---------------------------------------------------------------------------------------------------------------
    // Форма пожара
    document.querySelector('#b_6').addEventListener('click', () => {
        let forma = document.querySelector('#forma').value;
        console.log(forma);
        let glubina = document.querySelector('#glubina').value;
        let radius = document.querySelector('#radius').value;
        let s_pozhara = forma * (3.14 * Math.pow(radius, 2));
        document.pozhar.s_pozhara.value = s_pozhara.toFixed(2);
        if (radius <= 4 && glubina == 5) {
            alert("Достаточно одного ручного ствола для тушения, так как площадь пожара меньше площади тушения.")
        } else {
            if (radius <= 9 && glubina == 10) {
                alert("Достаточно одного лафетного ствола для тушения, так как площадь пожара меньше площади тушения.")
            }
            let s_tush_f = forma * 3.14 * glubina * (2 * radius - glubina);
            if (forma == 0.25) {
                s_tush_p = 3.57 * glubina * (2 * radius - glubina);
            }
            if (forma == 0.5) {
                s_tush_p = 3.57 * glubina * (1.4 * radius - glubina);
            }
            if (forma == 0.75) {
                s_tush_p = 3.57 * glubina * (1.8 * radius - glubina);
            }
            if (forma == 1) {
                s_tush_p = 3.14 * glubina * (2 * radius - glubina);
            }
            console.log(s_tush_f, s_tush_p);
            document.pozhar.s_tush_f.value = s_tush_f.toFixed(2);
            document.pozhar.s_tush_p.value = s_tush_p.toFixed(2);
        }
    })

}