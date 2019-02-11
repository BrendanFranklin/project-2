package org.project2.service;

import org.project2.pojos.Ticket;
import org.project2.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TicketService {

    private TicketRepository ticketRepository;

    @Autowired
    public TicketService(TicketRepository ticketRepository){
        this.ticketRepository = ticketRepository;
    }

    @Transactional(readOnly = true)
    public List<Ticket> getAllTicket(){
        return this.ticketRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Ticket> getTicketByRes(int user_id){
        return this.ticketRepository.findResidentTickets(user_id);
    }

    @Transactional(readOnly = true)
    public Ticket getTicketById(int ticket_id){
        Optional<Ticket> t;

        t = Optional.ofNullable(ticketRepository.findTicketById(ticket_id));

        if(t.isPresent()){
            return t.get();
        }
        else {
            return null;
        }
    }

}
