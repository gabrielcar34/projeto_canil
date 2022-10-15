import {Request, Response} from "express";
import Animal from "../models/Animal";

export const search = (req: Request, res: Response) => {
    res.render("pages/search");
}

export const searchAction = (req: Request, res: Response) => {
    let existsAnimals = false;
    const {q:content} = req.body;
    const listOfAnimals = Animal.getAnimalsByName(content);

    console.log(listOfAnimals);

    res.render("pages/search", {
        name: "Peixes",
        listOfAnimals,
        content
    });
}