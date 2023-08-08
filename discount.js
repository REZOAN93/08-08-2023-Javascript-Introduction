// first 100 ticket 100 taka
// 101-200 ticket price 90tk
// 200+ ticket price 70 tk

function ticketPrice(number) {
    const first100Rate=100;
    const second100Rate=90;
    const rest100Rate=70;
    if (number<=100) {
        const price=first100Rate*number;
        return price
    }
    else if (number<=200) {
        const first100Price=first100Rate*100;
        const restTicketQty=number-100;
        const restTicketPrice=restTicketQty*second100Rate;
        const totalTicket=first100Price+restTicketPrice;
        return totalTicket;
    }
    else{
        const first100Price=first100Rate*100;
        const second100Price=second100Rate*100;
        const restTicketQty=number-200;
        const restTicketPrice=restTicketQty*rest100Rate;
        const total=first100Price+second100Price+restTicketPrice;
        return total;
    }
}

const myTicket=ticketPrice(250)
console.log(myTicket)