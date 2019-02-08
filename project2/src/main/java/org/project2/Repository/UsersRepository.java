package org.project2.Repository;

import org.project2.pojos.Users;

import java.util.List;

public interface UsersRepository {

    List<Users> findAll();
    Users findOne(int id);
    int save(Users t);
    void update(Users t);
    void delete(int id);
}
