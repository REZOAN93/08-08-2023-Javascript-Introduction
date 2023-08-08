const phones=[{name:"samsung",camera:10,storage:'256gb',price:32000, color:"silver"},
            {name:"OnePlus",camera:10,storage:'256gb',price:38000, color:"silver"},
            {name:"Oppo",camera:10,storage:'256gb',price:22000, color:"silver"},
            {name:"Xiami",camera:10,storage:'256gb',price:21000, color:"silver"},
            {name:"Nokia",camera:10,storage:'256gb',price:72000, color:"silver"},
            {name:"Iphone",camera:10,storage:'256gb',price:82000, color:"silver"}
]

function chepestPhone(phone) {
    let chepest=phone[0]
    for (let i = 0; i < phone.length; i++) {
        const phones=phone[i]
        // const price =phones.price
        if (phones.price<chepest.price) {
            chepest=phones
        }
        
    }
    return chepest;
}

const myChepestPhone=chepestPhone(phones)
console.log(myChepestPhone)