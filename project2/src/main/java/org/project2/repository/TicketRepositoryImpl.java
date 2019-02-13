package org.project2.repository;

import org.project2.pojos.Ticket;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import org.springframework.security.core.Authentication;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class TicketRepositoryImpl implements TicketRepository{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Ticket> findAll() {
        Query query = entityManager.createNativeQuery("Select " +
                "ticket_id, submitted, first_name, last_name, resolved, resolver, description, apt_num " +
                "from pretense.tickets " +
                "left join pretense.users on author = user_id");

        if(!query.getResultList().isEmpty()){
            List<Ticket> tickets = (List<Ticket>) query.getResultList();
            return tickets;
        }
        return null;
    }

    @Override
    public List<Ticket> findResidentTickets(int user_id) {

        Query query = entityManager.createNativeQuery("Select " +
                "ticket_id, submitted, first_name, last_name, resolved, resolver, description, apt_num " +
                "from pretense.tickets " +
                "left join pretense.users on author = user_id " +
                "where author = ?");
        query.setParameter(1,user_id);

        if(!query.getResultList().isEmpty()){
            List<Ticket> tickets = (List<Ticket>) query.getResultList();
            return tickets;
        }
        return null;
    }

    @Override
    public List<Ticket> findResidentTickets() {
        Query query = entityManager.createNativeQuery("Select " +
                "ticket_id, submitted, first_name, last_name, resolved, resolver, description, apt_num " +
                "from pretense.tickets " +
                "left join pretense.users on author = user_id " +
                "where author = ?");
        query.setParameter(1, 0);

        if(!query.getResultList().isEmpty()){
            List<Ticket> tickets = (List<Ticket>) query.getResultList();
            return tickets;
        }
        return null;
    }

    @Override
    public Ticket findTicketById(int ticket_id) {

        Query query = entityManager.createNativeQuery("Select " +
                "ticket_id, submitted, first_name, last_name, resolved, resolver, description, apt_num " +
                "from prestense.tickets " +
                "left join pretense.users on author = user_id " +
                "where id=?");
        query.setParameter(1, ticket_id);

        if(!query.getResultList().isEmpty()){
            Ticket tickets = (Ticket) query.getResultList();
            return tickets;
        }

        return null;
    }

    @Override
    public int openTicket() {

        return 0;
    }

    @Override
    public int updateTicket(String author, String resolver, String notes) {

        Query query = entityManager.createNativeQuery("Insert into pretense.ticket +" +
                "(author, resolver, notes) values (?,?,?");
        query.setParameter(1,author);
        query.setParameter(2, resolver);
        query.setParameter(3, notes);

        return query.executeUpdate();
    }

}
