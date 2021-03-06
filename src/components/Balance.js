import React, { useContext } from "react";
import { GlobalContext } from "../context/State";

/**
 * calculate the balance
 * @param amount amount for each transaction
 * @param total calculate the balance of transactions
 * @returns null
 */
export const Balance = () => {
	const { transaction } = useContext(GlobalContext);

	const amount = transaction.map((transaction) => transaction.amount);
	const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
		<>
			<h4>BALANCE</h4>
			<h1>${total}</h1>
		</>
	);
};
