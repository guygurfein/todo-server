import raw from "../../middleware/route.async.wrapper.mjs"
import express from "express"
import * as _ from "./todo.controller.mjs"

const router = express.Router()
router.use(express.json())

router.post(   "/"          , raw( _.create_todo)     )       
router.get(    "/"          , raw( _.get_all_todos)  )
router.patch(    "/:id"       , raw( _.update_todo)     )
router.delete( "/:id"       , raw( _.delete_todo)     )    

export default router;