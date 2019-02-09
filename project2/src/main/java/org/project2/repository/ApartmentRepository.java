package org.project2.repository;

import org.project2.pojos.Apartment;

import java.util.List;

public interface ApartmentRepository {
    // view empty repositories
    List<Apartment> findEmpty();
    List<Apartment> findAll();
}
