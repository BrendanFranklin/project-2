package org.project2.pojos;

import javax.persistence.*;

@Entity
@Table(name = "apartment", schema = "pretense")
public class Apartment {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "apt_num")
    private Integer apt_num;

    @Column(name = "apt_style")
    private String style;

    @Column(name = "rent")
    private int rent;

    public Apartment() { }

    public Apartment(Integer apt_num) {
        this.apt_num = apt_num;
    }

    public Integer getApt_num() {
        return apt_num;
    }

    public void setApt_num(Integer apt_num) {
        this.apt_num = apt_num;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public int getRent() {
        return rent;
    }

    public void setRent(int rent) {
        this.rent = rent;
    }
}
