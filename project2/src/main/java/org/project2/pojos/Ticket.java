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
    private int author;

    @Column(name = "description")
    private String description;

    @Column(name = "resolved")
    private boolean resolved;

    @Column(name = "updated")
    private Timestamp updated;

    @JoinColumn(name = "resolver", referencedColumnName = "user_id")
    private int resolver;

    @Column(name = "notes")
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(int author) {
        this.author = author;
    }

    public String getResolver() {
        return resolver;
    }

    public void setResolver(int resolver) {
        this.resolver = resolver;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
