package org.project2.repository;

import org.project2.pojos.Payment;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository {

    List<Payment> findAll();

    List<Payment> findByAuthor(int author);

}
