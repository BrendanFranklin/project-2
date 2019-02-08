package org.project2.service;

import org.project2.pojos.Ticket;
import org.project2.repository.TicketJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TicketService {

    private TicketJPARepository ticketRepository;

    @Autowired
    public TicketService(TicketJPARepository ticketRepository){
        this.ticketRepository = ticketRepository;
    }

    @Transactional(readOnly = true)
    public List<Ticket> getAll(){
        return this.ticketRepository.getAll();
    }

    @Transactional(readOnly = true)
    public Ticket viewByAuthor(){
        return this.ticketRepository.viewByAuthor();
    }
}
