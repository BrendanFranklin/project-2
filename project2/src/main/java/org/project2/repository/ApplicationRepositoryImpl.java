package org.project2.repository;

import org.project2.pojos.Application;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ApplicationRepositoryImpl implements ApplicationRepository{
    @Override
    public List<Application> findAll() {
        return null;
    }

    @Override
    public int openApplication() {
        return 0;
    }

    @Override
    public void updateApplication() {

    }
}
