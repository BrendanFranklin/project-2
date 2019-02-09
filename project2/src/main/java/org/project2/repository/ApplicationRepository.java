package org.project2.repository;

import org.project2.pojos.Application;

import java.util.List;

public interface ApplicationRepository {

    //find all applications
    List<Application> findAll();

    //open a application
    int openApplication();

    //submit a application
    void updateApplication();
}
