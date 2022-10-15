import {Request, Response} from "express";
import Dog from "../models/Dog";
import Cat from "../models/Cat";
import Fish from "../models/Fish";
import Animal from "../models/Animal";

export const home = (req: Request, res: Response) => {
    const listOfAnimals = Animal.getAnimals();

    res.render("pages/home", {
        name: "Animais",
        subTitulo: "Todos os",
        banner: "images/allanimals.jpg",
        listOfAnimals
    });
}

export const dogs = (req: Request, res: Response) => {
    const listOfAnimals = Dog.getDogs();

    res.render("pages/dog", {
        name: "Cachorros",
        banner: "images/banner_dog.jpg",
        listOfAnimals
    });
}

export const cats = (req: Request, res: Response) => {
    const listOfAnimals = Cat.getCats();

    res.render("pages/cat", {
        name: "Gatos",
        banner: "images/banner_cat.jpg",
        listOfAnimals
    });
}

export const fishes = (req: Request, res: Response) => {
    const listOfAnimals = Fish.getFishes();

    res.render("pages/fish", {
        name: "Peixes",
        subTitulo: "",
        banner: "images/banner_fish.jpg",
        listOfAnimals
    });
}