package com.eshop.catalog.integrationevents.events;

import com.eshop.catalog.shared.IntegrationEvent;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class OrderStatusChangedToAwaitingValidationIntegrationEvent extends IntegrationEvent  {
    private Long orderId;
    private List<OrderStockItem> orderStockItems;
}