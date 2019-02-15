package org.project2.repository;

import org.project2.pojos.Payment;

import java.util.List;


public interface PaymentRepository {

    List<Payment> findAll();

    List<Payment> findByAuthor(int author);

    void makePayment(Payment payment);
}
