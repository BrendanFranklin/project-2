package org.project2.pojos;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;

    @ManyToMany(mappedBy="roles")
    private Collection<Users> users;

    @ManyToMany
    @JoinTable(
            name="roles_privileges",
            joinColumns=@JoinColumn(
                    name="role_id",
                    referencedColumnName="id"
            ),
            inverseJoinColumns=@JoinColumn(
                    name="privilege_id",
                    referencedColumnName="id"
            )
    )
    private Collection<Privilege>privileges;

    public Role() {
    }

    public Role(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
