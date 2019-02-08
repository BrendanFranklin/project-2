package org.project2.repository;

import org.project2.pojos.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {

    Ticket save(Ticket t);
    void update(Ticket t);
    void delete(int id);
}
