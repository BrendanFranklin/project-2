package org.project2.repository;

import org.project2.pojos.Users;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Users> findAll() {

        Query query = entityManager.createNativeQuery("select * from pretense.users");
        if(!query.getResultList().isEmpty()){
            List<Users> users = (List<Users>) query.getResultList();
            return users;
        }

        return null;
    }

    @Override
    public int viewRole(String username) {
        Query query = entityManager.createNativeQuery("SELECT role_id from pretense.users where username = ?");
        query.setParameter(1, username);

        return query.getFirstResult();

    }

    @Override
    public int viewUserId(String username) {
        Query query = entityManager.createNativeQuery("SELECT user_id from pretense.users where username = ?");
        query.setParameter(1, username);
        return query.getFirstResult();
    }


}
