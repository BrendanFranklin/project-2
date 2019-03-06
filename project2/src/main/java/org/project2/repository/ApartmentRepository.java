package org.project2.repository;

import org.project2.pojos.Apartment;

import java.util.List;

public interface ApartmentRepository {
    // view empty apartments
    List<Apartment> findEmpty(boolean occupied);

    // view all apartments
    List<Apartment> findAll();

    // get apartment by user id
    List<Apartment> getAptByUserId(int user_id);
}
