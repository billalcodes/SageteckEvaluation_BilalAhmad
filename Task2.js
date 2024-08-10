function getPrices(list) {
    let prices = [];
    
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let charprice = "";         
        for (let j = 0; j < item.length; j++) {
            if (item[j] >= '0' && item[j] <= '9') {
                let k = j;
                while (k < item.length && (item[k] >= '0' && item[k] <= '9' || item[k] === '.')) {
                    charprice += item[k];
                    k++;
                }
                prices.push(parseFloat(charprice).toFixed(2)); 
                break;  
            }
        }
    }
    return prices;
}


console.log(getPrices(["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"]));
console.log(getPrices(["salad ($4.99)"]))