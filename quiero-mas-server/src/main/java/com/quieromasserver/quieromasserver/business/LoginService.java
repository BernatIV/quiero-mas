package com.quieromasserver.quieromasserver.business;

import com.quieromasserver.quieromasserver.model.BalanceTransactions;
import com.quieromasserver.quieromasserver.model.User;
import com.quieromasserver.quieromasserver.repository.BalanceTransactionsRepository;
import com.quieromasserver.quieromasserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BalanceTransactionsRepository balanceTransactionsRepository;

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
            user.setUserQrCode(generateUserQrCode());

            getUserRepository().save(user);

            return getLogin(user);
        }

        // If already exists don't save and return null
        return null;
    }

    public User getUserScanned(String userQrCode) {

        return getUserRepository().findByUserQrCode(userQrCode);
    }

    public User discountUserBalance(BalanceTransactions balanceTransactions) {

        // crear registre a BalanceTransactions
        getBalanceTransactionsRepository().save(balanceTransactions);

        // Update camp currentBalance de User
        User user = getUserById(balanceTransactions.getUser().getId());

        Double currentBalance = user.getCurrentBalance();
        Double transactionAmount = balanceTransactions.getTransactionAmount();
        user.setCurrentBalance(currentBalance - transactionAmount);

        getUserRepository().save(user);

        return user;
    }


    /************************************************
     *               PRIVATE METHODS                *
     ************************************************/

    private User getUserById(long userId) {
        // Check if user exists
        Optional<User> user = getUserRepository().findById(userId);

        return user.orElse(null);
    }

    private String generateUserQrCode() {
        int n = 6;  // Number of characters of QR code. (61^6 combinations)
        User user;

        String userQrCode = getAlphanumericString(n);

        do {
            user = getUserRepository().findByUserQrCode(userQrCode);

        } while(user != null);

        return userQrCode;
    }

    private String getAlphanumericString(int n) {
        // chose a Character random from this String
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                + "0123456789"
                + "abcdefghijklmnopqrstuvxyz";

        // create StringBuffer size of AlphaNumericString
        StringBuilder sb = new StringBuilder(n);

        for (int i = 0; i < n; i++) {

            // generate a random number between
            // 0 to AlphaNumericString variable length
            int index
                    = (int)(AlphaNumericString.length()
                    * Math.random());

            // add Character one by one in end of sb
            sb.append(AlphaNumericString
                    .charAt(index));
        }

        return sb.toString();
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

    public BalanceTransactionsRepository getBalanceTransactionsRepository() {
        return balanceTransactionsRepository;
    }

    public void setBalanceTransactionsRepository(BalanceTransactionsRepository balanceTransactionsRepository) {
        this.balanceTransactionsRepository = balanceTransactionsRepository;
    }
}
