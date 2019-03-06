package org.project2.pojos;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "privileges", schema = "pretense")
public class Privilege {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int priv_id;

    private String priv_name;

    @ManyToMany(mappedBy = "privileges")
    private Collection<Role> roles;

    public Privilege() {
    }

    public Privilege(String priv_name) {
        this.priv_name = priv_name;
    }

    public int getId() {
        return priv_id;
    }

    public void setId(int id) {
        this.priv_id = priv_id;
    }

    public String getName() {
        return priv_name;
    }

    public void setName(String priv_name) {
        this.priv_name = priv_name;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
}
