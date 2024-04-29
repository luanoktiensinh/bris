import { IPriceProps } from "./Price.type";
export const Price = ({
    money, locale, currencyCode
}: IPriceProps) => {
    return new Intl.NumberFormat(locale?.replace(/_/g, '-'), { style: 'currency', currency: currencyCode }).format(
        money
      );
};