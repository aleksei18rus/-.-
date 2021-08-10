function gdzs() {
    document.querySelector('.b-1').addEventListener('click', ()=>{
        var p_min_on = document.querySelector('.p_min_on').value;
        var kof_szh;
            if (p_min_on >=200) {
                kof_szh = 1.1;
            } else {
                kof_szh = 1;
            }
                if (document.querySelector('.usloviya').checked) {
                    if (document.querySelector('.ochag').checked) {
                        var p_max_pad = (p_min_on-10)/3;
                        document.getElementById('p_max_pad').textContent = 'Pmax.пад. '+p_max_pad+' атм.';
                        var delta_t = (p_max_pad*6.8)/(kof_szh* 40);
                        document.getElementById('delta_t').textContent = '∆T '+ delta_t.toFixed(1)+' мин.';
                    }
                    else {
                        var p_min_och = document.querySelector('.p_min_och').value;

                        var t_total_rab = ((p_min_on-10)*6.8)/(kof_szh* 40);
                        var p_max_pad = p_min_on - p_min_och;
                        var p_kon_out = p_max_pad + (p_max_pad)+10;
                        var t_rab_och = ((p_min_och - p_kon_out)*6.8)/(kof_szh* 40);
                        document.getElementById('temp').textContent = t_total_rab.toFixed(1)+' мин.';
                        document.getElementById('rab').textContent = t_rab_och.toFixed(1)+' мин.';
                    }
                } else {
                    if (document.querySelector('.ochag').checked) {
                        var p_max_pad = (p_min_on-10)/2.5;
                        document.getElementById('p_max_pad').textContent = 'Pmax.пад. '+p_max_pad+' атм.';
                        var delta_t = (p_max_pad*6.8)/(kof_szh* 40);
                        document.getElementById('delta_t').textContent = '∆T '+ delta_t.toFixed(1)+' мин.';
                    }
                    else {
                        var p_min_och = document.querySelector('.p_min_och').value;

                        var t_total_rab = ((p_min_on-10)*6.8)/(kof_szh* 40);
                        var p_max_pad = p_min_on - p_min_och;
                        var p_kon_out = p_max_pad + (p_max_pad/2)+10;
                        var t_rab_och = ((p_min_och - p_kon_out)*6.8)/(kof_szh* 40);
                        document.getElementById('temp').textContent = t_total_rab.toFixed(1)+' мин.';
                        document.getElementById('rab').textContent = t_rab_och.toFixed(1)+' мин.';
                    }
                }    
    })
}