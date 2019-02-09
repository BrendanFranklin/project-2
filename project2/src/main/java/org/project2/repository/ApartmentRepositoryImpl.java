package org.project2.repository;

import org.project2.pojos.Apartment;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class ApartmentRepositoryImpl implements ApartmentRepository{
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Apartment> findEmpty() {

        return null;
    }

    @Override
    public List<Apartment> findAll() {
        return null;
    }
}
