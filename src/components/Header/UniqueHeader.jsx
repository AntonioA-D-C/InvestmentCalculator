import classes from './Header.module.css'
function UniqueHeader(props) {
    return (
        <header className={classes.header}>
        <img src={props.logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

    )
}

export default UniqueHeader