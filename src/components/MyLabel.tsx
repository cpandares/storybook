import './mylabel.css';


export interface MyLabelProps {
    /**
     * Is this the Text principal 
    */
    label: string;
    /**
     * Is this the size of my label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Mostrara todo el texto en mayuscula
    */
   allCaps?: boolean;
   /**
     * Mostrara el color del texto
    */

   color?: 'primary' | 'secondary' | 'tertiary'

   /**
     * Mostrara  el color por defecto del mi texto
    */

    fontColor?: string
    
}

const MyLabel = ({ 
    allCaps=false, 
    color='primary',
    label = 'No Label', 
    size='normal', 
    fontColor
}: MyLabelProps ) => {

  return (
    <span 
        className= {`label ${ size } text-${ color }` } 
        style={{ color: fontColor }}
        >
        { 
            allCaps
            ?
            label.toUpperCase()
            :
            label 
            
        }
    </span>
  )
}

export default MyLabel
