import classes from './Results.module.css'
function ResultsTable(props){
 
    return(
<table className={classes.result}>
<thead>
  <tr>
    <th>Year</th>
    <th>Total Savings</th>
    <th>Interest (Year)</th>
    <th>Total Interest</th>
    <th>Invested Capital</th>
  </tr>
</thead>

<tbody>
  {props.data.map((item, index)=>
{ 
  console.log(props.data.slice(0,0))
  const previousYearlyInterest = props.data.slice(0, index+1).reduce((acc, currentItem)=>acc+currentItem.yearlyInterest, 0);

  console.log(previousYearlyInterest)
 
  return( <tr key={item.year}>
      <td>{item.year}</td>
      <td>{`$${item.savingsEndOfYear}`}</td>
      <td>{`$${item.yearlyInterest}`}</td>
      <td>{`$${previousYearlyInterest}`}</td>
      <td>{`$${item.savingsEndOfYear-previousYearlyInterest}`}</td>
    </tr>
  )
  }
  )

}
</tbody>
</table>
    )
}
export default ResultsTable