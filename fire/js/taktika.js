function taktika(){
    document.querySelector('#b_1').addEventListener('click', ()=>{
    //var v_po = document.querySelector('.v_po').value;
    var v_cis = document.querySelector('#v_cis').value;
    var n_stv_a = document.querySelector('#n_stv_a').value;
    var n_stv_b = document.querySelector('#n_stv_b').value;
    var n_ruk_51 = document.querySelector('#n_ruk_51').value;
    var n_ruk_66 = document.querySelector('#n_ruk_66').value;
    var n_ruk_77 = document.querySelector('#n_ruk_77').value;
    //var q_otk_vod = document.querySelector('.q_otk_vod').value;
    //var q_pg = document.querySelector('.q_pg').value;
    var t_rab = (v_cis-((n_ruk_51*40)+(n_ruk_66*70)+(n_ruk_77*90)))/(((n_stv_a*7.4)+(n_stv_b*3.7))*60);
    if (t_rab<=0) {
        document.getElementById('t_rab').textContent = 'Неверные ввели данные, воды не хватит вообще!'
    } else {
        document.getElementById('t_rab').textContent = t_rab.toFixed(1)+' мин.';
        console.log(t_rab);
    }

    })
}