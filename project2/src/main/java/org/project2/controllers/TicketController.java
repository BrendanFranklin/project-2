package org.project2.controllers;

import org.project2.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ticket")
public class TicketController {
    private TicketService ticketService;

    public TicketController(){}

    @Autowired
    public void setTicketService(TicketService ticketService){ this.ticketService = ticketService;}
}
