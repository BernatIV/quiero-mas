package com.quieromasserver.quieromasserver.business;

import com.quieromasserver.quieromasserver.model.User;
import com.quieromasserver.quieromasserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class UserService {

    @Autowired
    private UserRepository repository;

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public User save(User user) {
        entityManager.persist(user);
        return user;
    }

    public List<User> findByUsername(String username) {

        TypedQuery query = entityManager.createQuery("select u from User u where u.username = ?1", User.class);
        query.setParameter(1, username);

        return query.getResultList();
    }
}
