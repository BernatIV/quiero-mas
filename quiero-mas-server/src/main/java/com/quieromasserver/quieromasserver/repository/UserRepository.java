package com.quieromasserver.quieromasserver.repository;

import com.quieromasserver.quieromasserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
