package com.quieromasserver.quieromasserver.repository;

import com.quieromasserver.quieromasserver.model.LoginContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface LoginContextRepository extends JpaRepository<LoginContext, Long> {

}
