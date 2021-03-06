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
                "ticket_id, submitted, first_name, last_name, description, resolved, resolver, notes, apt_num " +
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
                "ticket_id, submitted, first_name, last_name, description, resolved, resolver, notes, apt_num " +
                "from pretense.tickets " +
                "left join pretense.users on author = user_id " +
                "where author = ?");
        query.setParameter(1, user_id);

        if(!query.getResultList().isEmpty()){
            List<Ticket> tickets = (List<Ticket>) query.getResultList();
            return tickets;
        }
        return null;
    }

    @Override
    public Ticket findTicketById(int ticket_id) {

        Query query = entityManager.createNativeQuery("Select " +
                "ticket_id, submitted, first_name, last_name, description resolved, resolver, notes, apt_num " +
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
    public int openTicket(int author, String description) {
        Query query = entityManager.createNativeQuery("insert into pretense.tickets " +
                "(author, description, submitted) values (?,?,current_date)");
        query.setParameter(1, author);
        query.setParameter(2, description);

        return query.executeUpdate();

    }

    @Override
    public int updateTicket(int ticket_id, int resolver, String notes, boolean resolved) {

        Query query = entityManager.createNativeQuery("update pretense.tickets " +
                "set resolver=?, notes=?, resolved=?, updated = current_date where ticket_id = ?");
        query.setParameter(4,ticket_id);
        query.setParameter(1, resolver);
        query.setParameter(2, notes);
        query.setParameter(3, resolved);

        return query.executeUpdate();
    }

}
