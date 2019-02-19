package org.project2.repository;

import org.project2.pojos.Payment;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class PaymentRepositoryImpl implements PaymentRepository  {


    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Payment> findAll() {

        Query query = entityManager.createNativeQuery("SELECT * from pretense.payments");

        if(!query.getResultList().isEmpty()){
            List<Payment> payments = (List<Payment>) query.getResultList();
            return payments;
        }

            return null;
    }

    @Override
    public List<Payment> findByAuthor(int user_id) {

        Query query = entityManager.createNativeQuery("select * from pretense.payments where user_id = ?;");
        query.setParameter(1, user_id);

        if(!query.getResultList().isEmpty()){
            List<Payment> payments = (List<Payment>) query.getResultList();
            return payments;
        }


        return null;
    }

    @Override
    public void makePayment(Payment payment){
        Query query = entityManager.createNativeQuery("update pretense.payments set " +
                "paid = ?, overdue = ?, date_paid = current_date");
        query.setParameter(1, payment.isPaid());
        query.setParameter(2, payment.isOverdue());
        query.executeUpdate();
    }
}
