package org.project2.repository;

import org.project2.pojos.Users;

import java.util.List;

public interface UserRepository {

    //find all residents
    List<Users> findAll();

    //get role_id
    int viewRole(String username);

    //get user_id
    int viewUserId(String username);

    //assign a user to a new apt
    void updateApt(int apt_num);
}
