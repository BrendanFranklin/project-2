package org.project2.repository;

import org.project2.pojos.Ticket;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepositoryImpl implements TicketRepository{

    @Override
    public List<Ticket> findAll() {
        return null;
    }

    @Override
    public List<Ticket> findResidentTickets(int res_id) {
        return null;
    }

    @Override
    public Ticket findTicketById(int ticket_id) {
        return null;
    }

    @Override
    public int openTicket() {
        return 0;
    }

    @Override
    public void updateTicket(int ticket_id) {

    }
}
