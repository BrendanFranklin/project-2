package org.project2.Repository;

import org.project2.pojos.Ticket;

public interface TicketRepository {

    int save(Ticket t);
    void update(Ticket t);
    void delete(int id);
}
