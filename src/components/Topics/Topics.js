 import react   from 'react'
 import { FaPlus } from "react-icons/fa"
 import styles from "./Topics.module.css"


   const Topics = () => {
    return(
        <div className={`${styles.contain}`}>
            <FaPlus/>
            <h1>For you</h1>
            <h1>Following</h1>
            <h1>feauture</h1>
            <h1>javascript</h1>
            <h1>Money</h1>
            <h1>Software Development</h1>
            <h1>Coding</h1>
            <h1>React</h1>
            <h1>Programming</h1>
        </div>
    )
   }
   export default Topics