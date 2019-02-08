package org.project2.pojos;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "Users", schema = "pretense")
public class Users {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;

//    @ManyToOne
//    @JoinColumn(name = "id", nullable = false)
//    @JoinTable(
//            name="users_roles",
//            joinColumns=@JoinColumn(
//                    name="user_id", referencedColumnName="id"),
//            inverseJoinColumns=@JoinColumn(
//                    name="role_id", referencedColumnName="id")
//    )
//    private Role userRole;

    @Column
    private Integer roles;

    public Users() {
    }

    public Users(String username, String password, Integer roles) {
        this.username = username;
        this.password = password;
        this.roles = roles;
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

    public Integer getRoles() {
        return roles;
    }

    public void setRoles(Integer roles) {
        this.roles = roles;
    }
}
