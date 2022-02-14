import { Router } from "express";
import auth from "./auth/routes"
import stock from "./stock/routes";

const router = Router();
router.use("/", auth)
router.use("/stock", stock)
router.use(function(req:any,res:any,next:any) {
    if (!req.route){
        return res.status(404).json({data: "data not found"})
    }
})

export default router;
