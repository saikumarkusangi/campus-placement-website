import Company from '../models/company.js';


// add new Company 
const newCompany = async (req,res)=>{
    try {
        const  data = new Company(req.body);
        await data.save();
        res.json({
            status:'success',
            message:'Added Successfully',
            data
        })
    } catch (error) {
        res.json({
            status:'fail',
            message:error
        })
    }
};

// get all companies
const allCompanies = async(req,res)=>{
   try {
    const data = await Company.find();
    res.json({
        status:'success',
        data
    });
   } catch (error) {
     res.json({
        status:'fail',
        message:error
     })
   }
    
}

// update  Company 
const updateCompany = async (req,res)=>{
    try {
        const id = req.params.id;
        const  data = req.body;
        const companyExists = await Company.findByIdAndUpdate(
            id,
            data,
            {new:true}
        );
     
        if(!companyExists){
            res.json({
                status:'fail',
                message:'Company not found'
            })
        };

        res.json({
            status:'success',
            message:'Updated Successfully',
            data
        })
    } catch (error) {
        res.json({
            status:'fail',
            message:error
        })
    }
};

// delete  Company 
const deleteCompany = async (req,res)=>{
    try {
        const id = req.params.id;
        const companyExists = await Company.findByIdAndDelete(id,);
     
        if(!companyExists){
            res.json({
                status:'fail',
                message:'Company not found'
            })
        };

        res.json({
            status:'success',
            message:'Deleted Successfully',
        })
    } catch (error) {
        res.json({
            status:'fail',
            message:error
        })
    }
};



export  {newCompany,allCompanies,updateCompany,deleteCompany};