
import classes from './Form.module.css'
import { useState } from "react"
function Form(props){
 
    const [formData, setFormData] = useState({
        thisCurrentSavings:"",
        yearlySavings: "",
        interest: "",
        investment: "",
    })

    function resetAllData(){
      setFormData({   thisCurrentSavings:"",
      yearlySavings: "",
      interest: "",
      investment: "",})

      props.resetThis();
    }
    function onChangeFormData(e, type){
       console.log(type)
       console.log(e.target.value)
    
      
       
        if(type=="thisCurrentSavings"){
            setFormData((prevData)=>({...prevData, thisCurrentSavings: e.target.value}))
        }
        if(type=="yearlySavings"){
            setFormData((prevData)=>( {...prevData, yearlySavings: e.target.value}))
        }
        if(type=="investment"){
            setFormData((prevData)=>( {...prevData, investment: e.target.value}))
        }
        if(type=="interest"){
            setFormData((prevData)=>( {...prevData, interest: e.target.value}))
        }
        console.log(formData)
    }
    function submitData(e){
       
      e.preventDefault();
      const {thisCurrentSavings, yearlySavings, interest, investment } = formData;
      props.calculateHandler({'current-savings':+thisCurrentSavings, "yearly-contribution": +yearlySavings,
      'expected-return': +interest, 'duration': +investment
    });
    }
    return(   <form className={classes.form} onSubmit={submitData}>
    <div className={classes['input-group']}>
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input value={formData.thisCurrentSavings} type="number" id="current-savings" onChange={(e)=>onChangeFormData(e, "thisCurrentSavings")}  />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" value={formData.yearlySavings} onChange={(e)=>onChangeFormData(e, "yearlySavings")}  id="yearly-contribution" />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor={classes['input-group']}>
          Expected Interest (%, per year)
        </label>
        <input type="number"  value={formData.interest} onChange={(e)=>onChangeFormData(e, "interest")}  id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number"  value={formData.investment} onChange={(e)=>onChangeFormData(e, "investment")}  id="duration" />
      </p>
    </div>
    <p className={classes['input-group']}>
      <button type="reset" onClick={resetAllData} className={classes["buttonAlt"]}>
        Reset
      </button>
      <button type="submit" className={classes["button"]}>
        Calculate
      </button>
    </p>
  </form>)
}

export default Form