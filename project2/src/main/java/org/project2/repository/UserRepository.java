package org.project2.repository;

import org.project2.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<Users, Integer> {

    List<Users> findAll();
    Users findOne(int id);
    Users save(Users t);
    void update(Users t);
    void delete(int id);
}
