function gemsToDiamond(gems1,gems2,gems3) {
    const gemstoDiamond1=21*gems1;
    const gemstoDiamond2=32*gems2;
    const gemstoDiamond3=43*gems3;

    const totalDiamond=gemstoDiamond1+gemstoDiamond2+gemstoDiamond3;
    if (totalDiamond!==2000 && totalDiamond<2000) {
        return totalDiamond
    }
    else{
        const result=totalDiamond-2000;
        return result;
    }
    
}


const myDiamond=gemsToDiamond(100,5,1)
console.log(myDiamond)