package org.project2.pojos;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "Users", schema = "pretense")
public class Users {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    int user_id;

    private String first_name;
    private String last_name;
    private String email;
    private String username;
    private String password;

    @ManyToMany
    @JoinTable(
            name="userstoroles",
            schema="pretense",
            joinColumns={@JoinColumn(
                    name="user_id",
                    referencedColumnName="user_id"
            )},
            inverseJoinColumns={@JoinColumn(
                    name="role_id",
                    referencedColumnName="role_id"
            )}
    )
    private Collection<Role> roles;
    private Integer apt_num;
    private Integer role_id;

    public Users(){}

    public Users( String username, String password, Collection<Role> roles, Integer apt_num, Integer role_id) {
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.apt_num = apt_num;
        this.role_id = role_id;
    }


    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
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

    @Override
    public String toString() {
        return "Users{" +
                "user_id=" + user_id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                ", apt_num=" + apt_num +
                ", role_id=" + role_id +
                '}';
    }
}
