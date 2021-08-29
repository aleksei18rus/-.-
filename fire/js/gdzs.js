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
            function ob_time() {
                var hour_on = document.querySelector('.hour_on').value;
                var min_on = document.querySelector('.min_on').value;
                document.getElementById('time_on').textContent = hour_on+":"+min_on;
                var p_min_on = document.querySelector('.p_min_on').value;
                document.getElementById('p_min_on').textContent = p_min_on;
                var t_total_rab = ((p_min_on-10)*6.8)/(kof_szh* 40); //расчет общего времени работы
                document.getElementById('temp').textContent = Math.floor(t_total_rab); // общее время работы 
                var minutes = Number(min_on) + Number(Math.floor(t_total_rab));  
                if (minutes>59) {
                    minutes = minutes-60;
                        if (minutes<10) {
                            minutes = "0"+minutes;
                        }
                    hour_on ++;
                    if (hour_on>23) {
                        hour_on = hour_on-24;
                            if (hour_on<10) {
                                hour_on = "0"+hour_on;   
                            }
                    }    
                }
                var time_on = hour_on+":"+minutes;
                document.getElementById('time_ozhid').textContent = time_on;
            }
//-------------------------------------------------------------------------------------------------------------------------------- 
                if (document.querySelector('.usloviya').checked) {  //проверка условий, сложные
                    if (document.querySelector('.ochag').checked) { //очаг не найден
                        var hour_on = document.querySelector('.hour_on').value;
                        var min_on = document.querySelector('.min_on').value;
                        document.getElementById('time_on').textContent = hour_on+":"+min_on;
                        var p_min_on = document.querySelector('.p_min_on').value;
                        document.getElementById('p_min_on').textContent = p_min_on;
                        ob_time();
                        var p_max_pad = (p_min_on-10)/3;
                        document.getElementById('p_max_pad').textContent = Math.ceil(p_max_pad); //Р максимальное падения
                        var delta_t = (p_max_pad*6.8)/(kof_szh* 40);
                        document.getElementById('delta_t').textContent = Math.floor(delta_t); // Дельта Т
                        var minutes = Number(min_on) + Number(Math.floor(delta_t));  
                        if (minutes>59) {
                            minutes = minutes-60;
                                if (minutes<10) {
                                    minutes = "0"+minutes;
                                }
                            hour_on ++;
                            if (hour_on>23) {
                                hour_on = hour_on-24;
                                    if (hour_on<10) {
                                        hour_on = "0"+hour_on;   
                                    }
                            }    
                        }
                        var time_on = hour_on+":"+minutes;
                        document.getElementById('voz_t').textContent = time_on;
                    }
//--------------------------------------------------------------------------------------------------------------------------------                    
                    else {  //очаг найден  
                        ob_time();
                        var p_min_och = document.querySelector('.p_min_och').value;
                        document.getElementById('p_min_och').textContent = p_min_och;
                        if (p_min_och>0) {
                            var p_max_pad = p_min_on - p_min_och;
                            document.getElementById('p_zatrata').textContent = Math.ceil(p_max_pad); // Р затрачено
                            var p_kon_out = p_max_pad + p_max_pad + 10;
                            document.getElementById('p_kon_out').textContent = p_kon_out;
                            var t_rab_och = ((p_min_och - p_kon_out)*6.8)/(kof_szh* 40);
                        } else {
                            document.getElementById('p_zatrata').textContent = "Какое Pмин.очага?"; 
                        }
                        if (t_rab_och>0) {
                            document.getElementById('rab').textContent = Math.floor(t_rab_och); // время работы у очага
                        }
                        var hour_och = document.querySelector('.hour_och').value;
                        var min_och = document.querySelector('.min_och').value;
                        var minutes_och = Number(min_och) + Number(Math.floor(t_rab_och));  
                        if (minutes_och>59) {
                            minutes_och = minutes_och-60;
                                if (minutes_och<10) {
                                    minutes_och = "0"+minutes_och;
                                }
                                hour_och ++;
                            if (hour_och>23) {
                                hour_och = hour_och-24;
                                    if (hour_och<10) {
                                        hour_och = "0"+hour_och;   
                                    }
                            }  
                        }
                        document.getElementById('voz_t').textContent = hour_och+":"+minutes_och;
                    }
//--------------------------------------------------------------------------------------------------------------------------------                    
                } else {    // легкие условия
                    if (document.querySelector('.ochag').checked) { //очаг не найден
                        var hour_on = document.querySelector('.hour_on').value;
                        var min_on = document.querySelector('.min_on').value;
                        document.getElementById('time_on').textContent = hour_on+":"+min_on;
                        var p_min_on = document.querySelector('.p_min_on').value;
                        document.getElementById('p_min_on').textContent = p_min_on;
                        ob_time();
                        var p_max_pad = (p_min_on-10)/2.5;
                        document.getElementById('p_max_pad').textContent = Math.ceil(p_max_pad); //Р максимальное падения
                        var delta_t = (p_max_pad*6.8)/(kof_szh* 40);
                        document.getElementById('delta_t').textContent = Math.floor(delta_t); // Дельта Т
                        var minutes = Number(min_on) + Number(Math.floor(delta_t));  
                        if (minutes>59) {
                            minutes = minutes-60;
                                if (minutes<10) {
                                    minutes = "0"+minutes;
                                }
                            hour_on ++;
                            if (hour_on>23) {
                                hour_on = hour_on-24;
                                    if (hour_on<10) {
                                        hour_on = "0"+hour_on;   
                                    }
                            }    
                        }
                        var time_on = hour_on+":"+minutes;
                        document.getElementById('voz_t').textContent = time_on;
                    }
//-------------------------------------------------------------------------------------------------------------------------------- 
                    else { // очаг найден
                        ob_time();
                        var p_min_och = document.querySelector('.p_min_och').value;
                        document.getElementById('p_min_och').textContent = p_min_och;
                        if (p_min_och>0) {
                            var p_max_pad = p_min_on - p_min_och;
                            document.getElementById('p_zatrata').textContent = Math.ceil(p_max_pad); // Р затрачено
                            var p_kon_out = p_max_pad + (p_max_pad/2)+10;
                            document.getElementById('p_kon_out').textContent = p_kon_out;
                            var t_rab_och = ((p_min_och - p_kon_out)*6.8)/(kof_szh* 40);
                        } else {
                            document.getElementById('p_zatrata').textContent = "Какое Pмин.очага?"; 
                        }
                        if (t_rab_och>0) {
                            document.getElementById('rab').textContent = Math.floor(t_rab_och); // время работы у очага
                        } 
                        var hour_och = document.querySelector('.hour_och').value;
                        var min_och = document.querySelector('.min_och').value;
                        var minutes_och = Number(min_och) + Number(Math.floor(t_rab_och));  
                        if (minutes_och>59) {
                            minutes_och = minutes_och-60;
                                if (minutes_och<10) {
                                    minutes_och = "0"+minutes_och;
                                }
                                hour_och ++;
                            if (hour_och>23) {
                                hour_och = hour_och-24;
                                    if (hour_och<10) {
                                        hour_och = "0"+hour_och;   
                                    }
                            }  
                        }
                        document.getElementById('voz_t').textContent = hour_och+":"+minutes_och;
                        
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
        document.getElementById('voz_t').textContent = clear;
    })
}