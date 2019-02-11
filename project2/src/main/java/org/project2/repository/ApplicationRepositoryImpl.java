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
    public int openApp() {
        return 0;
    }

    @Override
    public void updateApp() {

    }
}
