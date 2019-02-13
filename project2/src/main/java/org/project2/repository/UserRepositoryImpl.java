package org.project2.repository;

import org.project2.pojos.Users;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {
    @Override
    public List<Users> findAll() {
        return null;
    }

    @Override
    public int viewRent() {
        return 0;
    }
}
