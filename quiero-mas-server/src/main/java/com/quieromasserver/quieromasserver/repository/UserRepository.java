package com.quieromasserver.quieromasserver.repository;

import com.quieromasserver.quieromasserver.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
