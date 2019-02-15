package org.project2.pojos;

import javax.persistence.*;

@Entity
@Table(name = "payments", schema = "pretense")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "payment_id")
    private Integer id;

    @Column(name = "paid")
    private boolean paid;

    @Column(name = "overdue")
    private boolean overdue;

    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private Integer user_id;

    public Payment() {
    }

    public Payment(boolean paid, boolean overdue, Integer user_id) {
        this.paid = paid;
        this.overdue = overdue;
        this.user_id = user_id;
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

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }
}
