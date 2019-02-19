package org.project2.repository;

import org.project2.pojos.Apartment;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@SuppressWarnings("ALL")
@Repository
public class ApartmentRepositoryImpl implements ApartmentRepository{
    @PersistenceContext
    EntityManager entityManager;


    @Override
    public List<Apartment> findEmpty(boolean occupied) {
        Query query = entityManager.createNativeQuery("Select * from pretense.apartment where occupied =? ");
        query.setParameter(1,occupied);

        if(!query.getResultList().isEmpty()){
            List<Apartment> apartments = (List<Apartment>) query.getResultList();
            return apartments;
        }
        return null;
    }

    @Override
    public List<Apartment> findAll() {

        Query query = entityManager.createNativeQuery("Select * from pretense.apartment");

        if(!query.getResultList().isEmpty()){
            List<Apartment> apartments = (List<Apartment>) query.getResultList();
            return apartments;
        }
        return null;
    }

    @Override
    public List<Apartment> getAptByUserId(int user_id) {
        Query query = entityManager.createNativeQuery("select apartment.apt_num, apt_style, rent from pretense.apartment " +
                "left join pretense.users on users.apt_num = apartment.apt_num " +
                "where user_id = ?");
        query.setParameter(1, user_id);

        if(!query.getResultList().isEmpty()){
            List<Apartment> apartments = (List<Apartment>) query.getResultList();
            return apartments;
        }
        return null;
    }
}
