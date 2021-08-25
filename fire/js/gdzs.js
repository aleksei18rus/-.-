function gdzs() {
    document.querySelector('.b-1').addEventListener('click', ()=>{
        var p_min_on = document.querySelector('.p_min_on').value;
        document.getElementById('p_min_on').textContent = p_min_on;
        var kof_szh;
            if (p_min_on >=200) {
                kof_szh = 1.1;
            } else {
                kof_szh = 1;
            }
//-------------------------------------------------------------------------------------------------------------------------------- 
                if (document.querySelector('.usloviya').checked) {  //проверка условий, сложные
                    if (document.querySelector('.ochag').checked) { //очаг не найден
                        var p_min_on = document.querySelector('.p_min_on').value;
                        document.getElementById('p_min_on').textContent = p_min_on;
                        var t_total_rab = ((p_min_on-10)*6.8)/(kof_szh* 40); //расчетобщее время работы
                        document.getElementById('temp').textContent = Math.floor(t_total_rab); // общее время работы
                        var p_max_pad = (p_min_on-10)/3;
                        document.getElementById('p_max_pad').textContent = Math.ceil(p_max_pad); //Р максимальное падения
                        var delta_t = (p_max_pad*6.8)/(kof_szh* 40);
                        document.getElementById('delta_t').textContent = Math.floor(delta_t); // Дельта Т
                    }
//--------------------------------------------------------------------------------------------------------------------------------                    
                    else {  //очаг найден  
                        var time_on = document.querySelector('.time_on').value;
                        document.getElementById('time_on').textContent = time_on;  
                        var p_min_on = document.querySelector('.p_min_on').value;
                        document.getElementById('p_min_on').textContent = p_min_on;
                        var t_total_rab = ((p_min_on-10)*6.8)/(kof_szh* 40);
                        document.getElementById('temp').textContent = Math.floor(t_total_rab); // общее время работы
                        var p_min_och = document.querySelector('.p_min_och').value;
                        if (p_min_och>0) {
                            var p_max_pad = p_min_on - p_min_och;
                            document.getElementById('p_zatrata').textContent = Math.ceil(p_max_pad); // Р затрачено
                            var p_kon_out = p_max_pad + p_max_pad + 10;
                            var t_rab_och = ((p_min_och - p_kon_out)*6.8)/(kof_szh* 40);
                        } else {
                            document.getElementById('p_zatrata').textContent = "Какое Pмин.очага?"; 
                        }
                        if (t_rab_och>0) {
                            document.getElementById('rab').textContent = Math.floor(t_rab_och); // время работы у очага
                        }
                    }
//--------------------------------------------------------------------------------------------------------------------------------                    
                } else {    // легкие условия
                    if (document.querySelector('.ochag').checked) { //очаг не найден
                        var time_on = document.querySelector('.time_on').value;
                        document.getElementById('time_on').textContent = time_on;
                        var p_min_on = document.querySelector('.p_min_on').value;
                        document.getElementById('p_min_on').textContent = p_min_on;
                        var t_total_rab = ((p_min_on-10)*6.8)/(kof_szh* 40); //расчет общего времени работы
                        document.getElementById('temp').textContent = Math.floor(t_total_rab); // общее время работы 
                        document.getElementById('time_ozhid').textContent = time_on + t_total_rab;


                        var p_max_pad = (p_min_on-10)/2.5;
                        document.getElementById('p_max_pad').textContent = Math.ceil(p_max_pad); //Р максимальное падения
                        var delta_t = (p_max_pad*6.8)/(kof_szh* 40);
                        document.getElementById('delta_t').textContent = Math.floor(delta_t); // Дельта Т
                        var time_on = document.querySelector('.time_on').value;
                        document.getElementById('time_on').textContent = time_on;




                    }
//-------------------------------------------------------------------------------------------------------------------------------- 
                    else { // очаг найден
                        var time_on = document.querySelector('.time_on').value;
                        document.getElementById('time_on').textContent = time_on;
                        var p_min_on = document.querySelector('.p_min_on').value;
                        document.getElementById('p_min_on').textContent = p_min_on;
                        var t_total_rab = ((p_min_on-10)*6.8)/(kof_szh* 40);
                        document.getElementById('temp').textContent = Math.floor(t_total_rab); // общее время работы
                        var p_min_och = document.querySelector('.p_min_och').value;
                        if (p_min_och>0) {
                            var p_max_pad = p_min_on - p_min_och;
                            document.getElementById('p_zatrata').textContent = Math.ceil(p_max_pad); // Р затрачено
                            var p_kon_out = p_max_pad + (p_max_pad/2)+10;
                            var t_rab_och = ((p_min_och - p_kon_out)*6.8)/(kof_szh* 40);
                        } else {
                            document.getElementById('p_zatrata').textContent = "Какое Pмин.очага?"; 
                        }
                        if (t_rab_och>0) {
                            document.getElementById('rab').textContent = Math.floor(t_rab_och); // время работы у очага
                        } 
                    }
//--------------------------------------------------------------------------------------------------------------------------------        
                    
                }    
    })

    document.querySelector('.b-2').addEventListener('click', ()=>{
        var clear;
        document.getElementById('temp').textContent = clear;
        document.getElementById('p_zatrata').textContent = clear;
        document.getElementById('rab').textContent = clear;
        document.getElementById('p_max_pad').textContent = clear;
        document.getElementById('delta_t').textContent = clear;
        document.getElementById('p_min_och').textContent = clear;
        document.getElementById('p_min_on').textContent = clear;
        document.getElementById('p_kon_out').textContent = clear;
        document.getElementById('time_on').textContent = clear;
    })
}