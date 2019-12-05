package com.quieromasserver.quieromasserver.business;

import com.quieromasserver.quieromasserver.entity.User;
import com.quieromasserver.quieromasserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public User getLogin(User user) {

        User userRetrieved = getUserRepository().findByUsername(user.getUsername());

        if (userRetrieved != null) {

            // Check if lower and upper case match
            if (user.getUsername().equals(userRetrieved.getUsername())) {

                // Check password
                if (user.getPassword().equals(userRetrieved.getPassword())) {
                    // Remove password so it doesn't get sent.
                    userRetrieved.setPassword(null);

                    return userRetrieved;
                }
            }
        }
        return null;
    }

    public User createUser(User user) {

        // Check if user exists
        User userRetrieved = getLogin(user);

        if (userRetrieved == null) {
            user.setCurrentBalance(0.00);
            getUserRepository().save(user);

            return getUserRepository().findByUsername(user.getUsername());
        }

        // If already exists don't save and return null
        return null;
    }

    public User discountUserBalance(long userId) {

        // Check if user exists
        Optional<User> userRetrieved = getUserRepository().findById(userId);

        // fer update de user

        return userRetrieved.orElse(null);

    }



    /************************************************
     *               GETTERS AND SETTERS            *
     ************************************************/

    public UserRepository getUserRepository() {
        return userRepository;
    }

    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
