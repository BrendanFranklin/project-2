package org.project2.Repository;

import org.project2.pojos.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketJPARepository extends JpaRepository <Ticket, Integer> {

    List<Ticket> getAll();

    Ticket viewByAuthor();

//    int save(Ticket t);
//    void update(Ticket t);
//    void delete(int id);


}
