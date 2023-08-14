import {Schema,model} from 'mongoose';

const CompanySchema = new Schema({
    name:{type:String,required:true},
    logo:{type:String},
    date:{type:String},
    startTime:{type:String},
    endTime:{type:String},
    color:{type:String},
    jobProfiles:
    [
        {
            role:{type:String},
            package:{type:String}
        }
    ],
    eligibilityCriteria: 
        {
            minPercentage: { type: Number },
            eligibleBranch: [{ type: String }],
            activeBacklogs:Number,
            other:{type:String}
        },
    mode:{type:String},
    type:{type:String},
    others:{type:String},
    eligibility:{type:String}
   },
   {
    versionKey:false
   });

const Company = model('drive',CompanySchema);

export default Company;