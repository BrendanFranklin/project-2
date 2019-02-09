package org.project2.repository;

import org.project2.pojos.Resident;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersJPARepository extends JpaRepository<Resident, Integer> {

}
