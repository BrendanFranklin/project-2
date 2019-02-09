package org.project2.pojos;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketJPARepository extends JpaRepository <Ticket, Integer> {

    List<Ticket> getAll();

    Ticket viewByAuthor();

//    int save(Ticket t);
//    void update(Ticket t);
//    void delete(int id);


}