package org.project2.pojos;


import javax.persistence.*;
import java.util.Collection;

@Entity
@DiscriminatorValue(value="M")
public class Mgmt {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "mgnt_id")
    private Integer id;
    private String username;
    private String password;

    @ManyToMany
    @JoinTable(
            name="mgmt_roles",
            joinColumns=@JoinColumn(
                    name="mgmt_id", referencedColumnName="id"),
            inverseJoinColumns=@JoinColumn(
                    name="role_id", referencedColumnName="id")
    )
    private Collection<Role> roles;

    public Mgmt() { }

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
}
