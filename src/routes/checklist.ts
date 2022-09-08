import { Router } from "express";
import { 
  createTODO,
  deleteTODO,
  getTODOs,
  updateTODO
} from '../controllers/checklist-ctrl';

const router = Router();

router.post('/', createTODO);

router.get('/', getTODOs);

router.patch('/:id', updateTODO);

router.delete('/:id', deleteTODO);

export default router;
