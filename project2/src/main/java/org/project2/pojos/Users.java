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

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "email")
    private String email;

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

    @Column(name = "apt_num")
    private Integer apt_num;

    @Column(name = "role_id")
    private Integer role_id;

    public Users(){}

    public Users(String username, String password, String first_name, String last_name, String email, Collection<Role> roles, Integer apt_num, Integer role_id) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
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

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
