package org.project2.pojos;

public interface TicketRepository {

    int save(Ticket t);
    void update(Ticket t);
    void delete(int id);
}
