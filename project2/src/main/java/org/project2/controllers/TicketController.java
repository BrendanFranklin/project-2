package org.project2.controllers;

import org.project2.pojos.Ticket;
import org.project2.pojos.Users;
import org.project2.service.TicketService;
import org.project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

import static org.project2.security.SecurityConstants.SECRET;


@RestController
@RequestMapping("ticket")
public class TicketController {
    private TicketService ticketService;
    private UserService userService;

    private Users getCurrentUser(@AuthenticationPrincipal Users users){
        return users;
    }

    public TicketController(){}

    @Autowired
    public void setUserService(UserService userService){this.userService = userService;}


    @Autowired
    public void setTicketService(TicketService ticketService){ this.ticketService = ticketService;}

    @GetMapping(path = "/allTicket", produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('view_ticket')")
    public List<Ticket> allTicket(){
        return this.ticketService.getAllTicket();

    }

    @GetMapping(path = "/ticketRes")
    @PreAuthorize("hasAuthority('open_ticket')")
    public List<Ticket> ticketByRes(@RequestBody Ticket ticket){
        return this.ticketService.getTicketByRes(ticket.getAuthor());
    }

    @GetMapping(path = "/ticketId")
    @PreAuthorize("hasAuthority('view_ticket')")
    public ResponseEntity<Ticket> ticketById(@RequestBody Ticket ticket){
        Ticket t =  ticketService.getTicketById(ticket.getId());

        if(t != null){
            return new ResponseEntity<>(t, HttpStatus.OK);
        }
        return new ResponseEntity<>((Ticket)null, HttpStatus.NOT_FOUND);
    }

    @PostMapping(path = "/updateTicket",produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('update_ticket')")
    public int updateTicket(@RequestBody Ticket ticket){
        return this.ticketService.updateTicket(
                ticket.getId(),
                ticket.getResolver(),
                ticket.getNotes(),
                ticket.isResolved());
    }

    @PostMapping(path = "/openTicket", produces = MediaType.APPLICATION_JSON_VALUE)
    public int openTicket(@RequestBody Ticket ticket){
        return this.ticketService.openTicket(ticket.getAuthor(), ticket.getDescription());
    }

}
