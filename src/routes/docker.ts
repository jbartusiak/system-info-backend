import { Request, Response, Router } from "express";
import axios, { AxiosResponse } from 'axios';
import { env } from '../config/env';
import { Container } from "../classes/docker/Container";
import { Image } from "../classes/docker/Image";

const baseUrl = env.dockerServiceAddress;

const router = Router();

router.get('/', (req: Request, res: Response) => {
    axios.get<any, AxiosResponse<Container[]>>(`${ baseUrl }/containers/json`)
        .then((response) => res.send(response.data));
});

router.get('/images', (req: Request, res: Response) => {
    axios.get<any, AxiosResponse<Image[]>>(`${ baseUrl }/images/json`)
        .then(response => res.send(response.data));
})

export { router as dockerRouter };
