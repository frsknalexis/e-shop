package com.eshop.ordering.api.application.commands;

import an.awesome.pipelinr.Command;
import com.eshop.ordering.domain.aggregatesmodel.order.Order;
import com.eshop.ordering.domain.aggregatesmodel.order.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Component
@RequiredArgsConstructor
public class SetAwaitingValidationOrderStatusCommandHandler
    implements Command.Handler<SetAwaitingValidationOrderStatusCommand, Boolean> {
  private final OrderRepository orderRepository;

  /**
   * Handler which processes the command when graceperiod has finished
   */
  @Transactional
  @Override
  public Boolean handle(SetAwaitingValidationOrderStatusCommand command) {
    orderRepository.findById(command.getOrderNumber())
        .ifPresent(Order::setAwaitingValidationStatus);
    return true;
//    return orderRepository.unitOfWork().saveEntities();
  }
}