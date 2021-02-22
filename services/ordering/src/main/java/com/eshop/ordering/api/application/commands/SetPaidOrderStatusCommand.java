package com.eshop.ordering.api.application.commands;

import an.awesome.pipelinr.Command;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SetPaidOrderStatusCommand implements Command<Boolean> {
    private final Integer orderNumber;
}
