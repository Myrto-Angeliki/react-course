import dayjs from "dayjs";

export function getDeliveryPercent(estimatedDeliveryTimeMs, orderTimeMs){
    const totalDeliveryTime = estimatedDeliveryTimeMs - orderTimeMs;
    const timePassedMs = dayjs().valueOf() - orderTimeMs;

    const deliveryPercent = (totalDeliveryTime > 0 
                && (timePassedMs / totalDeliveryTime) < 1) 
            ? (timePassedMs / totalDeliveryTime).toFixed(2) * 100
            : 100;

    return deliveryPercent;
}