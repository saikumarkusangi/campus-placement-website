import express from "express";
import {newCompany,allCompanies,updateCompany,deleteCompany} from '../controllers/company.js';

const router = express.Router();

router.post('/',newCompany);
router.get('/',allCompanies);
router.put('/:id',updateCompany);
router.delete('/:id',deleteCompany)

export default router;