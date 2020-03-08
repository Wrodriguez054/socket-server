import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', ( req: Request, res: Response ) =>{
  
  res.json({
      ok: true,
      message: 'All ok!'
  });
});

router.post('/messages', ( req: Request, res: Response ) =>{
  const message = req.body.message;
    res.json({message})
  });

export default router;