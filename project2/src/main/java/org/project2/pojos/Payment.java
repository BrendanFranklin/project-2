package org.project2.pojos;

import javax.persistence.*;

@Entity
@Table(name = "payments", schema = "pretense")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "payment_id")
    private Integer id;
    private boolean paid;
    private boolean overdue;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "res_id")
    private Integer resident_id;

    public Payment() {
    }

    public Payment(boolean paid, boolean overdue, Integer resident_id) {
        this.paid = paid;
        this.overdue = overdue;
        this.resident_id = resident_id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public boolean isOverdue() {
        return overdue;
    }

    public void setOverdue(boolean overdue) {
        this.overdue = overdue;
    }

    public Integer getResident_id() {
        return resident_id;
    }

    public void setResident_id(Integer resident_id) {
        this.resident_id = resident_id;
    }
}
