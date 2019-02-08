package org.project2.repository;

import org.project2.pojos.Users;

import java.util.List;

public interface UserRepository {

    List<Users> findAll();
    Users findOne(int id);
    int save(Users t);
    void update(Users t);
    void delete(int id);
}
