package org.project2.repository;

import org.project2.pojos.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketJPARepository extends JpaRepository <Ticket, Integer> {

    List<Ticket> findAll();

}
