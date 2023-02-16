function solve (array, status) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number (price);
            this.status = status;
        }
    }
    let result = [];
    for (const el of array) {
        let ticket = new Ticket
        let [destination, price, status] = el.split("|");
        ticket.destination = destination;
        ticket.price = Number (price);
        ticket.status = status;
        result.push(ticket);
    }
    if (status == 'destination') {
        result.sort((a,b) => a.destination.localeCompare(b.destination))
    } else if (status == 'status') {
        result.sort((a,b) => a.status.localeCompare(b.status))   
    } else if (status == ' price') {
        result.sort((a,b) => a.price - b.price)   
    }
    return result
}
solve (['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
)