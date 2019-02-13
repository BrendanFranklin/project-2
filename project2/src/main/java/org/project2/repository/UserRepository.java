package org.project2.repository;

import org.project2.pojos.Users;

import java.util.List;

public interface UserRepository {

    //find all residents
    List<Users> findAll();

    //get rent by resident
    int viewRole(String username);
}
