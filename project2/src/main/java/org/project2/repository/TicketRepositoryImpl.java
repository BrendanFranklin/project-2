package org.project2.repository;

import org.project2.pojos.Ticket;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class TicketRepositoryImpl implements TicketRepository{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Ticket> findAll() {
        Query query = entityManager.createNativeQuery("Select * from pretense.tickets");

        if(!query.getResultList().isEmpty()){
            List<Ticket> tickets = (List<Ticket>) query.getResultList();
            return tickets;
        }
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
