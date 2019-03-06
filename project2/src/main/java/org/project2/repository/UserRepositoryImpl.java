package org.project2.repository;

import org.project2.pojos.Users;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Users> findAll() {
        Query query = entityManager.createNativeQuery("select * from pretense.users");
        List<Users> users = new ArrayList<Users>();
        if(!query.getResultList().isEmpty()){
            users = (List<Users>) query.getResultList();
            return users;
        }

        return users;
    }

    @Override
    public int viewRole(String username) {
        Query query = entityManager.createNativeQuery("SELECT role_id from pretense.users where username = ?");
        query.setParameter(1, username);
        return (int) query.getSingleResult();
    }

    @Override
    public int viewUserId(String username) {
        Query query = entityManager.createNativeQuery("SELECT user_id from pretense.users where username = ?");
        query.setParameter(1, username);
        return (int) query.getSingleResult();
    }

    @Override
    public void updateApt(int apt_num) {
        Query query = entityManager.createNativeQuery("update pretense.apartment " +
                "set occupied = true " +
                "where apt_num = ?");
        query.setParameter(1, apt_num);
        query.executeUpdate();
    }

    @Override
    public void addNewUser(Users user){
        Query query = entityManager.createNativeQuery("insert into pretense.users " +
                "(username, password, first_name, last_name, email, role_id, apt_num) values " +
                "(?, ?, ?, ?, ?, ?, ?)");
        System.out.println(user.getUsername());
        query.setParameter(1, user.getUsername());
        query.setParameter(2, user.getPassword());
        query.setParameter(3, user.getFirst_name());
        query.setParameter(4, user.getLast_name());
        query.setParameter(5, user.getEmail());
        query.setParameter(6, user.getRole_id());
        query.setParameter(7, user.getApt_num());
        query.executeUpdate();
    }
}
