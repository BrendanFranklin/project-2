package org.project2.pojos;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "Users", schema = "pretense")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(
        name = "Discriminator",
        discriminatorType = DiscriminatorType.STRING
)
@DiscriminatorValue(value="U")
public class Users {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    int user_id;

    @Column(name = "user_name")
    String user_classname;

    private String username;
    private String password;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Collection<Role> roles;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "apt_num")
    private Integer apt_num;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Integer role_id;

    public Users(){}

    public Users(String user_classname){
        this.user_classname = user_classname;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUser_classname() {
        return user_classname;
    }

    public void setUser_classname(String user_classname) {
        this.user_classname = user_classname;
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
