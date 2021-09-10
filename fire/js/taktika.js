function taktika(){
document.querySelector('#b_1').addEventListener('click', ()=>{
    let v_cis = document.querySelector('#v_cis').value;
    let v_otk = document.querySelector('#v_otk').value;
    let n_a = document.querySelector('#n_a').value;
    let n_b = document.querySelector('#n_b').value;
    let q_a = document.querySelector('#q_a').value;
    let q_b = document.querySelector('#q_b').value;
    let n_51 = document.querySelector('#n_51').value;
    let n_66 = document.querySelector('#n_66').value;
    let n_77 = document.querySelector('#n_77').value;
    let t_rab_stv = (v_otk*0.9+(v_cis-((n_51*40)+(n_66*70)+(n_77*90))))/(((n_a*q_a)+(n_b*q_b))*60);
    if (t_rab_stv<=0 || (n_b==0 && n_a==0)) {
        alert('Не верное решение, воды не хватитвообще, перепроверь данные');
        document.out.out_v_stv.value = 'ошибка';
    } else {
        document.out.out_v_stv.value = t_rab_stv.toFixed(1)+' мин.';
    }
    })
document.querySelector('#b_2').addEventListener('click', ()=>{
    let v_po = document.querySelector('#v_po').value;
    let v_cis_po = document.querySelector('#v_cis_po').value;
    let v_otk_po = document.querySelector('#v_otk_po').value;
    let n_gps = document.querySelector('#n_gps').value;
    let n_51_po = document.querySelector('#n_51_po').value;
    let n_66_po = document.querySelector('#n_66_po').value;
    let n_77_po = document.querySelector('#n_77_po').value;
    
    if (v_otk_po>0) {
        var v_otk_cis = ((Number(v_otk_po)*0.9)+Number(v_cis_po))/v_po;
        console.log(v_otk_cis);
            if (v_otk_cis<15.7) {
                var v_rastvora = (v_otk_cis/15.7)+v_otk_cis;
                var t_rab_gps = (v_rastvora-(((n_51_po*40)+(n_66_po*70))+(n_77_po*90)))/((n_gps*6)*60);
                console.log(t_rab_gps);
            } else {
                var v_rastvora = (v_po*15.7)-v_po;
                var t_rab_gps = v_rastvora/((n_gps*6)*60);
            }
    } else {
        var kof = v_cis_po/v_po;
        console.log(kof.toFixed(1));
            if (kof<15.7 && v_otk_po<=0) {
                var v_rastvora = (v_cis_po/15.7)+v_cis_po;
            } else {
                var v_rastvora = (v_po*15.7)-v_po;
            }
                var t_rab_gps = (v_rastvora-(((n_51_po*40)+(n_66_po*70))+(n_77_po*90)))/((n_gps*6)*60);       
            }  
    
    if (t_rab_gps<=0 || n_gps==0) {
        alert('Не верное решение, перепроверь данные.');
        document.out_gps.out_v_gps.value = 'ошибка';
    } else {
        document.out_gps.out_v_gps.value = t_rab_gps.toFixed(1)+' мин.';
    }
    })
}