import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//creating intiali statea of the tracker
export const initialState = {
	transaction: [
		{ id: 1, text: "flower", amount: -20 },
		{ id: 2, text: "laptop", amount: -2000 },
		{ id: 3, text: "t-shirt", amount: -40 },
		{ id: 4, text: "salary", amount: 3000 },
		{ id: 5, text: "business", amount: 500 },
	],
};

//context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transaction: state.transaction,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
