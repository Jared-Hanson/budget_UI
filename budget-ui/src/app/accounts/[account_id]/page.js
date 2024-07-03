"use client";
import { useEffect } from "react";
import TransactionTable from "../TrasactionTable";
import { useParams } from "next/navigation";

export default function SingleAccount() {
    const params = useParams();
    const { account_id } = params;

    useEffect(() => {
        if (account_id) {
            console.log("Account ID:", account_id);
        }
    }, [account_id]);


    return (
        <div>
            <h1>Accounts by ID page baby - account number [{account_id}]</h1>
            <TransactionTable />
        </div>
    );
}