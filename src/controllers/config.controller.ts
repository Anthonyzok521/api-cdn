import configs from "../models/configs";
import { Request, Response } from 'express';
import mongoose from "mongoose";

export const getConfigs = async (req: Request, res: Response) => {
    try {
        const data = await configs.find();
        res.status(200).json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(404).json({ message: 'An unknown error occurred' });
        }
    }
}

export const updateConfigs = async (req: Request, res: Response) => {
    try {

        const {
            _id,
            email,
            primary,
            secondary,
            instagram,
            facebook,
            tiktok,
            x,
            maps,
            mf,
            ss,
            banner } = req.body;
        console.log(req.body);
        let c = await configs.findById(_id);
        if (!c) {
            throw new Error("Error in _id");
        }
        c.set({
            contacts: {
                phone: {
                    primary: primary,
                    secondary: secondary
                },
                email: email,
                social: {
                    instagram: instagram,
                    facebook: facebook,
                    x: x,
                    maps: maps,
                    tiktok: tiktok
                }
            },
            hours: {
                mf: mf,
                ss: ss
            },
            images: {
                banner: banner,
                steps: "https://cdn.mariachici.com/media/steps.jpg"
            }
        });

        await c.save();

        res.status(201).json({
            status: 201
        });

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(404).json({ message: 'An unknown error occurred' });
        }
    }
}
