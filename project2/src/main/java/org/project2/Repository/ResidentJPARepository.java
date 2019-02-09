package org.project2.repository;

import org.project2.pojos.Resident;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResidentJPARepository extends JpaRepository<Resident, Integer> {

    List<Resident> findAll();
}
