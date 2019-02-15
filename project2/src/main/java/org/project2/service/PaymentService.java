package org.project2.service;

import org.project2.pojos.Payment;
import org.project2.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PaymentService {

    private PaymentRepository paymentRepository;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository){ this.paymentRepository = paymentRepository;}

    @Transactional(readOnly = true)
    public List<Payment> findAll(){
        return this.paymentRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Payment> findByAuthor(int user_id){
        return this.paymentRepository.findByAuthor(user_id);
    }

    @Transactional
    public void makePayment(Payment payment){
        this.paymentRepository.makePayment(payment);
    }
}
