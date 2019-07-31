import { Model } from 'sequelize'
import sequelize from './sequelize'

class Census extends Model {
    public id!: number
    public age!: number
    public class_of_worker!: string
    public industry_code!: number
    public occupation_code!: number
    public education!: string
    public wage_per_hour!: number
    public last_education!: string
    public marital_status!: string
    public major_industry_code!: string
    public major_occupation_code!: string
    public mace!: string
    public hispanice!: string
    public sex!: string
    public member_of_labor!: string
    public reason_for_unemployment!: string
    public fulltime!: string
    public capital_gain!: number
    public capital_loss!: number
    public dividends!: number
    public income_tax_liability!: string
    public previous_residence_region!: string
    public previous_residence_state!: string
    public household_with_family!: string
    public household_simple!: string
    public weight!: string
    public msa_change!: string
    public reg_change!: string
    public within_reg_change!: string
    public lived_here!: string
    public migration_prev_res_in_sunbelt!: string
    public w!: number
    public family_member_under_118!: string
    public father_birth_country!: string
    public mother_birth_country!: string
    public birth_country!: string
    public citizenship!: string
    public own_business_or_self_employed!: number
    public fill_questionnaire_for_veteran_s_admin!: string
    public veterans_benefits!: number
    public weeks_worked_in_year!: number
    public year!: number
    public salary_range!: string
}
