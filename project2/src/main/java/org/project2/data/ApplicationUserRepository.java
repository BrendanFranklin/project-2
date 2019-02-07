package org.project2.data;

import org.project2.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository<Users, Integer> {
    Users findByUsername(String username);
}
