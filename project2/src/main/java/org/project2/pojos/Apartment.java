package org.project2.pojos;

import javax.persistence.*;

@Entity
@Table(name = "Apartment", schema = "Pretense")
public class Apartment {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "apt_id")
    private Integer id;

    @Column(name = "apt_num")
    private Integer apt_num;


    public Apartment() { }

    public Apartment(Integer apt_num) {
        this.apt_num = apt_num;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getApt_num() {
        return apt_num;
    }

    public void setApt_num(Integer apt_num) {
        this.apt_num = apt_num;
    }
}
