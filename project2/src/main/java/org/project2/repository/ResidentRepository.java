package org.project2.repository;

import org.project2.pojos.Resident;

import java.util.List;

public interface ResidentRepository {

    //find all residents
    List<Resident> findAll();

    //get rent by resident
    int viewRent();
}
