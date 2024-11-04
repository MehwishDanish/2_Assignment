import  styles from "../contact/contact.module.css";
import Link from "next/link";

const ContactPage = ()=> {
    return(
        <div className= {styles.container}>

         <h1 className={styles.header}>This is ContactPage</h1>
        
           
            <ul>
              <li><Link  href="/">Go to Home page</Link></li>
              <li><Link href="/contact">Go to About page</Link></li>
              <li><Link href="/service">sGo to Service page</Link></li>
            </ul>  
           
        
      
  
        
        
    
        </div>
    );
};

export  default ContactPage;
