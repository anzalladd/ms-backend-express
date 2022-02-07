import { Router } from "express";
import movies from "./movies/routes"

const router = Router();
router.use("/movies", movies)
router.use(function(req:any,res:any,next:any) {
    if (!req.route){
        return res.status(404).json({data: "data not found"})
    }
})

export default router;
