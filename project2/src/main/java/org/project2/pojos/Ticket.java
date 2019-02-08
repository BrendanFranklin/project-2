package org.project2.pojos;

import javax.persistence.*;

@Entity
@Table (name = "Ticket", schema = "Pretense")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ticket_id")
    private int id;

    @JoinColumn(name = "author", referencedColumnName = "users_id")
    private String author;

    @JoinColumn(name = "resolved", referencedColumnName = "users_id")
    private String resolver;

    @Transient
    @ManyToOne(targetEntity = Users.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Users usersticket;

    @Column(name = "notes")
    private String notes;

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

    public void setAuthor(String author) {
        this.author = author;
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
}
