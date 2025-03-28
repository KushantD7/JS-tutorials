let items = [250,645,300,900,50];
for(let k=0;k<items.length;k++){
    let offer=items[k]/10;
    items[k] -= offer;
}
console.log("value of all items is",items);