package org.project2.pojos;


import javax.persistence.*;
import java.util.Collection;

@Entity
@DiscriminatorValue(value="M")
public class Mgmt extends Users{

    @Column(name = "user_id", insertable = false, updatable = false)
    private int user_id;
    private String username;
    private String password;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Collection<Role> roles;

    public Mgmt() { }

    public Mgmt(int user_id, String username, String password, Collection<Role> roles) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.roles = roles;
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
}
