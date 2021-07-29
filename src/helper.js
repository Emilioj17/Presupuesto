import React from 'react';

export const Helper = (montoFinal, presupuesto) => {
    if (presupuesto/4 > montoFinal) {
        return("callout alert")
    } else if (presupuesto/2 > montoFinal) {
        return("callout warning")
    } else {
        return("callout success")
    }
}