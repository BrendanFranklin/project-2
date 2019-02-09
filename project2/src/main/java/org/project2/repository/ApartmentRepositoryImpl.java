package org.project2.repository;

import org.project2.pojos.Apartment;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ApartmentRepositoryImpl implements ApartmentRepository{
    @Override
    public List<Apartment> findEmpty() {
        return null;
    }

    @Override
    public List<Apartment> findAll() {
        return null;
    }
}
