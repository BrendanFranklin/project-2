package org.project2.repository;

import org.project2.pojos.Application;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class ApplicationRepositoryImpl implements ApplicationRepository{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Application> findAll() {
        Query query = entityManager.createNativeQuery("SELECT * from prestense.applications");

        if(!query.getResultList().isEmpty()){
            List<Application> applications = (List<Application>) query.getResultList();
            return applications;
        }

        return null;
    }

    @Override
    public int openApp(String first_name, String last_name, String email, String phone) {
        Query query = entityManager.createNativeQuery("INSERT into pretense.applications " +
                "(first_name, last_name, email, phone) values (?,?,?,?)");
        query.setParameter(1, first_name);
        query.setParameter(2, last_name);
        query.setParameter(3, email);
        query.setParameter(4, phone);

        return query.executeUpdate();
    }

    @Override
    public void deleteApp(int id) {
        Query query = entityManager.createNativeQuery("DELETE from pretense.applications where id = ?");
        query.setParameter(1, id);
    }
}
