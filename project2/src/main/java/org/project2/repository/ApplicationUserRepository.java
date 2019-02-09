package org.project2.repository;

import org.project2.pojos.Resident;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository<Resident, Integer> {
    Resident findByUsername(String username);
}