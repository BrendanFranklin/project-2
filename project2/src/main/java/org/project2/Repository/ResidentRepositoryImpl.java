package org.project2.repository;

import org.project2.pojos.Resident;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

public class ResidentRepositoryImpl implements ResidentRepository {

    @PersistenceContext
    EntityManager entityManager;


    @Override
    public List<Resident> findAll() {

        Query query = entityManager.createNativeQuery("Select * from pretense.resident");

        if(!query.getResultList().isEmpty()){
            List<Resident> residents = (List<Resident>) query.getResultList();
            return residents;
        }

        return null;
    }

    @Override
    public int viewRent() {

        Query query = entityManager.createNativeQuery(" ");
        return 0;
    }
}
