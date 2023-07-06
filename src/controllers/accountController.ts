import { Request, Response } from "express";
import { AccountModel, createAccount } from "../models/accountModel";

export const postAccount = async (req: Request, res: Response) => {

    console.log(req.body);
    try {
        const account = new AccountModel(req.body);
        console.log(account);
        createAccount(account);
        res.json(account);
    } catch (error) {
        res.status(500).json({ error });
    }
};