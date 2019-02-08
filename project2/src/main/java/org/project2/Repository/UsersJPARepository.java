package org.project2.Repository;

import com.sun.tools.javac.comp.Todo;
import org.project2.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersJPARepository extends JpaRepository<Users, Integer> {

    Users findByRole(String role);


}
