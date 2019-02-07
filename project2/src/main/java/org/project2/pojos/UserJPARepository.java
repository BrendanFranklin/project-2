package org.project2.pojos;

import com.sun.tools.javac.comp.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJPARepository extends JpaRepository<User, Integer> {

    User findByRole(String role);

    User viewRent();

}
