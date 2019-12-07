package com.quieromasserver.quieromasserver.repository;

import com.quieromasserver.quieromasserver.model.BalanceTransactions;
import com.quieromasserver.quieromasserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface BalanceTransactionsRepository extends JpaRepository<BalanceTransactions, Long> {

}
