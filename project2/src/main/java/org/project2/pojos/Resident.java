package org.project2.pojos;

import org.hibernate.mapping.Collection;

import javax.persistence.*;

@Entity
@Table(name = "resident", schema = "pretense")
public class Resident {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "res_id")
    private Integer id;
    private String username;
    private String password;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Collection<Role> roles;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "apartment_id")
    private Integer apt_num;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Integer role_id;

    public Resident() {
    }

    public Resident(String username, String password, Collection<Role> roles, Integer apt_num, Integer role_id) {
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.apt_num = apt_num;
        this.role_id = role_id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    public Integer getApt_num() {
        return apt_num;
    }

    public void setApt_num(Integer apt_num) {
        this.apt_num = apt_num;
    }

    public Integer getRole_id() {
        return role_id;
    }

    public void setRole_id(Integer role_id) {
        this.role_id = role_id;
    }
}
