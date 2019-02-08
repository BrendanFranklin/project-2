package org.project2.repository;

import org.project2.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJPARepository extends JpaRepository<Users, Integer> {

    Users findByRole(String role);

    Users viewRent();

}
