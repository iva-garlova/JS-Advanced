function tickets(arrOfTIckets, SortCriteria) {
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for (let el of arrOfTIckets) {
        let [destination, price, status] = el.split("|");
        let MyTicket = new Ticket(destination, price, status);
        result.push(MyTicket);
    }
    return sortTicket(result, SortCriteria);

    function sortTicket(ticketArr, criteria) {
        return ticketArr.sort((a, b) => {
            return criteria === "price" ?
                a[criteria] - b[criteria] :
                a[criteria].localeCompare(b[criteria])
        }
        )

    }

}

tickets(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'], 'destination')
