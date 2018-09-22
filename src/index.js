// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coinsback = {};
    
    if (currency <= 0){return coinsback};
    if (currency > 10000){return coinsback = {error: "You are rich, my friend! We don't have so much coins for exchange"}};

        // если Input меньше 50

    if (currency < 5){coinsback.P = currency; return coinsback;}
    if (currency == 5){coinsback.N = 1; return coinsback;}
    if (currency > 5 && currency < 10){coinsback.N = 1; coinsback.P = (currency - 5); return coinsback;}
    if (currency == 10){coinsback.D = 1; return coinsback;} 
    if (currency > 10 && currency < 25){
        coinsback.D = Math.floor(currency/10);
        if((currency - coinsback.D*10) >= 5){
            coinsback.N = 1;
            if ((currency - coinsback.D*10 - coinsback.N*5) !== 0){coinsback.P = currency - coinsback.D*10 - coinsback.N*5;return coinsback;}
            return coinsback;}
        if((currency - coinsback.D*10) == 0){return coinsback;}
        coinsback.P = currency - coinsback.D*10;}
    if (currency == 25){coinsback.Q = 1; return coinsback;}
    if (currency > 25 && currency < 50){
        coinsback.Q = 1;
        if((currency - coinsback.Q*25)===10 || (currency - coinsback.Q*25)===20){coinsback.D = (currency - coinsback.Q*25)/10};
        if((currency - coinsback.Q*25)>10){
            coinsback.D = Math.floor((currency - coinsback.Q*25)/10);
            if ((Math.floor((currency - coinsback.Q*25 - coinsback.D*10)/5))!==0){coinsback.N = Math.floor((currency - coinsback.Q*25 - coinsback.D*10)/5)};
            if ((Math.floor((currency - coinsback.Q*25 - coinsback.D*10)/5))===0 && (currency - coinsback.Q*25)!==20){coinsback.P = currency - coinsback.Q*25 - coinsback.D*10;return coinsback;}
            if (currency !==40 && currency !== 45){coinsback.P = currency - coinsback.Q*25 - coinsback.D*10 - coinsback.N*5;} 
        }
        if(((currency - coinsback.Q*25)>=5) && ((currency - coinsback.Q*25) < 10) ){
            coinsback.N = 1;
            if ((currency - coinsback.Q*25 - coinsback.N*5)!==0){coinsback.P = currency - coinsback.Q*25 - coinsback.N*5;return coinsback;} 
            return coinsback;}
        if((currency - coinsback.Q*25) < 5){
            coinsback.P = currency - coinsback.Q*25;}}
    if (currency === 50){coinsback.H = 1;return coinsback;}  

            // если Input больше 50

    if (currency > 50){ 
        coinsback.H = Math.floor(currency / 50);
        var newcurrency = currency - coinsback.H*50;
        if (newcurrency === 0){return coinsback;}
        if (newcurrency < 5){coinsback.P = newcurrency; return coinsback;}
        if (newcurrency == 5){coinsback.N = 1; return coinsback;}
        if (newcurrency > 5 && newcurrency < 10){coinsback.N = 1; coinsback.P = (newcurrency - 5); return coinsback;}
        if (newcurrency == 10){coinsback.D = 1; return coinsback;} 
        if (newcurrency > 10 && newcurrency < 25){
            coinsback.D = Math.floor(newcurrency/10);
            if((newcurrency - coinsback.D*10) >= 5){
                coinsback.N = 1;
                if ((newcurrency - coinsback.D*10 - coinsback.N*5) !== 0){coinsback.P = newcurrency - coinsback.D*10 - coinsback.N*5;return coinsback;}
                return coinsback;}
            if((newcurrency - coinsback.D*10) == 0){return coinsback;}
            coinsback.P = newcurrency - coinsback.D*10;}
        if (newcurrency == 25){coinsback.Q = 1; return coinsback;}
        if (newcurrency > 25 && newcurrency < 50){
            coinsback.Q = 1;
            if((newcurrency - coinsback.Q*25)===10 || (newcurrency - coinsback.Q*25)===20){coinsback.D = (newcurrency - coinsback.Q*25)/10};
            if((newcurrency - coinsback.Q*25)>10){
            coinsback.D = Math.floor((newcurrency - coinsback.Q*25)/10);
            if ((Math.floor((newcurrency - coinsback.Q*25 - coinsback.D*10)/5))!==0){coinsback.N = Math.floor((newcurrency - coinsback.Q*25 - coinsback.D*10)/5)};
            if ((Math.floor((newcurrency - coinsback.Q*25 - coinsback.D*10)/5))===0 && (newcurrency - coinsback.Q*25)!==20){coinsback.P = newcurrency - coinsback.Q*25 - coinsback.D*10;return coinsback;}
            if (newcurrency !==40 && newcurrency !== 45){coinsback.P = newcurrency - coinsback.Q*25 - coinsback.D*10 - coinsback.N*5;} 
            }
            if(((newcurrency - coinsback.Q*25)>=5) && ((newcurrency - coinsback.Q*25) < 10) ){
            coinsback.N = 1;
            if ((newcurrency - coinsback.Q*25 - coinsback.N*5)!==0){coinsback.P = newcurrency - coinsback.Q*25 - coinsback.N*5;return coinsback;} 
            return coinsback;}
            if((newcurrency - coinsback.Q*25) < 5){
            coinsback.P = newcurrency - coinsback.Q*25;}}
    }
    
    return coinsback;
}
