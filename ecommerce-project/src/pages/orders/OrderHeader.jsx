import dayjs from "dayjs";
import { formatMoney } from '../../utils/money';
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export function OrderHeader({ order}) {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className="order-header" id={isDarkMode ? 'dark-mode' : ''}>
            <div className="order-header-left-section">
                <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
                </div>
                <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>{formatMoney(order.totalCostCents)}</div>
                </div>
            </div>

            <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>{order.id}</div>
            </div>
        </div>
    );
}