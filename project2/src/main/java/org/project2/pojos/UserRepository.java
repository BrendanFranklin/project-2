package org.project2.pojos;

import com.sun.tools.javac.comp.Todo;

import java.util.List;

public interface UserRepository {

    List<User> findAll();
    User findOne(int id);
    int save(User t);
    void update(User t);
    void delete(int id);
}
