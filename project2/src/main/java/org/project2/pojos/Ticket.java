package org.project2.pojos;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table (name = "tickets", schema = "Pretense")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ticket_id")
    private int id;

    @Column(name = "submitted")
    private Timestamp submitted;

    @JoinColumn(name = "author", referencedColumnName = "user_id")
    private String author;

    @Column(name = "resolved")
    private boolean resolved;

    @Column(name = "updated")
    private Timestamp updated;

    @JoinColumn(name = "resolver", referencedColumnName = "user_id")
    private String resolver;

    @Column(name = "description")
    private String notes;

    @Transient
    @ManyToOne(targetEntity = Users.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Users userTickets;

    public Ticket() { }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getSubmitted() {
        return submitted;
    }

    public void setSubmitted(Timestamp submitted) {
        this.submitted = submitted;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public boolean isResolved() {
        return resolved;
    }

    public void setResolved(boolean resolved) {
        this.resolved = resolved;
    }

    public Timestamp getUpdated() {
        return updated;
    }

    public void setUpdated(Timestamp updated) {
        this.updated = updated;
    }

    public String getResolver() {
        return resolver;
    }

    public void setResolver(String resolver) {
        this.resolver = resolver;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Users getUserTickets() {
        return userTickets;
    }

    public void setUserTickets(Users userTickets) {
        this.userTickets = userTickets;
    }
}
