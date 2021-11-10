function menu(comida, tempo) {
    let mensagem = 'Selecione a opção do seu Prato?\n';
    
    switch(comida){
        case 'Pipoca':
            mensagem += 'Prato pronto, bom apetite!!!\n';
            if(tempo >= 20){
                mensagem += 'A comida queimou\n';
            }
            else if(tempo <10) {
                mensagem += 'Tempo insuficiente\n';
            }
            else if(tempo >=30) {
                mensagem += 'Kabumm\n';
            }
            mensagem += 'Prato pronto, bom apetite!!!\n';
        break;
        case 'Macarrão' :
            mensagem += 'Macarrão será seu prato do dia!\n';
            if(tempo >= 16){
                mensagem += 'A comida queimou\n';
            }
            else if(tempo <8) {
                mensagem += 'Tempo insuficiente\n';
            }
            else if(tempo >=24) {
                mensagem += 'Kabumm\n';
            }
            mensagem += 'Prato pronto, bom apetite!!!\n';
        break;
        case 'Carne' :
            mensagem += 'Carne será seu prato do dia!\n';
            if(tempo >= 30){
                mensagem += 'A comida queimou\n';
            }
            else if(tempo <15) {
                mensagem += 'Tempo insuficiente\n';
            }
            else if(tempo >=45) {
                mensagem += 'Kabumm\n';
            }
            mensagem += 'Prato pronto, bom apetite!!!\n';
        break;
        case 'Feijão' :
            mensagem += 'Feijão será seu prato do dia!\n';
            if(tempo >= 24){
                mensagem += 'A comida queimou\n';
            }
            else if(tempo <12) {
                mensagem += 'Tempo insuficiente\n';
            }
            else if(tempo >=36) {
                mensagem += 'Kabumm\n';
            }
            mensagem += 'Prato pronto, bom apetite!!!\n';
        break;
        case 'Brigadeiro' :
            mensagem += 'Brigadeiro será seu prato do dia!\n';
            if(tempo >= 16){
                mensagem += 'A comida queimou\n';
            }
            else if(tempo <8) {
                mensagem += 'Tempo insuficiente\n';
            }
            else if(tempo >=24) {
                mensagem += 'Kabumm\n';
            }
            mensagem += 'Prato pronto, bom apetite!!!\n';
        break;
        default : 
            mensagem += 'Prato inexistente';
        break;
    }   

 
    return mensagem
}


console.log(menu('Macarrão', 10));
