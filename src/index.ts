import express from "express"

const app = express()

const router: express.Router = express.Router()
router.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.headers)
  res.send({message: "Hello World"})
})
app.use(router)

app.listen(3000, () => { console.log('Example app listening on port 3000!') })