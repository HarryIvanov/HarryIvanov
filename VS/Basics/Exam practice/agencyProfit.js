function agency (input) {
  let name = input[0];
  let adultTickets = Number (input[1]);
  let kidsTickets = Number (input[2]);
  let adultPrice = Number (input[3]);
  let tax = Number (input[4]);
  let kidsTicketsOTS = adultPrice * 0.30
  let adultTicketPrice = adultPrice + tax
  let kidsTicketsPrice = kidsTicketsOTS + tax
  let total = (kidsTickets * kidsTicketsPrice) + (adultTickets * adultTicketPrice)
  let profit = total * 0.20
  




  console.log (`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)

}
agency ([`WizzAir`, `15`, `5`, `120`, `40`])