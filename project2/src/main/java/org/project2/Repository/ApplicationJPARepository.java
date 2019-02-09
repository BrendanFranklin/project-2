package org.project2.repository;

import org.project2.pojos.Application;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationJPARepository extends JpaRepository<Application, Integer> {
    List<Application> findAll();
}
