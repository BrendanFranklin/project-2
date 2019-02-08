package org.project2.data;

import org.project2.pojos.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}
