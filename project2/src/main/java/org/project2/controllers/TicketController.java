package org.project2.controllers;

import org.project2.pojos.Ticket;
import org.project2.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("ticket")
public class TicketController {
    private TicketService ticketService;

    public TicketController(){}

    @Autowired
    public void setTicketService(TicketService ticketService){ this.ticketService = ticketService;}

    @GetMapping(path = "/allTicket", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Ticket> allTicket(){
        return this.ticketService.getAllTicket();
    }

    @GetMapping(path = "/ticketRes")
    public List<Ticket> ticketByRes(@RequestParam(name = "user") int user_id){
        return this.ticketService.getTicketByRes(user_id);
    }

    @GetMapping(path = "/ticketId")
    public ResponseEntity<Ticket> ticketById(@RequestParam(name = "id") int ticket_id){
        Ticket t =  ticketService.getTicketById(ticket_id);

        if(t != null){
            return new ResponseEntity<>(t, HttpStatus.OK);
        }
        return new ResponseEntity<>((Ticket)null, HttpStatus.NOT_FOUND);
    }

}
