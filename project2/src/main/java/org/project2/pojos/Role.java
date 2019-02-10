package org.project2.pojos;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "roles", schema = "pretense")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int role_id;
    private String name;

    @OneToMany(mappedBy="roles")
    private Collection<Users> users;

    @ManyToMany
    @JoinTable(
            name="roles_privileges",
            joinColumns=@JoinColumn(
                    name="role_id",
                    referencedColumnName="role_id"
            ),
            inverseJoinColumns=@JoinColumn(
                    name="privilege_id",
                    referencedColumnName="priv_id"
            )
    )
    private Collection<Privilege>privileges;

    public Role() {
    }

    public Role(String name) {
        this.name = name;
    }

    public int getRole_id() {
        return role_id;
    }

    public void setRole_id(int role_id) {
        this.role_id = role_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<Users> getUsers() {
        return users;
    }

    public void setUsers(Collection<Users> users) {
        this.users = users;
    }

    public Collection<Privilege> getPrivileges() {
        return privileges;
    }

    public void setPrivileges(Collection<Privilege> privileges) {
        this.privileges = privileges;
    }
}
