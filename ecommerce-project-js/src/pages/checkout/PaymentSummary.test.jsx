import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { PaymentSummary } from './PaymentSummary';

describe('PaymentSummary component', () => {
    let paymentSummary;
    let loadCart;

    beforeEach(() => {
        loadCart = vi.fn();

        paymentSummary = {
            "totalItems": 7,
            "productCostCents": 8053,
            "shippingCostCents": 499,
            "totalCostBeforeTaxCents": 8552,
            "taxCents": 855,
            "totalCostCents": 9407
        };

        render(<MemoryRouter>
                <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
            </MemoryRouter>);
    });

    it('displays the payment summary details correctly', () => {
        expect(
            screen.getByTestId('total-items')
        ).toHaveTextContent('7');

        expect(
            screen.getByTestId('items-cost')
        ).toHaveTextContent('$80.53');

        expect(
            screen.getByTestId('shipping-cost')
        ).toHaveTextContent('$4.99');

        expect(
            screen.getByTestId('total-before-tax')
        ).toHaveTextContent('$85.52');

        expect(
            screen.getByTestId('tax-cost')
        ).toHaveTextContent('$8.55');

        expect(
            screen.getByText('$94.07')
        ).toBeInTheDocument();
    });
});