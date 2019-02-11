package org.project2.repository;

import org.project2.pojos.Resident;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {
    @Override
    public List<Resident> findAll() {
        return null;
    }

    @Override
    public int viewRent() {
        return 0;
    }
}
