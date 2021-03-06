package org.project2.repository;

import org.project2.pojos.Ticket;

import java.util.List;

public interface TicketRepository {
    // returns all tickets
    List<Ticket> findAll();

    // returns the tickets of a specific resident
    List<Ticket> findResidentTickets(int user_id);

    // returns a ticket based on a searched ID
    Ticket findTicketById(int ticket_id);

    // open/create a new ticket
    int openTicket(int author, String description);

    // update/close an existing ticket
    int updateTicket(int ticket_id, int resolver, String notes, boolean resolved);
}
